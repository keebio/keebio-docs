---
title: Updating Pro Micro Bootloader to DFU Bootloader
---

:::caution Work in Progress
This page is not complete yet.
:::

Partially adapted from [Drashna's DFU Flashing Guide](https://www.reddit.com/r/olkb/comments/8sxgzb/replace_pro_micro_bootloader_with_qmk_dfu/)

This guide will cover updating the bootloader of the Pro Micro from the stock Caterina bootloader to the DFU bootloader.

## Why change the bootloader

Why would you update the bootloader?

Reasons:

- Caterina bootloader only stays in bootloader mode for about 8 seconds when reset is triggered, while DFU stays in bootloader mode when reset, allowing for a better flashing experience
- Don't have to figure out what COM/tty port the Pro Micro ends up on when trying to flash, which is one of the main problems with flashing on Windows

## Equipment needed

- A Pro Micro you want to flash with DFU bootloader
- An ISP flasher - a couple options here
    - A real one like USBasp
    - Another Pro Micro!
- 6 wires - solid-core recommended, 22-30 AWG
