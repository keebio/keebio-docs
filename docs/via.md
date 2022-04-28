---
title: VIA Usage Guide
---

[VIA Configurator](https://www.caniusevia.com/) is a desktop app that talks to your VIA-enabled keyboard and allows you to remap keys on-the-fly, as well as toggling layout options, programming macros, and controlling lighting.

![](./assets/images/misc/via-configure.png)

For info on how VIA relates to the underlying QMK Firmware, see this for more details: [VIA and QMK Firmware](via-technical)

## Is my keyboard supported by VIA?

Here's a list of keyboards with VIA support: [Supported Keyboards](https://caniusevia.com/docs/supported_keyboards). Note that just because your keyboard is listed there doesn't mean that you can immediately use VIA Configurator with it. The firmware flashed to the keyboard must have VIA support enabled, and you can find pre-compiled .hex/.bin firmware files with VIA support here: [VIA Firmware Downloads](https://caniusevia.com/docs/download_firmware).

## Getting VIA

To download the VIA Configurator app, you can go to the releases page here: [VIA Releases](https://www.github.com/the-via/releases/releases/latest). The app is available for Windows, macOS, and Linux.

## Using VIA

### Launch VIA

It is recommended that _after_ you open VIA to plug in your keyboard.

You'll want to be on the **Configure** tab (at the top) to verify a few things before testing your keys.

## Keymap

### Basic
You can now click on a layer to edit and select the key on your keyboard you want to change. I have my KBO-5000 plugged in, and can click F17 and change it to letter X, for a weird example.

### Media
If you're looking for music/movie oriented controls, this section has you covered!
        
### Macro
You have 15 macro keys to do with what you will! Select a layer, then a key above and then select what macro you'd like to apply.

**For Mac users** the _LWin_ key functions as the _Command Key_ within VIA. For Windows users... just like it reads on the tin! It's your windows key! 

If you so desire, you can also program a macro to type out text for you. Not recommended to do this with passwords, albeit that is absolutely possible.

### Some terms to know:
**MO (layer):** This activates the layer when held down and you come back to your prior layer when you release the key. Similar to Shift and Fn keys in operation.
 
          
**LM (layer, modifier):** This activates a layer and will also maintain a modifier for you while pressed.

**LT (layer, keycode):** press this and hold to activate a layer _and_ send the keycode when tapped briefly. Best use for keys you usually only press quickly like Tab or Space.

### Layers
If you hover over a layer option, VIA will give you a brief bit of information about what it does.

Some terms to know about turning layers on and off:
##### **TG (layer)**
Turns a layer on and off. Similar to Num Lock.

##### **DF (layer)** 
This turns on and off your base layer. Most folks usually have their alphas, but if you're reserving your keyboard for gaming, you can use this to maintain a custom game layer to remain active. Game on, friends!
##### **TO (layer)** 
This turns on one layer. BUT! Be aware this doesn't toggle _back_, so you need to program akey on this layer to get yourself back. Or be stuck in Kansas. Your choice.

##### **OSL (layer)**
This temporarily activates a layer until you press the next key. OSL, standing for "one shot layer". This is generally if you want to do one thing and then jump back to what you were doing before.

##### **TT (layer)** 
Smush MO and TG together and you get this. holding a key down activates the layer and it releases the layer as the key does. You can configure how many times it needs to be pressed to turn the layer on or off. 

### Special
In this section you can enable language changes as well as operations that usually take a combination of two keys or more and apply it to one key for easy use.

### QMK Lighting
This series of operations enable you to give your keyboard changes to the lighting on-the-fly for future use without needing to plugin to VIA. Shortcuts? Yes, please. 

### **Layouts** 

Once selected, the screen below the keyboard will allow you to change what your shift keys, left/right bottom row, backspace (split vs 2u) and enter key (ISO/ANSI) settings.

You can verify if all your settings saved by clicking on the **Key Tester** tab at the top.

### **Macro** 
You can enter more than 10 macros. 

### **Lighting**

#### _Brightness_
Want to blind yourself? Or have a soft whisper of light? You have both of those choices and more here!

#### _Effect_
Want special flickers and jazz? Turn it on if you do!

#### _Underglow Brightness_ 
All the lights under the keyboard are ctrolled here.

#### _Underglow Effect_ 
With many options, you can choose how wild or tame you want to get with your pizzazz lighting.

#### _Underglow Effect Speed_ 
Make it zippy! Or sleepy. Choice is yours!

#### _Underglow color_ 
Not feeling that shimmery? Just pick the one color you want here!

## **Key Tester**

After getting your setting where you want them, it's good to test if all your keys are operating properly.

## **Settings**

You generally won't need to use this tab unless needing to do some workarounds.
