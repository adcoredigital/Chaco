# Chaco: Shih Tzu Puppy Site

Files: `index.html` (Home, About, Gallery, Contact), `blog.html` (blog only), `style.css`, `script.js`, and the `images` folder.

## Put it online with GitHub Pages
1. On github.com click **New repository**, name it `chaco`, set it **Public**.
2. Click **uploading an existing file** and drag in everything from this folder (including `images`). Click **Commit changes**.
3. Go to **Settings > Pages**, choose branch **main** and folder **/ (root)**, click **Save**.
4. After 1 to 2 minutes the site is live at `https://yourusername.github.io/chaco/`.

## Your photos (put them in `images`, exact names, lowercase, .jpg)
`blog-banner.jpg` (blog top banner), `chaco-hero.jpg`, `chaco-about.jpg`, `gallery-1.jpg` to `gallery-3.jpg`, `blog-1.jpg` to `blog-5.jpg`.
Until you upload them, a cute placeholder shows.

## Blog
- Open `blog.html`. Each story has a hidden block called `post-full`. Write the full story text there.
- For a YouTube video, put the link in the `data-video="..."` part of that story's "Read story" link. Leave it out for no video.

## Contact form
Open `script.js` and change `CONTACT_EMAIL` to your email. The form opens the visitor's email app.
