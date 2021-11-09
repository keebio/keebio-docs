---
title: BFO-9000
---

## Parts List

Here's a list of parts needed for the build:

- [Set of BFO-9000 PCBs](https://keeb.io/products/bfo-9000-keyboard-customizable-full-size-split-ortholinear)
- [BFO-9000 Plates](https://keeb.io/products/bfo-9000-keyboard-customizable-full-size-split-ortholinear)
- 1 [TRRS cable](https://keeb.io/products/trrs-cable)
- 2 Pro Micro-compatible Microcontrollers (you may mix-and-match controllers)
  - [Arduino Pro Micro](https://keeb.io/products/pro-micro-5v-16mhz-arduino-compatible-atmega32u4)
  - [Elite-C](https://keeb.io/products/elite-c-low-profile-version-usb-c-pro-micro-replacement-atmega32u4)
- Up to 108 switches (MX-compatible, Alps, and Choc switches are supported)

![](./assets/images/bfo-9000/IMG_6032.jpg)

## Build Steps

Here's a summary of the build steps:

1. Prepare components
2. Solder components
   1. Solder diodes
   3. Solder I2C resistors \(optional\)
   2. Solder push button and TRRS jack
   4. Solder Pro Micro header pins
3. Add switches to switch plate
4. Solder switches
5. Flash Pro Micros
6. Solder Pro Micros
7. Solder RGB strip \(optional\)
8. Assemble case
9. Insert standoffs into middle layer \(optional\)
10. Screw standoffs into switch plate
11. Attach bottom plate using screws

## Prepare components

Bend the diodes, first technique, bend them around your finger:

![](./assets/images/iris-rev2/rrey3ej.jpg)

Second technique for bending diodes is to do it around a stack of plates:

![](./assets/images/bfo-9000/IMG_6034.jpg)

Strip of diodes bent now:

![](./assets/images/iris-rev2/2D39Ojx.jpg)

Ripping off the paper holding all the resistors together. Grip the diodes tightly so they don't bend as you're ripping the paper off.

![](./assets/images/iris-rev2/Ys0X30w.jpg)

All separated from the paper, ready for insertion into PCB:

![](./assets/images/iris-rev2/4cFrb2D.jpg)

## Solder Components

The diodes, resistors, push buttons, TRRS jacks, and Pro Micro header pins can be soldered in any order.

Note that the two halves of the PCBs are identical. The only difference for each half is that you will place the TRRS jacks in different locations (towards the middle of the board).

### Add diodes

On the bottom side of the PCB, insert diodes with the black line towards the bottom. Square = Black line. All of the diodes are oriented vertically on the PCB:

![](./assets/images/bfo-9000/IMG_6037.jpg)

Sticking the diodes on the top side of the PCB is not recommended, because you can't replace them once everything is assembled using that method.

Bend the legs out to hold the diodes in place for when you solder them in:

![](./assets/images/bfo-9000/IMG_6038.jpg)

Solder the diodes and clip the diode legs off:

![](./assets/images/bfo-9000/IMG_6039.jpg)

### Add I2C resistors \(optional\)

Add the I2C resistors to the left PCB, orientation does not matter for resistors:

![](./assets/images/bfo-9000/IMG_6040.jpg)

### Add TRRS jack and reset button

Add the reset button to the PCB:

![](./assets/images/bfo-9000/IMG_6041.jpg)

Flip the board over and solder reset button:

![](./assets/images/bfo-9000/IMG_6042.jpg)

Add the reset button to the other half and repeat:

![](./assets/images/bfo-9000/IMG_6043.jpg)

Solder the TRRS jack for the left half away from the reset switch, and solder the TRRS jack for the right half next to the reset switch:

![](./assets/images/bfo-9000/IMG_6044.jpg)

### Add Pro Micro header pins

#### Standard installation of Pro Micro with header pins

Insert the header pins into both PCBs:

![](./assets/images/bfo-9000/IMG_6045.jpg)

Flip the PCBs over and solder:

![](./assets/images/bfo-9000/IMG_6046.jpg)

\(Optional\) Remove plastic on header pins so Pro Micro port is flush with PCB:

![](./assets/images/levinson-rev3/IMG_3748.JPG)

\(Optional\) Plastic all removed:

![](./assets/images/levinson-rev3/IMG_3749.JPG)

Don't solder on the Pro Micro yet.

#### Installation of Peel-A-Way sockets \(optional\)

If using Peel-A-Way sockets instead, insert strips into the PCB:

![](./assets/images/levinson-rev3/IMG_3727.JPG)

Hold the strips down using tape:

![](./assets/images/levinson-rev3/IMG_3728.JPG)

Flip the PCB over and solder the pins:

![](./assets/images/levinson-rev3/IMG_3729.JPG)

Soldering complete:

![](./assets/images/levinson-rev3/IMG_3731.JPG)

Remove plastic covering around sockets:

![](./assets/images/levinson-rev3/IMG_3732.JPG)

## Add switches to switch plate and solder

Add switches into the switch plate. It's a good idea to add switches to the corners first and then solder them before installing the rest of them:

![](./assets/images/bfo-9000/IMG_6047.jpg)

Add the rest of the switches:

![](./assets/images/bfo-9000/IMG_6048.jpg)

Solder the rest of the switches:

![](./assets/images/bfo-9000/IMG_6049.jpg)

## Flash Pro Micros

Flash both of the Pro Micros before soldering them to the board to ensure that they work properly.

## Solder Pro Micros

### Standard Installation

Clip the switch pins of the switches that will be covered up by the controller, so the pin don't come in contact with the controller:

![](./assets/images/bfo-9000/IMG_6050.jpg)

Add a piece of electrical tape on top of the clipped pins:

![](./assets/images/bfo-9000/IMG_6051.jpg)

Place Pro Micro onto the header pins:

![](./assets/images/bfo-9000/IMG_6052.jpg)

Solder the header pins to the Pro Micro:

![](./assets/images/bfo-9000/IMG_6053.jpg)

Clip the excess length of the pins:

![](./assets/images/bfo-9000/IMG_6054.jpg)

All clean, now do the same for the other half.

![](./assets/images/bfo-9000/IMG_6055.jpg)

Add tape on top of the Pro Micros to prevent them from touching the bottom plate:

![](./assets/images/bfo-9000/IMG_6056.jpg)

## Solder RGB strip \(Optional\)

See the [Adding RGB Underglow Guide](adding-rgb-underglow.md):

## Assemble case

Insert the screws through the top of the switch plate and attach standoffs from the bottom side of the plate:

![](./assets/images/bfo-9000/IMG_6057.jpg)

Put bottom plate on and add screws:

![](./assets/images/bfo-9000/IMG_6058.jpg)

You did it!:

![](./assets/images/bfo-9000/IMG_6059.jpg)
