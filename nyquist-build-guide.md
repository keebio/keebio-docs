# Nyquist Build Guide

## Parts List {#parts-list}

Here's a list of parts needed for the build:

* 2 [Nyquist PCBs](https://keeb.io/products/nyquist-keyboard)
* 60 [diodes](https://keeb.io/products/1n4148-diodes) \(through-hole and SMD diodes supported\)
* 2 [Arduino Pro Micros](https://keeb.io/products/pro-micro-5v-16mhz-arduino-compatible-atmega32u4)
* 2 push buttons for resetting
* 60 [switches](https://keeb.io/products/gateron-switches) \(MX-compatible and Alps switches are supported\)
* Case
* 2 [TRRS jacks](https://keeb.io/products/trrs-jacks-3-5mm-one-pair)
* 1 [TRRS cable](https://keeb.io/products/trrs-cable)
* Optional parts
  * 2 4.7kΩ resistors if doing I2C
  * 2u PCB mount MX stabilizers if using 2u keys

## Build Steps {#build-steps}

Here's a summary of the build steps:

1. Solder components
   1. Solder diodes
   2. Solder resistors \(optional\)
   3. Solder push button
   4. Solder Pro Micro header pins
2. Add 2u stabilizers
3. Solder switches
4. Flash Pro Micros
5. Solder Pro Micros
6. Solder RGB strip \(optional\)

## Soldering the Components

Bare PCB, older version \(1.1\) that only has 1 2u slot, but the same as the current version otherwise: ![](http://i.imgur.com/UnRgaYM.jpg)

Solder on the TRRS jack, diodes, and resistors \(optional\). The resistors for I2C only need to be soldered on one half of the board:![](http://i.imgur.com/UVY8ShN.jpg)

The line on the diodes should face the square pad:![](http://i.imgur.com/khwqsVL.jpg)

Soldering of diodes complete:![](http://i.imgur.com/PxDnA8H.jpg)

\(Rev. 1.0 to 1.3 only\) Solder the TRRS jumpers on the side with the jack:

**Starting with Rev. 1.4**, the TRRS jack has been changed to a slimmer one and the PCB has been designed to not need TRRS jumpers, making the build easier. There are no solder jumpers anymore.![](http://i.imgur.com/6AIYGB1.jpg)

![](http://i.imgur.com/6AIYGB1.jpg)

![](http://i.imgur.com/6AIYGB1.jpg)

![](http://i.imgur.com/6AIYGB1.jpg)

Make sure the jumpers on the side without the jack are not soldered:![](http://i.imgur.com/CpzkAcz.jpg)

If doing I2C, solder the I2C jumper:![](http://i.imgur.com/B9iE9mS.jpg)

Solder in the Pro Micro header pins. The header pins are flipped upside down here to make removing the plastic a lot easier:![](http://i.imgur.com/3Ncr2Zr.jpg)

Plastic removed from the header pins to make everything as low profiles as possible:![](http://i.imgur.com/kVvdj6B.jpg)

Solder on the right-angle reset pushbutton:![](http://i.imgur.com/qSDyQE9.jpg)

Finished halves:![](http://i.imgur.com/q0zkbeV.jpg)

## Add 2u stabilizers \(optional\)

If you are doing 2u keys with stabilizers, install the stabilizers now. Make sure the bottom of the stabilizer snaps into the PCB.

## Add switches

Work in progress...

If using Alps switches, you will need to modify the two switches that will sit on top of the Pro Micro, since the width of the switch will touch the header pins of the Pro Micro.To modify the switches, you will have to shave off about 1-2mm on each side of the switch. \(TODO: add picture here\).


## Add the Pro Micros \(make sure you do this last!\)

Work in progress...![](https://i.imgur.com/Cz00HJX.jpg)


## Solder RGB strip \(optional\)

Refer to the [Adding RGB Underglow](adding-rgb-underglow.md) Guide for steps to install the RGB light strip.
