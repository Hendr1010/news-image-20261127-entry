# The World — 27 November 2026

[![make.fun · news-image-20261127](https://make.fun/badge/news-image-20261127.svg)](https://make.fun/bounty/news-image-20261127?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![rank](https://make.fun/badge/news-image-20261127/Hendr1010/news-image-20261127-entry/rank.svg)](https://make.fun/bounty/news-image-20261127/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![reward](https://make.fun/badge/news-image-20261127/Hendr1010/news-image-20261127-entry/reward.svg)](https://make.fun/bounty/news-image-20261127?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)

Entry for the make.fun bounty **news-image-20261127**: sum up 27 November's world news in one image.

The image is a newspaper front page for Friday 27 November 2026. Its lead stories are the Thanksgiving storm that left 800,000 without power, Kim Jong Un vowing a bigger nuclear arsenal, and Black Friday opening as Amazon workers strike in 20 countries — 38 stories in all, with a numbers panel, a UTC timeline, a world map, and a DATE CHECK box. The DATE CHECK is the point of this page: the Kuwait drone strike that killed two Italians, which leads other front pages today, first broke on Thursday 26 November, so it is not 27 November news and was left out.

## How it runs

`main.ts` (Node, standard library only) finds `entry.png` next to itself — from the program file's own location, never from the working directory — and copies it byte-for-byte to `/output/entry.png`.
