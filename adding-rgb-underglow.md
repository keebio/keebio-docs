## Adding RGB Underglow

To add RGB underglow to your board, you'll need the following parts:

* WS2812B RGB LED Strip
* Wires
  * Something like 22 AWG hookup wire works: [6-Color Hookup wire kit](https://www.amazon.com/Elenco-Hook-Up-Colors-dispenser-WK-106/dp/B008L3QJAS)

There are 4 pins of note on the WS2812B strip:

* VCC or +5V
* GND
* Din \(Data in\)
* Do or Dout \(Data out\) - Only used by the strip on the master \(left\) side of the board

When connecting VCC and GND from the PCB to the strip, any of the VCC and GND pads can be used on the strip, it doesn't have to be at the beginning or the end.

As for the other two pins, Din needs to be connected on the first LED on the strip, and Dout needs to be connected to the last LED on the strip on the master side of the board. The flow of RGB data from the Pro Micro and through the strip is like this:

* TX0 Pin on Pro Micro --&gt; Din on master strip --&gt; Dout on master strip --&gt; Extra data line of TRRS cable --&gt; Din on slave strip

### Master \(left\) side

* Din on strip connects to PD3 breakout pad on PCB
* GND on strip to GND pad
* +5V on strip to VCC pad
* DO/Dout on strip to Extra Data pad

![](http://i.imgur.com/mE5hgF8.jpg)

### Slave \(right\) side

* Din on strip connects to Extra Data pad
* GND on strip to GND pad
* +5V on strip to VCC pad

[![](http://i.imgur.com/KgUvtxe.jpg)](http://i.imgur.com/KgUvtxe.jpg)

