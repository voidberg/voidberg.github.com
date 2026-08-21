One folder per article. The Markdown is index.md; images sit beside it.

    35-years-or-1-5-billion/
      index.md
      swartz.jpg

Astro strips the "index", so the URL is /articles/35-years-or-1-5-billion.
Renaming the folder renames the URL and takes the images with it; deleting it
takes everything.

Reference images relatively and the asset pipeline does the rest: resizing,
WebP conversion, width/height so the page doesn't jump while loading, lazy
loading, and a content-hashed filename for cache busting.

    ![Alt text, which is not optional.](./swartz.jpg)

Raw HTML <img> does NOT work for these. Astro only processes Markdown image
syntax; an <img src="./photo.jpg"> is passed through untouched and 404s,
because the file is not in public/.

So a caption or a photo credit means switching that article to index.mdx:

    import { Image } from "astro:assets";
    import photo from "./photo.jpg";

    <figure>
      <Image src={photo} width={1600} alt="Alt text." />
      <figcaption>Caption, with a <a href="...">credit link</a>.</figcaption>
    </figure>

Keep the figcaption on one line. Text on its own line inside a JSX element is
parsed as a Markdown block and comes out wrapped in a <p>.

<Image> also takes width, which Markdown images do not: they are emitted at
the source image's full size, so a 4928px photo ships at 4928px. Cap it at
1600 and downscale the original before committing it.

Add class="pixel" to the <figure> for screenshots that should stay crisp
rather than being smoothed.

Two rules:
  - The path must be relative and the file must be under src/. Anything in
    public/ is served untouched, with no optimisation.
  - Output is always WebP. Markdown images take no format option; <Image>
    takes format="jpeg" if one genuinely needs it.
