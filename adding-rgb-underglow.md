## Adding RGB Underglow

To add RGB underglow to your board, you'll need the following parts:

* WS2812B RGB LED Strip
* Wires
  * Something like 22 AWG hookup wire works: [6-Color Hookup wire kit](https://www.amazon.com/Elenco-Hook-Up-Colors-dispenser-WK-106/dp/B008L3QJAS)

There are 4 pins of note on the WS2812B strip:

* VCC
* GND
* Din \(Data in\)
* Do or Dout \(Data out\) - Only used by the strip on the master \(left\) side of the board

When connecting VCC and GND from the PCB to the strip, any of the VCC and GND pads can be used on the strip, it doesn't have to be at the beginning or the end.

As for the other two pins, Din needs to be connected on the first LED on the strip, and Dout needs to be connected to the last LED on the strip on the master side of the board.



