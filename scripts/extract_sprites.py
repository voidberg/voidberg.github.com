#!/usr/bin/env python3
"""Extract the diving-scene sprites from the Glug Glug screenshot.

Source: public/GlugGlug.gif, a 256x192 ZX Spectrum screen (Glug Glug, CRL 1984).
Run from the repo root:  python3 scripts/extract_sprites.py

Every crop is snapped to the Spectrum's 8x8 character grid, taken at native
resolution with no resampling, and written as an indexed-colour PNG with the
black background keyed to transparent. CSS scales these by whole numbers with
image-rendering: pixelated.

Sprite bounds were measured from the source rather than eyeballed. Where the
measurement disagreed with a rough estimate, the measurement won:

  DIVER     content x170-182, y79-102   -> crop (168, 72)-(184, 104)  16x32
            The hose dots at x178 on y72/74/76/78 fall inside the grid-aligned
            crop; they are cleared, since CSS draws the hose.
  BOAT      content x172-201, y16-31    -> crop (168, 16)-(208,  32)  40x16
            The full boat: a black cabin/mast (y16-23) drawn against the cyan
            sky, over the bright-green hull (y24-31). Black-on-cyan would vanish
            on the black page, so the cabin is recoloured to the site's pink
            accent while the hull keeps its green: cyan -> transparent, cabin
            black -> pink, hull green kept, black water below the hull -> transparent.
  TREASURE  content x37-52,  y168-183   -> crop ( 32,168)-( 56, 184)  24x16
            The left-hand cup. The right-hand sprite (x238-251) is a busier
            shape that reads as noise at this size, so the left one is used.
  SEABED    y184-191, tiles with a period of exactly 8px horizontally
                                        -> crop (  0,184)-(  8, 192)   8x8
            One tile is enough; CSS repeats it.
"""

from PIL import Image
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "public" / "GlugGlug.gif"
OUT = ROOT / "public"

BLACK = (0, 0, 0)
CYAN = (0, 200, 200)
# The site's pink accent (--s-mag), recoloured onto the boat.
PINK = (255, 0, 255)

# (name, left, top, right, bottom) -- all multiples of 8
# Three treasures rest on the seabed at y168-183; the source has one near each
# corner and one just left of centre. treasure is the clean left-hand cup;
# treasure2 the centre piece; treasure3 the busier right-hand one.
CROPS = [
    ("diver", 168, 72, 184, 104),
    ("boat", 168, 16, 208, 32),
    ("treasure", 32, 168, 56, 184),
    ("treasure2", 96, 168, 112, 184),
    ("treasure3", 232, 168, 256, 184),
    # A single fish from mid-water (source x101-116, y132-139), swimming right.
    ("fish", 96, 128, 120, 144),
    ("seabed", 0, 184, 8, 192),
]

# Hose dots that fall inside the diver crop, in source coordinates. The hose
# runs down x178 on even rows; the crop starts at y72, so four dots sit above
# the helmet (which starts at y79).
HOSE_DOTS = [(178, y) for y in (72, 74, 76, 78)]


def main() -> None:
    src = Image.open(SRC).convert("RGB")
    if src.size != (256, 192):
        raise SystemExit(f"expected a 256x192 Spectrum screen, got {src.size}")

    for name, x0, y0, x1, y1 in CROPS:
        for v in (x0, y0, x1, y1):
            if v % 8:
                raise SystemExit(f"{name}: {v} is not on the 8x8 character grid")

        # .crop() copies pixels verbatim: no resampling, no filtering.
        tile = src.crop((x0, y0, x1, y1)).convert("RGBA")
        px = tile.load()

        if name == "diver":
            for sx, sy in HOSE_DOTS:
                px[sx - x0, sy - y0] = (0, 0, 0, 0)
            # Mirror so he faces the text column. A verbatim pixel transpose,
            # no resampling. The helmet shifts from box-column 11 to 4, so the
            # CSS hose offset is adjusted to match.
            tile = tile.transpose(Image.FLIP_LEFT_RIGHT)
            px = tile.load()

        if name == "boat":
            # The boat is a black cabin/mast on the cyan sky (rows 0-7) over the
            # green hull (rows 8-15). The cabin would vanish on the black page,
            # so it is recoloured to the pink accent; the hull keeps its original
            # green. Cyan sky and the black water below the hull go transparent.
            for y in range(tile.height):
                for x in range(tile.width):
                    r, g, b, a = px[x, y]
                    c = (r, g, b)
                    if c == CYAN:
                        px[x, y] = (0, 0, 0, 0)
                    elif c == BLACK:
                        px[x, y] = (*PINK, 255) if y < 8 else (0, 0, 0, 0)
                    # the green hull is left untouched
        else:
            # Key out the black background. Only exact black goes transparent, so
            # any dark pixel belonging to a sprite survives.
            for y in range(tile.height):
                for x in range(tile.width):
                    r, g, b, a = px[x, y]
                    if (r, g, b) == BLACK:
                        px[x, y] = (0, 0, 0, 0)

        dest = OUT / f"{name}.png"
        tile.save(dest, optimize=True)
        opaque = sum(
            1
            for y in range(tile.height)
            for x in range(tile.width)
            if px[x, y][3]
        )
        print(f"{dest.relative_to(ROOT)}  {tile.width}x{tile.height}  {opaque} opaque px")


if __name__ == "__main__":
    main()
