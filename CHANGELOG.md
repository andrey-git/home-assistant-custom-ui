## Changelog

Note: Update to at least 20170910 required for HA 0.53+

#### 2017-10-19
* Add `_stateDisplay` template attribute to allow setting final visual state.

#### 2017-10-18
* Fix context-aware group names

#### 2017-09-27 : Breaking Change
* Entity state and attributes can now be overridden by templates. See [Templates](docs/templates.md)
* [Breaking change]: `theme_template` attribute has been removed. Used templates to tweak `themes` attribute.
  Note that `extra_data_template` behavior didn't change.

#### 2017-09-18
* Delay initialization until states are loaded.
* Give better error for broken templates.

#### 2017-09-10
* Fix some Polymer2-related bugs.

#### 2017-09-09 [Broken]
* Compress code better and transpile it for ES5: Now it should support all browsers supported by Home Assistant.

#### 2017-09-03 [Broken]
* Use badges without using group-in-group
* Per-entity theming improvements (Thanks @ahofelt for reference implementation):
 * paper-card-background-color will now properly set per-entity background.
 * Label-related variable will now properly affect labels.
* Support for using your own custom UI state cards with this CustomUI framework.


#### 2017-08-30 [Config panel is broken]
* Support CustomUI attributes in customization config UI introduced in Home Assistant 0.53
* Add CustomUI config subpanel.
* Customizer support for loading local (on Home Assistant machine) or hosted on Github CustomUI.

#### 2017-08-05 (minor change)
* Improve performance by recalculating only after attachment.
* Visual fix for Polymer2

#### 2017-08-02
* [Breaking Change] `extra_data_template` format changed.
* Added `theme_template` attribute to make conditional entity-theming easy.

#### 2017-07-29
New features
* New (optional) CustomUI panel.
* New (optional) [customizer](https://github.com/andrey-git/home-assistant-customizer) custom component.
  * Register CustomUI panel above.
  * Hide CustomUI attribute in `more-info` (Requires HA 0.50+)
  * Hide arbitrary attributes in `more-info` (Requires HA 0.50+)
  * Dynamic customization.
* New `update.sh` script that will keep CustomUI up to date.
* Group names can now be context-aware.
* `extra_data_template` can now look into another entity's state.
* CustomUI version is now displayed in `dev-info` panel.
* Attributes can now be device-aware in addition to being context-aware. Device name is set via CustomUI panel.
* Per-entity theming (Requires HA 0.50+)
* Confirmable controls.

Bugfixes:
* Customization now works for *unavailable* entities #24 (Requires HA 0.50+)

#### 2017-07-06
* Fix bug introduced on 20170701 which caused slider to do nothing.

#### 2017-07-02 [BROKEN]
* `show_last_changed` is now supported on almost all state cards.

#### 2017-07-01 [BROKEN]
* Now features are also supported on all "plain" and "toggle" cards in addition to light and cover cards.
* [Breaking Change] Now all attributes can be context-aware, not just `friendly_name` and `hidden`.

#### 2017-05-22
* Extend support for context-aware names to views (in addition to groups)
* Fix bug where the slider would sometimes show as 0 upon start.

#### 2017-05-21
* Add support for context-aware hide.
* Add support for badges in state cards.

#### 2017-05-12
* Now to use the feature download a single minified `state-card-custom-ui.html` file. Unminified sources for development are under `src/`
* Add support for context-aware entity names. This feature is supported for all domains, not just `light` and `cover`.
* Add 'no-slider' mode in case you want to use light/cover custom-ui without the slider.

#### 2017-05-11
* Fix cover position range to be 0..100 by default (was 0..255 like light)
* Switch back to using core `state-info` component instead of `custom-state-info`.
  Now `extra_data_template` feature requires HA 0.43+
