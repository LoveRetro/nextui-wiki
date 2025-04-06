# Adding Emulator Icons

Create a `.media` directory under the corresponding folder to create icons for Emulators, Collections and Tools.

# Emulator Icon Directory Structure

```
Example System Used: Game Boy Advanced (MGBA)
Example Rom Used:    My Awesome Game.gba
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
│  │  ├─ Game Boy Advanced (MGBA).png          *Main Menu Console Icon
│  ├─ Game Boy Advanced (MGBA)/
│  │  ├─ .media/
│  │  │  ├─ bg.png                             *MGBA Rom List Background
│  │  │  ├─ My Awesome Game.png                *Box Art / In-game Preview
│  │  ├─ My Awesome Game.gba                   *Rom Location
├─ Screenshots/
│  ├─ screenshot.png                           *Screenshot Monitor Pak PNG Output Location
├─ Tools/
│  ├─ .media/
│  │  ├─ tg5040.png                            *Tools list Icon in Main Menu
│  ├─ tg5040/
│  │  ├─ .media/
│  │  │  ├─ bg.png                             *Tools List Main Menu Background
│  │  │  ├─ Artwork Scraper.png                *Individual Tool Icon in Tools List
```
