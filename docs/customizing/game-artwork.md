## Game Artwork

NextUI looks for accompanying media for each emulator under `/Roms/[Emulator]/.media`.

To add artwork:

1. Create the `.media` folder if it does not exist.
2. In the `.media` folder, add an image in `PNG` format with the exact same name as the ROM file (NextUI will automatically scale the artwork).

Here's an example:

```
# With an SFC game located at:
# /Roms/SFC/My Awesome Game.smc
# the box art or in-game preview is located at:

/Roms/SFC/.media/My Awesome Game.png
```

The [Artwork Scraper pak](https://github.com/josegonzalez/minui-artwork-scraper-pak/) can also be used
to automatically download artwork for your device.
