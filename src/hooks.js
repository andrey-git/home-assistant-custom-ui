window.customUI = {
  lightOrShadow: function (elem, selector) {
    return elem.shadowRoot ?
        elem.shadowRoot.querySelector(selector) :
        elem.querySelector(selector);
  },

  getElementHierarchy: function (root, hierarchy) {
    const elem = hierarchy.shift();
    if (elem) {
      return window.customUI.getElementHierarchy(
        window.customUI.lightOrShadow(root, elem), hierarchy);
    }
    return root;
  },

  getContext: function (elem) {
    if (elem._context === undefined) {
      elem._context = [];
      for (let element = (elem.tagName === 'HA-ENTITIES-CARD' ? elem.domHost : elem); element; element = element.domHost) {
        switch (element.tagName) {
          case 'HA-ENTITIES-CARD':
            if (element.groupEntity) {
              elem._context.push(element.groupEntity.entity_id);
            } else if (element.groupEntity === false && element.states && element.states.length) {
              elem._context.push('group.' + window.hassUtil.computeDomain(element.states[0]));
            }
            break;
          case 'MORE-INFO-GROUP':
            if (element.stateObj) {
              elem._context.push(element.stateObj.entity_id);
            }
            break;
          case 'PARTIAL-CARDS':
            elem._context.push(element.currentView ? element.currentView : 'default_view');
            break;
          // no default
        }
      }
      elem._context.reverse();
    }
    return elem._context;
  },

  maybeChangeObject: function (elem, stateObj, inDialog, allowHidden) {
    if (inDialog) return stateObj;
    const context = window.customUI.getContext(elem);
    if (!context) return stateObj;

    if (!stateObj.attributes.group) {
      return stateObj;
    }
    const attributes = {};
    context.forEach(function (c) {
      if (stateObj.attributes.group[c]) {
        Object.assign(attributes, stateObj.attributes.group[c]);
      }
    });

    if (!Object.keys(attributes).length) return stateObj;

    if (attributes.hidden && allowHidden) {
      return null;
    }

    return {
      entity_id: stateObj.entity_id,
      state: stateObj.state,
      attributes: Object.assign({}, stateObj.attributes, attributes),
      last_changed: stateObj.last_changed,
    };
  },

  fixGroupTitles: function () {
    const haCards = window.customUI.getElementHierarchy(document, [
      'home-assistant',
      'home-assistant-main',
      'partial-cards',
      'ha-cards']);
    const main = window.customUI.lightOrShadow(haCards, '.main');
    const cards = main.querySelectorAll('ha-entities-card');
    cards.forEach(function (card) {
      if (card.groupEntity) {
        const obj = window.customUI.maybeChangeObject(
          card,
          card.groupEntity,
          false /* inDialog */,
          false /* allowHidden */);
        if (obj !== card.groupEntity && obj.attributes.friendly_name) {
          const nameElem = window.customUI.lightOrShadow(card, '.name');
          nameElem.textContent = obj.attributes.friendly_name;
        }
      }
    });
  },
};

window.customUI.fixGroupTitles();
window.addEventListener('location-changed', window.setTimeout.bind(null, window.customUI.fixGroupTitles, 100));
