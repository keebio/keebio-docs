# Quefrency Build Guide

## Parts List

Here's a list of parts needed for the build:

* 1 [Quefrency PCB Kit](https://keeb.io/collections/split-keyboard-parts/products/quefrency-60-65-split-staggered-keyboard)

  * 2 Reset Switches \(included in kit\)
  * 2 4.7kΩ resistors \(included in kit\)
  * 2 TRRS Jacks \(included in kit\)
  * 47 1N4148 diodes - through hole \(included in kit\) and [SMD diodes](https://keeb.io/products/1n4148-diodes) supported

* 1 [Quefrency Case Plates](https://keeb.io/collections/split-keyboard-parts/products/quefrency-60-65-split-staggered-keyboard)

  * 29 M2 6mm screws \(included with plates\)
  * 14 M2 10mm standoffs \(included with plates\)
  
* 2 [Arduino Pro Micros](https://keeb.io/products/pro-micro-5v-16mhz-arduino-compatible-atmega32u4)
* 1 [TRRS Cable](https://keeb.io/collections/frontpage/products/trrs-cable)
* 1 [Micro USB Cable](https://keeb.io/products/micro-usb-cable)
* [PCB-mount MX stabilizers (2u)](https://keeb.io/products/cherry-mx-stabilizer?variant=43449871046)
* MX or Alps compatible keyswitches
* [WS2812B Compatible RGB LED strip](https://keeb.io/collections/frontpage/products/rgb-led-strips-sk6812-ws2812b-compatible) \(optional, for underglow\)

!!! info "How many stabilizers do I need?"
    Depending on your chosen layout ([60%](http://www.keyboard-layout-editor.com/#/gists/bab126983802c185181a0d19226ebd39) or [65%](http://www.keyboard-layout-editor.com/#/gists/af508840e15315503bb5f74b986e433a)), you'll need a different amount of stabilizers.

    Any 2u key (or wider) will need a 2u stabilizer.

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

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/quefrency/x96LIyE.jpg)

Get your parts all set and make sure you have all the components.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/quefrency/h7aNdeq.jpg)

Make sure to let kitty know it's build time, if you don't she'll forget to disrupt you every step of the way.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/quefrency/NXZVbjx.jpg)

If you're using through hole diodes, bend 'em up. Here, I'm just bending it around my finger. Then tear the paper off carefully as not to bend them.


## Solder diodes, reset push buttons, TRRS jacks

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/quefrency/NgokqZH.jpg)

!!! info "It is recommended to install the diodes on the bottom of the PCB, instead of the top side as shown in these pictures"
    This way, if a diode goes bad, it's very simple to replace. If you choose to install them on the top, should any go bad, you will regret this, as you won't be able to replace the faulty component easily.

Insert the diodes. The orientation of all the diodes are the same, they are vertically oriented, with the band on the diodes facing towards the bottom, square pad.

Through-hole diodes will have a black band, SMD diodes have a white band.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/quefrency/XNP7s38.jpg)

All the diodes installed on the left PCB.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/quefrency/Ed8bK7H.jpg)

After installing the diodes, add your TRRS jacks and reset buttons.

## Solder I2C resistors \(optional\)

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/quefrency/Ed8bK7H.jpg)

Add your 4.7k ohm resistors for I2C on the left half. There are no resistors for the right half. Resistors also do not have a polarity, so the orientation doesn't matter when placing them.

!!! info "What the heck is I2C, and what do I need it for?"
    The default firmware uses serial communication between the two halves using a single pin of the TRRS cable. Serial communication only allow for communication between two parts, which is fine for almost all builds.

    However, in the future, there might be additional parts that you can add, like a numpad, OLED screen, etc. To support this, the communication protocol would need to be switched over I2C, which can support multiple devices. Additionally, the latency between halves is lower using the I2C protocol, which can help if you are a fast typer.
    
    To add support for I2C, all you need to do is add the 2 4.7kΩ resistors to one of the halves \(other half does not need them\). Also, it doesn't hurt to add these resistors if using serial communication.

    tl;dr: Adding this is optional, but you might as well do it as it's only 2 more components to solder.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/quefrency/cphn8ym.png)

Repeat the same process with the diodes, TRRS jack, and reset switch with the right half. Remember no I2C resistor slots on this side, as they're only needed on one half. Then, take a moment to pet kitty before she hates you for ignoring her.

## Solder Pro Micro header pins

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/quefrency/2Q538Hq.jpg)

Solder on the header pins for the Pro Micro.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/quefrency/Qh0KWho.jpg)

You can use the PM to get the alignment set, and/or tape it there to keep it from rocking to one side or the other, then solder the 4 corner pins on the top of the board. Do not solder the pro micro to the PCB.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/quefrency/p7CfEY9.jpg)

After the 4 corners are soldered in place, remove the PM. You don't want to space out and start soldering it to the pins, so just get it out of there.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/quefrency/V0mHYMG.jpg)

Finish soldering the remaining pins on each half, with the PM safely set aside.

## Add stabilizers

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/quefrency/dNWDczS.jpg)

Add stabilizers to the keys you want to stabilize.

!!! warning "Note for the 1.0 left PCB on clipping diode legs"
    For the Rev. 1.0 left PCB, one of the stabilizer mounts sits right next to a diode. If using through-hole diodes, make sure that the diode legs for spot shown below are clipped as flush as possible, so that the stabilizer can clip in correctly.

    This issue has been fixed on the 1.1 PCB.

    ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/quefrency/stab-diode-clip.jpg)

## Add switches

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/quefrency/bJlyXbw.jpg)

Time to add the switches. Put a few switches into the corners of the switch plate and then attach the switches to the PCB. Make sure the switches are pushed all the way down onto the PCB.

Due to the multiple layout options, it may be helpful to put keycaps on the switches to make sure everything is in the correct slots, however, the layout options are labelled on the topside of the PCB.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/quefrency/Rzx33qt.jpg)

All the switches installed and soldered in.

## Test/flash Pro Micro

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/quefrency/J5FGu3J.jpg)

Time to install the Pro Micro now that the switches have been soldered in.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/quefrency/LLAJ1tE.jpg)

[Flash those pro micros](flashing-firmware.md)! We want to be sure they work before we install them.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/quefrency/dYbFoZB.jpg)

To make sure that the switch pins don't touch the Pro Micro, clip them flush with the PCB. Afterwards, add Kapton or electrical tape on top of it.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/quefrency/9GeXjZC.jpg)

## Solder Pro Micros

Place the Pro Micro on the header pins. Match the PM pinouts to the pinouts on the PCB.

Don't install it backwards, it won't work that way, and there's no software solution to fix that.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/quefrency/AFBcIes.jpg)

Trim down the pins with a flush cutter after it's soldered, then repeat on the other half.

Not shown in these pictures, but add electrical tape or Kapton tape on top of the Pro Micros and TRRS jacks to prevent the metal portions of them from touching the bottom plate.

## Assemble case

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/quefrency/nwlfdoH.jpg)

Assemble the case by adding screws, standoffs, and bottom plates.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/quefrency/3y6AzeE.jpg)

If you have some bumpons, stick one on each corner. Repeat on the other half and that's it!

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/quefrency/cjNzAik.jpg)

If you haven't yet, slap some caps on your new board. Now clack away!
