# Activating

## For Home Assistant 0.53+

#### 1. Tell Home Assistant to load relevant files.

Using [customizer](https://github.com/andrey-git/home-assistant-customizer/) for [local install](installing.md#local-install)
```yaml
customizer:
  custom_ui: local
```

Manually for [local install](installing.md#local-install)
```yaml
frontend:
  extra_html_url:
    - /local/custom_ui/state-card-custom-ui.html
```

Using [customizer](https://github.com/andrey-git/home-assistant-customizer/) for [hosted](installing.md#hosted-use-053) use of head version
```yaml
customizer:
  custom_ui: hosted
```

Manually for [hosted](installing.md#hosted-use-053) use of head version.
```yaml
frontend:
  extra_html_url:
    - https://raw.githubusercontent.com/andrey-git/home-assistant-custom-ui/master/state-card-custom-ui.html
```

For [hosted use](installing.md#hosted-use-053) of a specific release.
```yaml
frontend:
  extra_html_url:
    - https://github.com/andrey-git/home-assistant-custom-ui/releases/download/20170830/state-card-custom-ui.html
```

#### 2. Tell Home Assistant to use CustomUI for state cards.

In the `customize:` section of `configuration.yaml` put `custom_ui_state_card: state-card-custom-ui` for the relevant entities / domains.

For example:
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

Note that yaml keys can't start with an asterix. Use quotes in that case:
```yaml
customize_glob:
  "*.*":
    custom_ui_state_card: custom-ui
```
