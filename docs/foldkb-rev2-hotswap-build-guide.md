---
title: FoldKB Rev. 2 Hotswap Build Guide
---

This build guide is for the FoldKB Rev. 2 which has the Kailh hotswap sockets. If you have the Rev. 1 PCBs, see the [FoldKB Rev.1 build guide](https://docs.keeb.io/foldkb-build-guide).

## Parts List

- set of [FoldKB Rev. 2 PCBs](https://keeb.io/products/foldkb-rev-2-hotswap-pcb-kit)
- [Plates for FoldKB](https://keeb.io/products/foldkb-case-plates)
- [USB-C to USB-C Cable](https://keeb.io/products/usb-c-to-usb-c-cable)
- Switches (MX-compatible ones)
- [2u PCB mount MX stabilizers](https://keeb.io/products/cherry-mx-stabilizer?_pos=1&_psq=2u&_ss=e&_v=1.0&variant=43449871046) if using 2u/2.25u/2.75u keys (need between 2 and 6 stabilizers)
- [Rotary Encoder](https://keeb.io/products/rotary-encoder-ec11) and [Knob](https://keeb.io/products/rotary-encoder-knob-ec11) (optional)
- [FLAHNs Hotswap Bumpers](https://keeb.io/products/flahns-5mm-hotswap-silicone-bumpers) (recommended)
- Keycaps
- Verify [conductive ESD foam Gaskets/Pads](https://keeb.io/products/conductive-esd-foam-gaskets-pads?_pos=1&_psq=esd&_ss=e&_v=1.0) did not fall off switch plates in transit
- Verify [shroomies](https://keeb.io/products/shroomies-silicone-feet?_pos=1&_psq=shroomies&_ss=e&_v=1.0) are pushed in all the way

![](./assets/images/foldkb-rev2/IMG_3610.jpeg)

These are the conductive ESD foam Gaskets/Pads that should be present on your plates:

![](./assets/images/foldkb-rev2/IMG_3611.jpeg)
![](./assets/images/foldkb-rev2/IMG_3613.jpeg)


## Build Steps Summary

1. Solder rotary encoder (optional)
2. Add 2u stabilizers to PCB
3. Add switches (Durock Shrimp Tactiles used in photos)
4. Assemble!
   1. screw standoffs into bottom plate
   2. add FLAHNs
   3. Attach bottom plate using screws
5. Reprogramming Board Note
6. Rejoice!

## Solder Rotary Encoder

If you want a layout without the rotary encoder, jump to [Add 2u stabilizers to PCB](https://docs.keeb.io/foldkb-rev2-build-guide#add-2u-stabilizers-to-pcb)

![](./assets/images/sinc-rev4/IMG_1454.jpeg)
![](./assets/images/sinc-rev4/IMG_1455.jpeg)

Install the encoder onto the PCB and solder the 2 pins at the top side of the encoder and the 3 pins at the bottom side.

![](./assets/images/sinc-rev4/IMG_1456.jpeg)

The 2 side legs do not need to be soldered to the PCB.

## Add 2u Stabilizers to PCB
Add the 2u stabilizers into the PCB. The stab wire will be on the bottom side of the switch everywhere except for the bottom row. On the bottom row, the stab wire will be above the switch. Do this before installing the switch plate and switches, as stabilizers can not be removed without needing to remove all the switches.

![](./assets/images/foldkb-rev2/IMG_3615.jpeg)

## Add switches

Get hype! Now it's time to put your switches into the switch plate.

We recommend you add switches to the corners **first** before installing the rest of them: 

![](.assets/images/foldkb-rev2/IMG_3618.jpeg)

Make sure all of the switch pins are straight, or else they will not fit into the hotswap sockets properly and will bend the switch pins and/or damage the hotswap socket and PCB.

If you encounter a bent switch pin like below, bend it back with your fingers or a tweezer.

![](./assets/images/sinc-rev4/IMG_5570 copy.jpeg)

![](./assets/images/quefrency-rev4/IMG_5571.jpeg)

After you've inserted those first few switches, add the rest of them:

![](./assets/images/foldkb-rev2/IMG_3621.jpeg)



## Assemble!

Now that all of the switches are in, install the standoffs into the bottom plate. Insert a screw through the top of the switch plate and attach a standoff from the bottom side of the plate:

![](./assets/images/foldkb-rev2/IMG_3624.jpeg)
![](./assets/images/foldkb-rev2/IMG_3625.jpeg)
![](./assets/images/foldkb-rev2/IMG_3626.jpeg)

## Add FLAHNS (optional)

Add FLAHNS bumpers to underside of PCB to help support it up (see video below). About 4-6 for each half with work fine.

![](./assets/images/foldkb-rev2/IMG_3630.jpeg)
![](./assets/images/foldkb-rev2/IMG_3631.jpeg)

## Supporting the Encoder

If you installed an encoder, you will need to add one of the FLAHNS or piece of foam about 3-4mm thick that will sit in between the bottom of the PCB and the bottom plate. This will prevent the PCB from dislodging from the switches when pressing down on the encoder.

Put the bottom plate on top of the standoffs and screw it on.

![](./assets/images/foldkb-rev2/IMG_3633.jpeg)

All done now, repeat for the other half of the board!

![](./assets/images/foldkb-rev2/IMG_3636.jpeg)

## Re-Programming Board Note

Want to re-program your board? We got you covered! Come look [here](flashing-firmware).

## Rejoice!

You have a split keyboard! Deck it out in some keycaps and conquer any task!
