# Flashing Firmware

Still in progress...

A couple of notes:

* Initially, you do need to have both sides flashed, as that allows both sides to talk to each other using the same communication protocol
* Once both sides are flashed, you only need to flash the master side if you are just updating the keymap

In the meantime, checkout the resources and information about test flashing below.

## Resources

* [The Complete Newbs Guide for QMK](https://docs.qmk.fm/#/newbs)
* [Chokkan's QMK Guide | Your First Steps to an All Powerful Keyboard](https://www.youtube.com/watch?v=-HLV6mUxNnU&list=PLYEUsdlqPD2a3kzQgnF98Prj-4IzZJGYG) Video Series
* [Flashing guide for the Let's Split](https://github.com/nicinabox/lets-split-guide/blob/master/flashing.md)


## Creating your own layout

Please follow the [QMK Documentation](https://docs.qmk.fm/) for the most up-to-date instructions for setting up QMK and creating your own layout.

## Performing an initial test flash on Windows

You can flash the microcontrollers in your kit prior to building your keyboard to ensure that they are undamaged and functioning normally. To do so, you will need to have QMK setup on your computer. We recommend following [the Complete Newbs Guide for QMK](https://docs.qmk.fm/#/newbs) to get setup.

The Complete Newbs Guide has a section for [Flashing Firmware](https://docs.qmk.fm/#/newbs), but it can be unclear as to how to do so for a microcontroller that isn't yet installed in a board.

The steps below assume your are using Windows and you have completed the QMK setup as outlined in the Complete Newbs Guide [Getting Started](https://docs.qmk.fm/#/newbs_getting_started), have built your first firmware with [Building Your First Firmware](https://docs.qmk.fm/#/newbs_building_firmware), and have installed [QMK Toolbox](https://github.com/qmk/qmk_toolbox/releases).

1. First, attach a USB cable into the controller and plug it into a USB port on your computer and let any drivers install that need to install. You should see LEDs light on your controller.
2. Once any drivers have finished installing, unplug from the USB port on the computer.
3. Start working through the steps in [Flashing Firmware](https://docs.qmk.fm/#/newbs) from the Newb Guide.
4. To place your microcontroller into DFU (Bootloader) Mode, you will need to short the `BOOT0` or `RESET` or `RST` pins/holes to ground.
   1. Ensure the USB cable is unplugged from the computer.
   2. Ensure the QMK Toolbox is open and your firmware file has been opened.
   3. Using a pair of tweezers, a jumper wire, or a bent paperclip, short the `BOOT0` or `RESET` or `RST` to the ground or `GND`.
   ![](https://imgur.com/mXHY72M.jpg)![](https://imgur.com/xctg5rQ.jpg)
   4. Plug the USB cable into the computer, and then quickly remove the short (i.e. pull out tweezers/jumper/paperclip).
   5. If successful, you will see a message similar to this in QMK Toolbox:
    ```
    *** DFU device connected
    ```
    or
    ```  
    *** Caterina device connected
    ```

5. Complete the remaining steps in [Flashing Firmware](https://docs.qmk.fm/#/newbs) from the Newb Guide.
