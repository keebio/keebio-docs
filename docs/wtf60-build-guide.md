---
title: WTF60 
---

![](./assets/images/wtf60/IMG_3180.jpeg)

## Parts List

Now you've watched some cool videos and feel inspired! Get your parts:

* [WTF60 PCB](https://keeb.io/products/wtf60-mirrored-60-keyboard-pcb?utm_source=docs)
* 60% keyboard case
* [60% plate (optional)](https://keeb.io/products/wtf60-switch-plate?utm_source=docs)
* [Switches (MX-compatible ones)](https://keeb.io/collections/switches?filter.p.m.keyboard.switch_compatibility=MX&sort_by=best-selling&utm_source=docs)
* [2u PCB mount MX stabilizers](https://keeb.io/products/cherry-mx-stabilizer?utm_source=docs)
* 6.25u or 7u PCB mount MX stabilizer
* Keycaps

## Build Steps Summary

1. Cut down center standoff on case
2. Add 2u [stabilizers](glossary#stabilizers) to [PCB](glossary#pcb)
3. Add switches
4. Optional Stuff!
    * Solder piezo speaker
    * Add RGB strips
5. Assemble!
6. Re-Programing Board Note
7. Rejoice!

## Cut down center standoff on case

Since the center standoff of the 60% case will interfere with the stem of one of the switches on the PCB, that standoff needs to be cutoff or shaved down, depending on the case material. The whole piece doesn't necessarily need to be cut off, just about 4-5mm so that the center switch stem won't hit it when the PCB is installed.

![](./assets/images/wtf60/IMG_3182.jpeg)

![](./assets/images/wtf60/IMG_3183.jpeg)

## Add 2u stabilizers to PCB

Add the 2u stabilizers into the PCB. The stab wire will be on the bottom side of the switch for everywhere except for the bottom row. On the bottom row, the stab wire will be above the switch. Do this before installing the switch plate and switches, as stabilizers can not be removed after the switches have been soldered in.

If you've never put together stabilizers before, see this guide on how to do it: [Stabilizer Handbook](https://imgur.com/gallery/machineabuses-stabilizer-handbook-v1-1-pHK0vhz)

![](./assets/images/wtf60/IMG_3184.jpeg)

Afterwards, fit the plate over the stabilizer(s).

## Add Switches

Add switches into the switch plate and into the PCB.

![](./assets/images/wtf60/IMG_3185.jpeg)

Flip the PCB and plate combo over and solder the switches onto the PCB.

![](./assets/images/wtf60/IMG_3186.jpeg)

## Optional Stuff!

### Solder Piezo Speaker

If you'd like you keyboard to make some funny noises, then add a piezo speaker!

First, tin both pads of the `LS1` spot on the PCB with solder. Then place the speaker on top of the pads and heat each pad one at a time to solder the speaker on.

![](./assets/images/wtf60/IMG_3188.jpeg)

### Add RGB Strips

The WTF60 PCB has 3 breakout pins for VCC, GND, and RGB. You can use these to add RGB underglow support.

![](./assets/images/wtf60/IMG_3190.jpeg)

Make sure that the RGB breakout pad is connected to the first Di/Din pad of the RGB strip. VCC and GND can be connected to any part of the strip.

![](./assets/images/wtf60/IMG_3189.jpeg)

The default configuration for the WTF60 in QMK does not have RGB LEDs enabled, so you will have to turn that on yourself in rules.mk and compile the firmware. Also adjust the number of RGB LEDs that are using at this time.

## Assemble!

Insert screws through the plate to secure the PCB to the standoffs on the case.

![](./assets/images/wtf60/IMG_3191.jpeg)

## Default Keymap

Here's the default keymap if you need it: [WTF60 Default Keymap](../static/layouts/keymap_WTF60_rev1.pdf)

## Re-Programming Board Note

Oh, looking to re-program your board? Never fear! Come look [here](flashing-firmware).

## Rejoice!

You now have one of the wackiest keyboards out there now! Plug your keyboard in and start working on boosting your WPM.

![](./assets/images/wtf60/IMG_3192.jpeg)
