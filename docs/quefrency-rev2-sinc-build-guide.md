# Quefrency Rev. 2 & Sinc Rev. 1 Build Guide

Pictures to be added soon using Quefrency/Sinc PCBs! For now, Iris pictures will be used, but the build is essentially the same.

## Build guide compatibility

This build guide is exclusively for Quefrency Rev. 2 and Sinc, which features pre-soldered components. For Quefrency Rev. 1 PCBs, see [Quefrency Rev. 1 Build Guide](quefrency-rev1-build-guide.md)

## Videos of Builds

Here's a list of Quefrency Rev. 2 and Sinc Rev. 1 build videos various people have created:

* [FrostyKoala - Prototype Quefrency Rev. 2 Build](https://youtu.be/C-eKjwpLnfI)
* [FrostyKoala - Prototype Sinc Rev. 1 Build](https://youtu.be/3_U_SxKhygA)
* [VogonPT - Prototype Sinc Rev. 1 Build Stream](https://youtu.be/zpeZihPfzIU?t=40)

## Parts List

Here's a list of parts needed for the build:

* PCBs:
    * [Set of Quefrency Rev. 2 PCBs](https://keeb.io/products/quefrency-rev-2-60-65-split-staggered-keyboard)
    * [Set of Sinc Rev. 1 PCBs](https://keeb.io/products/sinc-split-staggered-75-keyboard)
* Plates:
    * [Plates for Quefrency Rev. 2](https://keeb.io/products/quefrency-rev-2-60-65-split-staggered-keyboard)
    * [Plates for Sinc Rev. 1](https://keeb.io/products/sinc-split-staggered-75-keyboard)
* 1 [TRRS cable](https://keeb.io/products/trrs-cable)
* Switches (MX-compatible ones)
* Optional parts
    * [2u PCB mount MX stabilizers](https://keeb.io/products/cherry-mx-stabilizer) if using 2u/2.25u/2.75u keys
    * [Rotary Encoder and Knob](https://keeb.io/products/rotary-encoder-ec11)

## Build Steps

Here's a summary of the build steps:

1. Add 2u stabilizers to PCB
2. Add switches to switch plate
3. Solder switches
4. Solder rotary encoder \(optional\)
5. Solder in-switch LEDs \(optional\)
    * Note: For Kailh Box switches, LEDs must be installed before the switches.
6. Assemble case
    1. Insert standoffs into middle layer \(optional\)
    2. Screw standoffs into switch plate
    3. Attach bottom plate using screws
7. Re-program board \(optional)
    1. VIA Configurator or
    2. QMK Configurator or
    3. QMK

## Add 2u stabilizers to PCB

Add the 2u stabilizers into the PCB. The stab wire with be on the bottom side of the switch for everywhere except for the bottom row. On the bottom row, the stab wire will be above the switch. Do this before installing the switch plate and switches, as stabilizers can not be removed after the switches have been soldered in.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/sinc/IMG_7935.jpeg)

Afterwards, fit the plate over the stabilizer.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/sinc/IMG_7936.jpeg)

## Add switches to switch plate and solder

!!! warning "For Kailh Box and Kailh Choc Switches - Install LEDs before this step"
    For Kailh Box and Kailh Choc switches, there is no cutout to insert in-switch LEDs through, so the LEDs must be added first. Skip to the LED installation step and then come back to this step of switch installation.

Add switches into the switch plate. It's a good idea to add switches to the corners first and then solder them before installing the rest of them: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/sinc/IMG_7937.jpeg)

Solder the switches onto the PCB.

Add the rest of the switches and solder them: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/sinc/IMG_7938.jpeg)

## Solder rotary encoder \(optional\)

Note: This step can be done after installing the switches as well. For the prototype plates, the encoders had to be installed first, but for the plates available on the store, the switch cutouts are now large enough to allow the encoders to be installed later.

Install the encoder onto the PCB and solder the 2 pins at the top side of the encoder and the 3 pins at the bottom side. The 2 side legs do not need to be soldered to the PCB.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/sinc/IMG_5707.jpeg)

## Solder in-switch LEDs \(optional\)

Polarity of the in-switch LEDs is important. Match up the longer leg of the LED to the + sign of the LED pins on the PCB: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/sinc/IMG_3419.jpeg)

Insert the LED through the switch and PCB: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/sinc/IMG_6013.jpeg)

Bend the LED legs out so it doesn't fall out while soldering the LED in: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/sinc/IMG_4335.jpeg)

Solder the LED legs and then clip the excess length on the legs. Be careful to not damage the resistor next to the LED pads.

Note that some of the switch layout options have the -/+ markings swapped, so make sure to always put the longer leg through the + pad. If you are unsure, plug the PCB in and test the LED before soldering it in.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/sinc/IMG_9005.jpeg)

## Assemble case

Insert a screw through the top of the switch plate and attach a standoff from the bottom side of the plate: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/sinc/IMG_9889.jpeg)

Repeat the process for the rest of the plate: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/sinc/IMG_1101.jpeg)

(Optional) If you have a middle layer, insert it now around the standoffs.

Put bottom plate on and add screws: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/sinc/IMG_5390.jpeg)

## Re-program board

You can reprogram your PCBs using one of the following three methods, listed in order of difficulty (easiest to most difficult). Note that if you want to reprogram the encoders, you will have to setup the full QMK build environment (3rd option listed here), as VIA and QMK Configurator can't handle configuration of the encoders at the moment.

### VIA

The PCBs are pre-flashed with QMK firmware with VIA support. VIA will allow you to reprogram the keys on your board without needing to reflash it. You can download the VIA here: [VIA](https://caniusevia.com/)

### QMK Configurator

The PCBs can also be programmed using QMK Configurator, where you can create your keymapping and then generate a .hex file. You can then take this .hex file and flash it using QMK Toolbox.

* [QMK Configurator - Quefrency Rev. 2](https://config.qmk.fm/#/keebio/quefrency/rev2/LAYOUT_65_with_macro)
* [QMK Configurator - Sinc Rev. 1](https://config.qmk.fm/#/keebio/sinc/rev1/LAYOUT_80_with_macro)

### QMK Build Environment

The last option is to compile your own .hex file using [QMK](https://github.com/qmk/qmk_firmware). This method is more difficult than the first two, but does allow you to use more advanced features (like tap-dance, RGB underglow control, etc.) and reprogram the encoders. To get started with setting it up, go here: [The Complete Newbs Guide To QMK](https://docs.qmk.fm/#/newbs).

If you have trouble setting it up, head over to the [QMK Discord](https://discord.gg/Uq7gcHh) for assistance.
