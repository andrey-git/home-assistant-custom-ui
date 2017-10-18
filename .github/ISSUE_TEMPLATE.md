### Checklist
- [ ] I'm running the latest version of CustomUI ([Update guide](https://github.com/andrey-git/home-assistant-custom-ui/blob/master/docs/installing.md#updating)) or using a specific [release](https://github.com/andrey-git/home-assistant-custom-ui/releases) that is not marked as "Broken".
- [ ] I tried to force-refresh (Ctrl+Shift+R / Ctrl+F5) the browser
- [ ] (Optional, but recommended) I'm using Chrome or tried to reproduce the feature on Chrome.

**Browser + Version:** <!-- i.e. Chrome 60 -->

<!-- To check either:
 * Go to /dev-info panel. The CustomUI version will be under Home Assistant version
 * Open browser dev console (see below). CustomUI version should be printed there.
-->
**CustomUI version:** <!-- i.e. 20170201 -->

**Home Assistant release (`hass --version`):** <!-- i.e. 0.48.5 -->

**Problem-relevant `configuration.yaml` entries:**
```yaml

```

**Problem-relevant Home Assistant log entries:**
```

```

<!-- Ctrl+Shift+J on Chrome / Firefox -->
<!-- If there are any errors here, please try to use the Debug version of CustomUI:
  * If using customizer custom_component, use it load hosted debug version:
    customizer:
      custom_ui: local
  * If loading manually, replace URL with the following:
    frontend:
      extra_html_url:
        - https://raw.githubusercontent.com/andrey-git/home-assistant-custom-ui/master/state-card-custom-ui-dbg.html
  -->
**Any errors from browser Javascript console:**
```

```
