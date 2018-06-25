# Custom UI elements for [Home Assistant](https://home-assistant.io)

TODO: Add screenshots

## Notes

**CustomUI 2018-06-02 required for HA 0.71+**

Please fill the [usage poll](https://docs.google.com/forms/d/e/1FAIpQLSdjgb4iu5aDyvFB6ch9KJpRn25I0wLL7NLyTIhcWCzU3KM1-w/viewform?usp=send_form)

## Installing
See [installing](docs/installing.md)

## Activating
See [activating](docs/activating.md)

## Features
See [features](docs/features.md)

## Support
Please ask questions and post feature requests in the [forum](https://community.home-assistant.io/t/customui-discussion-thread/48694). Post bugreports here on github in [issues](https://github.com/andrey-git/home-assistant-custom-ui/issues/)

## Changelog

#### 2018-06-25
*   Entities with `hide_in_default_view: false` will no longer be hidden from
    default view even if they are part of another view with
    `hide_in_default_view: true`
*   Add `icon_color`, `state`, and `_stateDisplay` to the list of hidden attributes.

#### 2018-06-02
*   Hotfix for HA 0.71+
*   Restore handling custom attributes in form and more-info.

#### 2018-05-28
*   New feature: [`control_element`](docs/features.md#custom-controls)
*   Fix theming on Firefix/Edge.

[Full Changelog](CHANGELOG.md)
