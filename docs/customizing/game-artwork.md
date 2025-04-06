# Game Artwork

NextUI looks for accompanying media for each emulator under `/Roms/[Emulator]/.media` folder.
Create the `.media` folder if it does not exist. Put an image in `PNG` format with the exact same name as the ROM file.
NextUI will automatically scale or resize the media file.

If you have a game at `/Roms/Emulator/game.zip`, then the corresponding artwork file would be `/Roms/Emulator/.media/game.png`.

For a more concrete example:

```
# With an SFC game located at:
# /Roms/SFC/My Awesome Game.smc
# The Box Art or In-game Preview is located at:

/Roms/SFC/.media/My Awesome Game.png
```

The [Artwork Scraper pak](https://github.com/josegonzalez/minui-artwork-scraper-pak/) can also be used
to automatically download artwork for your device.
