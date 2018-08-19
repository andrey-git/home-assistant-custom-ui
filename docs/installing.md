# Installing CustomUI

## Hosted use (HA 0.53+)

Instead of installing CustomUI files on you Home Assistant machine you can have your browser fetch them directly from GitHub servers. In this case you don't need to download any files.

Pros:
*   Easier to set up.
*   You can choose to either use the 'latest' release or a specific release.
*   You automatically get bug-fixes if you use 'latest'.

Cons:
*   Requires Internet connection.
*   The hoster of the files (GitHub) can track how often you open Home Assistant.
*   You automatically get breaking changes if you use 'latest'.

## Local install

### Automatic install.

1) Download [update.sh](../update.sh) to your homeassistant config dir. (For example `/home/homeassistant/.homeassistant/`)
You can do so by running
```bash
curl -o update.sh "https://raw.githubusercontent.com/andrey-git/home-assistant-custom-ui/master/update.sh?raw=true"
```
from that dir.

2) Make `update.sh` executable by running
```bash
$ chmod u+x update.sh
```
3) Run it:
```bash
$ ./update.sh
```

The script updates itself and downloads CustomUI main code into `www/custom_ui` and Customizer component into `custom_components`. The script will prompt you about creating any of those dirs if they don't exist.

### Updating
Run
```bash
$ ./update.sh
```
again. It will update everything telling you which files changed.

### Manual install

Place [state-card-custom-ui.html](../state-card-custom-ui.html?raw=true) and [state-card-custom-ui.html.gz](../state-card-custom-ui.html.gz?raw=true) in `~/.homeassistant/www/custom_ui/` dir to install the main code.

Additionally on HA 0.59 and later place [state-card-custom-ui-es5.html](../state-card-custom-ui-es5.html?raw=true) and [state-card-custom-ui-es5.html.gz](../state-card-custom-ui-es5.html.gz?raw=true) in `~/.homeassistant/www/custom_ui/` dir to install the es5 version.

(HA 0.52 and earlier only) Place [ha-panel-custom-ui.html](../ha-panel-custom-ui.html?raw=true) and [ha-panel-custom-ui.html.gz](../ha-panel-custom-ui.html.gz?raw=true) in `~/.homeassistant/panels/` dir to install CustomUI configuration panel.

Place all files from [https://github.com/andrey-git/home-assistant-customizer/tree/master/customizer](https://github.com/andrey-git/home-assistant-customizer/tree/master/customizer) into `~/.homeassistant/custom_components/customizer`
