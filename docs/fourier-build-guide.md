---
title: Fourier
---

## Parts List

Here's a list of parts needed for the build:

* 1 [Fourier PCB Kit](https://keeb.io/collections/split-keyboard-parts/products/fourier-40-split-staggered-keyboard)
  * 2 Reset Switches \(included in kit\)
  * 2 4.7kΩ resistors \(included in kit\)
  * 2 TRRS Jacks \(included in kit\)
  * 47 1N4148 diodes - through hole \(included in kit\) and [SMD diodes](https://keeb.io/products/1n4148-diodes) supported

* 1 [Fourier Case Plates](https://keeb.io/collections/frontpage/products/fourier-keyboard-case-plates)
  * 28 M2 6mm screws \(included with plates\)
  * 14 M2 10mm standoffs \(included with plates\)
  
* 2 [Arduino Pro Micros](https://keeb.io/products/pro-micro-5v-16mhz-arduino-compatible-atmega32u4)
* 1 [TRRS Cable](https://keeb.io/collections/frontpage/products/trrs-cable?variant=8131954704490)
* 1 Micro USB Cable
* [PCB-mount MX stabilizers](https://keeb.io/collections/frontpage/products/cherry-mx-stabilizer?variant=43449871046)
* MX or Alps compatible keyswitches
* [WS2812B Compatible RGB LED strip](https://keeb.io/collections/frontpage/products/rgb-led-strips-sk6812-ws2812b-compatible) \(optional, for underglow\)

## Build Steps

1. Prepare components
2. Solder components
    * Solder diodes
    * Solder push button
    * Solder 4.7kΩ resistors \(optional\)
    * Solder Pro Micro header pins
3. Solder switches
4. Flash Pro Micro
5. Solder Pro Micro
6. Solder RGB strip \(optional\)

## Prepare Components

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/6YMFVgg.jpg)

Grab your PCBs. Pictured bottoms up -- left is on the left, right is on the right.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/rrey3ej.jpg)


If you're using through hole diodes, bend 'em up. Here, I'm just bending it around my finger

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/sKo655O.jpg)


Another way to do it, resistors shown here

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/2D39Ojx.jpg)


Strip of diodes bent

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/Ys0X30w.jpg)


Ripping off the paper holding all the resistors together. Grip the diodes tightly so they don't bend as you're ripping the paper off.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/4cFrb2D.jpg)


All separated from the paper

## Solder Components

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/E6WgUsd.jpg)

Install the diodes. SMD diodes are being used here, since they're a lot faster for me to install. The orientation of all the diodes are the same, they are vertically oriented, with the band on the diodes facing towards the bottom, square pad.

SMD diodes have a white band as shown in this picture, through-hole diodes will have a black band.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/OQBgyna.jpg)

All the diodes installed on the left PCB.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/AUPBgyO.jpg)

Another close up of the diodes so you can be the bands.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/P0xUZWc.jpg)

Install the I2C resistors (optional), the TRRS jack, and reset switch.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/Nw9aKdz.jpg)

Repeat the same process with the diodes, TRRS jack, and reset switch with the right half. Note that there's no I2C resistor slots on this side, as they're only needed on one half.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/AiDoJdn.jpg)

Solder on the header pins for the Pro Micro.

First technique: Put on first row of header pins and solder one pin. Then check to see if it's aligned properly before soldering the rest of the row.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/LKaHUuV.jpg)

Alignment after first row is good, solder the rest of the pins.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/NvHFYqh.jpg)
1

Same thing with the other row of header pins, solder one pin first, check alignment, then solder the rest.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/62jgd90.jpg)

Second technique for soldering header pins on: Tape row of pins so they stay in place while you solder them in.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/tRwjwFZ.jpg)

Repeat for the other row of pins.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/nU47rLi.jpg)

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/FMhd0WO.jpg)

Due to the location of the stabilizers on the right half, the Pro Micro header pins needed to be situated a bit lower than usual. This interferes a bit with one of the switches, so the pins need to be trimmed down a bit on that side.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/JrxztrO.jpg)

Another view which shows the pins that will need to be trimmed down.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/JUJuRle.jpg)

Take a flush cutter to trim the pins down.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/IQnHd0Y.jpg)

All good now, the switch sits flat on the PCB.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/ORDwvw1.jpg)

Add stabilizers to the keys you want to stabilize.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/ysM9w7t.jpg)

Time to add the switches. Put a few switches into the corners of the switch plate and then attach the switches to the PCB. Make sure the switches are pushed all the way down onto the PCB.

Due to the multiple layout options, it may be helpful to put keycaps on the switches to make sure everything is in the correct slots.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/ZcmuoHR.jpg)

If you paid attention closely to the previous picture, the lower left switch was too close to the one to the right of it to properly do a 4x1u configuration on the bottom row. Turns out I forgot to expand the cutout width when I added support for that configuration. This has already been fixed in the next version of the plates.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/nOM9XWl.jpg)

All the switches installed and soldered in.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/kaxSMbD.jpg)

Time to install the Pro Micro now that the switches have been soldered in.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/Y8LYgMx.jpg)

To make sure that the switch pins don't touch the Pro Micro, clip them flush with the PCB.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/wD2B0Te.jpg)

Afterwards, add Kapton or electrical tape on top of it.

Now go flash your Pro Micro before installing it on the board. Better to find out if it's defective or not before it's soldered on.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/Zjbn2GT.jpg)

Place the Pro Micro on the header pins. On both PCBs, the component side of the Pro Micro will be hidden from you.

Don't install it backwards, it doesn't flip the layout or anything like that, it doesn't work in that way.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/g5XCCqr.jpg)

Repeat the process of stabilizer, switch, and Pro Micro installation on the right PCB.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/Qtoo3b9.jpg)

Once again, the component side of the Pro Micro will be hidden from you.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/DuXct1J.jpg)

Optional, add RGB strip. For the left half here's what to connect:
- RGB breakout goes to Din on strip
- VCC breakout goes to +5V on strip
- GND breakout goes to GND on strip
- Extra Data goes to Do/Dout on strip

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/cJ1Czig.jpg)

Pro Micro added to the right PCB. Here's what to connect for the right half:
- VCC breakout goes to +5V on strip
- GND breakout goes to GND on strip
- Extra Data goes to Din on strip
- RGB breakout remains empty for now

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/fourier/DIqF3bf.jpg)

Assemble the case by adding screws, standoffs, and bottom plates.
