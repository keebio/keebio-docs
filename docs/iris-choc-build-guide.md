# Iris Choc/Kailh Low-Profile Build Guide

This guide applies to just the Iris PCB for Kailh Low-Profile switches, where the order of the build steps are slightly different. If you're looking for the guide to the normal PCB, see [Iris Build Guide](iris-build-guide.md)

Note that some pictures from the normal Iris PCB have been used here, main thing to ignore from those pictures is the diode orientation.

## Build Steps

Here's a summary of the build steps:

1. Prepare components
2. Solder components
    1. Solder diodes
    2. Solder push button and TRRS jacks
    3. Solder I2C resistors \(optional\)
    4. Solder LED components \(MOSFET and resistors\) \(optional\)
    5. Solder Pro Micro header pins
3. Solder LEDs \(optional\)
4. Insert all switches into plate
5. Solder switches
6. Flash Pro Micros
7. Solder Pro Micros
8. Solder RGB strip \(optional\)

## Prepare components

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/iris/rrey3ej.jpg)

Bending the diodes. Here, I'm just bending it around my finger

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/iris/sKo655O.jpg)

Another way to do it, resistors shown here

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/iris/2D39Ojx.jpg)

Strip of diodes bent

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/iris/Ys0X30w.jpg)

Ripping off the paper holding all the resistors together. Grip the diodes tightly so they don't bend as you're ripping the paper off.

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/iris/4cFrb2D.jpg)

All separated from the paper

## Solder Components

The diodes, resistors, MOSFETs, push buttons, TRRS jacks, and Pro Micro header pins can be soldered in any order.

### Solder diodes

