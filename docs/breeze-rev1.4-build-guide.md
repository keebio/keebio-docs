---
title: Breeze Rev. 1.4 Build Guide
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="switch-type" queryString>
  <TabItem value="mx" label="MX Version">
  ![Fully Built Breeze MX Version](./assets/images/breeze/IMG_0363.jpeg)
  </TabItem>
  <TabItem value="choc" label="Choc Version">
  ![Fully Built Breeze MX Version](./assets/images/breeze/IMG_0449.jpeg)
  </TabItem>
</Tabs>

The [Afternoon Labs Breeze Rev. 1.4](https://keeb.io/products/afternoon-labs-breeze-keyboard-kit) is a version of the Breeze that has some modifications made to it (like replacing TRRS with USB-C), and all the needed components except for the microcontrollers are pre-soldered on the boards.

In comparison to the [Rev. 1.3](breeze-rev1.3-build-guide.md), the Rev. 1.4 adds pads, Pico-EZmate connector, and power switch for adding batteries, and it also has a slightly more compact shape for a sleeker look.

## Build Compatibility

This build guide is specifically for the Breeze Rev. 1.4 sold by Keebio, which comes in a kit with PCB and case.

## Parts List

First up, time to get your parts:

<Tabs groupId="switch-type">
  <TabItem value="mx" label="MX Version">
  - [Breeze Kit](https://keeb.io/products/afternoon-labs-breeze-keyboard-kit) which includes:
    - Breeze Rev. 1.4 PCBs with Kailh MX hotswap sockets
    - FR4 Switch Plates
    - 11 10mm M2 Screws
    - Shroomie Feet
  - [USB-C to USB-C cable](https://keeb.io/products/usb-c-to-usb-c-cable)
  - [2x 2u PCB mount MX stabilizers](https://keeb.io/products/cherry-mx-stabilizer)
  - [70 MX-compatbile Switches](https://keeb.io/collections/switches?filter.p.m.keyboard.switch_compatibility=MX)
  - [MX-compatible Keycaps](https://keeb.io/collections/keycaps?filter.p.m.keyboard.switch_compatibility=MX)

  ![Breeze MX Kit Contents](./assets/images/breeze/breeze-1.4-mx-kit.jpg)
  </TabItem>
  <TabItem value="choc" label="Choc Version">
  - [Breeze Kit](https://keeb.io/products/afternoon-labs-breeze-keyboard-kit) which includes:
    - Breeze Rev. 1.4 PCBs with Kailh Choc hotswap sockets
    - FR4 Switch Plates
    - 11 6mm M2 Screws
    - Shroomie Feet
    - Choc V2 Stabilizers
  - [USB-C to USB-C cable](https://keeb.io/products/usb-c-to-usb-c-cable)
  - For Choc V1 Builds:
    - [70 Choc V1 Switches](https://keeb.io/collections/switches?filter.p.m.keyboard.switch_compatibility=Choc+V1+Low-Profile)
    - [Choc V1 Keycaps](https://keeb.io/collections/keycaps?filter.p.m.keyboard.switch_compatibility=Choc+V1+Low-Profile)
  - For Choc V2 Builds:
    - [70 Choc V2 Switches](https://keeb.io/collections/switches?filter.p.m.keyboard.switch_compatibility=Choc+V2+Low-Profile)
    - [Low-Profile MX Keycaps](https://keeb.io/collections/keycaps?filter.p.m.keyboard.switch_compatibility=Choc+V2+Low-Profile)

  ![Breeze Choc Kit Contents](./assets/images/breeze/breeze-1.4-choc-kit.jpg)
  </TabItem>
</Tabs>

## Build Steps Summary

1. Disassemble Case
2. Flash Microcontrollers
3. Solder Microcontrollers
4. Add Stabilizers
5. Add Switches
6. Assemble Case
7. Add Keycaps
8. Board Notes

## Disassemble Case

The first thing to do is unscrew the screws from the case.

<Tabs groupId="switch-type">
  <TabItem value="mx" label="MX Version">
  ![Unscrew MX case](./assets/images/breeze/IMG_0453.jpeg)
  </TabItem>
  <TabItem value="choc" label="Choc Version">
  ![Unscrew Choc case](./assets/images/breeze/IMG_0427.jpeg)
  </TabItem>
</Tabs>

## Flash Microcontrollers

Flash the firmware to the microcontrollers first before soldering them to the PCB, as removing the controllers from the PCB is difficult if you have any problems with it and need to desolder them. The Boot button on some controllers are also difficult to access when soldered to the PCBs, so that's another reason to flash and test them upfront.

Here's the firmware for the Breeze with support for VIA enabled for different microcontrollers:

<Tabs groupId="controller-type">
  <TabItem value="wired" label="Wired Build">
  - [Breeze Firmware for Elite-Pi](https://docs.keeb.io/firmware.html?path=afternoonlabs_breeze_rev1_via_elite_pi.uf2)
  - [Breeze Firmware for RP2040 Pro Micro](https://docs.keeb.io/firmware.html?path=afternoonlabs_breeze_rev1_via_rp2040_ce.uf2)
  - [Breeze Firmware for Pro Micro and Elite-C](https://docs.keeb.io/firmware.html?path=afternoonlabs_breeze_rev1_via_pro_micro.hex)
  </TabItem>
  <TabItem value="wireless" label="Wireless Build">
  - Breeze Firmware for SuperMini nRF52840 Pro Micro - To be built
  </TabItem>
</Tabs>

See [Flashing Firmware](flashing-firmware) for more info on flashing your controllers.

## Solder Microcontrollers

Place both of the PCBs face up and insert the header pins into the holes for them.

If your controller has 2 columns of 12 pins instead of 13 pins, insert the header pins into the lower 12 pins, as the top 2 pins are for battery usage.

### 12 pin columns

![Insert header pins - 12 pins](./assets/images/breeze/IMG_0428.jpeg)

### 13 pin columns

![Insert header pins - 13 pins](./assets/images/breeze/IMG_0429.jpeg)

Flip the PCBs over and solder the header pins.

![Solder header pins](./assets/images/breeze/IMG_0430.jpeg)

Flip the PCBs back over and put the controllers over the header pins. The chip side of the controller should be facing down.

![Insert controllers](./assets/images/breeze/IMG_0436.jpeg)

:::danger

Don't insert the microcontroller with the chip side face up, it won't work properly that way.

:::

![Wrong way](./assets/images/breeze/IMG_0437.jpeg)

Solder the controllers to the header pins.

![Solder controllers](./assets/images/breeze/IMG_0438.jpeg)

Then clip the extra length of the header pins off.

![Solder controllers](./assets/images/breeze/IMG_0439.jpeg)

<Tabs groupId="controller-type">
  <TabItem value="wired" label="Wired Build">
  </TabItem>
  <TabItem value="wireless" label="Wireless Build">

## Add Batteries (For Wireless Builds)

If you are using a Wireless Bluetooth controller and are installing batteries, you have two options for adding them.

### Option 1: Battery with Pico-EZmate Connector

If you have purchased Li-ion batteries from Keebio, they have a Pico-EZmate connector on the end of them for easier installation.

![Battery with EZmate Connector](./assets/images/breeze/battery-ezmate.jpeg)

First slide the battery power switch down, which is the Off position.

![Power Switch](./assets/images/breeze/IMG_0462.jpeg)

Next, press the connector onto the PCB where the Pico-EZmate connector is.

![Power Switch](./assets/images/breeze/IMG_0463.jpeg)

Add a piece of tape to hold the battery in-place.

![Power Switch](./assets/images/breeze/IMG_0464.jpeg)

### Option 2: Battery without connector

If you are bringing your own batteries that don't have Pico-EZmate connectors, you can solder them to the PCBs.

First slide the battery power switch down, which is the Off position.

![Power Switch](./assets/images/breeze/IMG_0462.jpeg)

Next, if there's a pre-existing connector at the end of the battery, cut it off and strip the ends of the wires.

(TODO: Add picture of battery here)

Then solder the black wire to the negative (`-`) pad and red wire to the positive (`+`) pad.

(TODO: Add picture of soldered battery here)

Add a piece of tape to hold the battery in-place.

(TODO: Add picture of soldered battery taped down here)
  </TabItem>
</Tabs>

## Add Stabilizers

<Tabs groupId="switch-type">
  <TabItem value="mx" label="MX Version">
Assemble the MX stabilizers and insert them into the PCB. If you are unfamiliar with assembling and inserting stabilizers, here's a guide for that: [Stabilizer Handbook](https://imgur.com/gallery/pHK0vhz)

![Add MX stabilizers](./assets/images/breeze/IMG_0458.jpeg)
  </TabItem>
  <TabItem value="choc" label="Choc Version">

For Choc V2, stabilizers have already been installed into the plate, so you don't need to do anything else.

![Choc V2 Stabilizer Pre-Installed](./assets/images/breeze/choc-v2-stabilizer.jpeg)

If you are using Choc V1 switches instead, the pre-installed V2 stabilizers will need to be removed, as it's not compatible with V1 keycaps. From the underside of plate, push in the two tabs marked below on the stabilizer to unhook it from the switch plate. As a result, you'll need to use the thumb key without a stabilizer.

![Choc V2 Stabilizer Pre-Installed](./assets/images/breeze/IMG_0440.jpeg)

  </TabItem>
</Tabs>


## Add Switches

Start off by inserting switches into the switch plate at the corners and a couple spots in the middle.

<Tabs groupId="switch-type">
  <TabItem value="mx" label="MX Version">
![Add switches to plate](./assets/images/breeze/IMG_0455.jpeg)
  </TabItem>
  <TabItem value="choc" label="Choc Version">
![Add switches to plate](./assets/images/breeze/IMG_0442.jpeg)
  </TabItem>
</Tabs>

Overlay the switch plate with switches combo onto the PCB and push them together.

<Tabs groupId="switch-type">
  <TabItem value="mx" label="MX Version">
![Add switch plate](./assets/images/breeze/IMG_0459.jpeg)
  </TabItem>
  <TabItem value="choc" label="Choc Version">
![Add switch plate](./assets/images/breeze/IMG_0445.jpeg)
  </TabItem>
</Tabs>

:::danger

Don't attempt to insert switches with bent pins into the hotswap socket, as that can push the socket off of the PCB and damage it.

:::

<Tabs groupId="switch-type">
  <TabItem value="mx" label="MX Version">
![Bent pin](./assets/images/iris-rev6/IMG_7854.jpg)
  </TabItem>
  <TabItem value="choc" label="Choc Version">
![Add switches to plate](./assets/images/breeze/IMG_0443.jpeg)
  </TabItem>
</Tabs>

If you have a switch with a bent pin, unbend the pin. Sometimes it helps to have something like a pair of tweezers to straighten out the pin.

<Tabs groupId="switch-type">
  <TabItem value="mx" label="MX Version">
![Unbend pin](./assets/images/iris-rev6/IMG_7855.jpg)
  </TabItem>
  <TabItem value="choc" label="Choc Version">
![Add switches to plate](./assets/images/breeze/IMG_0444.jpeg)
  </TabItem>
</Tabs>

<Tabs groupId="switch-type">
  <TabItem value="mx" label="MX Version">
When together, there should be a 3.5mm gap between the switch plate and the PCB.

![Add switch plate](./assets/images/breeze/IMG_0460.jpeg)
  </TabItem>
  <TabItem value="choc" label="Choc Version">
When together, there should be a 1mm gap between the switch plate and the PCB.

![Add switch plate](./assets/images/breeze/IMG_0446.jpeg)
  </TabItem>
</Tabs>

Add the rest of the switches to the plate/PCB.

<Tabs groupId="switch-type">
  <TabItem value="mx" label="MX Version">
![Add rest of switches](./assets/images/breeze/IMG_0466.jpeg)
  </TabItem>
  <TabItem value="choc" label="Choc Version">
![Add rest of switches](./assets/images/breeze/IMG_0447.jpeg)
  </TabItem>
</Tabs>

## Assemble Case

Line up the PCB/plate into the case and screw it in with the screws. Do not screw in the screws too tightly, as this will bring the plate too close to the PCB and the switches will pop out.

<Tabs groupId="switch-type">
  <TabItem value="mx" label="MX Version">
![Add screws](./assets/images/breeze/IMG_0467.jpeg)
  </TabItem>
  <TabItem value="choc" label="Choc Version">
![Add screws](./assets/images/breeze/IMG_0448.jpeg)
  </TabItem>
</Tabs>

## Add Keycaps

Finally, add your keycaps to your board.

<Tabs groupId="switch-type">
  <TabItem value="mx" label="MX Version">
  ![Fully Built Breeze MX Version](./assets/images/breeze/IMG_0363.jpeg)
  </TabItem>
  <TabItem value="choc" label="Choc Version">
  ![Fully Built Breeze MX Version](./assets/images/breeze/IMG_0449.jpeg)
  </TabItem>
</Tabs>

## Board Notes

### Remapping/reprogramming Board

Looking to remap/reprogram your board? Check out our guide for [remapping your keyboard](remapping-keyboard).

On the bottom of the case is a hole to that allows access to the reset button on the PCB.

<Tabs groupId="controller-type">
  <TabItem value="wired" label="Wired Build">
### Connect the Halves

Use the USB-C to USB-C cable to connect the two halves together using the pre-soldered USB-C port on the Breeze PCB (not the ones on the controllers).

![Fully Built Breeze MX Version](./assets/images/breeze/IMG_0363.jpeg)
  </TabItem>
  <TabItem value="wireless" label="Wireless Build">
### Battery Power Switch

The batteries are connected to the microcontrollers when the slide switch on the bottom of the board is moved to the Up position. Slide it to the Down position if you want to disconnect the battery from the microncontroller to save power.

![Power switch On](./assets/images/breeze/on-off-back.jpg)

  </TabItem>
</Tabs>


