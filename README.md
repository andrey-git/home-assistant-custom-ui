# Custom UI elements for [Home Assistant](https://home-assistant.io)

TODO: Add screenshots

## Notes

Please fill the [usage poll](https://docs.google.com/forms/d/e/1FAIpQLSdjgb4iu5aDyvFB6ch9KJpRn25I0wLL7NLyTIhcWCzU3KM1-w/viewform?usp=send_form)

*Update to at least 20180126 for HA 0.62+*

*Update to at least 20171227 for HA 0.61*

## Installing
See [installing](docs/installing.md)

## Activating
See [activating](docs/activating.md)

## Features
See [features](docs/features.md)

## Changelog

#### 2018-01-26
*   Support for theming top-of-the-page badges.
*   Climate state-card can now get a temperature-controlling slide like light and cover cards.
*   Hotfix for HA 0.62

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

[Full Changelog](CHANGELOG.md)
