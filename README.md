# Custom UI elements for https://home-assistant.io

## Changelog
[Changelog](CHANGELOG.md)

## Usage
Place [state-card-custom-ui.html](state-card-custom-ui.html) in `~/.homeassistant/www/custom_ui/` dir.

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

## Features available for all domains

### Context-aware names
Show entities in groups with group-specific names. For example if you have a *Yard Light* and a *Yard Sensor* in a group named *Yard*, you could name the entities as *Light* and *Sensor* in the group only by using `friendly_names` attribute.

Example:
```yaml
homeassistant:
  customize_glob:
    "*.*":
      custom_ui_state_card: custom-ui  
    light.yard_light:
      friendly_name: Yard Light
      friendly_names:
        group.yard: Light
    sensor.yard_sensor:
      friendly_name: Yard Sensor
      friendly_names:
        group.yard: Sensor

group:
  yard:
    entities:
      - light.yard_light
      - sensor.yard_sensor
```

## Features available for light and cover domains only

If there is enough space the card will have icon+name on the left, optional slider in the middle and toggle on the right:

![cover](https://cloud.githubusercontent.com/assets/5478779/23921980/4eab7978-0909-11e7-8058-ad17a52d93c3.png)

![wide](https://cloud.githubusercontent.com/assets/5478779/23335593/e344048e-fbc0-11e6-81fd-85466a6b98b2.png)

#### If there is not enough horizontal space the mode is set by `state_card_mode` parameter
![medium](https://cloud.githubusercontent.com/assets/5478779/23335594/e909eee2-fbc0-11e6-8429-8648b89d6d13.png) ![narrow](https://cloud.githubusercontent.com/assets/5478779/23335595/eceaa92a-fbc0-11e6-9dff-018585f60ff0.png)

| `state_card_mode` value | description |
| --- | --- |
| break-slider-toggle (default) | Move the slider and the toggle together to a second line. | 
| single-line | Never use more than one line. Shrink the name and the slider. |
| break-slider | Move slider to second line. Leave toggle on the first line.|
| hide-slider | Hide the slider.|
| no-slider | Never show the slider even if there is enough space. |

#### If the slider got moved to a new line it will be 200 px wide.
Use `stretch_slider` attribute to make it strech to all available space.

#### You can hide the control altogether
![hide_control](https://cloud.githubusercontent.com/assets/5478779/24772031/8a7d546e-1b18-11e7-935a-4360eeb9ebc8.png)

Use `hide_control: true` to hide the control (toggle / cover buttons) altogether.

#### You can always show the last-chnaged text
![show_last_changed](https://cloud.githubusercontent.com/assets/5478779/24838935/37b90bf8-1d5a-11e7-9e28-970740ba2fa8.png)

Use `show_last_changed: true`

Note that if you use the [extra_data_template](#you-can-add-extra-data-below-the-entity-name) below it will take precedence over `show_last_changed`

#### You can add extra data below the entity name [Requires HA 0.43+]
![extra_data](https://cloud.githubusercontent.com/assets/5478779/24772032/8a7e90e0-1b18-11e7-9b3e-e36b56ef2417.png)

Use `extra_data_template` to add extra data below the entity name. The format is a string where `{attribute_name}`will be replaced by the attribute value.
For example `{power_consumption}W` will parse as `27W` if the value of `power_consumption` is 27.

You can add an attribute value conditionally if it isn't equal to some constant. For example `{power_consumption!=0}W` to only add power consumption if it is not zero.

#### Add badge to the state card [Requires HA 0.42+]
![extra_badge](https://cloud.githubusercontent.com/assets/5478779/24772030/8a7cc4ea-1b18-11e7-9313-f7654ffb0c71.png)

Instead of using a grey text below the enity name you can add a sensor-like badge. There are two ways to do that:
1) Specify a real sensor by entity ID:
```yaml
extra_badge:
  entity_id: sensor.my_sensor
```
2) Make a fake sensor from entity's attribute:
```yaml
extra_badge:
  attribute: power_consumption
  unit: W
```

In both cases you can specify a blacklist of badge "states", when you don't want to see the badge.
```yaml
extra_badge:
  entity_id: sensor.my_sensor
  blacklist_states: 0
```

#### The slider behavior is controlled by `slider_theme` dictionary. In that dictionary the following optional fields are available:

| field | default | description |
| --- | --- | --- |
| min | 0 | Minimum slider value |
| max | 255 for light, 100 for cover | Maximum slider value |
| pin | False | Display numeric value when moving the slider |
| off_when_min | True | Whether to turn the light *off* when moving the slider to the mininmum value if that value is not 0 |
| report_when_not_changed | True | Whether to send the light-controlling command if the slider was returned to the initial position. I.e. you movied the slider and then changed your mind |

#### Complete example
```yaml
homeassistant:
  customize:
    light.bedroom:
      custom_ui_state_card: custom-ui
      state_card_mode: break-slider
      stretch_slider: true
      extra_data_template: "{power_consumption!=10}W"
      hide_control: false
      show_last_changed: false
      slider_theme:
        min: 10
        max: 200
        pin: true
        off_when_min: false
        report_when_not_changed: false
      extra_badge:
        entity_id: sensor.my_sensor  # Will take precedence over attribute and unit below.
        attribute: power_consumption
        unit: W
        blacklist_states: 0
        
```


## Known issues
Custom UI on iOS 10 / Mac Safari 10 requires HA 0.41
