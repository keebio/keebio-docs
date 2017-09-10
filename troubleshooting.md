# Troubleshooting Guide

Still in progress...

* Pro Micro lights up but no presses register
  * Inverted Pro Micro
  * inverted diodes
  * Check with default hex
* My right side is inverted if I plug it in by itself
  * That's normal, see explanation in the FAQ
* Doesn't work if I insert the Pro Micro and have it touch the pins but haven't soldered yet
* Left side works, right side doesn't
  * Check cable type
  * If you're using real Pro Micros from Sparkfun, the J1 jumpers on each one need to be desoldered.
  * Does Pro Micro on right side light up?
    * No? Multimeter continuity and VCC checks
  * If I2C, check jumper
* Dead column
  * Try jumping directly on Pro Micro, if works, solder jumper wire to column
* Check USB cable in case it's power only



