## Custom Categories

If folders have the same name prior to the brackets for the emulator, they will be merged. So make one for each emulator, then create subfolders for the systems that use that emulator (note in the second pic you can still use numbers to order the consoles.

## Emulator Directory Structure

```
Example Systems Used: Gameboy (GB), Gameboy Advance (MGBA), NES (FC), Sega Genesis (MD)
Example Rom Used:    My Awesome Game.ext
Example Pak Used:    Artwork Scraper.pak


SD_CARD
├─ bg.png                                      *Default Menu Background
├─ .media/
│  ├─ Collections.png                          *Collections List Icon in Main Menu
│  ├─ Recently Played.png                      *Recently Played List Icon In Main Menu
├─ Collections/
│  ├─ .media/
│  │  ├─ bg.png                                *Collections List Background
│  │  ├─ Collection 1.png                      *Collection Icon In Collections List
│  │  ├─ Collection 2.png                      *Collection Icon In Collections List
├─ Overlays/
│  ├─ MGBA/
│  │  ├─ overlay1.png                          *MGBA System Overlay #1
│  │  ├─ overlay2.png                          *MGBA System Overlay #2
│  │  ├─ overlay3.png                          *MGBA System Overlay #3
│  │  ├─ overlay4.png                          *MGBA System Overlay #4
│  │  ├─ overlay5.png                          *MGBA System Overlay #5
├─ Recently Played/
│  ├─ .media/
│  │  ├─ bg.png                                *Recently Played List Menu Background
├─ Roms/
│  ├─ .media/
│  │  ├─ 01)Handheld (GB).png          		*Main Menu Handheld Icon (match first folder in group)
│  │  ├─ 02)Console (FC).png 			*Main Menu Console Icon (match first folder in group)
│  │  ├─ 03)Arcade (FBN).png 			*Main Menu Console Icon
│  │
│  ├─ 01)Handheld (GB)/				*Uses (GB) to store systems using the GB emulator
│  │  ├─ .media/
│  │  │  ├─ 01)Gameboy.png			*GB system icon
│  │  │  ├─ bg.png				*Background used when highlighting Handheld in the main menu (only required for first folder in group)
│  │  │
│  │  ├─ 01)Gameboy               		*The number here sorts the systems in the Handheld screen
│  │  │  ├─ .media/
│  │  │  │  ├─ bg.png				*Background for GB that will be shown in the Handheld menu
│  │  │  │  ├─ My Awesome Game.png      	*Rom boxart
│  │  │  ├─ My Awesome Game.gb			*Rom file
│  │
│  ├─ 01)Handheld (MGBA)/			*Uses (MGBA) to store systems using the MGBA emulator
│  │  ├─ .media/
│  │  │  ├─ 02)Gameboy Advance.png		*GBA system icon
│  │  │
│  │  ├─ 02)Gameboy Advance                	*The number here sorts the systems in the Handheld screen
│  │  │  ├─ .media/
│  │  │  │  ├─ bg.png				*Background for GBA that will be shown in the Handheld menu
│  │  │  │  ├─ My Awesome Game.png      	*Rom boxart
│  │  │  ├─ My Awesome Game.gba			*Rom file
│  │
│  ├─ 02)Console (FC)/
│  │  ├─ .media/
│  │  │  ├─ 01)NES.png				*NES system icon
│  │  │
│  │  ├─ 01)NES              			*The number here sorts the systems in the Console screen
│  │  │  ├─ .media/
│  │  │  │  ├─ bg.png				*Background for NES shown in console menu
│  │  │  │  ├─ My Awesome Game.png      	*Rom boxart
│  │  │  ├─ My Awesome Game.nes			*Rom file
│  │
│  ├─ 02)Console (MD)/
│  │  ├─ .media/
│  │  │  ├─ 01)Sega Genesis.png			*Sega Genesis system icon shown in Console menu
│  │  │  ├─ 01)Sega Master System.png		*Sega Master system icon shown in Console menu
│  │  │
│  │  ├─ 02)Sega Genesis                	*The number here sorts the systems in the Console screen
│  │  │  ├─ .media/
│  │  │  │  ├─ bg.png				*Background for Sega Genesis shown in Console menu
│  │  │  │  ├─ My Awesome Game.png      	*Rom boxart
│  │  │  ├─ My Awesome Game.md			*Rom file
│  │  │
│  │  ├─ 03)Sega Master System               	*The number here sorts the systems in the Console screen
│  │  │  ├─ .media/
│  │  │  │  ├─ bg.png				*Background for Sega Master System shown in Console menu
│  │  │  │  ├─ My Awesome Game.png      	*Rom boxart
│  │  │  ├─ My Awesome Game.sms			*Rom file
│  │
│  ├─ 03)Arcade(FBN)/
│  │  ├─ .media/
│  │  │  ├─ bg.png				*Background for FBN that will be shown in the Main menu
│  │  │  ├─ My Awesome Game.png      		*Rom boxart
│  │  ├─ My Awesome Game.zip
```

### Notes for Merged Folders
Folders with the same name (with the exception of the brackets) will be merged. To use this functionality, create folders
with matching names (ex. Handheld, Console, Nintendo, Sega, etc.) and in brackets, every emulator you
will need for the systems you want sorted into here.

Think of the folders in 3 tiers
SD/Roms/CategoryName(emulator)/Gamesystem/Games

In tier 2, Create folders for each system that uses the emulator listed in its parent folder
ex. for Console (MD), MD can emulate Sega Genesis, Sega 32x, Sega CD & Sega Master System, so all those system folders should be placed in Console (MD)

In tier 3, place all game files. Additionally at this point subfolders can be easily made for subcategories like rom hacks, translations, etc.

Icons and background for the merged folders only need to be made for the first folder alphabetically. In the example directory structure above, the icon for Gameboy was titled 01)Handheld (GB).png
and the background was placed in Roms/01)Handheld (GB)/.media/bg.png

```
├─ Screenshots/
│  ├─ screenshot.png                           *Screenshot Monitor Pak PNG Output Location
├─ Tools/
│  ├─ .media/
│  │  ├─ tg5040.png                            *Tools List Icon in Main Menu
│  ├─ tg5040/
│  │  ├─ .media/
│  │  │  ├─ bg.png                             *Tools List Main Menu Background
│  │  │  ├─ Artwork Scraper.png                *Individual Tool Icon in Tools List
```
