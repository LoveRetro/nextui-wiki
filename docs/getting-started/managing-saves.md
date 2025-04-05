# Managing Saves

NextUI places all save files by system in `SDCARD_ROOT/Saves`.

## RetroArch .srm Support

By default, NextUI uses the emulator's default save file format.

To enable RetroArch .srm save support create a blank file in `SDCARD_ROOT/.userdata/shared`.

After making this change any existing save files will have to be renamed.

!!! warning "Directories and files that start with a period are hidden by default."
    Windows Users: Open File Explorer, click the View Tab, look for the Show / Hide group and check the show hidden files box.

    macOS Users: With a Finder window open use the following keyboard shortcut `Command + Shift + A`.
