# Activating

## For Home Assistant 0.53+

#### 1. Tell Home Assistant to load relevant files.
(**Only one** of 1.1 - 1.8)

1.1 Using [customizer](https://github.com/andrey-git/home-assistant-customizer/) for [local install](installing.md#local-install)
```yaml
customizer:
  custom_ui: local
```

1.2 Manually for [local install](installing.md#local-install)

HA 0.53-0.58
```yaml
frontend:
  extra_html_url:
    - /local/custom_ui/state-card-custom-ui.html
```
HA 0.59+
```yaml
frontend:
  extra_html_url:
    - /local/custom_ui/state-card-custom-ui.html
  extra_html_url_es5:
    - /local/custom_ui/state-card-custom-ui-es5.html

```
1.3 Using [customizer](https://github.com/andrey-git/home-assistant-customizer/) for [hosted](installing.md#hosted-use-053) use of head version
```yaml
customizer:
  custom_ui: hosted
```

1.4 Manually for [hosted](installing.md#hosted-use-053) use of head version

HA 0.53-0.58
```yaml
frontend:
  extra_html_url:
    - https://raw.githubusercontent.com/andrey-git/home-assistant-custom-ui/master/state-card-custom-ui.html
```
HA 0.59+
```yaml
frontend:
  extra_html_url:
    - https://raw.githubusercontent.com/andrey-git/home-assistant-custom-ui/master/state-card-custom-ui.html
  extra_html_url_es5:
    - https://raw.githubusercontent.com/andrey-git/home-assistant-custom-ui/master/state-card-custom-ui-es5.html
```

1.5 Using [customizer](https://github.com/andrey-git/home-assistant-customizer/) for a specific release
```yaml
customizer:
  custom_ui: 20170830
```

1.6 Manually for [hosted](installing.md#hosted-use-053) use of a specific release

HA 0.53-0.58
```yaml
frontend:
  extra_html_url:
    - https://github.com/andrey-git/home-assistant-custom-ui/releases/download/20170830/state-card-custom-ui.html
```
HA 0.59+
```yaml
frontend:
  extra_html_url:
    - https://github.com/andrey-git/home-assistant-custom-ui/releases/download/20171129/state-card-custom-ui.html
  extra_html_url_es5:
    - https://github.com/andrey-git/home-assistant-custom-ui/releases/download/20171129/state-card-custom-ui-es5.html
```

1.7 Using [customizer](https://github.com/andrey-git/home-assistant-customizer/) for debug head version. (Only use for reporting readable Javascript errors!)
```yaml
customizer:
  custom_ui: debug
```

1.8 Manually for debug head version. (Only use for reporting readable JavaScript errors!)

HA 0.53-0.58
```yaml
frontend:
  extra_html_url:
    - https://raw.githubusercontent.com/andrey-git/home-assistant-custom-ui/master/state-card-custom-ui-dbg.html
```
HA 0.59+
```yaml
frontend:
  extra_html_url:
    - https://github.com/andrey-git/home-assistant-custom-ui/releases/download/20171129/state-card-custom-ui-dbg.html
  extra_html_url_es5:
    - https://github.com/andrey-git/home-assistant-custom-ui/releases/download/20171129/state-card-custom-ui-dbg-es5.html
```

#### 2. Tell Home Assistant to use CustomUI for state cards.

In the `customize:` section of `configuration.yaml` put `custom_ui_state_card: state-card-custom-ui` for the relevant entities / domains.

To use CustomUI for light and cover domain:
```yaml
homeassistant:
  customize_glob:
    light.*:
      custom_ui_state_card: state-card-custom-ui
    cover.*:
      custom_ui_state_card: state-card-custom-ui
```

Note that yaml keys can't start with an asterix. Use quotes in that case:
```yaml
customize_glob:
  "*.*":
    custom_ui_state_card: state-card-custom-ui
```


## For Home Assistant up to 0.52
In the `customize:` section of `configuration.yaml` put `custom_ui_state_card: custom-ui` for the relevant entities / domains.

For example:
```yaml
homeassistant:
  customize_glob:
    light.*:
      custom_ui_state_card: custom-ui
    cover.*:
      custom_ui_state_card: custom-ui
```

Note that yaml keys can't start with an asterisk. Use quotes in that case:
```yaml
customize_glob:
  "*.*":
    custom_ui_state_card: custom-ui
```