On the bottom side of the PCB, insert diodes with the black line towards the bottom. Square = Black line. The black line will point towards the top on these PCBs. All of the diodes are oriented vertically on the PCB:![](https://s3.amazonaws.com/docs.keeb.io/assets/images/iris/Pft9ufA.jpg)

Some people stick the diodes on the top side of the PCB, which **is not** recommended, because you can't replace them once everything is assembled using that method.

Bend the legs out to hold the diodes in place for when you solder them in:![](https://s3.amazonaws.com/docs.keeb.io/assets/images/iris/TaYV4vF.jpg)

### Solder reset push buttons and TRRS jacks

Add the TRRS jacks and reset switches:![](https://s3.amazonaws.com/docs.keeb.io/assets/images/iris/dFTBf3h.jpg)

Make sure you clip down the leads for the jacks and reset switches after soldering them in, since there is not that much clearance between the top of the PCB and the switch plate. Failing to do this can make the pins touch the switch plate.


### Solder I2C resistors \(optional\)

The default firmware for the Iris uses serial communication between the two halves using a single pin of the TRRS cable. Serial communication only allow for communication between two parts, which is fine for almost all builds.

However, in the future, there might be additional parts that you can add, like a numpad, OLED screen, etc. To support this, the communication protocol would need to be switched over I2C, which can support multiple devices. To add support for I2C, all you need to do is add the 2 4.7kΩ resistors to one of the halves \(other half does not need them\). Also, it doesn't hurt to add these resistors if using serial communication.

tl;dr: Adding this is optional, but you might as well do it as it's only 2 more components to solder.

Add the 2 4.7kΩ resistors for I2C on only one half (I normally do this on the master/left half). Left half shown here:![](https://s3.amazonaws.com/docs.keeb.io/assets/images/iris/ncxMpI2.jpg)

### Solder LED support components \(optional\)

Add a 4.7kΩ resistor for LED support in the R3 slot:![](https://s3.amazonaws.com/docs.keeb.io/assets/images/iris/Jvg2o4d.jpg)

Add 470Ω resistors for LEDs. Resistors don't have polarity, so orientation doesn't matter. All of the resistor slots are oriented horizontally.

Right PCB:![](https://s3.amazonaws.com/docs.keeb.io/assets/images/iris/3CJVPlx.jpg)

To add the MOSFET, tin one of the pins on the PCB first:![](https://s3.amazonaws.com/docs.keeb.io/assets/images/iris/nsehRiB.jpg)

Hold the MOSFET with a pair of tweezers and align it over the footprint. Then solder the first pin:
![](https://s3.amazonaws.com/docs.keeb.io/assets/images/iris/tNMOzPH.jpg)

Once you're satisfied with the alignment, solder the other 2 pins:![](https://s3.amazonaws.com/docs.keeb.io/assets/images/iris/Zm2iJfF.jpg)

Repeat the MOSFET installation process on the other PCB:![](https://s3.amazonaws.com/docs.keeb.io/assets/images/iris/e4EfGla.jpg)

### Solder Pro Micro header pins

!!! warning "Do not use Peel-A-Way sockets with this PCB if socketing the Pro Micro"
    Due to the small clearance between the switch plate and PCB, do not use Peel-A-Way sockets to socket the Pro Micro, as the Peel-A-Way sockets will come in contact with the top plate. Using other types of sockets are fine.

Install the header pins for the Pro Micro on the underside of the PCB (left PCB shown). You can use some tape to hold the header pins in place while soldering. Solder one pin on and re-adjust/re-solder as needed before doing the rest of the row:![](https://s3.amazonaws.com/docs.keeb.io/assets/images/iris/TdZ9a23.jpg)

Completed left PCB:![](https://s3.amazonaws.com/docs.keeb.io/assets/images/iris/ijqRWEo.jpg)

Right PCB shown:![](https://s3.amazonaws.com/docs.keeb.io/assets/images/iris/3WUkRM7.jpg)

Prying off the plastic parts of the header pins to made the Pro Micro sit more flush with the PCB is suggested if you are up for it. An added benefit of this is that the Micro USB port for the left half is sandwiched between the Iris PCB and the Pro Micro PCB, making it less likely to be ripped off.

## Solder LEDs \(optional\)

Install the LEDs. Longer leg is the anode and goes with the circular pad marked with \+. The shorter leg is the cathode and goes with the square pad marked with \-:![](https://s3.amazonaws.com/docs.keeb.io/assets/images/iris/A10RlbS.jpg)

Trim down the switch pins, LED pins, and resistor pins that the Pro Micro will sit on top of with a flush cutter:![](https://s3.amazonaws.com/docs.keeb.io/assets/images/iris/vh0WAXg.jpg)

## Insert switches into plate

Due to the tight fit of the Choc switches into the switch plate, insert all of the switches into the switch plate before soldering them in. If you don't do this, you may have trouble getting the switches in the middle of the plate to clip in properly if you've done the outer switches first.

## Solder switches

Fit the switch plate with all the switches onto the PCB, making sure that none of the switch pins are bent prior to doing so. Also make sure the LEDs don't interfere with the actuation of each switch. Solder all of the switches in.

## Flash Pro Micros

![](https://s3.amazonaws.com/docs.keeb.io/assets/images/iris/Ca93q9s.jpg)

The last thing to install is the Pro Micros. Before soldering them to the board, it is highly recommended to flash them first, in case one or both of them are defective.

Refer to the [Flashing Firmware](flashing-firmware.md) Guide for steps on performing a flash to test the Pro Micro controllers.

## Solder Pro Micros

If using a bottom plate that conducts electricity, like a stainless steel or aluminum plate, add Kapton or electric tape on top of the TRRS jack. Also put some down where the Pro Micro will be:
![](https://s3.amazonaws.com/docs.keeb.io/assets/images/iris/Qw7qrWA.jpg)

Set the Pro Micro through the pins, making sure RAW and TX0 are aligned properly with the markings on the PCB. The orientation on both PCBs is different. (Left half shown here):
![](https://s3.amazonaws.com/docs.keeb.io/assets/images/iris/IMDAm28.jpg)

!!! info "MYTH: Keys will be reversed if the Pro Micro is reversed"
    TRUTH: **This is totally not the case, so pay attention!** Soldering the Pro Micro on backwards will short VCC and Reset together, preventing you from flashing. Even if flashed beforehand, it will do nothing meaningful in this orientation.

Right half:![](https://s3.amazonaws.com/docs.keeb.io/assets/images/iris/2KMFIE4.jpg)

Left PCB on the left, right PCB on the right:![](https://s3.amazonaws.com/docs.keeb.io/assets/images/iris/x950DTT.jpg)

## Solder RGB strip \(optional\)

Refer to the [Adding RGB Underglow](adding-rgb-underglow.md) Guide for steps to install the RGB light strip.
