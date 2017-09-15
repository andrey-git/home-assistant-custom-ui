# Templates

The attributes `theme_template` and `extra_data_template` allow you to inject your own expressions and code using JavaScript template literals. Within these template literals, you have full access to the entity's state object, which allows you to access other properties such as last_changed, attributes.friendly_name, etc. The full set of objects available to your template literals is shown below.

In order for a template to return "nothing", for example so that `extra_data_template` won't take space or allow showing `show_last_changed` - return `null` from your template.

**Note that those are JavaScript templates evaluated in your browser, not Jinja2 templates which are evaluated server-side and use a different syntax.**

#### Available variables
`hass` - the hass object

`entities` - a map object from `entity_id` to state objects.

`entity` - the state object for the current entity.
 Note that if you are using device or context aware attributes then the object you get is already modified.

`attributes` attributes map of the current entity. Shortcut for `entity.attributes`.


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
      theme_template: >
        if (attributes.power_consumption > 10) return 'red'; else return 'default';
      extra_data_template: >
        ${attributes.power_consumption !== 0 ? (attributes.power_consumption + 'W') : ''}
    light.kitchen:
      theme_template: >
        if (entities['light.bedroom'].state === 'on') return 'red'; else return 'default';
      extra_data_template: >
        if (entities['light.bedroom'].attributes.brightness > 30) return 'Yes'; else return null;
```

If you always want to display brightness (even if it is 0%)
```
homeassistant:
  customize:
    light.my_light:
      extra_data_template: ${Math.round(attributes.brightness || 0) / 2.55}%
```

To display brightness only if it exists and is non-zero:
```
homeassistant:
  customize:
    light.my_light:
      extra_data_template: >
        if (attributes.brightness) return Math.round(attributes.brightness / 2.55) + '%'; else return null;
```
