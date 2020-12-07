---
title: BDN9 Rev. 1
---

## Parts List

Here's a list of parts needed for the build:

* 1 [BDN9 PCB & Bottom PCB Plate with M2 screws and standoffs](https://keeb.io/products/bdn9-3x3-9-key-macropad-rotary-encoder-support)
* 1 Reset Switch
* 10 470Ω resistors \(optional, for LED backlight\)
* 1 AO3416 MOSFET \(optional, for LED control\)
* 9 LEDs \(optional, for LED backlight\)
* WS2812B RGB LED strip or 4 loose WS2812B RGB LEDs \(optional, for underglow\)
* 1 Microcontroller (1 of the following)
    * [Arduino Pro Micro](https://keeb.io/products/pro-micro-5v-16mhz-arduino-compatible-atmega32u4)
    * [Elite-C](https://keeb.io/products/elite-c-usb-c-pro-micro-replacement-arduino-compatible-atmega32u4)
    * [Proton C](https://keeb.io/products/qmk-proton-c)
* 7-9 MX-compatible, Alps-compatible, or Choc switches
* Up to 3 [EC11 or EC12 Rotary Encoders](https://keeb.io/products/rotary-encoder-ec11) \(optional)

## Video of Build

Here's a build video someone has created:

* [BDN9 Build Guide](https://youtu.be/C8SqN7PSAs4)

## Build Steps

Here's a summary of the build steps:

1. Prepare components
2. Solder components
    1. Solder resistors \(for LEDs, optional\)
    2. Solder MOSFET \(for LEDs, optional\)
    3. Solder push button
    4. Solder Pro Micro header pins
3. Solder rotary encoders
4. Solder switches
5. Solder LEDs \(optional\)
6. Flash Pro Micro
7. Solder Pro Micro
8. Solder RGB underglow LEDs or strip \(optional\)
9. Assemble case

## Prepare components

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9-rev1.3/IMG_9192.jpg)

Parts from the kit.

## Solder Components

### Solder resistors \(optional\)

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9-rev1.3/IMG_9199.jpg)

Insert all of the resistors into the PCB and solder them in. Resistors don't have polarity, so orientation doesn't matter.

Note: The resistor 'R1' can interfere with the placement of the switches on the other side if the leads poke through the PCB. Solder the resistor's leads on the same side the resistor is on and then trim the leads flush with the PCB on the other side.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9-rev1.3/IMG_9200.jpg)

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9-rev1.3/IMG_9201.jpg)

### Solder the MOSFET \(optional\)

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9-rev1.3/IMG_9193.jpg)

Add a bit of solder to one leg of the MOSFET pad Q1.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9-rev1.3/IMG_9194.jpg)

Using a pair of tweezers to hold the MOSFET, solder one leg of the MOSFET first, and make sure it is aligned properly before proceeding.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9-rev1.3/IMG_9195.jpg)
 
Now that the MOSFET is soldered on straight, solder the other two legs.

### Solder the reset button

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9-rev1.3/IMG_9196.jpg)

Add a bit of solder to one pad of the reset switch location on the PCB.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9-rev1.3/IMG_9197.jpg)

Add the reset button to the bottom side of the PCB and solder the first leg.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9-rev1.3/IMG_9198.jpg)

Once the first leg is aligned correctly, solder the other three legs of the reset switch.

### Solder Pro Micro header pins

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9-rev1.3/IMG_9202.jpg)

Insert the header pins into the PCB. Due to the stagger of the header pin holes, they should be able to stand up on their own once inserted. You can go with not soldering the header pins in, but it is recommended to do so anyway for a more secure fit and leaving it unsoldered is a bit more unreliable.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/rurIIHH.jpeg)

(Optional) An alternative method for soldering in the header pins is shown above. Flip the header pins upside down and solder them in. Then remove the plastic on the header pins by prying it off. The benefit of doing this method is that the Pro Micro Micro-USB port will be flush against the PCB, which helps from getting it ripped off.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9-rev1.3/IMG_9203.jpg)

Solder the header pins to the PCB.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/17HrSn2.jpeg)

(Optional) Remove plastic from header pins

