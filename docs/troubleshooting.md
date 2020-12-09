---
title: Troubleshooting Guide
---

- Pro Micro lights up but no presses register
    - Check the following:
        - Inverted Pro Micro
        - Inverted diodes
        - Check with default hex

- On Linux, flashing the Pro Micro gets interrupted midway, help!
    - Check if ModemManager is installed (typically the case for Arch Linux and its derivatives like Manjaro). If it is installed, either uninstall it or disable it, as it interferes with the flashing process.

- My right side is inverted if I plug it in by itself
    - That's normal, see explanation in the FAQ

- It doesn't work if I insert the Pro Micro and have it touch the pins but haven't soldered yet
    - Press fitting the Pro Micro onto the header pins is an unreliable test. Although visually, it may appear that the all the pins are touching the Pro Micro, this is usually not the case. Soldering ensures a proper connection between the Pro Micro and the header pins.

- Left side works, right side doesn't
    - Check cable type, it should have 4 metal rings on it \(for Tip, Ring, Ring, Sleeve\)
    - If you're using real Pro Micros from Sparkfun, the J1 jumpers on each one need to be desoldered.
    - Does Pro Micro on right side light up?
        * No? Multimeter continuity and VCC checks
    - (Viterbi only) If using I2C, ensure that I2C jumper has been soldered

- Check USB cable in case it's power only

- How to test a Pro Micro that has been flashed with the firmware:
    - Take a wire, paperclip, anything conductive and put one end on a row pin on the Pro Micro and the other end of it to a column pin (This is known as shorting or jumping the two pins together)
    - Use the pinouts below or see the [Schematics page](schematics.md) to see what the row and column pins are
    - A keypress should register when you do this
    - If columns 1 and 2 are the only ones not working and it doesn't work either when shorting the pins, it's unlikely, but possible that the fuses on the Pro Micro set that to enable JTAG, which disables PORTF. See this message: [https://www.reddit.com/r/olkb/comments/71um69/nyquist\_column\_12\_left\_side\_and\_56\_right\_side/dndu4jh/](https://www.reddit.com/r/olkb/comments/71um69/nyquist_column_12_left_side_and_56_right_side/dndu4jh/)
    * Nyquist Pinout:![](https://s3.amazonaws.com/docs.keeb.io/assets/images/misc/CNxRMGg.png)
    * Iris Pinout:
      ![](https://s3.amazonaws.com/docs.keeb.io/assets/images/misc/JdiVIcG.png)

- Dead column
    - Try jumping directly on Pro Micro, if that works, solder a jumper wire to column


