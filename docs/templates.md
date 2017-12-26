# Templates

The `templates` attributes allow you to inject your own expressions and code using JavaScript code or template literals in order to override entity attributes and state. Within the code / template literals, you have full access to the entity's state object, which allows you to access other properties such as last_changed, attributes.friendly_name, etc. The full set of objects available is shown below.

Additionally, `extra_data_template` attribute is always evaluated as a template without using `templates` attributes for it.

In order for a template to return "nothing", for example so that `extra_data_template` won't take space or allow showing `show_last_changed` - return `null` from your template. Note that `null` can only be returned using code format, as template literal format always returns a string.

**Note that those are JavaScript templates evaluated in your browser, not Jinja2 templates which are evaluated server-side and use a different syntax.**

### Available variables
#### Global variables
Those variables allow one entity to set state / attribute based on another entity or some other "external" thing. Using those hurts UI performance, so use them only if you indeed want an entity to depend on something external.

`hass` - the hass object

`entities` - a map object from `entity_id` to state objects.

#### Local Variables
`entity` - the state object for the current entity.
 Note that if you are using device or context aware attributes then the object you get is already modified.

`attributes` attributes map of the current entity. Shortcut for `entity.attributes`.

`attribute` the original (non-template) value of the attribute being calculated by a template. When calculating `state`, `_stateDisplay`, or `extra_data_template` it will be undefined.

`state` the original (non-template) state of the entity.

### Special attributes
There are two special template attributes:
*   `state` will override the entity state. Note that logic that applies visual state still applies. For example non-`off` motion sensor is displayed as `detected`. Changing the `state` template wouldn't prevent this logic from running.
*   `_stateDisplay` sets the final display string and prevents any visual state logic from running.

### Formats
You can provide the template in two different formats.
*   If the template contains the word `return` it will be treated as raw JavaScript code.
*   Otherwise it will be treated as JavaScript template literal that returns a string.

### Examples

```yaml
homeassistant:
  customize:
    ...
    light.bedroom:
      templates:
        theme: >
          if (attributes.power_consumption > 10) return 'red'; else return 'default';
      extra_data_template: >
        "${attributes.power_consumption !== 0 ? (attributes.power_consumption + 'W') : ''}"
    light.kitchen:
      templates:
        # Uses global variable - might be slow.
        theme: >
          if (entities['light.bedroom'].state === 'on') return 'red'; else return 'default';
      extra_data_template: >
        if (entities['light.bedroom'].attributes.brightness > 30) return 'Yes'; else return null;
```

#### Display brightness (even if it is 0%)
```yaml
homeassistant:
  customize:
    light.my_light:
      extra_data_template: ${Math.round(attributes.brightness || 0) / 2.55}%
```

#### Display brightness only if it exists and is non-zero:
```yaml
homeassistant:
  customize:
    light.my_light:
      extra_data_template: >
        if (attributes.brightness) return Math.round(attributes.brightness / 2.55) + '%'; else return null;
```

#### Change 'on' state to 'activated':
```yaml
homeassistant:
  customize:
    binary_sensor.my_sensor:
      templates:
        state: if (state === 'on') return 'activated'; else return state;
    binary_sensor.motion_sensor:
      templates:
        # null will make the regular state-based logic to run.
        _stateDisplay: if (state === 'on') return 'activated'; else return null;
```

#### Make a group that contains all `on` entities.
*Note that the group itself must be preexisting, CustomUI can't create a new group.*

*Note this doesn't change group membership that the backend sees, so calling services on this group would only affect the original members.*
```yaml
homeassistant:
  customize:
    group.on_devices:
      templates:
        entity_id: return Object.keys(entities).filter(key => entities[key].state === 'on')
```
