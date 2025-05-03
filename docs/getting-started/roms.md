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
