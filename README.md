# Custom UI elements for [Home Assistant](https://home-assistant.io)

TODO: Add screenshots

## Notes

Please fill the [usage poll](https://docs.google.com/forms/d/e/1FAIpQLSdjgb4iu5aDyvFB6ch9KJpRn25I0wLL7NLyTIhcWCzU3KM1-w/viewform?usp=send_form)

*Update to at least 20171227 for HA 0.61+*

*Update to at least 20171129 for HA 0.59-0.60*

## Installing
See [installing](docs/installing.md)

## Activating
See [activating](docs/activating.md)

## Features
See [features](docs/features.md)

## Changelog

#### 2018-01-17
*   Fix race condition that could prevent HA from starting. Issues #83 #84

#### 2018-01-14 : Broken release
*   Support hiding groups/entities from the default view.

#### 2018-01-12
*   Allow setting margin on slider via `--ha-themed-slider-margin`.
*   Allow changing state-card badge margins via `--ha-badges-card-margin`.
*   `extra_badge`s can now be individually themed.
*   Allow changing the size and number of UI columns (requires [customizer](https://github.com/andrey-git/home-assistant-customizer))

#### 2017-12-27
*   Hotfix for HA 0.61
*   Change size of badges in state card to 85% to match the badges in the top section.
*   Added --ha-badges-card-width and --ha-badges-card-text-align variables to allow theming badges in state card.
*   `extra_data_template` can now be an array to display several rows of data.
*   Align lock icon better for cover domain.

#### 2017-12-15
*   Fix bug in template computation.

#### 2017-12-14 : Broken release
*   New feature: [Templates](docs/templates.md) are now processed when states are fetched, so you can now template any state or attribute, nit just in state cards. For example:
    *   Modify group members.
    *   Make your own translation of states.
*   Improvements:
    *   `confirm_controls` will now protect the whole state card and not just the toggle control. Fixes #39
    *   Context-aware and Device-aware attributes can now be defined as regular expression. Fixes #55
    *   [extra_badge](#add-badge-to-the-state-card) can now be a list if you want to put more than 1 badge into a state card.
*   Bugfix: Improve detection of whether slider should be hidden in `hide-slider` mode. Fixes #15

#### 2017-11-29 : Breaking Change
*   File names changed into `state-card-custom-ui.html` and `state-card-custom-ui-es5.html`. Either update [customizer](https://github.com/andrey-git/home-assistant-customizer) or see updated instructions in [Activating](docs/activating.md) section.

[Full Changelog](CHANGELOG.md)
