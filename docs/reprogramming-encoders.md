---
title: Reprogramming Encoders
---

So you've decided that you'd like to reprogram/remap your encoders to do something different? Sounds good, but be forewarned, the process can be a bit complicated.

## Prerequisites

### QMK Build Environment

First of all, at the moment, you won't be able to reassign the encoders using VIA or QMK Configurator. The only method right now is through a standard QMK build environment.

To setup a QMK build environment, see the [QMK Tutorial](https://docs.qmk.fm/#/newbs).

### Board that supports encoders

Physically adding an encoder to a PCB that doesn't have support for it is beyond the scope of this guide. On the firmware side, if your board doesn't already support for encoders, then you will need to add that in yourself. See the [Encoders section of the QMK Docs](https://docs.qmk.fm/#/feature_encoders). 

All Keebio boards have encoders pre-configured in QMK, so you don't need to enable support for it.

## Rotary Encoder Purposes

A rotary encoder can be rotated clockwise and counter-clockwise. Some models of rotary encoders (including the [ones sold at Keebio](https://keeb.io/products/rotary-encoder-ec11)) can also be pressed down like a switch.

Here's some ideas on what you can use this functionality for:

- Volume control - Turn volume up or down, press to mute
- Media control - Play previous or next track
- Scrolling - Page up or down, home/end, left/right
- Window/Tab switching
- Macros
- Change RGB/Backlight modes
- Regular keystroke

## How to change encoder mappings

### Create keymap directory

First, you need to make sure that you have you own keymap directory setup if you don't already have one. For example, if you have an Iris keyboard, go to `keyboards/keebio/iris/keymaps` and copy `default` to your own name/username. If you want to retain [VIA](via.md) functionality, then copy the `via` keymap directory.

### Add `encoder_update_user` method

Open up the `keymap.c` that's in your keymap folder. Go down to the bottom of the file and add the following code:

```c
bool encoder_update_user(uint8_t index, bool clockwise) {
    if (index == 0) {
        if (clockwise) {
            tap_code(KC_VOLU);
        } else {
            tap_code(KC_VOLD);
        }
    }
    else if (index == 1) {
        if (clockwise) {
            tap_code(KC_PGDN);
        } else {
            tap_code(KC_PGUP);
        }
    }
    return false;
}
```

This snippet above assumes that there are 2 encoders. Here's a commented version of the code that explains what it does, so you can change things accordingly:


```c
// Commented version of the previous block of code
// This piece of code is run anytime the encoder is rotated
bool encoder_update_user(uint8_t index, bool clockwise) {
    if (index == 0) {               // Index 0 is the first encoder
        if (clockwise) {
            tap_code(KC_VOLU);      // Volume Up is sent if the 1st encoder is rotated clockwise
        } else {
            tap_code(KC_VOLD);      // Volume Down is sent if the 1st encoder is rotated counter-clockwise
        }
    }
    else if (index == 1) {          // Index 1 is the second encoder
        if (clockwise) {
            tap_code(KC_PGDN);      // Page Down is sent if the 2nd encoder is rotated clockwise
        } else {
            tap_code(KC_PGUP);      // Page Up is sent if the 2nd encoder is rotated counter-clockwise
        }
    }

    // If you have more encoders, add more `else if (index == ...)` blocks here

    return false;
}
```

### Change the keycodes

The QMK documentation has info about [what keycodes can be used](https://docs.qmk.fm/#/faq_keymap?id=what-keycodes-can-i-use). Basic keycodes are prefixed with `KC_`, while other types of keycodes have different prefixes, such as `BL_` for backlighting controls, `RGB_` for RGB lighting controls, and `KC_MS_` for mouse keys.

Find the keycodes that you would like to use, and replace the example ones used in the code blocks above.

If you are using modifier keys in combination with a keycode, such as `C(A(KC_DEL))` (Ctrl-Alt-Delete), then you will need to replace `tap_code` with `tap_code16`, like this: `tap_code16(C(A(KC_DEL)))`.

## Compile Keymap

Once you have made your changes to `keymap.c`, go ahead and compile your keymap. The following example is for Iris Rev. 6 with keymap directory of `misterjuice`:

```bash
make keebio/iris/rev6:misterjuice
```

You can then flash using this command, or take the .hex/.bin file generated with the previous command and flash using QMK Toolbox:

```bash
make keebio/iris/rev6:misterjuice:flash
```

## Advanced Usage

This section has some info on more advanced usage of programming the encoder functions.

### Layers

If you'd like to have different keycodes sent depending on what layer you are on, add `layer_state_is(...)` to determine if you are on a particular layer and change functionality based on that.

Example:

```c
bool encoder_update_user(uint8_t index, bool clockwise) {
    if (index == 0) {
        // Base layer (you can also use the enums in `enum layer_names` instead of 0, 1, 2, etc.) 
        if (layer_state_is(0)) {
            if (clockwise) {
                tap_code(KC_VOLU);
            } else {
                tap_code(KC_VOLD);
            }
        } else if (layer_state_is(1)) {
            if (clockwise) {
                tap_code(KC_MPRV);
            } else {
                tap_code(KC_MNXT);
            }
        }
    }
    else if (index == 1) {
        if (layer_state_is(0)) {
            if (clockwise) {
                tap_code(KC_PGDN);
            } else {
                tap_code(KC_PGUP);
            }
        } else if (layer_state_is(1)) {
            if (clockwise) {
                tap_code(KC_HOME);
            } else {
                tap_code(KC_END);
            }
        }
    }
    return false;
}
```
