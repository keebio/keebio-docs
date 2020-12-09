---
title: Levinson Rev. 3
---

## Parts List

Here's a list of parts needed for the build:

- [Set of Levinson Rev. 3 PCBs](https://keeb.io/products/levinson-lets-split-w-led-backlight)
- [Levinson Case/Plates](https://keeb.io/products/levinson-keyboard-case-plates)
- 1 [TRRS cable](https://keeb.io/products/trrs-cable)
- 46-48 switches (MX-compatible, Alps, and Choc switches are supported)
- Optional parts \(_not shown_\)
  - [2u PCB mount MX stabilizers](https://keeb.io/products/cherry-mx-stabilizer) if using 2u keys
  - [Levinson Middle Layer](https://keeb.io/products/levinson-keyboard-case-plates?variant=2150275579934)

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3701.JPG)

## Build Steps

Here's a summary of the build steps:

1. Prepare components
2. Solder components
   1. Solder diodes
   2. Solder push button and TRRS jack
   3. Solder I2C resistors \(optional\)
   4. Solder LED components \(transistor and resistors\) \(optional\)
   5. Solder Pro Micro header pins
3. Add 2u stabilizers to PCB \(optional\)
4. Add switches to switch plate
5. Solder switches
6. Solder in-switch LEDs \(optional\)
   - Note: For Choc switches or Kailh Box switches, LEDs must be installed before the switches.
7. Flash Pro Micros
8. Solder Pro Micros
9. Solder RGB strip \(optional\)
10. Assemble case
11. Insert standoffs into middle layer \(optional\)
12. Screw standoffs into switch plate
13. Attach bottom plate using screws

## Prepare components

Bend the diodes, first technique, bend them around your finger:

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/iris-rev2/rrey3ej.jpg)

Second technique for bending diodes is to do it around a stack of plates:

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/iris-rev2/sKo655O.jpg)

Strip of diodes bent now:

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/iris-rev2/2D39Ojx.jpg)

Ripping off the paper holding all the resistors together. Grip the diodes tightly so they don't bend as you're ripping the paper off.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/iris-rev2/Ys0X30w.jpg)

All separated from the paper, ready for insertion into PCB:

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/iris-rev2/4cFrb2D.jpg)

## Solder Components

The diodes, resistors, transistors, push buttons, TRRS jacks, and Pro Micro header pins can be soldered in any order.

### Add diodes

On the bottom side of the PCB, insert diodes with the black line towards the bottom. Square = Black line. All of the diodes are oriented vertically on the PCB:![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3707.JPG)

Sticking the diodes on the top side of the PCB is not recommended, because you can't replace them once everything is assembled using that method.

Bend the legs out to hold the diodes in place for when you solder them in:![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3708.JPG)

Clip the diode legs off:![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3709.JPG)

### Add I2C resistors \(optional\)

Add the I2C resistors to the left PCB, orientation does not matter for resistors: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3711.JPG)

### Add TRRS jack and reset button

Add the TRRS jack and reset button to the PCB: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3712.JPG)

Solder reset button: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3713.JPG)

Solder TRRS jack: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3714.JPG)

### Add LED support components \(optional\)

Add a 4.7kΩ resistor for LED support in the RQ1 slot: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3715.JPG)

To add the transistor, tin one of the pins on the PCB first: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3716.JPG)

Hold the transistor with a pair of tweezers and align it over the footprint. Then solder the first pin: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3717.JPG)

Check the alignment of the transistor: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3718.JPG)

Once you're satisfied with the alignment, solder the other 2 pins: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3719.JPG)

Add 470Ω resistors for LEDs. Resistors don't have polarity, so orientation doesn't matter: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3720.JPG)

Resistors all added: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3723.JPG)

### Add Pro Micro header pins

#### Standard installation of Pro Micro with header pins

Insert the header pins into the left PCB: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3724.JPG)

Insert the header pins into the right PCB: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3725.JPG)

\(Optional\) Remove plastic on header pins so Pro Micro port is flush with PCB: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3748.JPG)

\(Optional\) Plastic all removed: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3749.JPG)

Don't solder on the Pro Micro yet.

#### Installation of Peel-A-Way sockets \(optional\)

If using Peel-A-Way sockets instead, insert strips into the PCB: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3727.JPG)

Hold the strips down using tape: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3728.JPG)

Flip the PCB over and solder the pins: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3729.JPG)

Soldering complete: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3731.JPG)

Remove plastic covering around sockets: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3732.JPG)

## Add 2u stabilizers to PCB \(optional\)

Add the 2u stabilizer if desired. Do this before installing the switch plate and switches: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3710.JPG)

## Add switches to switch plate and solder

:::caution For Kailh Box and Kailh Choc Switches - Install LEDs before this step
For Kailh Box and Kailh Choc switches, there is no cutout to insert in-switch LEDs through, so the LEDs must be added first. Skip to the LED installation step and then come back to this step of switch installation.
:::

Add switches into the switch plate. It's a good idea to add switches to the corners first and then solder them before installing the rest of them: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3738.JPG)

Fit the switches and plate onto the PCB: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3739.JPG)

Solder the switches onto the PCB: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3740.JPG)

Add the rest of the switches and solder: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3741.JPG)

## Solder in-switch LEDs \(optional\)

Polarity of the in-switch LEDs is important. Match up the longer leg of the LED to the + sign of the LED pins on the PCB: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3742.JPG)

Bend the LED legs out so it doesn't fall out while soldering the LED in: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3743.JPG)

Solder the LED legs and then clip the excess length on the legs: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3744.JPG)

## Flash Pro Micros

Flash both of the Pro Micros before soldering them to the board to ensure that they work properly.

## Solder Pro Micros

### Standard Installation

Clip the switch pins of the 2 switches that the Pro Micro will sit on and add some tape: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3753.JPG)

Place Pro Micro onto the header pins: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3754.JPG)

Solder the header pins to the Pro Micro and clip: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3745.JPG)

Do the same for the other half: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3757.JPG)

Add tape on top of the Pro Micros to prevent them from touching the bottom plate (important for metallic plates): ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3760.JPG)

### Installation with Peel-A-Way sockets \(optional\)

If you added Peel-A-Way sockets to the PCB, begin by overlaying the Pro Micro above the sockets and inserting clipped diode legs into the sockets: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3733.JPG)

Start by soldering one corner first and checking alignment: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3734.JPG)

Do the other corners: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3735.JPG)

Insert diode legs into the rest of the sockets, then solder and clip: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3736.JPG)

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3737.JPG)

## Solder RGB strip \(Optional\)

See the [Adding RGB Underglow Guide](adding-rgb-underglow.md)

: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3758.JPG)

## Assemble case

Insert the screws through the top of the switch plate and attach standoffs from the bottom side of the plate: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3761.JPG)

(Optional) If you have a acrylic middle layer, insert it now around the standoffs: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3762.JPG)

Put bottom plate on and add screws: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3763.JPG)

You did it!: ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/levinson-rev3/IMG_3764.JPG)
