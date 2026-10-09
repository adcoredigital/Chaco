# Chaco: Shih Tzu Puppy Site

## Put it online with GitHub Pages (no coding needed)
1. Sign in at github.com and click **New repository**. Name it `chaco` (or `yourusername.github.io` for a shorter web address). Set it to **Public**.
2. Click **uploading an existing file**, then drag in everything from this folder: `index.html`, `blog.html`, and the `css`, `js` and `images` folders. Click **Commit changes**.
3. Go to **Settings > Pages**. Under "Branch" choose **main** and **/ (root)**, then click **Save**.
4. Wait 1 to 2 minutes. Your site will be at `https://yourusername.github.io/chaco/`.

## Replace the pictures
Upload your photos into the `images` folder using these exact names (lowercase, .jpg):
- `chaco-hero.jpg` (top of home page, portrait photo works best)
- `chaco-about.jpg`
- `gallery-1.jpg` to `gallery-6.jpg`
- `blog-1.jpg`, `blog-3.jpg`

Until you upload them, friendly placeholders show instead.

## Add a blog post
Open `blog.html`, copy a whole `<article class="post"> ... </article>` block, paste it below the others and change the text.
For a YouTube video, paste your video link into `data-youtube="..."`.

## Change the email for the contact form
Open `js/main.js` and edit the first line: `CONTACT_EMAIL`.
