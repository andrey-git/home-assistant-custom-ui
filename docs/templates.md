# Templates

The `templates` attributes allow you to inject your own expressions and code using JavaScript template literals in order to override entity attributes and state. Within these template literals, you have full access to the entity's state object, which allows you to access other properties such as last_changed, attributes.friendly_name, etc. The full set of objects available to your template literals is shown below.

Additionally, `extra_data_template` attribute is always evaluated as a template without using `templates` attributes for it.

In order for a template to return "nothing", for example so that `extra_data_template` won't take space or allow showing `show_last_changed` - return `null` from your template.

**Note that those are JavaScript templates evaluated in your browser, not Jinja2 templates which are evaluated server-side and use a different syntax.**

#### Available variables
`hass` - the hass object

`entities` - a map object from `entity_id` to state objects.

`entity` - the state object for the current entity.
 Note that if you are using device or context aware attributes then the object you get is already modified.

`attributes` attributes map of the current entity. Shortcut for `entity.attributes`.

`attribute` the original (non-template) value of the attribute being calculated by a template. When calculating `state` or `extra_data_template` it will be undefined.

`state` the original (non-template) state of the entity.


#### Template formats
You can provide the template in two slightly different formats.
* If the template contains the word `return` it will be treated as raw javascript code.
* Otherwise it will be treated at javascript template literal.

#### Examples

```yaml
homeassistant:
  customize:
    ...
    light.bedroom:
      templates:
        theme: >
          if (attributes.power_consumption > 10) return 'red'; else return 'default';
      extra_data_template: >
        ${attributes.power_consumption !== 0 ? (attributes.power_consumption + 'W') : ''}
    light.kitchen:
      templates:
        theme: >
          if (entities['light.bedroom'].state === 'on') return 'red'; else return 'default';
      extra_data_template: >
        if (entities['light.bedroom'].attributes.brightness > 30) return 'Yes'; else return null;
```

If you always want to display brightness (even if it is 0%)
```yaml
homeassistant:
  customize:
    light.my_light:
      extra_data_template: ${Math.round(attributes.brightness || 0) / 2.55}%
```

To display brightness only if it exists and is non-zero:
```yaml
homeassistant:
  customize:
    light.my_light:
      extra_data_template: >
        if (attributes.brightness) return Math.round(attributes.brightness / 2.55) + '%'; else return null;
```

To change 'on' state to 'activated':
```yaml
homeassistant:
  customize:
    binary_sensor.my_sensor:
      templates:
        state: if (state === 'on') return 'activated'; else return state;
```
