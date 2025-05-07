## Adding ROMs

NextUI creates a `Roms` folder at the SD Card Root containing folders for each console currently
supported.

You can rename these folders as you like; however, you must keep the uppercase tag name in parentheses in
order to retain the mapping to the correct emulator.

!!! example "Example: Nintendo Entertainment System (FC) can be renamed to Nintendo (FC) or NES (FC) or Famicom (FC)"

If multiple folders share the same name, eg. `Game Boy Advance (GBA)` and `Game Boy Advance (MGBA)`, they
will be combined into a single menu item containing the ROMs from both folders.

A ROM selected from this combined menu item will launch using the emulator in the tag of the folder is lives in.

---

### Disc-based games

To streamline launching multi-file disc-based games, place your BIN / CUE files in a folder
with the same name as the CUE file.

NextUI will automatically launch the CUE file instead of navigating into the folder when selected.

```
  Tony Hawk's Pro Skater 2 (USA)/
      Tony Hawk's Pro Skater 2 (USA).bin
      Tony Hawk's Pro Skater 2 (USA).cue
```

For multi-disc games, follow these steps.

1. Create a folder for your disc files.
2. Put all the disc files into this folder.
3. Then create a `.m3u` file that matches the name of the folder created in step one.
4. Edit the `.m3u` file by adding the relative path to each disc's cue file, one file per line.

NextUI will automatically launch the CUE file instead of navigating into the folder when selected.

For example, Final Fantasy VII has three discs:

```
  Final Fantasy VII (USA)/
    Final Fantasy VII (USA).m3u
    Final Fantasy VII (USA) (Disc 1).bin
    Final Fantasy VII (USA) (Disc 1).cue
    Final Fantasy VII (USA) (Disc 2).bin
    Final Fantasy VII (USA) (Disc 2).cue
    Final Fantasy VII (USA) (Disc 3).bin
    Final Fantasy VII (USA) (Disc 3).cue
```

The `.m3u` file for FF7 would contain:

```
  Final Fantasy VII (USA) (Disc 1).cue
  Final Fantasy VII (USA) (Disc 2).cue
  Final Fantasy VII (USA) (Disc 3).cue
```

When you are playing a multi-disc game the NextUI In Game Menu will display the current disc.

Use `left` or `right` on the D-Pad to change discs.

NextUI also supports `.chd` files and `.pbp` files under 2GB.

!!! info "Multi-disc games share the same memory card and save state slots across all discs."

---

### Collections

A collection is just a text file containing an ordered list of full paths to rom, cue, or m3u files. These text files
live in the "Collections" folder at the root of your SD card, eg. `SDCARD_ROOT/Collections/Metroid series.txt` might
look like
this:

```
  /Roms/GBA/Metroid Zero Mission.gba
  /Roms/GB/Metroid II.gb
  /Roms/SNES (SFC)/Super Metroid.sfc
  /Roms/GBA/Metroid Fusion.gba
```

If you disable all visible folders under 'Roms', the 'Collections' folders contents will populate the main menu instead
of being nested in the 'Collections' folder in the UI.

---

### Display names

Certain (unsupported arcade) cores require roms to use arcane file names. You can override the display name used
throughout NextUI by creating a map.txt in the same folder as the files you want to rename. One line per file, `rom.ext`
followed by a single tab followed by `Display Name`. You can hide a file by adding a `.` at the beginning of the display
name. eg. The 'Collections' folder needs its own map.txt file as well.

```
  neogeo.zip	.Neo Geo Bios
  mslug.zip	Metal Slug
  sf2.zip	Street Fighter II
```

---

### Doom PWADs

NextUI supports Doom via the [PrBoom Libretro Core](https://docs.libretro.com/library/prboom/). PrBoom supports customized wad
add-ons - PWADs - and the recommendation for usage with NextUI is to use an m3u file to reference the pwad.

```
/Roms/Doom (PRBOOM)/Mod Name/
  Mod Name.m3u
  Mod Name.wad
```

The `.m3u` file for `Mod Name` would contain:

```
Mod Name.wad
```

By default, PrBoom loads the base WADs - IWADs - from the Bios director is a specific order, causing issues if all the IWADs
are placed in the root of the `/Bios/PRBOOM` folder. To ensure the correct IWAD is loaded, NextUI supports creating a `doom.version`
file in the folder containing the m3u.

```
/Roms/Doom (PRBOOM)/Mod Name/
  Mod Name.m3u
  Mod Name.wad
  doom.version
```

The `doom.version` file maps to a subfolder in the `/Bios/PRBOOM` folder that should be used to load dependencies, such as
the IWAD or custom mp3 files. For instance, if the PWAD requires `Doom` (commercial) and the `doom.wad` is in `/Bios/PRBOOM/doom2`, then
the contents of the `doom.version` file would be:

```
doom1
```

Users can then add the following files to `/Bios/PRBOOM/doom1` and NextUI will load them when starting the selected PWAD:

```
doom1.wad
intro.mp3
e1m1.mp3
```

!!! note

    The PrBoom core _requires_ the `prboom.wad` IWAD file. It can be placed in `/Bios/PRBOOM` and NextUI will automatically
    load it with the specified Doom version for your IWAD.

---
