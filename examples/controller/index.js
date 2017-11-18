import 'webcomponents.js'; // polyfill
import {ControlledComponent, StateController, h} from '../../lib';

class CounterController extends StateController {
  get defaultState() {
    return {
      count: 0,
    };
  }

  incrCounter() {
    const count = this.state.count + 1;
    this._update({count});
  }

  decrCounter() {
    const count = this.state.count - 1;
    this._update({count});
  }

  getCount() {
    return this.state.count;
  }
}

document.registerElement(`counter-app`, class extends ControlledComponent {
  get config() {
    return {
      controller: new CounterController(),
      template: () => h(`div.counter`, [
        h(`div.val`, `Counter: ${this.controller.getCount()}`),
        h(`div.controls`, [
          h(`button.decr`, {on: {click: () => this.controller.decrCounter()}}, `-`),
          h(`button.incr`, {on: {click: () => this.controller.incrCounter()}}, `+`),
        ]),
      ]),
    };
  }
});