## Solder Rotary Encoders

:::info Rotary encoders must be soldered on before switches are added
It is difficult to put in the rotary encoders into the PCB pads if the switch plate and switches are already on, so make sure you add the encoders first.
:::

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9-rev1.3/IMG_9234.jpg)

Insert the rotary encoders from the top-side of the PCB.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9-rev1.3/IMG_9235.jpg)

Solder the rotary encoders in.

:::caution If using Choc low-profile switches, double check/add Kapton tape to solder/metal connections on top of the PCB
When using Choc low-profile switches, there is very little clearance between the switch plate and the top of the PCB. Any exposed metal/solder can cause a short if it touches the switch plate, so before you add the switches to the plate and solder them to the PCB, it's advised that you double check that all solder joints on the top of the PCB are cut flush. Alternatively, you can add Kapton tape to any that are raised. It doesn't hurt to add Kapton tape to the encoder legs as well.
:::

## Solder Switches

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9-rev1.3/IMG_9204.jpg)

Add the switches to the switch plate.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9-rev1.3/IMG_9236.jpg)

Then, place it on top of the PCB and make sure all the switches are seated firmly into the PCB.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9-rev1.3/IMG_9237.jpg)

Solder the switches onto the PCB.

## Solder LEDs \(optional\)

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9-rev1.3/IMG_9238.jpg)

Add LEDs through the switch. The longer leg of the LED (anode) should go through the circular pad, while the shorter leg (cathode) goes through the square pad.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9-rev1.3/IMG_9239.jpg)

Bend the legs of the LEDs outwards a bit to hold them in place.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9-rev1.3/IMG_9240.jpg)

Solder the the LEDs in. Then clip the legs down.

## Flash Pro Micro

See [Flashing Firmware](flashing-firmware.md) for instructions on flashing the Pro Micro if you are unfamiliar with this step.

## Prepare and solder the Pro Micro

Clip the switch legs and plastic pieces of the 2 switches that sit on top of the Pro Micro, so they don't interfere with the Pro Micro.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9-rev1.3/IMG_9241.jpg)

Then put some electrical or Kapton tape on top of the area the Pro Micro will be.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9-rev1.3/IMG_9242.jpg)

Insert Pro Micro over the header pins.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9-rev1.3/IMG_9243.jpg)

Add solder to two opposite corners of the Pro Micro and make sure the controller is aligned properly and is level.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9-rev1.3/IMG_9244.jpg)

Solder the reset of the pins and clip the legs off.

## Solder RGB underglow LEDs or strip \(optional\)

:::info RGB LED pads
The BDN9 Rev. 1.0 only has three breakout pads (RGB, GND, and VCC) to solder an RGB LED strip to.
    
The BDN9 Rev. 1.1 has RGB LED pads add another option for adding RGB underglow. Only strips or individual LEDs can be added to this boards (don't do both at the same time).
:::

### Add RGB LED Strip \(optional\)

If using an RGB LED strip, see the [Adding RGB Underglow](/adding-rgb-underglow) guide.

### Add individual RGB LEDs \(optional\)

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/ZqjaJRC.jpeg)

WS2812B or SK6812 RGB LEDs can be added individually to the board.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9-rev1.3/IMG_9245.jpg)

Add solder to one pad of each LED footprint.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9-rev1.3/IMG_9292.jpg)

Using a pair of tweezers, hold each LED in place and solder it in.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/led-notches.jpg)

Note: Before soldering ensure each LED is properly aligned, with the corner notch on the top-right pad.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9-rev1.3/IMG_9294.jpg)

Once the LEDs are aligned properly, solder the other 3 pads. Make sure each pad of the LED has enough solder on it.

## Assemble Case

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9-rev1.3/IMG_9246.jpg) 

Screw in the standoffs to the switch plate at all four corners.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9-rev1.3/IMG_9295.jpg)

Add the bottom plate and screw it in.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9-rev1.3/IMG_9296.jpg)

Plug it in and test. For the RGB underglow, the mode is controlled by the right-most key in the middle row. If the RGB LEDs don't light up, check your wiring or make sure the pads have enough solder.
