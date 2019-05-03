# Iris Build Guides

## Build guide compatibility

While this build guide shows parts for the Iris, the build is very similar to that of the Levinson, as well as the Nyquist Rev. 2, since they all have in-switch LED support.

!!! warning "For Kailh Low-Profile PCBs:"

    Do not use this guide due to the difference in the order of build steps. For that PCB, use the [Iris Kailh Low-Profile Build Guide](iris-choc-build-guide.md) instead.

### Previous Guides/Info
* LED fix for right PCB of Rev. 2.1b or 2.4, in case you soldered the MOSFET to the side with the bad trace: [Rev. 2.1b/2.4 LED Fix](iris-led-fix.md)
* Older Build Log for Rev. 2.0 to 2.1a: [Iris Build Guide Archive](iris-build-guide-archive.md)

## Videos of Builds

Here's a list of Iris build videos various people have created:

* [TaeKeyboards - Iris Split Ergonomic Mechanical Keyboard Build](https://youtu.be/0P6oIOB-whM)
* [Juju - Iris Split Mechanical Keyboard Build!](https://youtu.be/FBD-LC1K2ds)
* [Missouri Valley Tech - Iris Split Ergonomic Keyboard Build Log](https://youtu.be/aZQpGw9KoQE)

## Parts List

![](assets/images/iris/JMq4iIA.jpg)

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

## Build Steps

Here's a summary of the build steps:

1. Prepare components
2. Solder components
    1. Solder diodes
    2. Solder push button and TRRS jacks
    3. Solder I2C resistors \(optional\)
    4. Solder LED components \(MOSFET and resistors\) \(optional\)
    5. Solder Pro Micro header pins
3. Add 2u stabilizers \(optional\)
4. Solder switches
5. Solder LEDs \(optional\)
6. Flash Pro Micros
7. Solder Pro Micros
8. Solder RGB strip \(optional\)

## Prepare components

![](assets/images/iris/rrey3ej.jpg)

Bending the diodes. Here, I'm just bending it around my finger

![](assets/images/iris/sKo655O.jpg)

Another way to do it, resistors shown here

![](assets/images/iris/2D39Ojx.jpg)

Strip of diodes bent

![](assets/images/iris/Ys0X30w.jpg)

Ripping off the paper holding all the resistors together. Grip the diodes tightly so they don't bend as you're ripping the paper off.

![](assets/images/iris/4cFrb2D.jpg)

All separated from the paper

## Solder Components

The diodes, resistors, MOSFETs, push buttons, TRRS jacks, and Pro Micro header pins can be soldered in any order.

### Solder diodes

On the bottom side of the PCB, insert diodes with the black line towards the bottom. Square = Black line. All of the diodes are oriented vertically on the PCB:![](assets/images/iris/Pft9ufA.jpg)

!!! warning "For Kailh Low-Profile PCBs (Rev. 2.2-KLP):"

    The diode orientation is flipped to move the LEDs to the north side. The black line will point towards the top on these PCBs.

Some people stick the diodes on the top side of the PCB, I don't recommend doing it that way, because you can't replace them once everything is assembled using that method.

Bend the legs out to hold the diodes in place for when you solder them in:![](assets/images/iris/TaYV4vF.jpg)

Diode insertion complete:![](assets/images/iris/xoO48or.jpg)

Left PCB:![](assets/images/iris/O4wuLju.jpg)

Right PCB:![](assets/images/iris/ZD4B4PR.jpg)



### Solder reset push buttons and TRRS jacks

Add the TRRS jacks and reset switches:![](assets/images/iris/dFTBf3h.jpg)


### Solder I2C resistors \(optional\)

The default firmware for the Iris uses serial communication between the two halves using a single pin of the TRRS cable. Serial communication only allow for communication between two parts, which is fine for almost all builds.

However, in the future, there might be additional parts that you can add, like a numpad, OLED screen, etc. To support this, the communication protocol would need to be switched over I2C, which can support multiple devices. To add support for I2C, all you need to do is add the 2 4.7kΩ resistors to one of the halves \(other half does not need them\). Also, it doesn't hurt to add these resistors if using serial communication.

tl;dr: Adding this is optional, but you might as well do it as it's only 2 more components to solder.

Add the 2 4.7kΩ resistors for I2C on only one half (I normally do this on the master/left half). Left half shown here:![](assets/images/iris/ncxMpI2.jpg)

### Solder LED support components \(optional\)

Add a 4.7kΩ resistor for LED support in the R3 slot:![](assets/images/iris/Jvg2o4d.jpg)

Add 470Ω resistors for LEDs. Resistors don't have polarity, so orientation doesn't matter. **Note that the resistor that's seated with the Pro Micro has been inserted on the top side of the PCB, which prevents it from touching the Pro Micro.** (This resistor will be relocated out of the way in future versions of the PCB). Left side shown here:![](assets/images/iris/SERhlBs.jpg)

Right PCB:![](assets/images/iris/3CJVPlx.jpg)

!!! warning "For the 2.1b and 2.4 PCBs:"
    There's a missing trace/via on one of the pads for the MOSFET of the right half (the one shown here). To resolve this, solder the MOSFET to the other side of the board, as the pads for those are fine. (Issue has been fixed on Rev. 2.5 PCB). If you do happen to solder the MOSFET to this side by accident, you can perform this fix to resolve the issue: [Iris 2.1b/2.4 LED MOSFET Fix](iris-led-fix.md)

To add the MOSFET, tin one of the pins on the PCB first:![](assets/images/iris/nsehRiB.jpg)

Hold the MOSFET with a pair of tweezers and align it over the footprint. Then solder the first pin:
![](assets/images/iris/tNMOzPH.jpg)

Once you're satisfied with the alignment, solder the other 2 pins:![](assets/images/iris/Zm2iJfF.jpg)

Repeat the MOSFET installation process on the other PCB:![](assets/images/iris/e4EfGla.jpg)

### Solder Pro Micro header pins

Install the header pins for the Pro Micro on the underside of the PCB (left PCB shown). You can use some tape to hold the header pins in place while soldering. Solder one pin on and re-adjust/re-solder as needed before doing the rest of the row:![](assets/images/iris/TdZ9a23.jpg)

Completed right PCB:![](assets/images/iris/ijqRWEo.jpg)

Left PCB shown:![](assets/images/iris/3WUkRM7.jpg)

## Add 2u stabilizers \(optional\)

Add the 2u stabilizer if desired. Do this before installing the switch plate and switches:![](assets/images/iris/m0mqljb.jpg)

## Solder switches

!!! info "Place switches into switch plate before soldering"
    You will not be able to install the switch plate after soldering the switches, as the switches need to go on top of the switch plate.

Add switches into the switch plate. Usually, I add switches to the corners first and then solder them before installing the rest of them:![](assets/images/iris/deDoaSq.jpg)

All installed:![](assets/images/iris/tztl5XA.jpg)

## Solder LEDs

Install the LEDs. Longer leg is the anode and goes with the circular pad marked with \+. The shorter leg is the cathode and goes with the square pad marked with \-:![](assets/images/iris/A10RlbS.jpg)

I normally pry off the plastic parts of the header pins to made the Pro Micro sit more flush with the PCB. An added benefit of this is that the Micro USB port for the left half is sandwiched between the Iris PCB and the Pro Micro PCB, making it less likely to be ripped off.

Trim down the switch pins, LED pins, and resistor pins that the Pro Micro will sit on top of with a flush cutter:![](assets/images/iris/vh0WAXg.jpg)

## Flash Pro Micros

![](assets/images/iris/Ca93q9s.jpg)

The last thing to install is the Pro Micros. Before soldering them to the board, it is highly recommended to flash them first, in case one or both of them are defective.

Refer to the [Flashing Firmware](flashing-firmware.md) Guide for steps on performing a flash to test the Pro Micro controllers.

## Solder Pro Micros

If using a bottom plate that conducts electricity, like a stainless steel or aluminum plate, add Kapton or electric tape on top of the TRRS jack. Also put some down where the Pro Micro will be:
![](assets/images/iris/Qw7qrWA.jpg)

Set the Pro Micro through the pins, making sure RAW and TX0 are aligned properly with the markings on the PCB. The orientation on both PCBs is different. (Left half shown here):
![](assets/images/iris/IMDAm28.jpg)

!!! info "MYTH: Keys will be reversed if the Pro Micro is reversed"
    TRUTH: **This is totally not the case, so pay attention!** Soldering the Pro Micro on backwards will short VCC and Reset together, preventing you from flashing. Even if flashed beforehand, it will do nothing meaningful in this orientation.


!!! warning "For Viterbi 2.0:"
    Both of the Pro Micro boards are oriented the same way (flat side towards you), unlike the Iris/Levinson/Nyquist. Make sure you match up the PCB markings to confirm. Ignore the images of the Iris Right half here.

Right half:![](assets/images/iris/2KMFIE4.jpg)

Left PCB on the left, right PCB on the right:![](assets/images/iris/x950DTT.jpg)

## Solder RGB strip \(optional\)

Refer to the [Adding RGB Underglow](adding-rgb-underglow.md) Guide for steps to install the RGB light strip.
