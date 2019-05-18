## Changelog

#### 2019-05-18
*   Hotfix for HA 0.94+

#### 2019-03-24
*   Fix for `icon-color` for HA 0.88+
*   Fox config panel for HA 0.90+

#### 2019-01-13
*   Hotfix for `extra_badge` for HA 0.85+

#### 2018-12-17
*   Hotfix for HA 0.84.1+

#### 2018-08-31
*   Fix for icon_color not being applied on HA >0.77 (by Jérôme)
*   This version requires HA 0.77+

#### 2018-08-06
*   Fix CustomUI attributes not being hidden in more-info

#### 2018-07-13
*   Hotfix for HA 0.73+

#### 2018-06-25
*   Entities with `hide_in_default_view: false` will no longer be hidden from
    default view even if they are part of another view with
    `hide_in_default_view: true`.
*   Add `icon_color`, `state`, and `_stateDisplay` to the list of hidden attributes.

#### 2018-06-02
*   Hotfix for HA 0.71+
*   Restore handling custom attributes in form and more-info.

#### 2018-05-28
*   New feature: [`control_element`](docs/features.md#custom-controls)
*   Fix theming on Firefix/Edge.

#### 2018-05-21
*   Hotfix release for HA 0.70+

#### 2018-04-29
*   Add support for `action_name` attribute that can be used to change the displayed action on scene and script cards.
*   Make confirmable controls protect slider on 2nd line

#### 2018-04-27
*   Add support for `icon_color` attribute to force-set icon color of any entity.

#### 2018-03-30
*   Prevent template from being applied twice. Fixes #110
*   Use new system to display version info.
*   Fix customui config panel. Fixes #122
*   Prevent more-info from comming up when touching slider or lock.

#### 2018-02-16
Bugfixes:
*   On Firefox badges sometimes didn't use themes.
*   Update badges-in-state-card default margin to 0.
*   `blacklist_states` didn't work with values like 0, empty string.
*   Slider multiplied the value of template light by 10.

#### 2018-01-26
*   Support for theming top-of-the-page badges.
*   Climate state-card can now get a temperature-controlling slide like light and cover cards.
*   Hotfix for HA 0.62

#### 2018-01-17
*   Fix race condition that could prevent HA from starting

#### 2018-01-14 : Broken release
*   Support hiding groups/entities from the default view

#### 2018-01-12
*   Allow setting margin on slider via `--ha-themed-slider-margin`.
*   Allow changing state-card badge margins via `--ha-badges-card-margin`. Fixes #78
*   `extra_badge`s can now be individually themed. Fixes #77
*   Allow changing the size and number of UI columns (requires `customizer`)

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
    *   [extra_badge](docs/features.md#add-badge-to-the-state-card) can now be a list if you want to put more than 1 badge into a state card.
*   Bugfix: Improve detection of whether slider should be hidden in `hide-slider` mode. Fixes #15

#### 2017-11-29 : Breaking Change
*   File names changed into `state-card-custom-ui.html` and `state-card-custom-ui-es5.html`. Either update [customizer](https://github.com/andrey-git/home-assistant-customizer) or see updated instructions in [Activating](docs/activating.md) section.

*Note: Update to at least 20171117 required for HA 0.58+*

#### 2017-11-17
*   Compatibility fix with HA 0.58

*Note: Update to at least 20170910 required for HA 0.53+*

#### 2017-10-19
*   Add `_stateDisplay` template attribute to allow setting final visual state.

#### 2017-10-18
*   Fix context-aware group names

#### 2017-09-27 : Breaking Change
*   Entity state and attributes can now be overridden by templates. See [Templates](docs/templates.md)
*   *Breaking change*: `theme_template` attribute has been removed. Used templates to tweak `themes` attribute.
  Note that `extra_data_template` behavior didn't change.

#### 2017-09-18
*   Delay initialization until states are loaded.
*   Give better error for broken templates.

#### 2017-09-10
*   Fix some Polymer2-related bugs.

#### 2017-09-09 : Broken
*   Compress code better and transpile it for ES5: Now it should support all browsers supported by Home Assistant.

#### 2017-09-03 : Broken
*   Use badges without using group-in-group
*   Per-entity theming improvements (Thanks @ahofelt for reference implementation):
    *   paper-card-background-color will now properly set per-entity background.
    *   Label-related variable will now properly affect labels.
*   Support for using your own custom UI state cards with this CustomUI framework.


#### 2017-08-30 : Config panel is broken
*   Support CustomUI attributes in customization config UI introduced in Home Assistant 0.53
*   Add CustomUI config subpanel.
*   Customizer support for loading local (on Home Assistant machine) or hosted on Github CustomUI.

#### 2017-08-05 (minor change)
*   Improve performance by recalculating only after attachment.
*   Visual fix for Polymer2

#### 2017-08-02
*   *Breaking Change* `extra_data_template` format changed.
*   Added `theme_template` attribute to make conditional entity-theming easy.

#### 2017-07-29
New features
*   New (optional) CustomUI panel.
*   New (optional) [customizer](https://github.com/andrey-git/home-assistant-customizer) custom component.
    *   Register CustomUI panel above.
    *   Hide CustomUI attribute in `more-info` (Requires HA 0.50+)
    *   Hide arbitrary attributes in `more-info` (Requires HA 0.50+)
    *   Dynamic customization.
*   New `update.sh` script that will keep CustomUI up to date.
*   Group names can now be context-aware.
*   `extra_data_template` can now look into another entity's state.
*   CustomUI version is now displayed in `dev-info` panel.
*   Attributes can now be device-aware in addition to being context-aware. Device name is set via CustomUI panel.
*   Per-entity theming (Requires HA 0.50+)
*   Confirmable controls.

Bugfixes:
*   Customization now works for *unavailable* entities #24 (Requires HA 0.50+)

#### 2017-07-06
*   Fix bug introduced on 20170701 which caused slider to do nothing.

#### 2017-07-02 : BROKEN
*   `show_last_changed` is now supported on almost all state cards.

#### 2017-07-01 : BROKEN
*   Now features are also supported on all "plain" and "toggle" cards in addition to light and cover cards.
*   *Breaking Change* Now all attributes can be context-aware, not just `friendly_name` and `hidden`.

#### 2017-05-22
*   Extend support for context-aware names to views (in addition to groups)
*   Fix bug where the slider would sometimes show as 0 upon start.

#### 2017-05-21
*   Add support for context-aware hide.
*   Add support for badges in state cards.

#### 2017-05-12
*   Now to use the feature download a single minified `state-card-custom-ui.html` file. Unminified sources for development are under `src/`
*   Add support for context-aware entity names. This feature is supported for all domains, not just `light` and `cover`.
*   Add 'no-slider' mode in case you want to use light/cover custom-ui without the slider.

#### 2017-05-11
*   Fix cover position range to be 0..100 by default (was 0..255 like light)
*   Switch back to using core `state-info` component instead of `custom-state-info`.
  Now `extra_data_template` feature requires HA 0.43+
