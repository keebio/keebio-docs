# Iris Build Guide

Sorry, we haven't gotten around to completing this guide yet, but here's a link to a build log detailing the steps: [Iris Build Log](https://imgur.com/a/iQH2W)

## ![](https://i.imgur.com/uqIwtGy.jpg) {#parts-list}

## Parts List {#parts-list}

Here's a list of parts needed for the build:

* 2 [Iris PCBs](https://keeb.io/products/iris-keyboard-split-ergonomic-keyboard)
* 54-56 [diodes](https://keeb.io/products/1n4148-diodes) \(through-hole and SMD diodes supported\)
* 2 [Arduino Pro Micros](https://keeb.io/products/pro-micro-5v-16mhz-arduino-compatible-atmega32u4)
* 2 push buttons for resetting
* 54-56 [switches](https://keeb.io/products/gateron-switches) \(MX-compatible and Alps switches are supported\)
* Case
* 2 [TRRS jacks](https://keeb.io/products/trrs-jacks-3-5mm-one-pair)
* 1 [TRRS cable](https://keeb.io/products/trrs-cable)
* Optional parts
  * 2 4.7kΩ resistors if doing I2C
  * 2u PCB mount MX stabilizers if using 2u keys
  * For LEDs:
    * 2 100Ω resistors
    * 2 100kΩ resistors
    * 2 N-channel MOSFETs
    * 56 470Ω resistors \(or whatever value is appropriate for the LEDs you are using\)

## Build Steps {#build-steps}

Here's a summary of the build steps:

1. Solder components
   1. Solder diodes
   2. Solder push button and TRRS jacks
   3. Solder I2C resistors \(optional\)
   4. Solder LED components \(MOSFET and resistors\) \(optional\)
   5. Solder Pro Micro header pins
2. Add 2u stabilizers
3. Solder switches
4. Solder LEDs
5. Flash Pro Micros
6. Solder Pro Micros
7. Solder RGB strip \(optional\)

## Solder Components

The diodes, resistors, MOSFETs, push buttons, TRRS jacks,, and Pro Micro header pins can be soldered in any order.

### Solder diodes

All the diodes are oriented with the line towards the bottom. All the resistors are oriented horizontally, direction doesn't matter. The PCB supports both SMD and through-hole diodes and resistors, SMD ones are shown here. For through hole diodes, the black line will be at the bottom, towards the square pad.

![](https://i.imgur.com/PS0GEXA.jpg)

### Solder reset push buttons and TRRS jacks

### ![](https://i.imgur.com/YqDm7vj.jpg)Info about resistors in the kit

The color coded lines on the resistors can be hard to read/decipher, so the paper from the tape reel have been marked with different color lines.

* No Line - 4.7kΩ resistors for I2C \(only used on master half\)
* Blue Line - 100kΩ resistors for MOSFET \(1 for each half\)
* Red Line - 100Ω resistors for MOSFET \(1 for each half\)![](https://i.imgur.com/zz1rnXv.png)Some of the PCB kits may have these unlabeled resistors instead of the ones in the previous picture. Here's how to distinguish between them by looking at the bands:![](https://i.imgur.com/HmEYzag.png)



