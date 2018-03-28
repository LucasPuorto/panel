import {Component, ProxyComponent, h} from '../../lib';

class FreeAddressCard extends Component {
  get config() {
    return {
      template: ({ $component }) => {
        h(`div`, [
          h(`ul`, [
            h(`li`, $component.getAttribute(`name`)),
            h(`li`, { on: { click: this.registerClick } }, $component.getAttribute(`city`)),
          ])
        ]);
      }
    }
  }

  registerClick(ev) {
    this.dispatchEvent(new CustomEvent(`clickedCity`));
  }

  static get observedAttributes() {
    return Component.observedAttributes.concat([
      `name`, `city`,
    ]);
  }
}

class PremiumAddressCard extends Component {
  get config() {
    return {
      template: ({ $component }) => {
        h(`div`, [
          h(`ul`, [
            h(`li`, $component.getAttribute(`name`)),
            h(`li`, { on: { click: this.registerClick } }, $component.getAttribute(`city`)),
            h(`li`, `You're viewing with premium!`)
          ])
        ]);
      }
    }
  }

  registerClick(ev) {
    this.dispatchEvent(new CustomEvent(`clickedCity`));
  }

  static get observedAttributes() {
    return Component.observedAttributes.concat([
      `name`, `city`,
    ]);
  }
}

class AddressCard extends ProxyComponent {
  getTargetElement() {
    // arbitrary biz logic
    return window.showTheNewCard ? `address-card-v2` : `address-card-v1`;
  }

  static get observedAttributes() {
    return PremiumAddressCard.observedAttributes;
  }

  get observedEvents() {
    return [`clickedCity`];
  }
}

document.registerElement(`address-card-v1`, FreeAddressCard);
document.registerElement(`address-card-v2`, PremiumAddressCard);
document.registerElement(`address-card`, AddressCard);

document.registerElement(`proxy-app`, class extends ProxyComponent {
  get config() {
    return {
      template: () => h(`address-card`, {
        attrs: { name: `Ben`, city: `San Francisco` },
        on: { clickedCity: () => alert(`it's true!`) }
      })
    };
  }
});
