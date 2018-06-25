# CustomUI Features

*   [Customizer component](#customizer-component)
*   [CustomUI panel](#customui-panel)
*   [Global Features](#global-features)
    +   [Hiding entities from default view tab (HA 0.62+)](#hiding-entities-from-default-view-tab)
    +   [Template attributes [New in 20170927]](#template-attributes)
    +   [Icon Color](#icon-color)
    +   [Action name](#action-name)
*   [Features available for all domains](#features-available-for-all-domains)
    +   [Context-aware attributes](#context-aware-attributes)
    +   [Badges in state cards](#badges-in-state-cards)
    +   [Per entity theming (Requires HA 0.50+)](#per-entity-theming)
    +   [Secondary custom UI](#secondary-customui)
*   [Features available for almost all domains](#features-available-for-almost-all-domains)
    +   [You can always show the last-changed text](#you-can-always-show-the-last-changed-text)
*   [Features available for light, cover, climate, "plain", and "toggle" cards](#features-available-for-light-cover-climate-plain-and-toggle-cards)
    -   [You can hide the control altogether](#you-can-hide-the-control-altogether)
    -   [You can add extra data below the entity name](#you-can-add-extra-data-below-the-entity-name)
    -   [Add badge to the state card](#add-badge-to-the-state-card)
    -   [Confirmable controls](#confirmable-controls)
    -   [Custom controls](#custom-controls)
*   [Features available for light and cover domains only](#features-available-for-light-and-cover-domains-only)
    -   [If there is not enough horizontal space the mode is set by `state_card_mode` parameter](#if-there-is-not-enough-horizontal-space-the-mode-is-set-by-state_card_mode-parameter)
    -   [If the slider got moved to a new line it will be 200 px wide.](#if-the-slider-got-moved-to-a-new-line-it-will-be-200-px-wide)
    -   [The slider behavior is controlled by `slider_theme` dictionary.](#the-slider-behavior-is-controlled-by-slider_theme-dictionary)
*   [Complete example](#complete-example)


## Customizer component
See instruction in a dedicated repository: [https://github.com/andrey-git/home-assistant-customizer](https://github.com/andrey-git/home-assistant-customizer/)
Provides the following features:
*   Load CustomUI files (HA 0.53+)
*   Register CustomUI panel (HA 0.52 and below).
*   Hide CustomUI attributes in `more-info` (HA 0.50 - 0.52)
*   Hide arbitrary attributes in `more-info` (Requires HA 0.50+)
*   Dynamic customization.
*   Set the width and number of UI columns (Requires CustomUI 20180112+)


## CustomUI panel
![Section in Configuration panel](https://user-images.githubusercontent.com/5478779/33785533-1fa54a6c-dc6e-11e7-94e5-9e20071b1da9.png)
Use it to set device name.

In HA 0.53+ is added automatically to configuration panel.

## Global Features
Those features do not require setting `custom_ui_state_card: state-card-custom-ui`
on any entity. Just [loading](activating.md) is enough.

### Hiding entities from default view tab
Requires HA 0.62+

If you don't have a `default_view` view defined you still hide some entities from the Home tab by setting `hide_in_default_view: true` attribute.

If applied to a View (a group with `view: true`) `hide_in_default_view` will hide everything under that view (not just the view group itself).

Apply `hide_in_default_view: false` to prevent a specific entity from being hidden even if it is part of another view with `hide_in_default_view: true`


### Template attributes
You can set entity's attributes or state using JavaScript templates. See [Templates](templates.md) for more info.

For example to show "Active" instead of "on" for binary sensor:
```yaml
homeassistant:
  customize:
    binary_sensor.my_sensor:
      templates:
        state: if (state === 'on') return 'Active'; else return state;
```
This is very powerful feature that can do a lot of cool things, but it could also have performance implications.

### Icon Color
Starting from version 2018-04-27 you can set an icon color by specifying `icon_color`
attribute which was removed from core in HA 0.66

For example:
```yaml
homeassistant:
  customize:
    light.bed_light:
      icon_color: green
```

The color could take any CSS color value. For example: `#FFACAC`, `red`, `rgba(10, 20, 30, 0.5)` etc.

Note that the color will be applied as-is and it won't be affected by the `brightness` attribute.h

### Action name
Starting from version 2018-04-29 you change the displayed action name by specifying `action_name` attribute.

Action name is the button used to activate scenes and to execute non-interruptible scripts.

For example:
```yaml
homeassistant:
  customize:
    scene.dark:
      action_name: Darken
```

## Features available for all domains

### Context-aware attributes
![context_aware](https://cloud.githubusercontent.com/assets/5478779/26284053/45fbc000-3e3b-11e7-8d4a-56ef0d5e6c60.png)

You can use context-aware attributes to give different names/attributes for the same entity in different groups, views, or devices.
See [context-aware.md](context-aware.md)

### Badges in state cards
![badges](https://cloud.githubusercontent.com/assets/5478779/26284132/b4a2dbe6-3e3c-11e7-9bb5-0441d30342bf.png)

If you like badges, you can now put them in the state cards. This also works for domains that are usually not used as a badge. Lights for example.
There are 4 ways to put badges in a state card.

1) Turn a single state card into a badge. Adjacent badges will clamp together to a single line.

```yaml
homeassistant:
  customize_glob:
    "*.*":
      custom_ui_state_card: state-card-custom-ui  
    sensor.door_sensor:
      state_card_mode: badges
    sensor.yard_sensor:
      state_card_mode: badges

group:
  my_group:
    entities:
      - sensor.door_sensor
      - sensor.yard_sensor
```

2) Create a dedicated group of devices you want to display as badges and apply `state_card_mode: badges` to it. Note that this group must be in another group. The example below will show 2 sensors as badges in outer_group's card.

```yaml
homeassistant:
  customize_glob:
    "*.*":
      custom_ui_state_card: state-card-custom-ui  
    group.inner_group:
      state_card_mode: badges

group:
  inner_group:
    entities:
      - sensor.door_sensor
      - sensor.yard_sensor
  outer_group:
    entities:
      - group.inner_group
      *all other devices of outer_group*
```

3) If you already have a group, *part* of which you want to display as badges *inside another group* - use `badges_list` to filter badge wannabe entities. In the previous example, if you wanted to show only `sensor.door_sensor` as a badge in outer_group:
```yaml
...
    group.inner_group:
      state_card_mode: badges
      badges_list:
        - sensor.door_sensor
group:
  inner_group:
     ...
  outer_group:
    ...
...
```

4) Creating a dedicated group has a downside that the group will also show in the UI as whole in the default_view. To prevent that, you can make the group include itself. In the following example `inner_group` and `outer_group` are the same group:
```yaml
homeassistant:
  customize_glob:
    "*.*":
      custom_ui_state_card: state-card-custom-ui  
    group.my_group:
      state_card_mode: badges

group:
  my_group:
    entities:
      - sensor.door_sensor
      - sensor.yard_sensor
      - group.my_group
      *all other devices of outer_group*
```
If you use this example as-is you will notice that all of your devices in the group appear both as regular state cards and as badges. To limit badges to the door/yard sensors only use `badges_list` from Example 2. To hide door/yard sensor cards (but leave them as badges) use the [Context-aware hide attribute](#context-aware-attributes) feature.  
Full example:
```yaml
homeassistant:
  customize_glob:
    "*.*":
      custom_ui_state_card: state-card-custom-ui  
    group.my_group:
      state_card_mode: badges
      badges_list:
        - sensor.door_sensor
        - sensor.yard_sensor
    sensor.door_sensor:
      group:
        group.my_group:
          hidden: true
    sensor.yard_sensor:
      group:
        group.my_group:
          hidden: true

group:
  my_group:
    entities:
      - sensor.door_sensor
      - sensor.yard_sensor
      - light.mylight
      - group.my_group
```

### Per entity theming
Requires HA 0.50+

![entity_themed](https://user-images.githubusercontent.com/5478779/28746280-0839b3f2-74c4-11e7-9478-bb197f9fd005.png)

You can select per-entity theme from the list of defined [themes](https://home-assistant.io/components/frontend/)
```yaml
frontend:
  themes:
    green_example:
      paper-toggle-button-checked-button-color: green
light.yard:
  theme: green_example
```

Starting from version 2018-01-26 per-entity theming can also affect top-of-the-page
badges.

### Secondary customUI
![secondary_custom_ui](https://user-images.githubusercontent.com/5478779/30005196-a8d8bd2a-90e5-11e7-9f4c-a787a1227076.png)

If you would like to use your own [state-card-custom-alarm.html](https://community.home-assistant.io/t/custom-ui-with-buttons-fan-control/13808/46) for `alarm_control_panel` but still enjoy framework features of CustomUI, like theming, you can use `state_card_custom_ui_secondary`:
```yaml
homeassistant:
  customize_glob:
    "*.*":
      custom_ui_state_card: state-card-custom-ui
    alarm_control_panel.alarm:
      state_card_custom_ui_secondary: state-card-custom_alarm
```

## Features available for almost all domains.

The following is supported for all state cards except `configurator`

#### You can always show the last-changed text
![show_last_changed](https://cloud.githubusercontent.com/assets/5478779/24838935/37b90bf8-1d5a-11e7-9e28-970740ba2fa8.png)

Use `show_last_changed: true`

Note that if you use the [extra_data_template](#you-can-add-extra-data-below-the-entity-name-requires-ha-043) below it will take precedence over `show_last_changed`

## Features available for light, cover, climate, "plain", and "toggle" cards.

The next features are available for 4 types of cards:
*   Light
*   Cover
*   Climate
*   "Plain" i.e. card with icon, name, and state.
*   "Toggle" i.e. card with icon, name, and toggle.

#### You can hide the control altogether
![hide_control](https://cloud.githubusercontent.com/assets/5478779/24772031/8a7d546e-1b18-11e7-935a-4360eeb9ebc8.png)

Use `hide_control: true` to hide the control (toggle / cover buttons) altogether.

#### You can add extra data below the entity name
![extra_data](https://cloud.githubusercontent.com/assets/5478779/24772032/8a7e90e0-1b18-11e7-9b3e-e36b56ef2417.png)

Use `extra_data_template` to add extra data below the entity name. The format is a [Templates](templates.md).
For example to show power consumption from the `power_consumption` attribute use:
```yaml
extra_data_template: ${attributes.power_consumption}W
```
Use can add several lines by using an array:
```yaml
extra_data_template:
  - ${attributes.power_consumption}W
  - ${attributes.temperature}C
```

#### Add badge to the state card
![extra_badge](https://cloud.githubusercontent.com/assets/5478779/24772030/8a7cc4ea-1b18-11e7-9313-f7654ffb0c71.png)

Instead of using a gray text below the entity name you can add a sensor-like badge. There are two ways to do that:
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

If you use the first format, i.e. a real sensor, you can use context-aware theming
on it.

In both cases you can specify a blacklist of badge "states", when you don't want to see the badge.
```yaml
extra_badge:
  entity_id: sensor.my_sensor
  blacklist_states: 0
```

You can also provide a list of badges:
```yaml
extra_badge:
  - entity_id: sensor.my_sensor1
    blacklist_states: 0
  - entity_id: sensor.my_sensor2
    blacklist_states: 'z'
```

#### Confirmable controls
![confirmable](https://user-images.githubusercontent.com/5478779/28746903-6abd4be2-74ce-11e7-94d9-77423894c423.png)

Sometimes you don't want to flip a switch by mistake.

Use `confirm_controls_show_lock` to block the control and show a transparent lock icon over it. Tapping on the lock will open it for 5 seconds allowing to use the control. If you would like to prevent accidental flip without the visual lock hint, use `confirm_controls` instead.

#### Custom controls

You can replace the default control with another control by using `control_element` attribute.

For example:
```yaml
switch.my:
  control_element: my-custom-switch-element
```

You can also use `control_element: ''` to show the state, like the "plain" card does.

## Features available for light and cover domains only

If there is enough space the card will have icon+name on the left, optional slider in the middle and toggle on the right:

![cover](https://cloud.githubusercontent.com/assets/5478779/23921980/4eab7978-0909-11e7-8058-ad17a52d93c3.png)

![wide](https://cloud.githubusercontent.com/assets/5478779/23335593/e344048e-fbc0-11e6-81fd-85466a6b98b2.png)

#### If there is not enough horizontal space the mode is set by `state_card_mode` parameter
![medium](https://cloud.githubusercontent.com/assets/5478779/23335594/e909eee2-fbc0-11e6-8429-8648b89d6d13.png) ![narrow](https://cloud.githubusercontent.com/assets/5478779/23335595/eceaa92a-fbc0-11e6-9dff-018585f60ff0.png)

| `state_card_mode` value | description |
| --- | --- |
| break-slider-toggle | Move the slider and the toggle together to a second line. |
| single-line | Never use more than one line. Shrink the name and the slider. |
| break-slider | Move slider to second line. Leave toggle on the first line. |
| hide-slider | Hide the slider. |
| no-slider (default) | Never show the slider even if there is enough space. |

#### If the slider got moved to a new line it will be 200 px wide.
Use `stretch_slider` attribute to make it stretch to all available space.

#### The slider behavior is controlled by `slider_theme` dictionary.
In that dictionary the following optional fields are available:

| field | default | description |
| --- | --- | --- |
| min | 0 | Minimum slider value |
| max | 255 for light, 100 for cover | Maximum slider value |
| pin | False | Display numeric value when moving the slider |
| off_when_min | True | Whether to turn the light *off* when moving the slider to the minimum value if that value is not 0 |
| report_when_not_changed | True | Whether to send the light-controlling command if the slider was returned to the initial position. I.e. you moved the slider and then changed your mind |

## Complete example
```yaml
homeassistant:
  customize:
    light.bedroom:
      custom_ui_state_card: state-card-custom-ui
      state_card_mode: break-slider
      stretch_slider: true
      extra_data_template: "${attributes.power_consumption !== 0 ? (attributes.power_consumption + 'W') : ''}"
      hide_control: false
      show_last_changed: false
      theme: happy
      confirm_controls_show_lock: true
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

frontend:
  extra_html_url:
    - /local/custom_ui/state-card-custom-ui.html
```
