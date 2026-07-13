---
title: Breeze Rev. 1.4 Build Guide
---

![Fully Built Breeze](./assets/images/breeze/IMG_0363.jpeg)

The [Afternoon Labs Breeze Rev. 1.4](https://keeb.io/products/afternoon-labs-breeze-keyboard-kit) is a version of the Breeze that has some modifications made to it (like replacing TRRS with USB-C), and all the needed components except for the microcontrollers are pre-soldered on the boards.

In comparison to the [Rev. 1.3](breeze-rev1.3-build-guide.md), the Rev. 1.4 adds pads, Pico-EZmate connector, and power switch for adding batteries, and it also has a slightly more compact shape for a sleeker look.

## Build Compatibility

This build guide is specifically for the Breeze Rev. 1.4 sold by Keebio, which comes in a kit with PCB and case.

## Parts List

First up, time to get your parts:

- [Breeze Kit](https://keeb.io/products/afternoon-labs-breeze-keyboard-kit) which includes:
  - Breeze Rev. 1.4 PCBs
  - FR4 Switch Plates
  - 11 M2 Screws (10mm for MX version, 6mm for Choc version)
  - Shroomie Feet
- [USB-C to USB-C cable](https://keeb.io/products/usb-c-to-usb-c-cable)
- For MX Builds:
  - [2x 2u PCB mount MX stabilizers](https://keeb.io/products/cherry-mx-stabilizer)
  - [70 MX-compatbile Switches](https://keeb.io/collections/switches?filter.p.m.keyboard.switch_compatibility=MX)
  - [MX-compatible Keycaps](https://keeb.io/collections/keycaps?filter.p.m.keyboard.switch_compatibility=MX)
- For Choc V1 Builds:
  - [70 Choc V1 Switches](https://keeb.io/collections/switches?filter.p.m.keyboard.switch_compatibility=Choc+V1+Low-Profile)
  - [Choc V1 Keycaps](https://keeb.io/collections/keycaps?filter.p.m.keyboard.switch_compatibility=Choc+V1+Low-Profile)
- For Choc V2 Builds:
  - 2x Choc V2 Stabilizers (included)
  - [70 Choc V2 Switches](https://keeb.io/collections/switches?filter.p.m.keyboard.switch_compatibility=Choc+V2+Low-Profile)
  - [Low-Profile MX Keycaps](https://keeb.io/collections/keycaps?filter.p.m.keyboard.switch_compatibility=Choc+V2+Low-Profile)

![Breeze MX Kit Contents](./assets/images/breeze/breeze-1.4-mx-kit.jpg)

![Breeze Choc Kit Contents](./assets/images/breeze/breeze-1.4-mx-kit.jpg)

## Build Steps Summary

1. Disassemble Case
2. Test Microcontrollers
3. Solder Microcontrollers
4. Add Stabilizers
5. Add Switches
6. Assemble Case
7. Add Keycaps
8. Board Notes

## Disassemble Case

The first thing to do is unscrew the screws from the case.

![Unscrew case](./assets/images/breeze/IMG_0084.jpeg)

## Test Microcontrollers

Test the microcontrollers first by flashing the firmware to them, as removing the controllers from the PCB is difficult if you have any problems with it and need to desolder them. The Boot button on some controllers are also difficult to access when soldered to the PCBs, so that's another reason to flash and test them upfront.

Here's the firmware for the Breeze with support for VIA enabled for different microcontrollers:

- [Breeze Firmware for Elite-Pi](https://docs.keeb.io/firmware.html?path=afternoonlabs_breeze_rev1_via_elite_pi.uf2)
- [Breeze Firmware for RP2040 Pro Micro](https://docs.keeb.io/firmware.html?path=afternoonlabs_breeze_rev1_via_rp2040_ce.uf2)
- [Breeze Firmware for Pro Micro and Elite-C](https://docs.keeb.io/firmware.html?path=afternoonlabs_breeze_rev1_via_pro_micro.hex)
- Breeze Firmware for SuperMini nRF52840 Pro Micro - To be built

See [Flashing Firmware](flashing-firmware) for more info on flashing your controllers.

## Solder Microcontrollers

Place both of the PCBs face up and insert the header pins into the holes for them.

![Insert header pins](./assets/images/breeze/IMG_0070.jpeg)

Flip the PCBs over and solder the header pins.

![Solder header pins](./assets/images/breeze/IMG_0071.jpeg)

Flip the PCBs back over and put the controllers over the header pins. The chip side of the controller should be facing down.

![Insert controllers](./assets/images/breeze/IMG_0072.jpeg)

Solder the controllers to the header pins, and then clip the extra length of the header pins off.

![Solder controllers](./assets/images/breeze/IMG_0073.jpeg)

## Add Batteries (For Wireless Builds)

If you are using a Wireless Bluetooth controller and are installing batteries, you have two options for adding them.

### Option 1: Battery with Pico-EZmate Connector

If you have purchased Li-ion batteries from Keebio, they have a Pico-EZmate connector on the end of them for easier installation.

First slide the battery power switch down, which is the Off position.

Next, press the connector onto the PCB where the Pico-EZmate connector is.

### Option 2: Battery without connector

If you are bringing your own batteries that don't have Pico-EZmate connectors, you can solder them to the PCBs.

First slide the battery power switch down, which is the Off position.

Next, if there's a pre-existing connector at the end of the battery, cut it off and strip the ends of the wires.

Then solder the black wire to the negative (`-`) pad and red wire to the positive (`+`) pad.

## Add Stabilizers (For MX Builds)

Assemble the MX stabilizers and insert them into the PCB. If you are unfamiliar with assembling and inserting stabilizers, here's a guide for that: [Stabilizer Handbook](https://imgur.com/gallery/pHK0vhz)

![Add stabilizers](./assets/images/breeze/IMG_0074.jpeg)

## Add Switches

Start off by inserting switches into the switch plate at the corners and a couple spots in the middle.

![Add switches to plate](./assets/images/breeze/IMG_0075.jpeg)

:::danger

Don't attempt to insert switches with bent pins into the hotswap socket, as that can push the socket off of the PCB and damage it.

:::

![Bent pin](./assets/images/iris-rev6/IMG_7854.jpg)

If you have a switch with a bent pin, unbend the pin. Sometimes it helps to have something like a pair of tweezers to straighten out the pin.

![Unbend pin](./assets/images/iris-rev6/IMG_7855.jpg)

Overlay the switch plate with switches combo onto the PCB and push them together.

![Add switch plate](./assets/images/breeze/IMG_0076.jpeg)

![Add switch plate](./assets/images/breeze/IMG_0077.jpeg)

Add the rest of the switches to the plate/PCB.

![Add rest of switches](./assets/images/breeze/IMG_0078.jpeg)

## Assemble Case

Line up the PCB/plate into the case and screw it in with the screws. Do not screw in the screws too tightly, as the threaded inserts may get ripped out.

![Add screws](./assets/images/breeze/IMG_0080.jpeg)

## Add Keycaps

Finally, add your keycaps to your board.

![Fully Built Breeze](./assets/images/breeze/IMG_0083.jpeg)

## Board Notes

### Remapping/reprogramming Board

Looking to remap/reprogram your board? Check out our guide for [remapping your keyboard](remapping-keyboard).

On the bottom of the case is a hole to that allows access to the reset button on the PCB.

### Connect the Halves

For non-wireless builds, use the USB-C to USB-C cable to connect the two halves together using the pre-soldered USB-C port on the Breeze PCB (not the ones on the controllers).

### Battery Power Switch

If you installed batteries, the batteries are connected to the microcontrollers when the slide switch on the bottom of the board is moved to the Up position. Slide it to the Down position if you want to disconnect the battery from the microncontroller to save power.
