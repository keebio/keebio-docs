# Frequently Asked Questions

* Are both sides flashed when the left side is plugged into USB and the TRRS cable is connected between halves?
  * No, only the left side is flashed in this case, flashing does not occur over the TRRS cable, so it does not matter if the TRRS cable is plugged in or not while flashing. Each half needs to be plugged in individually to the USB port to be flashed.
* When I flash the right side by itself, I get the left side, but mirrored. Is something wrong?

  * Nope, this is perfectly normal! Here's the explanation why:  
    Unless you explicitly do`#define EE_HANDS`in your keymap \(this is not the default\), QMK automatically assumes that whatever half the USB cable is plugged into is the left hand board. Even flashing the .eep files in this case does nothing, as it's ignored unless`EE_HANDS`is explicitly set.

    So when you plug in the right board itself, it thinks it's the left one. The reason it's flipped is because the PCB has been physically flipped compared to the actual left board.

    When you plug the TRRS cable in, the right side now auto detects correctly as the right side, and the firmware also knows to flip the board.

* What are the difference between the various Nyquist versions/revisions?

  * Version 1: Very first PCB, had serial/I2C pins on the wrong side of the Pro Micro, required a manual jump of the pins

    * Only available in Blue

  * Version 1.0: Fixed flaw in Version 1 \(only available in Blue\)

  * Version 1.1:

    * Was only available in Green

  * Version 1.2: Added 2nd 2u key in opposite corner of PCB

  * Version 1.3: Fixed flaw with missing VCC trace between resistors in Version 1.2

  * Version 1.4: New TRRS jack that removes the need for TRRS solder jumpers



