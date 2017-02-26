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
  customize_glob:
    light.*
      custom_ui_state_card: custom_light
```

## Available customization

Customization is set by using `customize:` in `configuration.yaml`

### state-card-custom_light

If there is enough space the card will have icon+name on the left, slider in the middle and toggle on the right:

![wide](https://cloud.githubusercontent.com/assets/5478779/23335593/e344048e-fbc0-11e6-81fd-85466a6b98b2.png)

If there is not enough horizontal space the mode is set by `state_card_mode` parameter

| `state_card_mode` value | description |
| --- | --- |
| break-slider-toggle (default) | Move the slider and the toggle together to a second line. | 
| single-line | Never use more than one line. Shrink the name and the slider. |
| break-slider | Move slider to second line. Leave toggle on the first line.|
| hide-slider | Hide the slider.|

![medium](https://cloud.githubusercontent.com/assets/5478779/23335594/e909eee2-fbc0-11e6-8429-8648b89d6d13.png) ![narrow](https://cloud.githubusercontent.com/assets/5478779/23335595/eceaa92a-fbc0-11e6-9dff-018585f60ff0.png)

If the slider got moved to a new line it will be 200 px wide.
Use `stretch_slider` attribute to make it strech to all available space.


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
    light.bedroom:
      custom_ui_state_card: custom_light
      state_card_mode: break-slider
      stretch_slider: true
      slider_theme:
        min: 10
        max: 200
        pin: true
        off_when_min: false
        report_when_not_changed: false
```
