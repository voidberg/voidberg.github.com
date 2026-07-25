#!/usr/bin/env python3
"""Build the crab's two-frame walk cycle from the extracted crab sprite.

Source: public/sprites/crab.png, 16x10, written by extract_sprites.py.
Run from the repo root:  python3 scripts/make_crab_frames.py
Output: public/sprites/crab-walk.png, a 32x10 sheet of two 16x10 frames.

There is no second crab pose in the Glug Glug screen to extract, so the frames
are derived from the one sprite. Everything above LEG_TOP (the body, the two
eyestalks) is identical in both frames; below it the legs on one side are
raised a pixel while the other side stays planted, then the sides swap. Lifting
rather than sliding is what reads as a step: at 16px wide the legs are two or
three pixels each, so a sideways shift just looks like the whole sprite
juddering.

LEG_TOP is 7 rather than 6 because row 6 is the body's underside, not legs --
raising it detaches the shell. CSS draws the sheet at x2 with steps(2), so the
frames snap; see .dive-crab in public/spectrum.css.
"""

from PIL import Image
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "public" / "sprites" / "crab.png"
OUT = ROOT / "public" / "sprites" / "crab-walk.png"

# First row that counts as legs; everything above it is body and stays put.
LEG_TOP = 7
# Legs left of this column step together, legs at or right of it step together.
MIDDLE = 8


def frame(src, lift_left):
    """One pose: the legs on the lifted side move up a pixel, the rest hold."""
    w, h = src.size
    out = Image.new("RGBA", src.size, (0, 0, 0, 0))
    for y in range(h):
        for x in range(w):
            px = src.getpixel((x, y))
            if not px[3]:
                continue
            lift = y >= LEG_TOP and (x < MIDDLE) == lift_left
            ny = y - 1 if lift else y
            if 0 <= ny < h:
                out.putpixel((x, ny), px)
    return out


def main():
    src = Image.open(SRC).convert("RGBA")
    w, h = src.size
    sheet = Image.new("RGBA", (w * 2, h), (0, 0, 0, 0))
    sheet.paste(frame(src, True), (0, 0))
    sheet.paste(frame(src, False), (w, 0))
    sheet.save(OUT)
    print(f"wrote {OUT.relative_to(ROOT)} ({sheet.width}x{sheet.height}, 2 frames)")


if __name__ == "__main__":
    main()
