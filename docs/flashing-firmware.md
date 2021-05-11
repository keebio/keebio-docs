---
title: Flashing Firmware
---
## Flashing - why?
You can flash the microcontrollers (ATmega32u4, Pro Micro, Elite-C, etc) in your kit prior to building your keyboard to ensure that they are undamaged and functioning normally. 

This might be a good practice to be sure you're starting out with gear that will perform as desired. While there are multiple methods of flashing, this guide with only address the usage of QMK Toolbox to perform flashing.

<!-- ## Customizing your keymap (rename)

TODO: Link to keymap document
-->

## Determining Bootloader

Before flashing, you'll need to know what bootloader is present on the microcontroller that's on your PCB. A bootloader is a program on the microcontroller that allows firmware to be uploaded to the microcontroller via USB. It's important to know what bootloader is present on your board, as the flashing procedure varies based on what you have.

Here's the different possible bootloaders in use for Keebio boards:

- ATmega32u4 DFU Bootloader (most common)
    - This bootloader is the one present on most Keebio PCBs that already have a microcontroller pre-soldered onto it
    - Also present on Elite-C
- STM32 DFU Bootloader
    - This bootloader is on STM32-based keyboards
    - Currently, STM32 is used on the following Keebio PCBs:
        - DSP40 Rev. 1
        - BDN9 Rev. 2
    - Also present on the Proton C
- Caterina Bootloader
    - Found on Arduino Pro Micro controllers, so if you've built a board with a Pro Micro, you have the Caterina Bootloader

## Flashing Options

### Using QMK Toolbox

[QMK Toolbox](https://github.com/qmk/qmk_toolbox) contains various flashing tools into one app, and has been designed to make the flashing process easier.

Make sure you download the [latest release here](https://github.com/qmk/qmk_toolbox/releases). For this guide, make sure you have Version 0.0.21 or higher installed, as the most recent versions have better device detection methods for more reliable flashing.

### Using QMK Environment

One way to flash is using the command-line via a QMK environment setup. Here's a couple of links on how to do that from the QMK documentation:

- [QMK - Flashing](https://docs.qmk.fm/#/flashing)
- [QMK - Flashing Firmware](https://docs.qmk.fm/#/newbs_flashing)

Setting up the QMK build environment is beyond the scope of this guide, so if you need assistance with that, consult the [QMK Introductory Tutorial](https://docs.qmk.fm/#/newbs) and/or join the [QMK Discord Server](https://discord.gg/Uq7gcHh).

## Flashing ATmega32u4 (DFU Bootloader)

### One-time Setup (Windows only)

TODO: add info on setting up ATmega DFU Bootloader driver (libusb0)

(For now, see [Driver Installation with Zadig](https://beta.docs.qmk.fm/using-qmk/guides/driver_installation_zadig) if having issues with driver installation)

### Flashing
If you're on Windows or Mac, you can follow the procedure below.

### For QMK
- Open up the QMK Toolbox application
  - Plug in your PCB
- Open the file you downloaded.
- For most Keebio items, the MCU field will be pre-filled with ATmega32u4.
- With your keyboard connected to the computer hold the reset button for a second and then let go.
  - You should see a line in yellow that tells you it is connected.
- Now that your keymap file is loaded and your PCB is connected, click Flash
- After flashing, your PCB will disconnect and it will exit bootloader 
  - This will give you another yellow line. 

<!-- TODO: convert to tabs and have images for Windows/Mac -->
![](./assets/images/flashing/mac-32u4-dfu.png)

## Flashing the Pro Micro (Caterina Bootloader)

![](./assets/images/flashing/pro-micro.jpg)

- Download [QMK Toolbox](https://github.com/qmk/qmk_toolbox/releases)
- Open QMK Toolbox
    - Make sure you are using QMK Toolbox version 0.0.21 or higher.
- Open your firmware file you want in your Pro Micro
- Plug in your Pro Micro
  - QMK will detect it but ignore that. But, if it does not, you need to verify you are on version 0.0.21.
- Checkmark `Auto-Flash`
- Double-tap the RST and GND pins with tweezers/paperclip or reset button

![](./assets/images/flashing/pro-micro-reset.jpg)

- You'll know it's finished and functioning keyboard if you have seen the second yellow line indicating that the bootloader device has disconnected.
- Small caution: If you receive the line `butterfly_recv(): programmer is not responding` you need to make sure that you reset your Pro Micro by double-tapping

![](./assets/images/flashing/mac-caterina.png)

## STM32 Chip

### One-time Setup (Windows only)

TODO: add info on setting up STM32 DFU Bootloader driver (WinUSB), see https://docs.cannonkeys.com/satisfaction75/flashing/ as reference

(For now, see [Driver Installation with Zadig](https://beta.docs.qmk.fm/using-qmk/guides/driver_installation_zadig) if having issues with driver installation)

### Flashing

- Open up the .bin file for your board
- Ignore the `MCU (AVR only)` box 
- Hold the reset button for one second and let go
- You should now see the yellow connected line
- Add/open your firmware file for your device
- Click Flash
- You'll see many lines in gray, but then the second yellow line that has the word *disconnected* will confirm that your keyboard is now functioning.

![](./assets/images/flashing/mac-stm32-dfu.png)

<!--
## HID Console (TODO: rename section)

TODO: add info on HID console appearing in Toolbox output, and how it'll appear based on rules.mk settings

## Glossary

- stuff

-->
