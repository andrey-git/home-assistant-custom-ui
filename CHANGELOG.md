## Changelog
#### 2017-07-01
* Now features are also supported on all "plain" and "toggle" cards in addition to light and cover cards.
* [Breaking Change] Now all atributes can be context-aware, not just `friendly_name` and `hidden`.

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
