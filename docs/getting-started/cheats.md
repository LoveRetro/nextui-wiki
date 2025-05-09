## Managing Cheats

Cheats use RetroArch .cht file format. libretro maintains
a [database of cheats](https://github.com/libretro/libretro-database/tree/master/cht).

Cheat filenames needs to match the ROM name, including the ROM extension.

Place the cheat file in `SDCARD_ROOT/{System}/`.

!!! example "Cheat filepath example"
    ROM filename: `Super Mario Land (World).zip`

    ROM location: `SDCARD_ROOT/Roms/GB/`

    Cheat file path: `/Cheats/GB/Super Mario Land (World).zip.cht`

When a cheat file is detected, it will show up in the "cheats" menu item in game.

!!! info "Cheats are not supported by all cores."
