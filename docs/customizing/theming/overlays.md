# Emulator Overlays

!!! info "Overlays are only supported by libretro emulators"
    Standalone emulators installed via Paks do not support NextUI overlays.

NextUI looks for accompanying media for each emulator under the `/Overlays/[System]` folder.
The `System` corresponds to the name of the Emu Pak specified in your Emulator folder name within parenthesis.
In this folder you can add 5 overlay PNG files, named overlay1.png to overlay5.png.

For example:

```
# For /Roms/Game Boy Color (GBA)
/Overlays/GBA/overlay1.png
/Overlays/GBA/overlay2.png
/Overlays/GBA/overlay3.png
/Overlays/GBA/overlay4.png
/Overlays/GBA/overlay5.png

# For /Roms/Super Nintendo (SFC)
/Overlays/SFC/overlay1.png
/Overlays/SFC/overlay2.png
/Overlays/SFC/overlay3.png
/Overlays/SFC/overlay4.png
/Overlays/SFC/overlay5.png
```

When in game, hit the `Menu` button and navigate to `Options -> Frontend`. This will display
an overlay setting to choose between overlay 1 to 5 or none.