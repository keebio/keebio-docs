---
title: Enabling Iris Rev. 6 VIA RGB Controls
---

The stock firmware (`rev6`) for the Iris Rev. 6 has VIA support, but it does not have support for the Lighting controls in VIA due to the way RGB is implemented for QMK and VIA. One way to control the RGB lighting is by using the [RGB Lighting keycodes in QMK (`RGB_xxx`)](https://docs.qmk.fm/#/keycodes?id=rgb-lighting).

Alternatively, if you'd like to use the Lighting controls in VIA Configurator, it can be enabled by upgrading the firmware from `rev6` to `rev6a`, but there are a couple things to take note of.

- The `rev6` and `rev6a` firmwares are both compatible with any Iris Rev. 6.x PCB (i.e. Rev. 6 and Rev 6.1)
  - Using the original `rev6` VIA .hex file will have Lighting controls disabled
  - Using the `rev6a` VIA .hex file with enable the Lighting controls
  - The stock firmware on all Rev. 6 and 6.1 PCBs is `rev6`
- The [pull request for VIA support of `rev6a`](https://github.com/the-via/keyboards/pull/1216) is still pending, you will have to manually load in the `iris-rev6a.json` everytime you launch VIA, otherwise VIA will not detect a board upgraded to `rev6a`

## Upgrading to `rev6a` firmware

1. Download and flash this .hex file to each half: [Iris Rev. 6a VIA Firmware](../static/misc/keebio_iris_rev6a_via.hex)
2. [Flash](flashing-firmware#flashing-atmega32u4-dfu-bootloader) the `rev6a` VIA .hex file individually to each half

## Loading VIA JSON File

### Initial Setup

You will only need to go through the following steps once:

1. Download this VIA .json file: [Iris Rev. 6a VIA JSON](../static/misc/iris-rev6a.json).
2. Open up VIA and go to Setting tab, enable `Show Design tab`

![](./assets/images/via/enable-design-tab.png)

### Loading in Definition File

Each time you launch VIA, you will need to load in the Iris Rev. 6a definition file downloaded earlier

1. Go to Design tab and load in the iris-rev6a.json file (you will need to do this each time you launch VIA)

![](./assets/images/via/load-draft-definition.png)

2. RGB controls will then be enabled in the Configure tab

![](./assets/images/via/iris-rev6a-lighting.png)

:::caution

Due to power constraints on the Iris Rev. 6, do not set the Underglow Brightness to more the 2/3rds of the maxiumum brightness. In the event that you do accidentally set the brightness too high and get disconnection issues, you will need to [clear your EEPROM](reset-eeprom).

:::