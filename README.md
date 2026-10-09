# Stream Pack Builder by SHAHZON

Make your own OBS stream pack: overlays, Starting Soon, BRB, Just Chatting and Stream Over scenes, horizontal and vertical.

**Open the builder:** https://vivek-shah-github.github.io/streampack/

1. Type your details, pick a style that matches your game, change colours and words.
2. Press **Download my pack**.
3. Unzip it and open `index.html` inside for the OBS setup steps.

Everything you type stays in your browser. Nothing is uploaded anywhere.

## Make it yours

- **Text tab:** 63 fonts (gaming, pixel, handwritten, clean, Hindi-friendly) or upload your own TTF/OTF/WOFF. Pick a heading and body font, then fine-tune each kind of text (headlines, timer, name tag, labels, numbers, alerts, chat): size, weight, italic, letter spacing, line height, case and colour. Big text gets fill (gradient or solid), outline and shadow/glow.
- **Move & resize (under the preview, or the Layout tab):** drag any text, box, logo or the alert wherever you want, in every scene, horizontal and vertical. Click something for exact X/Y, size, rotation, hide, and its own font and colour. Your logo also gets its own width and height (keep its shape or stretch it), or pull its corners in the preview. Things snap to the centre and edges (hold Alt to place freely); arrow keys nudge.
- **Media tab (your own images, GIFs and videos):** add PNG, JPG, WebP, SVG, animated GIF, MP4 or WebM files (your favourite anime character, mascot, emotes), pick which scenes each one shows on, put it in front of or behind the text, and add motion (float, bounce, sway, pulse, spin), a shadow, glow or sticker outline. Drag it in the preview and pull its corners to resize; every scene keeps its own spot. Files stay in your browser and go into the pack's `assets/media` folder.
- **Facecam and game windows:** set each window to 16:9, 4:3, 1:1, 3:4, 9:16, 21:9, free or your own ratio, resize it by dragging its corners, and the see-through hole follows. The pack's `index.html` and `config.js` list the exact OBS numbers.

For developers: draggable items in the scene files carry `data-el`, windows carry `data-frame`. Window sizes are saved in `frames` and moved items in `layout` in `config.js`.

## Optional extras (use your own free keys)

The pack works without these. Each streamer gets their own keys, which are free and take about 5 minutes. The builder has the same steps under each box, plus a **Test my key** button.

### YouTube Channel ID
1. Sign in to YouTube with your streaming channel.
2. Open https://www.youtube.com/account_advanced
3. Copy the **Channel ID** (starts with `UC`).

### YouTube API key (live viewers, likes, subscribers, auto chat)
1. Open https://console.cloud.google.com/ and sign in with any Google account.
2. Project picker at the top › **New project** › name it `Stream Pack` › **Create**.
3. Search **YouTube Data API v3** › **Enable**.
4. **APIs & Services › Credentials › Create credentials › API key** (pick **Public data** if asked).
5. Copy the key (starts with `AIza`).
6. Recommended: in the key's settings, set **API restrictions** to only YouTube Data API v3. Leave **Application restrictions** on **None**, because OBS loads the pack from your PC.

### Streamlabs token (alerts)
1. Log in at https://streamlabs.com/ with the YouTube or Twitch account you stream on.
2. **Dashboard › Settings › API Settings › API Tokens**.
3. Copy **Your Socket API Token**.

Don't also add Streamlabs' own Alert Box in OBS, or alerts show twice.

## Keep keys private

Keys and tokens are like passwords. Don't share your pack folder or post `config.js` once they're in it. If a key leaks, delete it in Google Cloud and make a new one.
