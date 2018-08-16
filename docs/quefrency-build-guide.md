# Quefrency Build Guide

## Parts List

Here's a list of parts needed for the build:

* 1 [Quefrency PCB Kit](https://keeb.io/collections/split-keyboard-parts/products/quefrency-60-split-staggered-keyboard)
  * 2 Reset Switches \(included in kit\)
  * 2 4.7kΩ resistors \(included in kit\)
  * 2 TRRS Jacks \(included in kit\)
  * 47 1N4148 diodes - through hole \(included in kit\) and [SMD diodes](https://keeb.io/products/1n4148-diodes) supported

* 1 [Quefrency Case Plates](https://keeb.io/collections/split-keyboard-parts/products/quefrency-60-split-staggered-keyboard)
  * 29 M2 6mm screws \(included with plates\)
  * 14 M2 10mm standoffs \(included with plates\)
  
* 2 [Arduino Pro Micros](https://keeb.io/products/pro-micro-5v-16mhz-arduino-compatible-atmega32u4)
* 1 TRRS Cable()
* 1 Micro USB Cable()
* PCB-mount MX stabilizers()
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

![](assets/images/quefrency/x96LIyE.jpg)

Get your parts all set and make sure you have all the components.

![](assets/images/quefrency/h7aNdeq.jpg)

Make sure to let kitty know it's build time, if you don't she'll forget to disrupt you every step of the way.

![](assets/images/quefrency/NXZVbjx.jpg)

If you're using through hole diodes, bend 'em up. Here, I'm just bending it around my finger. Then tear the paper off carefully as not to bend them.

![](assets/images/quefrency/NgokqZH.jpg)

Insert the diodes. The orientation of all the diodes are the same, they are vertically oriented, with the band on the diodes facing towards the bottom, square pad.

Through-hole diodes will have a black band, SMD diodes have a white band.

**Note**bakingpy suggests always installing the diodes on the bottom of the PCB. This way, if a diode goes bad, it's very simple to replace. If you choose to install them on the top, should any go bad, you will regret this. I've done it before, I hope never to do it again, yet I put them topside for some reason. Don't be me, listen to bakingpy's advice!

![](assets/images/quefrency/XNP7s38.jpg)

All the diodes installed on the left PCB.

![](assets/images/quefrency/Ed8bK7H.jpg)

After installing the diodes, add your TRRS jacks and reset buttons.

![]assets/images/quefrency/Ed8bK7H.jpg)

Add your 4.7k ohm resistors for i2c on the left half(optional). There are no resistors for the right half. Resistors also do not have a polarity, so the orientation doesn't matter when placing them.

![](assets/images/quefrency/cphn8ym.png)

Repeat the same process with the diodes, TRRS jack, and reset switch with the right half. Remember no I2C resistor slots on this side, as they're only needed on one half. Then, take a moment to pet kitty before she hates you for ignoring her.

## Solder Components

![](assets/images/quefrency/2Q538Hq.jpg)

Solder on the header pins for the Pro Micro.

![](assets/images/quefrency/Qh0KWho.jpg)

You can use the PM to get the alignment set, and\/\or tape it there to keep it from rocking to one side or the other, then solder the 4 corner pins on the top of the board. Do not solder the pro micro to the PCB.

![](assets/images/quefrency/p7CfEY9.jpg)

After the 4 corners are soldered in place, remove the PM. You don't want to space out and start soldering it to the pins, so just get it out of there.

![](assets/images/quefrency/V0mHYMG.jpg)

Finish soldering the remaining pins on each half, with the PM safely set aside.

![](assets/images/quefrency/dNWDczS.jpg)

Add stabilizers to the keys you want to stabilize.

![](assets/images/quefrency/bJlyXbw.jpg)

Time to add the switches. Put a few switches into the corners of the switch plate and then attach the switches to the PCB. Make sure the switches are pushed all the way down onto the PCB.



Due to the multiple layout options, it may be helpful to put keycaps on the switches to make sure everything is in the correct slots, however, the layout options are labelled on the topside of the PCB.

![](assets/images/quefrency/Rzx33qt.jpg)

All the switches installed and soldered in.

![](assets/images/quefrency/J5FGu3J.jpg)

Time to install the Pro Micro now that the switches have been soldered in.

![](assets/images/quefrency/LLAJ1tE.jpg)

Flash those pro micros! We want to be sure they work before we install them.

![](assets/images/quefrency/dYbFoZB.jpg)

To make sure that the switch pins don't touch the Pro Micro, clip them flush with the PCB. Afterwards, add Kapton or electrical tape on top of it.

![](assets/images/quefrency/9GeXjZC.jpg)

Place the Pro Micro on the header pins. Match the PM pinouts to the pinouts on the PCB.

Don't install it backwards, it may damage the pro micro.

![](assets/images/quefrency/AFBcIes.jpg)

Trim down the pins with a flush cutter after it's soldered, then repeat on the other half.

![](assets/images/quefrency/nwlfdoH.jpg)

Assemble the case by adding screws, standoffs, and bottom plates.

![](assets/images/quefrency/3y6AzeE.jpg)

If you have some bumpons, stick one on each corner. Repeat on the other half and that's it!

![](assets/images/quefrency/cjNzAik.jpg)

If you haven't yet, slap some caps on your new board. Now clack away!
