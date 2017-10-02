# Troubleshooting Guide

Still in progress...

* Pro Micro lights up but no presses register
  * Inverted Pro Micro
  * Inverted diodes
  * Check with default hex
* My right side is inverted if I plug it in by itself
  * That's normal, see explanation in the FAQ
* Doesn't work if I insert the Pro Micro and have it touch the pins but haven't soldered yet
* Left side works, right side doesn't
  * Check cable type, it should have 4 metal rings on it \(for Tip, Ring, Ring, Sleeve\)
  * If you're using real Pro Micros from Sparkfun, the J1 jumpers on each one need to be desoldered.
  * Does Pro Micro on right side light up?
    * No? Multimeter continuity and VCC checks
  * If I2C, check jumper
* Dead column
  * Try jumping directly on Pro Micro, if works, solder jumper wire to column
* Check USB cable in case it's power only
* Pro Micro testing, short row and column pins together to see if keypresses register
  * If columns 1 and 2 are the only ones not working and it doesn't work either when shorting the pins, it's unlikely, but possible that the fuses on the Pro Micro set that to enable JTAG, which disables PORTF. See this message: https://www.reddit.com/r/olkb/comments/71um69/nyquist\_column\_12\_left\_side\_and\_56\_right\_side/dndu4jh/
  * Nyquist Pinout:![](https://i.imgur.com/CNxRMGg.png)



