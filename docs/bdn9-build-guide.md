# BDN9 Build Guide

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
* 7-9 MX-compatible or Alps-compatible switches
* 2 [EC11 or EC12 Rotary Encoders](https://keeb.io/products/rotary-encoder-ec11) \(optional)

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

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/cwCKJL2.jpeg)

Parts from the kit. The encoders shown are optional and are not included as part of the kit.

## Solder Components

### Solder resistors \(optional\)

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/BMyPYRZ.jpeg)

Insert all of the resistors into the PCB and solder them in. Resistors don't have polarity, so orientation doesn't matter.

Note: The resistor 'R1' can interfere with the placement of the switches on the other side if the leads poke through the PCB. Solder the resistor's leads on the same side the resistor is on and then trim the leads flush with the PCB on the other side.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/resistor-r1.jpg)

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/resistor-leads.jpg)

### Solder the MOSFET \(optional\)

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/F68sg1h.jpeg)

Add a bit of solder to one leg of the MOSFET pad Q1.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/qFuUi6O.jpeg)

Using a pair of tweezers to hold the MOSFET, solder one leg of the MOSFET first, and make sure it is aligned properly before proceeding.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/It0xzmD.jpeg)
 
Now that the MOSFET is soldered on straight, solder the other two legs.

### Solder the reset button

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/DonYdta.jpeg)

Add the reset button to the bottom side of the PCB and solder.

### Solder Pro Micro header pins

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/hAyat56.jpeg)

Insert the header pins into the PCB. Due to the stagger of the header pin holes, they should be able to stand up on their own once inserted. You can go with not soldering the header pins in, but it is recommended to do so anyway for a more secure fit.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/rurIIHH.jpeg)

(Optional) An alternative method for soldering in the header pins is shown above. Flip the header pins upside down and solder them in. Then remove the plastic on the header pins by prying it off. The benefit of doing this method is that the Pro Micro Micro-USB port will be flush against the PCB, which helps from getting it ripped off.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/kPCbZMO.jpeg)

Solder the header pins to the PCB.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/17HrSn2.jpeg)

(Optional) Remove plastic from header pins

## Solder Rotary Encoders

!!! warning "Rotary encoders must be soldered on before switches are added"

    It is difficult to put in the rotary encoders into the PCB pads if the switch plate and switches are already on, so make sure you add the encoders first.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/nhXXWac.jpeg)

Insert the rotary encoders from the top-side of the PCB.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/5BKTw9W.jpeg)

Solder them in. Soldering in the side-clips of the encoders is optional, but recommended.

!!! warning "If using Choc low-profile switches, double check/add Kapton tape to solder/metal connections on top of the PCB"
   When using Choc low-profile switches, there is very little clearance between the switch plate and the top of the PCB. Any exposed metal/solder can cause a short if it touches the switch plate, so before you add the switches to the plate and solder them to the PCB, it's advised that you double check that all solder joints on the top of the PCB are cut flush. Alternatively, you can add Kapton tape to any that are raised. It doesn't hurt to add Kapton tape to the encoder legs as well.  

## Solder Switches

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/cKMXmXM.jpeg)

Add the switches to the switch plate and then place it on top of the PCB.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/QHaeyRN.jpeg)

Solder the switches onto the PCB.

## Solder LEDs \(optional\)

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/Ub5WBFn.jpeg)

Add LEDs through the switch. The longer leg of the LED (anode) should go through the circular pad, while the shorter leg (cathode) goes through the square pad.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/OidJRMM.jpeg)

Bend the legs of the LEDs outwards a bit to hold them in place and solder them in. Then clip the legs down.

## Flash Pro Micro

See [Flashing Firmware](flashing-firmware.md) for instructions on flashing the Pro Micro if you are unfamiliar with this step.

## Prepare and solder the Pro Micro

Clip the switch legs and plastic pieces of the 2 switches that sit on top of the Pro Micro, so they don't interfere with the Pro Micro.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/Rtlna8B.jpeg)

Then put some electrical or Kapton tape on top of the area the Pro Micro will be.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/oRuY7ZP.jpeg)

Insert Pro Micro over the header pins.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/et1rVfF.jpeg)

Solder the pins and clips the legs off.

## Solder RGB underglow LEDs or strip \(optional\)

!!! info "RGB LED pads"

    The BDN9 Rev. 1.0 only has three breakout pads (RGB, GND, and VCC) to solder an RGB LED strip to.
    
    The BDN9 Rev. 1.1 has RGB LED pads add another option for adding RGB underglow. Only strips or individual LEDs can be added to this boards (don't do both at the same time).

### Add RGB LED Strip \(optional\)

If using an RGB LED strip, see the [Adding RGB Underglow](adding-rgb-underglow) guide.

### Add individual RGB LEDs \(optional\)

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/ZqjaJRC.jpeg)

WS2812B or SK6812 RGB LEDs can be added individually to the board.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/XTy75GN.jpeg)

Add solder to one pad of each LED footprint.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/EK6Bgn9.jpeg)

Using a pair of tweezers, hold each LED in place and solder it in.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/led-notches.jpg)

Note: Before soldering ensure each LED is properly aligned, with the corner notch on the top-right pad.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/NbAWSPH.jpeg)

Once the LEDs are aligned properly, solder the other 3 pads.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/ZopCeNY.jpeg)

Make sure each pad of the LED has enough solder on it.

## Assemble Case

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/baijfTC.jpeg)

Screw in the standoffs to the switch plate.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/ccYIo1y.jpeg)

Add the bottom plate and screw it in.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/bdn9/H5IHy1L.jpeg)

Plug it in and test. For the RGB underglow, the mode is controlled by the right-most key in the middle row. If the RGB LEDs don't light up, check your wiring or make sure the pads have enough solder.
