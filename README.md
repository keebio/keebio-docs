# About the Nyquist

![](/assets/fully-assembled.jpg)

The Nyquist is a 60% split ortholinear keyboard, comprised of two halves with a 5x6 arrangement of keys. Just like how the Let's Split is a split version of the Planck, the Nyquist is a split version of the Preonic. There is the option to have 2u keys in place of 1u keys in both the lower left and right corners with holes for Cherry PCB mounted stabilizers.

There's also a spot on the PCB for a pushbutton switch to reset the Pro Micro for flashing. No more taking a wire/tweezers/screwdriver to jump the Reset and GND pins!

## Firmware

The Nyquist uses QMK, and the code is basically a fork of the lets-split keyboard files. The pins used on the Pro Micro are the same as the ones used by the Let's Split, with the exception of the additional row of course, so it is actually backwards-compatible with a Let's Split \(if you flash both with the Nyquist firmware\).

## The Name

The name Nyquist comes from the Nyquist sampling theorem, which says that if you want to sample a signal to convert it from analog to digital and be able to uniquely reconstruct the signal later, then the sample rate has to be twice the bandwidth of the signal. So here, if you want to sample this PCB, you're going to need 2 of them.

The designer of the PCB, bakingpy, used to do a lot of digital signal processing, hence the use of signal processing terms for this board and others.

## Where to purchase

The PCBs and other parts for the Nyquist can be purchased at [Keebio](https://keeb.io/collections/nyquist-parts).

