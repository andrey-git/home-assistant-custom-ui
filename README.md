# Custom UI elements for https://home-assistant.io

## Known issues
Seems this element doesn't work on iOS / Mac Safari.
See https://community.home-assistant.io/t/tutorial-for-new-custom-state-card-ui/11799

## Available elements:
  * state-card-custom_light
    * ha-themed-slider

## Usage
Copy the element and its dependencies to `www/custom_ui/` directory under you homeassistant config.

In the `customize:` section of `configuration.yaml` put `custom_ui_state_card: <element-name>``

For example:
```yaml
homeassistant:
  customize:
    - entity_id: light
      custom_ui_state_card: custom_light
```

## Available customization

Customization is set by using `customize:` in `configuration.yaml`

### state-card-custom_light

If there is enough space the card will have icon+name on the left, slider in the middle and toggle on the right:

`[X] Name [---*---] [=*]`

If there is not enough horizontal space the mode is set by `state_card_mode` parameter

| `state_card_mode` value | description |
| --- | --- |
| break-slider-toggle (default) | Move the slider and the toggle together to a second line. | 
| single-line | Never use more than one line. Shrink the name and the slider. |
| break-slider | Move slider to second line. Leave toggle on the first line.|
| hide-slider | Hide the slider.|

The slider behavior is controlled by `slider_theme` dictionary. In that dictionary the following optional fields are available:

| field | default | description |
| --- | --- | --- |
| min | 0 | Minimum brightness value |
| max | 255 | Maximum brightness value |
| pin | False | Display numeric value when moving the slider |
| off_when_min | True | Whether to turn the light *off* when moving the slider to the mininmum value if that value is not 0 |
| report_when_not_changed | True | Whether to send the light-controlling command if the slider was returned to the initial position. I.e. you movied the slider and then changed your mind |

#### Complete example
```yaml
homeassistant:
  customize:
    - entity_id: light.bedroom
      custom_ui_state_card: custom_light
      state_card_mode: break-slider
      slider_theme:
        min: 10
        max: 200
        pin: true
        off_when_min: false
        report_when_not_changed: false
```
