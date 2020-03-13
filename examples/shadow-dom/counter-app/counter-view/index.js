// import from the same repo. in a different repo you'd use:
// import { Component } from 'panel';
import {Component} from '../../../../lib';

import template from './index.jade';
import css from './index.styl';

customElements.define(
  'counter-view',
  class extends Component {
    get config() {
      return {
        helpers: {
          decr: () => this.changeCounter(-1),
          incr: () => this.changeCounter(1),
        },

        template,
        css,
        useShadowDom: true,
      };
    }

    changeCounter(offset) {
      this.update({count: this.state.count + offset});
    }
  },
);
