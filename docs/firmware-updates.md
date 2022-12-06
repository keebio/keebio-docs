---
title: VIA Firmware Upgrade Procedure
---

The VIA firmware for various Keebio keyboards has been updated to support the new rotary encoder mapping feature. After following this upgrade procedure, you'll be able to easily change the functionality of the rotary encoders on your board.

## Prerequisites
- QMK Toolbox
- Updated firmware .hex/.bin downloaded
- If using desktop app, the [latest VIA Release](https://github.com/the-via/releases/releases)

## Firmware Downloads
Here's the links to the updated firmware for your board.

[https://github.com/keebio/keebio-firmware](https://github.com/keebio/keebio-firmware)

## Upgrading the Firmware on the Keyboard

### Step 1 - Clear EEPROM

First you will need to clear the EEPROM on each half of the board. Here's the prodcedure for that: [Resetting/Clearing EEPROM](https://docs.keeb.io/reset-eeprom)

### Step 2 - Flash new firmware

After clearing the EEPROM, go ahead and flash each half with the new firmware file you've downloaded: [Flashing Firmware](https://docs.keeb.io/flashing-firmware)

## Remapping Encoders

### Step 1. Change layout to show encoder

Now that you've updated the firmware, if you want your encoders to show up for remapping, click on `Layouts` on the left side of the window and then set the options to show the encoders. The encoder spots will show up as circles where the switch used to be.

![](./assets/images/via/iris-rev6b-encoder-layout.png)

### Step 2. Click on encoder

To edit the mapping of the encoder, click on it, and the bottom half of the window will show the mappings for clockwise and counter-clockwise rotation, as well as pressing the encoder (if the encoder can be pressed).

![](./assets/images/via/encoder-edit.png)
