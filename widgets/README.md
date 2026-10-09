# Stream Pack Builder by SHAHZON

Make your own OBS stream pack: overlays, Starting Soon, BRB, Just Chatting and Stream Over scenes, horizontal and vertical.

**Open the builder:** https://vivek-shah-github.github.io/streampack/

1. Type your details, pick a style that matches your game, change colours and words.
2. Press **Download my pack**.
3. Unzip it and open `index.html` inside for the OBS setup steps.

Everything you type stays in your browser. Nothing is uploaded anywhere.

## Stream widgets

**Open the widget builder:** https://vivek-shah-github.github.io/streampack/widgets/

Like goal, sub goal, tip goal, live viewers, subscriber counter, timer, clock, socials, scrolling ticker, name plate and supporters, in 10 styles you can recolour. The **Text** tab has 63 fonts (or any Google font by name), plus size, weight, italic, letter spacing, line height, case and colour for labels, main text and celebration text, and gradient, outline and shadow effects. The **Look** tab adds corner roundness, entrance animations and idle motion. Pick one, press **Copy link**, and in OBS add a **Browser** source with that link (Local file unticked). Each widget shows the exact width and height to use.

Widgets run from this website, so when the design is updated, everyone's widgets update the next time OBS loads them. To change your own settings later, open the builder, go to **Add to OBS › Edit a widget you already made**, and paste your link.

For developers: `widgets/w.html` is the widget, `widgets/index.html` is the builder. Their `DEF` blocks list every option; add new options in both, with a default, so old links keep working.

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
