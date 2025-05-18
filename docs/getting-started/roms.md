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
3. Create a `.m3u` file that matches the name of the folder created in step one.
4. Edit the `.m3u` file and add the relative path to each disc's .cue file, one file per line.

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

When you are playing a multi-disc game, the NextUI in-game Menu will display the current disc.

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
neogeo.zip  .Neo Geo Bios
mslug.zip   Metal Slug
sf2.zip	    Street Fighter II
```

---

### Doom PWADs

!!! warning

    The PrBoom core _requires_ the `prboom.wad` IWAD file - which is treated as a Bios file - and that file is available
    for download [here](https://github.com/libretro/libretro-prboom/blob/master/prboom.wad).
    It can be placed in `/Bios/PRBOOM`.

NextUI supports Doom via the [PrBoom Libretro Core](https://docs.libretro.com/library/prboom/), and loads Doom PWAD - or
patch wad - files as it's game format. It also uses IWADs (internal Doom WADs) as the Bios files.

!!! note

    The following documentation will use the fictional `NextUI Doom.wad` (Doom 1) and `NextUI Doom 2.wad` (`Doom 2)
    as the PWADs Megawads being loaded.

To setup a PWAD, place it in the `/Roms/Doom (PRBOOM)` folder on your SD Card.

```
/Roms/Doom (PRBOOM)/NextUI Doom.wad
```

PWADs all depend on a particular IWAD as the base for running the PWAD. IWADs are placed in the `/Bios/PRBOOM` folder,
and a list of them is available in the [Required BIOS](#required-bios) section. If all your PWADs use the same IWAD - for instance,
`doom1.wad` then the IWAD can be placed directly in the `/Bios/PRBOOM` folder, and PrBoom will load the PWADs as expected.

```
/Bios/PRBOOM/doom1.wad
```

!!! note

    All IWADs must be named using lowercase characters, including for the file extension.

In many cases, you will want to load specific PWADs with specific IWADs. Due to how PrBoom detects IWADs and lacking
information about which IWAD is required by a PWAD, PrBoom may load the incorrect IWAD for your PWAD. To combat this,
NextUI supports using a `doom.version` file to specify the correct `/Bios/PRBOOM` subdirectory to reference. Omitting
a `doom.version` text file will result in the default PrBoom using the default IWAD detection algorithm. It is recommended
to use a `doom.version` text file in conjuction with the `m3u` text file format commonly used for [Disc-based games](#disc-based-games)
to tie PWADs to have a clean directory structure.

Using `NextUI Doom.wad` as an example, we would have the following directory structure in our Roms folder:

```
/Roms/Doom (PRBOOM)/NextUI Doom/NextUI Doom.wad
/Roms/Doom (PRBOOM)/NextUI Doom/NextUI Doom.m3u
/Roms/Doom (PRBOOM)/NextUI Doom/doom.version
```

The contents of the newly created `NextUI Doom.m3u` text would contain:

```
NextUI Doom.wad
```

While the newly created `doom.version` text file would contain the following:

```
doom1
```

The `doom.version` text file maps to a subfolder in the `/Bios/PRBOOM` folder that should be used to load dependencies, such as
the IWAD or custom mp3 files. In the case of Doom 1 (Commercial), the commercial IWAD would be placed on the disk like so:

```
/Bios/PRBOOM/doom1/doom1.wad
```

Music for particular IWADs can also be customized by placing the [correctly named files](https://docs.libretro.com/library/prboom/#music) into the correct `/Bios/PRBOOM` subdirectory:

```
/Bios/PRBOOM/doom1/intro.mp3
/Bios/PRBOOM/doom1/e1m1.mp3
```

To load our `NextUI Doom 2.wad` megawad with only the title music changing, the following would be a sample file structure:

```
/Roms/Doom (PRBOOM)/NextUI Doom/NextUI Doom 2.wad
/Roms/Doom (PRBOOM)/NextUI Doom/NextUI Doom 2.m3u
/Roms/Doom (PRBOOM)/NextUI Doom/doom.version
/Bios/PRBOOM/doom2/doom1.wad
/Bios/PRBOOM/doom2/dm2ttl.mp3
```

The contents of `NextUI Doom 2.m3u` text file would be:

```
NextUI Doom 2.wad
```

And the `doom.version` text file would have the following as it's contents:

```
doom2
```

---
