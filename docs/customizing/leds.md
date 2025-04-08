# LED Controls

!!! info "Device Support"

    NextUI's LED Controls currently only support the TrimUI Brick.
        
    Support for the TrimUI Smart Pro will be addressed in a future update.

!!! info "A comment on color reproduction"

    The TrimUI Brick is a budget device with budget LEDs. Don't expect the colors to display accurately.

## LED Control App

On home screen, select `Tools`, then select `LedControl`.

The app provides the following options.

### LED Selection

The TrimUI Brick has the following configurable LEDs.

- Two LEDs on the front of the device for each function button (FN1 & FN2)
- Two LEDs under the triggers (one under L1 & L2 the other under R1 & R2)
- One LED bar on the top of the device

When in the LED Control App you can use `Left Trigger` and `Right Trigger` to cycle between these LEDs.

### Effects

Each LED can be configured with the following effects.

| Effect Name      | Description                                                                                              |
|------------------|----------------------------------------------------------------------------------------------------------|
| Static           | Keep the LED(s) on and static                                                                            |
| Blink 1          | Quickly blink 1 time                                                                                     |
| Blink 2          | Quickly blinks 2 times                                                                                   |
| Linear           | Slowly increase the brightness and then fall back to off                                                 |
| Breathe          | Slowly increase the brightness and slowly decrease the brightness                                        |
| Interval Breathe | Slowly increase the brightness and slowly decrease the brightness, with a longer pause between "breaths" |

### Color

The color of LEDs. Use `Left` and `Right` on the `D-Pad` to cycle through the colors.

### Speed

The speed of breathing effect in milliseconds.

### Brightness

The brightness level of the LEDs. Setting this to `0` will turn the LED off.

### Info Brightness

The brightness of LED when informing you about something.

Currently, this is only supported by:

- Power Button turning red alerting for low battery
- Front Function Button LED blinking when entering sleep

Setting brightness to `0` will turn the LED off.

### Ambient Mode

!!! info "Only Supported By Certain Emulator Cores"

    Ambient light effects are only supported by the built in Libretro cores.

Ambient light mode makes your LEDs change color to match the dominate color on screen during gameplay.

To enable ambient mode (in a supported emulator) follow these steps:

1. While in game press the `Menu` button
2. Select `Options`
3. Select `Frontend`
4. Scroll down to the Ambient Mode line and turn it on. You can select to use all LEDs or just a specific one.

!!! info "Ambient Mode sets the LED Brightness to Maximum"

    We found that lower brightness levels will result in displaying in incorrect color.
