---
title: Dilly
---

## Parts List

Here's a list of parts needed for the build:

* 1 [Dilly PCB & Bottom PCB Plate with M2 screws, standoffs, and SKUF feet](https://keeb.io/products/dilly?utm_source=docs)
* 30 single-color LEDs \(optional, for LED backlight\)
* [WS2812B RGB LED strip](https://keeb.io/products/rgb-led-strips-sk6812-ws2812b-compatible) \(optional, for underglow\)
* 1 [Pro Micro Compatible Microcontroller](https://keeb.io/collections/microcontrollers?utm_source=docs)
* 30 [Kailh Choc V1 Low Profile Switches](https://keeb.io/products/kailh-choc-low-profile-switches-v1?utm_source=docs)
* 30 [Kailh Choc V1 Low Profile Keycaps](https://keeb.io/collections/keycaps?filter.p.m.keyboard.switch_compatibility=Choc+V1+Low-Profile&sort_by=manual&utm_source=docs)
* Electrical tape or Kapton tape

## Build Steps

Here's a summary of the build steps:

1. Prepare components
2. Solder Pro Micro header pins
3. Solder switches
4. Solder LEDs \(optional\)
5. Flash Pro Micro
6. Solder Pro Micro
7. Solder RGB strip \(optional\)

## Inspect Parts

Check that you have a PCB, bottom plate, M2 screws, and standoffs.

![Parts](./assets/images/dilly/IMG_8356.jpeg)

### Solder Pro Micro header pins

For the microcontroller, you'll want it to be as close as possible to the underside of the PCB. So put the header pins upside down on the PCB and solder them in.

![Line up header pins](./assets/images/dilly/IMG_8364.jpeg)

Next, pry up the plastic pieces on the header pins.

![Pry up plastic pieces](./assets/images/dilly/IMG_8366.jpeg)

## Solder LEDs (Optional)

Line up the longer leg of the LED to the `+` pad on the PCB, and the shorter leg of the LEd to the `-` pad, and then insert it through the PCB.

![Line up LED](./assets/images/dilly/IMG_8367.jpeg)

Place a switch over the LED to help hold it in place.

![Place switch over LED](./assets/images/dilly/IMG_8368.jpeg)

Flip the PCB over and solder the LED in place.

![Solder LED](./assets/images/dilly/IMG_8369.jpeg)

Then clip the excess length of the legs of the LED.

![Clip LED](./assets/images/dilly/IMG_8370.jpeg)

Repeat for all the LEDs.

![All LEDs soldered](./assets/images/dilly/IMG_8371.jpeg)

## Solder Switches

Place switches on to the PCB if not already done so.

![Place switches](./assets/images/dilly/IMG_8372.jpeg)

Flip the board over and solder them all in.

![Solder switches](./assets/images/dilly/IMG_8373.jpeg)

### Prepare and solder the microcontroller

Before soldering the microcontroller, flash the firmware to it and make sure it gets detected as a keyboard by your computer.

You can find pre-compiled firmware QMK builds with VIA enabled for the Dilly here for some microcontrollers:

* [RP2040 Pro Micro](https://docs.keeb.io/firmware.html?path=keebio_dilly_via_rp2040_ce.uf2)
* [Elite-Pi](https://docs.keeb.io/firmware.html?path=keebio_dilly_via_elite_pi.uf2)
* [Pro Micro ATmega32U4](https://docs.keeb.io/firmware.html?path=keebio_dilly_via.hex)

If using the RP2040 Pro Micro, you'll need to short the `BOOT` and `GND` pins and then press the reset button on the PCB to get the microcontroller into bootloader mode.

![Flash firmware](./assets/images/dilly/IMG_8379.jpeg)

Put some electrical or Kapton tape on top of the area the Pro Micro will be:

![Add tape](./assets/images/dilly/IMG_8374.jpeg)

Insert Pro Micro over the header pins, making sure the correct pins are being used. For instance, with the RP2024 Pro Micro, ignore the top two pins.

![Insert Pro Micro](./assets/images/dilly/IMG_8375.jpeg)

Solder the two pins closest to the USB port and make sure the microcontroller is level.

![Solder first two pins](./assets/images/dilly/IMG_8376.jpeg)

Next solder the two other corners in and make sure everything is aligned.

![Solder other corners](./assets/images/dilly/IMG_8377.jpeg)

Solder the remaining pins and clip the excess length of the legs of the header pins.

![Solder remaining pins](./assets/images/dilly/IMG_8378.jpeg)

Add tape over the microcontroller to prevent any short circuits from it touching the bottom plate.

![Add tape over microcontroller](./assets/images/dilly/IMG_8379.jpeg)

## Add RGB Strip (Optional)

Use the VCC/RGB/GND breakout pads on the PCB to connect the RGB strip to the microcontroller.

## Assemble Case

Add SKUF feet to the bottom plate.

![Add SKUF feet](./assets/images/dilly/IMG_8380.jpeg)

Add a screw and standoff to the bottom plate.

![Add screw and standoff](./assets/images/dilly/IMG_8381.jpeg)

Repeat for the rest of the screws and standoffs.

![All screws and standoffs added](./assets/images/dilly/IMG_8382.jpeg)

Place the PCB on top of the standoffs of the bottom plate.

![Place PCB on standoffs](./assets/images/dilly/IMG_8383.jpeg)

Add screws through the PCB and into the standoffs of the bottom plate.

![Add screws through PCB](./assets/images/dilly/IMG_8384.jpeg)

Repeat for the rest of the screws and standoffs.

![All screws through PCB](./assets/images/dilly/IMG_8385.jpeg)

## Plug in the USB cable

Plug in the USB cable into the PCB and make sure it gets detected as a keyboard by your computer

![Plug in USB cable](./assets/images/dilly/IMG_8387.jpeg)

## Add Keycaps

Add keycaps to all of the switches.

![All keycaps added](./assets/images/dilly/IMG_8389.jpeg)
