# Shalin's Game Portfolio

A single-page portfolio for my game development work, built with plain HTML, CSS and JavaScript. No frameworks, no build step. Open `index.html` and it runs.

**Live site:** (https://shalin-game-portfolio.vercel.app/)

## What's in it

| Section | Engine | About |
|---|---|---|
| Environment Design | Unreal Engine 5 | A shrine under a hill. Volumetric fog plus 2D fog cards. |
| STORM | Unity, C# | Simulated Tornado Module. Faculty-led research on tornado awareness. VR next. |
| Vortex Combat | HTML, CSS, JavaScript | 2D fighting game. Two fighters, four stages, built in two weeks with Ashim. |
| Recreating Myself in MetaHuman | Unreal Engine 5 | A photo aligned onto a MetaHuman face rig, animated with Live Link. |
| About, Toolbox, Contact | | Who I am and how to reach me. |

## How it works

Three files:

- `index.html` : the front page. A bento grid of tiles, each one a link to `#/section-id`.
- `style.css` : all presentation. Newsprint palette, halftone image treatment, the grid, and the article layout.
- `main.js` : the content and the behaviour.

Navigation is hash-based, so every section has its own URL and the browser back button works. Opening `#/storm` shows the STORM article over the front page; clearing the hash returns to the grid.

### Editing the content

Everything readable lives in the `STORIES` object at the top of `main.js`:

```js
"storm": {
  page:   "Page 2",
  kicker: "Unity · C# · 2026",
  hed:    "STORM",
  stand:  "Simulated Tornado Module",   // optional line under the headline
  dek:    "One sentence.",
  byline: [["Role","Developer"]],       // the strip under the headline
  facts:  [["Engine","Unity"]],         // the sidebar box
  pull:   "The pull quote.",            // optional
  body:   [ "A paragraph.",
            "<h3>A section heading</h3>",
            ["A bullet", "Another bullet"] ],
  media:  [ { type:"video", src:"path.mp4", poster:"still.png", cap:"Caption" },
            { type:"img",   src:"path.png", cap:"Caption" } ]
}
```

To add a section: add an entry to `STORIES`, add its id to `ORDER`, add a matching `<a href="#/its-id">` tile in `index.html`, and give it a grid placement in `style.css`.

### The gallery

Every item gets the same stage, no featured-image hierarchy. Stills hold for 5 seconds, videos play muted and hand over when they end or after 15 seconds. Touching any control stops the rotation so it doesn't move under you. Arrow keys work, and there's a fullscreen button.

### Keyboard

- `1`–`5` open a section from the front page
- `←` `→` move through the gallery
- `Esc` returns to the front page

## Media

Videos are compressed for the web. The uncompressed originals are kept locally in `_originals/` and are not tracked, because GitHub rejects files over 100 MB.

## Contact

- Email: shalinneedsjob@gmail.com
- GitHub: [tooEZtz](https://github.com/tooEZtz)
- LinkedIn: [TooEZtzy](https://www.linkedin.com/in/TooEZtzy)
