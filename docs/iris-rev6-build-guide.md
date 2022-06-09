---
title: Iris Rev. 6 Hotswap
---

## Build Compatibility

This build guide is exclusively for the Rev. 6 PCB of the Iris, which features pre-soldered components, including Kailh hotswap sockets. For previous revisions, please see the [Iris Rev. 3-5 guide](iris-rev3-build-guide).

### Build Tutorial Videos by Keebio

<iframe width="560" height="315" src="https://www.youtube.com/embed/FEadTGc-SKM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Parts List

First up, time to get your parts:

* [Set of Iris Rev. 6 PCBs](https://keeb.io/products/iris-rev-6-keyboard-hotswap-pcbs-for-split-ergonomic-keyboard)
* [Iris PE Plates](https://keeb.io/products/iris-keyboard-case-plates-phoenix-edition)
* [USB-C to USB-C cable](https://keeb.io/products/usb-c-to-usb-c-cable)
* Switches (MX-compatible ones)
* [Rotary Encoder](https://keeb.io/products/rotary-encoder-ec11) and [Knob](https://keeb.io/products/rotary-encoder-knob-ec11) (optional)
* [3D-Printed Iris Case](https://treedogstudio.com/products/iris-3d-printed-case) (optional)

![](./assets/images/iris-rev6/IMG_7838.jpg)

## Build Steps Summary

1. Solder [rotary encoder](glossary#rotary-encoder) (optional)
2. Prepare plates (if using acrylic ones)
3. Add switches
4. Assemble Case
5. Board Notes

## Solder Rotary Encoder


:::info

If you have the Iris Rev. 6.1 PCBs, you do not need to clip the two larger mounting pins on the encoder as mentioned below, since the PCB now has slots for it.

:::

If adding a rotary encoder, clip the two larger mounting pins on the encoder so it can fit onto the PCB:

![](./assets/images/iris-rev6/IMG_7842.jpg)

It should look like this after clipping:

![](./assets/images/iris-rev6/IMG_7843.jpg)

Insert the encoder onto the PCB and solder the 3 pins at the top side of the encoder and the 2 pins at the bottom side.

![](./assets/images/iris-rev6/IMG_7844.jpg)

Then flip the board over and solder all 5 pins. Make sure that they remain pushed in all the way through the board while soldering. Also be careful to not come in contact with the hotswap socket while soldering the side of the encoder that has 2 pins. Accidental contact with the black portion is okay, but try to avoid doing so.

![](./assets/images/iris-rev6/IMG_7845.jpg)

## Prepare Acrylic Plates

:::info

You can skip this section if you are using FR4 plates or stainless steel plates. This section only applies if you are using the 3mm thick acrylic plates.

:::

Peel up a corner of the protective paper film of the acrylic plate. You can use your fingernail or any other kind of object. Be cafeful to not scratch up the plate while doing so.

![](./assets/images/iris-rev6/IMG_7839.jpg)

Once the corner of the film is up, keep peeling the rest of the film off. It helps to peel it off diagonally as shown here.

![](./assets/images/iris-rev6/IMG_7840.jpg)

One side complete, repeat the same process for the other side of the plate for all the plates in the set.

![](./assets/images/iris-rev6/IMG_7841.jpg)

Because the acrylic plate is 3mm thick instead of 1.5mm, the switch will not fully click into the plate. To prevent the plate from slipping off of the switches and onto the PCB, add some material between the bottom of the plate and the top of the PCB. You will need something about 2mm thick, such as rubber bumpons or rolled up electrical tape.

Here, SKUF feet are being used to provide the buffer:

![](./assets/images/iris-rev6/IMG_7847.jpg)

Here's the other option of using electrical tape:

![](./assets/images/iris-rev4/iris-acrylic-plate-buffer.jpg)

## Add Switches

Insert a few switches into the switch plate at the corners.

![](./assets/images/iris-rev6/IMG_7849.jpg)

Make sure the switches are oriented so that they are south-facing (pins at the bottom).

![](./assets/images/iris-rev6/IMG_7850.jpg)

Align the pins of the switches into the hotswap sockets.

![](./assets/images/iris-rev6/IMG_7851.jpg)

Then push down the PCB onto the bottom of the switch, while pressing on the top of the switch, so basically, you are squeezing the PCB and the switch together.

![](./assets/images/iris-rev6/IMG_7852.jpg)

Make sure that the switch remains flush with the plate.

![](./assets/images/iris-rev6/IMG_7853.jpg)

:::danger

Don't attempt to insert switches with bent pins into the hotswap socket, as that can push the socket off of the PCB and damage it.

:::

![](./assets/images/iris-rev6/IMG_7854.jpg)

If you have a switch with a bent pin, unbend the pin. Sometimes it helps to have something like a pair of tweezers to straighten out the pin.

![](./assets/images/iris-rev6/IMG_7855.jpg)

After you've installed the first few switches successfully, insert the rest of them in. As before, make sure you are supporting the the bottom of the socket while pressing the switches in.

![](./assets/images/iris-rev6/IMG_7856.jpg)

![](./assets/images/iris-rev6/IMG_7858.jpg)

## Assemble Case

Now that all of the switches have been inserted, it's time to assemble the case.

:::note

If you have 3D-printed top shells that you are going to install, skip this section, except for the info about foam for the encoder.

:::

First step is to add the screws and standoffs to the switch plate. For each hole, insert a screw through the top of the switch plate and attach a standoff from the bottom side of the plate.

![](./assets/images/iris-rev6/IMG_7859.jpg)

(Optional) If you've got an acrylic middle layer, put it over the standoffs.

![](./assets/images/iris-rev6/IMG_7860.jpg)

If you installed an encoder, you will need to add a piece of foam about 3-4mm thick that will sit in between the bottom of the PCB and the bottom plate. This will prevent the PCB from dislodging from the switches when pressing down on the encoder.

![](./assets/images/iris-rev6/IMG_7861.jpg)

Put the bottom plate on top of the standoffs and screw it on.

![](./assets/images/iris-rev6/IMG_7862.jpg)

Flip the board over and you're done! Or if you've got other case parts, continue reading...

![](./assets/images/iris-rev6/IMG_7865.jpg)

## Install Optional Case Parts

### Add Rubber Feet

If you've got [SKUF Feet](https://keeb.io/products/skuf-silicone-rubber-keyboard-feet), add them to the bottom of the board. Alternatively, you can use any kind of rubber bumpons of your choice.

![](./assets/images/iris-rev6/IMG_7864.jpg)

A [3D-printed alignment guide](https://github.com/keebio/iris-case/blob/master/Iris%20Bottom%20Plate%20SKUF%20Alignment%20Guide.stl) is available if you'd like to place them in a more orderly fashion.

![](./assets/images/iris-rev6/IMG_7863.jpg)

### 3D-Printed Middle Layer (w/Ergodox Leg support) Installation

Parts needed for this section are the Ergodox EZ Tenting Leg Kit, 6 M3 nuts, and a 3D-printed middle layer appropriate for your case plates.

![](./assets/images/iris-rev6/IMG_7866.jpg)

Insert an M3 nut into the middle layer from the bottom. Put the spring over the thumbscrew and then insert them through the leg. Afterwards screw it into the nut and tighten.

![](./assets/images/iris-rev6/IMG_7867.jpg)

Repeat for all of the legs.

![](./assets/images/iris-rev6/IMG_7868.jpg)

If you are not going to install a top shell, then insert standoffs into the middle layer.

![](./assets/images/iris-rev6/IMG_7869.jpg)

Add bottom plate and screw it in.

![](./assets/images/iris-rev6/IMG_7870.jpg)

### Acrylic Middle Layer (w/Tenting Holes) Installation

See the [Tenting Bolts Setup Guide](tenting-bolts-setup) for instructions on adding tenting bolts to the middle layer.

### Install Top Shell

You will need to replace the 6mm M2 screws normally included with the plate kit with longer ones that will go through the bottom plate, all the way up into the top shell. You will not need to use the M2 standoffs from the plate kit.

For 1.5mm plate sets (FR4 or Stainless Steel), you will need 18mm screws.

For 3mm plate sets (Acrylic), you will need 20 or 22mm screws.

![](./assets/images/iris-rev6/IMG_7871.jpg)

Align the top shell over the switch plate and line it up with the middle layer and bottom plate.

![](./assets/images/iris-rev6/IMG_7872.jpg)

Insert the long M2 screw through the bottom plate, then through the middle layer, then the switch plate, and finally into the top shell. Tighten the screw into the top shell. This may require some additional force of pushing the screw into the top shell to help if thread properly.

![](./assets/images/iris-rev6/IMG_7874.jpg)

Done!

![](./assets/images/iris-rev6/IMG_7878.jpg)

## Turning off RGB LEDs

If you'd like to turn the RGB LEDs off and still have the default keymapping, hold the `MO(2)` key and then press `Tab` as highlighted below:

![](./assets/images/iris-rev6/iris-rgb-off.jpg)
