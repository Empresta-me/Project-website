---
id: "faq"
slug: "/faq"
title: "Frequently Asked Questions"
sidebar_label: "FAQ"
---

Here are some frequently asked questions.

## Web

### How do I install the web version?

You can install the web version by clicking on the install button in the title bar.
After that you can use this app offline.

### Cannot insert images in web

> [#167](https://github.com/LinwoodCloud/Butterfly/issues/167)

Currently decoding images does not work with canvaskit.
Please upvote [this issue](https://github.com/flutter/flutter/issues/102683) if you want this option!

### Butterfly does not load on Brave

Brave Users who have set the 'Block Fingerprinting' Shield setting to Aggressive, need to change it to 'Standard' or just plain 'Block Fingerprinting'.
Click on the shield icon in the address bar to change the setting.
Try updating your browser to the latest version.

## Mobile

### Crashes on Z Fold 3 when holding side button of S Pen

> [#289](https://github.com/LinwoodCloud/Butterfly/issues/289)

This is a known issue with flutter and the Samsung Z Fold 3.
Please upvote [this issue](https://github.com/flutter/flutter/issues/111068) to get this fixed!

## Desktop

### Stylus input are not recognized

> [#238](https://github.com/LinwoodCloud/Butterfly/issues/238)

I'm using the input provided by the flutter framework.
There are already issues to track it:
Windows: [flutter/flutter#65248](https://github.com/flutter/flutter/issues/65248) and [flutter/flutter#102836](https://github.com/flutter/flutter/issues/102836).
Linux: [flutter/flutter#63209](https://github.com/flutter/flutter/issues/63209)

These issues are a bit older. The web version should work fine for now.
