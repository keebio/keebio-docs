# Iris Build Guides

#### Previous Guides/Info
* LED fix for right PCB of Rev. 2.1b or 2.4, in case you soldered the MOSFET to the side with the bad trace: [Rev. 2.1b/2.4 LED Fix](https://imgur.com/a/uqt6T)
* Older Build Log for Rev. 2.0 to 2.1a: [Iris Build Guide Archive](iris-build-guide-archive.md)

# Iris 2.1b/2.4/2.5 Build Guide
[Imgur Album](https://imgur.com/a/wc0bO)

## ![](https://i.imgur.com/JMq4iIA.jpg) {#parts-list}

## Parts List {#parts-list}

Here's a list of parts needed for the build:

*All of the parts needed are shown here, except for Pro Micros, TRRS cable, and switches*

* 2 sets [Top/Bottom plates with M2 screws and standoffs](https://keeb.io/products/iris-keyboard-case-plates)
* 2 [Iris PCBs](https://keeb.io/products/iris-keyboard-split-ergonomic-keyboard)
* 2 TRRS jacks
* 1 [TRRS cable](https://keeb.io/products/trrs-cable)
* 2 reset switches
* 4 4.7kΩ resistors
    * 2 used for I2C
    * 1 used for LED support on left half
    * 1 used for LED support on right half)
* 54-56 1N4148 diodes - through-hole \(shown\) and [SMD diodes](https://keeb.io/products/1n4148-diodes) supported
* 54-56 470Ω resistors \(optional, for LED backlight\)
* 54-56 LEDs \(optional, for LED backlight\)
* 2 N-channel MOSFETs \(optional, for LED control\)
* WS2812B RGB LED Strip \(optional, for underglow\)
* 2 [Arduino Pro Micros](https://keeb.io/products/pro-micro-5v-16mhz-arduino-compatible-atmega32u4)
* 54-56 switches (MX-compatible and Alps switches are supported)
* Optional parts \(*not shown*\)
    * 2u PCB mount MX stabilizers if using 2u keys

## Build Steps {#build-steps}

Here's a summary of the build steps:

1. Prepare components
2. Solder components
   1. Solder diodes
   2. Solder push button and TRRS jacks
   3. Solder I2C resistors \(optional\)
   4. Solder LED components \(MOSFET and resistors\) \(optional\)
   5. Solder Pro Micro header pins
3. Solder switches
4. Solder LEDs
5. Flash Pro Micros
6. Solder Pro Micros
7. Solder RGB strip \(optional\)

## Prepare components

![](https://i.imgur.com/rrey3ej.jpg)

Bending the diodes. Here, I'm just bending it around my finger

![](https://i.imgur.com/sKo655O.jpg)

Another way to do it, resistors shown here

![](https://i.imgur.com/2D39Ojx.jpg)

Strip of diodes bent

![](https://i.imgur.com/Ys0X30w.jpg)

Ripping off the paper holding all the resistors together. Grip the diodes tightly so they don't bend as you're ripping the paper off.

![](https://i.imgur.com/4cFrb2D.jpg)

All separated from the paper

## Solder Components

The diodes, resistors, MOSFETs, push buttons, TRRS jacks,, and Pro Micro header pins can be soldered in any order.

### Solder diodes

On the bottom side of the PCB, insert diodes with the black line towards the bottom. Square = Black line. All of the diodes are oriented vertically on the PCB:![](https://i.imgur.com/Pft9ufA.jpg)

NOTE for Kailh Low-Profile PCBs (Rev. 2.2-KLP): The diode orientation is flipped to move the LEDs to the north side. The black line will point towards the top on these PCBs.

Some people stick the diodes on the top side of the PCB, I don't recommend doing it that way, because you can't replace them once everything is assembled using that method.

Bend the legs out to hold the diodes in place for when you solder them in:![](https://i.imgur.com/TaYV4vF.jpg)

Diode insertion complete:![](https://i.imgur.com/xoO48or.jpg)

Left PCB:![](https://i.imgur.com/O4wuLju.jpg)

Right PCB:![](https://i.imgur.com/ZD4B4PR.jpg)



### Solder reset push buttons and TRRS jacks

Add the TRRS jacks and reset switches:![](https://i.imgur.com/dFTBf3h.jpg)


### Solder I2C resistors \(optional\)

The default firmware for the Iris uses serial communication between the two halves using a single pin of the TRRS cable. Serial communication only allow for communication between two parts, which is fine for almost all builds.

However, in the future, there might be additional parts that you can add, like a numpad, OLED screen, etc. To support this, the communication protocol would need to be switched over I2C, which can support multiple devices. To add support for I2C, all you need to do is add the 2 4.7kΩ resistors to one of the halves \(other half does not need them\). Also, it doesn't hurt to add these resistors if using serial communication.

tl;dr: Adding this is optional, but you might as well do it as it's only 2 more components to solder.

Add the 2 4.7kΩ resistors for I2C on only one half (I normally do this on the master/left half). Left half shown here:![](https://i.imgur.com/ncxMpI2.jpg)

### Solder LED support components \(optional\)

Add a 4.7kΩ resistor for LED support in the R3 slot:![](https://i.imgur.com/Jvg2o4d.jpg)

Add 470Ω resistors for LEDs. Resistors don't have polarity, so orientation doesn't matter. **Note that the resistor that's seated with the Pro Micro has been inserted on the top side of the PCB, which prevents it from touching the Pro Micro.** (This resistor will be relocated out of the way in future versions of the PCB) Left side shown here:![](https://i.imgur.com/SERhlBs.jpg)

Right PCB:![](https://i.imgur.com/3CJVPlx.jpg)

To add the MOSFET, tin one of the pins on the PCB first. **NOTE: For the 2.1b and 2.4 PCBs, there's a missing trace/via on one of the pads for the MOSFET of the right half (the one shown here). To resolve this, solder the MOSFET to the other side of the board, as the pads for those are fine. (Issue has been fixed on Rev. 2.5 PCB)** If you do happen to solder the MOSFET to this side by accident, you can perform this fix to resolve the issue: https://imgur.com/a/uqt6T :![](https://i.imgur.com/nsehRiB.jpg)

For each half, add 1 MOSFET, 100Ω resistor, and 100kΩ resistor.![](https://i.imgur.com/2rwjJRf.jpg)

To solder the MOSET on, first add a little bit of solder to one of the pads on the PCB. Then position the MOSFET over the pads and heat up the pad to solder the first leg into place. It helps to use a pair of tweezers to hold the MOSFET and position it while heating up the pad.![](https://i.imgur.com/k3cwV69.png)

Once the first leg of the MOSFET has been positioned properly, solder the other 2 pads.![](https://i.imgur.com/FXKesdZ.png)

Next, add all of the resistors for each switch. 470Ω resistors are commonly used, but this value might vary, based on the LEDs you use and the amount of current they draw.

Solder the resistor in the area of the Pro Micro on the other side \(top side\), so it is out of the way of the Pro Micro when you install it. Alternatively, you can just install all of the resistors on the top side.![](https://i.imgur.com/tazkMue.png)

Lone resistor soldered on the top side.![](https://i.imgur.com/DGoQ3U0.png)

### Solder Pro Micro header pins

### Solder switches

### Solder LEDs
