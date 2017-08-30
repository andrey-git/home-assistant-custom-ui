# Context / Device aware attributes
![context_aware](https://cloud.githubusercontent.com/assets/5478779/26284053/45fbc000-3e3b-11e7-8d4a-56ef0d5e6c60.png)

## Context-aware
You can use context-aware attributes to give different names for the same entity in different groups or views.
For example if you have a *Yard Light* and a *Yard Sensor* in a group named *Yard*, you could name the entities as *Light* and *Sensor* in the group only by using context-aware `friendly_name` attribute. This will also work in views (`view: yes` groups). In order to rename an entity in the default view, use `default_view` view name (even if you didn't define such a view).

Example:
```yaml
homeassistant:
  customize_glob:
    "*.*":
      custom_ui_state_card: state-card-custom-ui  
    light.yard_light:
      friendly_name: Yard Light
      group:
        group.yard:
          friendly_name: Light
    sensor.yard_sensor:
      friendly_name: Yard Sensor
      group:
        group.yard:
          friendly_name: Sensor

group:
  yard:
    entities:
      - light.yard_light
      - sensor.yard_sensor
```

## Device-aware attributes
You can also change attributes per device. For example:
```yaml
homeassistant:
  customize_glob:
    "*.*":
      custom_ui_state_card: state-card-custom-ui  
    device_tracker.joe_phone:
      friendly_name: Joe phone
      device:
        joe_mobile:
          friendly_name: My phone
```
The name of each device is set in CustomUI panel registered by [customizer](https://github.com/andrey-git/home-assistant-customizer) custom component.

![custom_panel](https://user-images.githubusercontent.com/5478779/28746049-c015846a-74bf-11e7-939b-c48fc9d606b1.png)

If both context-aware and device-aware attributes are specified - device-aware will be applied first and then context-aware, possibly overriding device-aware attributes. Those can also be nested:
```yaml
homeassistant:
  customize_glob:
    "*.*":
      custom_ui_state_card: state-card-custom-ui  
    device_tracker.joe_phone:
      friendly_name: Joe phone
      group:
        group.phones:
          friendly_name: Joe
      device:
        joe_mobile:
          friendly_name: My phone
          group:
            phones:
              friendly_name: My

group:
  phones:
    entities:
      - device_tracker.joe_phone
```


### Context-aware hide
In case you want a device to be a member of a group but not *show* in the group - use context-aware `hidden` attribute.
Unlike the regular `hidden: true` which hides the device in all views, context-aware `hidden: true` will hide the devices in specified groups only.
```yaml
homeassistant:
  customize:
  ...
    light.yard_light:
      group:
        group.yard:
          hidden: true

group:
  yard:
    entities:
      - light.yard_light
      ...
```

### Other uses
Context or Device aware attributes also work for custom attributes, like `hide_control`, `show_last_changed`, and others.
