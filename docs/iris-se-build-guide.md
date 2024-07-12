---
title: Iris SE
---

## Build Compatibility

This build guide is exclusively for the Iris SE case. It assumes usage of the hotswap Iris Rev. 8 PCBs, but the Rev. 5 PCBs are compatible with the case.

## Parts List

Get your parts ready:

* Iris PCBs
  * [Iris Rev. 8 PCBs (Hotswap)](https://keeb.io/iris-keyboard-split-ergonomic-keyboard)
  * [Iris Rev. 5 PCBs](https://keeb.io/products/iris-rev-5-keyboard-pcbs-for-split-ergonomic-keyboard)
* Iris SE Case
  * [Aluminum version](https://keeb.io/products/iris-se-aluminum-case)
* [USB-C to USB-C cable](https://keeb.io/products/usb-c-to-usb-c-cable)
* [56 MX-compatible switches](https://keeb.io/collections/switches?filter.p.m.keyboard.switch_compatibility=MX)
* [Rotary Encoder](https://keeb.io/products/rotary-encoder-ec11) and [Knob](https://keeb.io/products/rotary-encoder-knob-ec11) (optional)
* [2u PCB mount MX stabilizers](https://keeb.io/products/cherry-mx-stabilizer) if using 2u keys (optional)

![](./assets/images/iris-se/IMG_1856.jpeg)

### Build Tutorial Video by Keebio

Coming Soon!

## Build Steps Summary

1. Inspect/Test Parts
2. Solder encoder (Optional)
3. Add stabilizers (Optional)
4. Add switches
5. Assemble Case
6. Board Notes

## Inspect/Test Parts

Before starting assembly of the board, check if there's any issues with the parts in the keyboard kit.

First, unscrew the switch plate from the tray, and remove the poron piece from the tray.

See if silicone bumpers are installed on the bottom of the case trays. A pack containing 2 spare feet have been included with the case.

![](./assets/images/iris-se/IMG_1857.jpeg)

Connect the PCBs together with your USB-C to USB-C cable, plug it into your computer (either half is fine), and make sure all the LEDs are working. Check if any of the LEDs are flickering oddly, and if any are, please contact us for replacement PCBs.

![](./assets/images/iris-se/IMG_1858.jpeg)


## Solder Rotary Encoder (Optional)

If adding a rotary encoder, clip the two larger mounting pins on the encoder so it can fit onto the PCB:

![](./assets/images/iris-rev6/IMG_7842.jpg)

It should look like this after clipping:

![](./assets/images/iris-rev6/IMG_7843.jpg)

Insert the encoder onto the PCB and solder the 3 pins at the top side of the encoder and the 2 pins at the bottom side.

![](./assets/images/iris-rev6/IMG_7844.jpg)

Then flip the board over and solder all 5 pins. Make sure that they remain pushed in all the way through the board while soldering. Also be careful to not come in contact with the hotswap socket while soldering the side of the encoder that has 2 pins. Accidental contact with the black portion is okay, but try to avoid doing so.

![](./assets/images/iris-rev6/IMG_7845.jpg)

### Rev. 7-8

If you have the Rev. 7-8 PCBs, when installing the encoders, you will need to bend the legs of the rotary encoder slightly inwards, outwards, and/or to the side (depending on the pads on the PCB) in order for the encoders to fit onto the PCB.

![](./assets/images/iris-rev7/IMG_2325.jpg)

![](./assets/images/iris-rev7/IMG_2326.jpg)

Once you've pushed the encoder pins through the PCB, make sure the encoder is flat against the top of the PCB.

## Add 2u stabilizers to PCB (Optional)

Add the 2u stabilizer if you have the Iris Rev. 7-8 PCBs and want a 2u key at the thumb. Do this before installing the switch plate and switches.

![](./assets/images/iris-rev7/IMG_2323.jpg)

## Add switches

### Prepare Plate and PCB

First overlay the silicone plate support piece over the PCB. Line up the screw holes with the holes in the piece.

![](./assets/images/iris-se/IMG_1859.jpeg)

Add the switch plate on top of the silicone piece, checking alignment of the screw holes again with the PCB.

![](./assets/images/iris-se/IMG_1860.jpeg)

### Supporting the Hotswap Sockets

:::info

It's really important to be pressing on the hotswap socket during switch insertion, as sometimes, a slightly mis-aligned pin getting pushed off-center onto the socket can cause the socket to be ripped off of the PCB.

:::

When inserting a switch, line up the switch on the switch plate. Then push the switch through the plate and into the hotswap socket while supporting the hotswap socket from underneath, so basically, you are squeezing the PCB and the switch together.

![](./assets/images/iris-se/IMG_1861.jpeg)

Make sure that the switch remains flush with the plate.

![](./assets/images/iris-se/IMG_1862.jpeg)

### Dealing with Bent Pins

:::danger

Don't attempt to insert switches with bent pins into the hotswap socket, as that can push the socket off of the PCB and damage it.

:::

![](./assets/images/iris-rev6/IMG_7854.jpg)

If you have a switch with a bent pin, unbend the pin. Sometimes it helps to have something like a pair of tweezers to straighten out the pin.

![](./assets/images/iris-rev6/IMG_7855.jpg)

### Install Switches

Insert some switches are the corners and at the middle and check that things are still lined up correctly. The switches should be flush with the plate. If a couple of the switches don't sit flat on the plate, remove the plate, reposition the silicone piece, and try again.

![](./assets/images/iris-se/IMG_1864.jpeg)

Add the rest of the switches.

![](./assets/images/iris-se/IMG_1865.jpeg)

## Test keys

Before reassembling the case, plug the USB cable into the PCB and test all of the keys to make sure everything is working, as it'll be easier to fix switch issues now than later.

It's best to test using the [Key Tester in VIA](via#key-tester-tab) with `Test Matrix` mode on, as this will let you test the Lower and Raise keys properly.

![](./assets/images/iris-ce/iris-via-key-tester.png)

## Assemble Case

Now that all of the switches have been inserted, it's time to assemble the case.

First, make sure the silicone tray insert is seated at the bottom of the tray.

![](./assets/images/iris-se/IMG_1866.jpeg)

Next, place the plate/switches/PCB assembly into the tray.

![](./assets/images/iris-se/IMG_1867.jpg)

Add screws to each of the holes and screw them in.

:::info

Do not overtighten the screws, as this will cause bowing of the switch plate.

:::

![](./assets/images/iris-se/IMG_1868.jpg)

Add keycaps to all of the switches.

![](./assets/images/iris-se/IMG_1884.jpg)

Repeat the same process for the other half of the keyboard.

![](./assets/images/iris-se/IMG_1885.jpg)

## Remapping/reprogramming Board

Looking to remap/reprogram your board? Check out our guide for [remapping your keyboard](remapping-keyboard).

While the bottom plates have a hole at the bottom to allow you to access the reset button to allow your Iris to be reflashed if you are using QMK, if you don't want to be flipping your board over to press reset, you can also use one of the following options when remapping your Iris:

1. Use [VIA](via.md) to remap your keys. The stock firmware on the Iris Rev. 8 PCBs already has VIA support enabled. This allows you to remap the keyboard without having to reflash the board.
2. If you are not using VIA and are using QMK instead, use the `QK_BOOT` keycode to reset the keyboard to allow it to be reflashed without needing to physically press the reset button on the PCB. The default way of using `QK_BOOT` is by pressing `Lower` + `R` on the left half or `Raise` + `Del` on the right half as shown below:

![](./assets/images/iris-ce/iris-ce-qk-boot.png)

For reference, the Iris Rev. 8 PCB uses a RP2040 microcontroller.

## Turning off RGB LEDs

If you'd like to turn the RGB LEDs off, you can control the [RGB settings in VIA](via#lighting).

If you still have the default keymapping, you can also hold the `Lower` key and then press `Left Shift` as highlighted below:

![](./assets/images/iris-ce/rgb-off.png)
