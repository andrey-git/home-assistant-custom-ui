# Installing CustomUI

## Automatic install.

1) Download [update.sh](../update.sh) to your homeassistant config dir. (For example `/home/homeassistant/.homeassistant/`)
You can do so by running
```bash
$ curl -o update.sh "https://raw.githubusercontent.com/andrey-git/home-assistant-custom-ui/master/update.sh?raw=true"
```
from that dir.
2) Make `update.sh` executable by running
```
$ chmod u+x update.sh
```
3) Run it:
```bash
$ ./update.sh
```

The script updates itself and downloads CustomUI main code into `www/custom_ui`, CustomUI panel into `panels`, and Customizer component into `custom_components`. The script will prompt you about creating any of those 3 dirs if they don't exist.

## Updating
Run
```bash
$ ./update.sh
```
again. It will update everything telling you which files changed.
## Manual install

Place [state-card-custom-ui.html](../state-card-custom-ui.html?raw=true) and [state-card-custom-ui.html.gz](../state-card-custom-ui.html.gz?raw=true) in `~/.homeassistant/www/custom_ui/` dir to install the main code.

Place [ha-panel-custom-ui.html](../ha-panel-custom-ui.html?raw=true) and [ha-panel-custom-ui.html.gz](../ha-panel-custom-ui.html.gz?raw=true) in `~/.homeassistant/panels/` dir to install CustomUI configuration panel.

Place all files from https://github.com/andrey-git/home-assistant-customizer/tree/master/customizer into `~/.homeassistant/custom_components/customizer`
