---
title: Quefrency LM
---

## Build Compatibility

This build guide is exclusively for the Quefrency LM.

## Parts List

Get your parts ready:

* [Quefrency LM Kit](https://keeb.io/products/quefrency-lm-kit?utm_source=docs)
  * PCBs
  * Tray Case
  * Silicone liners
  * O-rings
  * Switch plates
  * Switch plate support foam
  * 8mm M2 screws
  * Shroomie feet
* [USB-C to USB-C cable](https://keeb.io/products/usb-c-to-usb-c-cable)
* [Low-Profile Kailh Choc Switches](https://keeb.io/collections/switches?filter.p.m.keyboard.switch_compatibility=Choc+V2+Low-Profile&sort_by=best-selling&utm_source=docs) - Choc V2
* [Low-Profile Keycaps](https://keeb.io/collections/keycaps?filter.p.m.keyboard.switch_compatibility=Choc+V2+Low-Profile&sort_by=manual&utm_source=docs)

![Quefrency LM Kit Parts](./assets/images/quefrency-lm/IMG_8765.jpeg)

## Build Steps Summary

1. Inspect/Test Parts
2. Add switches
3. Assemble Case
4. Board Notes

## Inspect/Test Parts

Before starting assembly of the board, check if there's any issues with the parts in the keyboard kit.

Plug in the USB-C link cable in between halves and plug in the USB-C cable from your computer to the left half. Both halves should light up. Do the same with plugging into the right half.

If both halves don't light up, check that you're plugging into the correct USB-C port (outermost ones) and that you are not using a charging-only USB-C cable.

Optional: Unscrew the switch plate and inspect that there is switch plate support foam, silicone tray liners, and o-rings on the mounting points. See [Full Breakdown](#full-breakdown) for more information.

## Add switches

To insert a switch, make sure the pins line up with the hotswap socket on the PCB.

![Inserted switch](./assets/images/quefrency-lm/IMG_8766.jpeg)

Then push down on the part of the switch that is above the pins until it clicks into place.

![Insert switch](./assets/images/quefrency-lm/IMG_8768.jpeg)

Add the rest of the switches.

![All switches added](./assets/images/quefrency-lm/IMG_8769.jpeg)

## Test keys

Before reassembling the case, plug the USB cable into the PCB and test all of the keys to make sure everything is working, as it'll be easier to fix switch issues now than later.

![](./assets/images/quefrency-lm/via-switch-test.png)

Note that the `Fn` key won't show up in the switch tester, as a keycode isn't sent to the computer when pressed, so to test it, hold `Fn` while pressing another key. For example, holding down `Fn` while pressing `1` will output `F1` to a computer.

If a key is not working, check that the switch is inserted properly and that the pins are aligned with the hotswap socket. Sometimes, a pin can get bent during insertion, which can cause the switch to not work.

## Add Keycaps

Add keycaps to all of the switches.

![All keycaps added](./assets/images/quefrency-lm/IMG_8771.jpeg)

Plug it in and type away!

![All lit up](./assets/images/quefrency-lm/plugged-in.jpg)

## Magnetic Tenting Stand Rings

If you're using the magnetic tenting stands, you can attach the MagSafe sticker rings to the case in the circular insets on the bottom of the case.

First peel off the backing of the sticker ring.

![Peel off backing](./assets/images/quefrency-lm/IMG_8781.jpeg)

Then stick it on the bottom plate.

![Stick on bottom plate](./assets/images/quefrency-lm/IMG_8782.jpeg)

Next peel off the blue protection film.

![Remove protection film](./assets/images/quefrency-lm/IMG_8784.jpeg)

![Completed ring attached](./assets/images/quefrency-lm/IMG_8785.jpeg)

Adjust the tenting stand to however you'd like it an place the keyboard on it.

![Place on tenting stand](./assets/images/quefrency-lm/IMG_8788.jpeg)

## Default Keymap

Here's the default keymap if you need it: [Quefrency LM Default Keymap](https://github.com/nooges/qmk_userspace_via/blob/main/keyboards/keebio/quefrency_lm/keymaps/via/keymap.c)

## Remapping/reprogramming Board

Looking to remap/reprogram your board? Check out our guide for [remapping your keyboard](remapping-keyboard).

While the bottom plates have a hole at the bottom to allow you to access the reset button to allow your Quefrency LM to be reflashed if you are using QMK, if you don't want to be flipping your board over to press reset, you can also use one of the following options when remapping your Iris:

1. Use [VIA](via.md) to remap your keys. The stock firmware on the Quefrency LM already has VIA support enabled. This allows you to remap the keyboard without having to reflash the board.
2. If you are not using VIA and are using QMK instead, use the `QK_BOOT` keycode to reset the keyboard to allow it to be reflashed without needing to physically press the reset button on the PCB. The default way of using `QK_BOOT` is by pressing `Fn` + `R`.

For reference, the Quefrency LM PCB uses a STM32G431 microcontroller.

## Turning off RGB LEDs

If you'd like to turn the RGB LEDs off, you can control the [RGB settings in VIA](via#lighting).

## Full Breakdown

(Images coming soon)

If you want to fully unscrew the case to check the parts inside, you can unscrew the switch plate and inspect that there is switch plate support foam, silicone tray liners, and o-rings on the mounting points.