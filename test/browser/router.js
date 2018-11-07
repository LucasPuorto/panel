import {nextAnimationFrame, retryable} from 'domsuite';

import {Component, h} from '../../lib';


export class RouterApp extends Component {
  get config() {
    return {
      defaultState: {
        text: `Hello world`,
      },
      routes: {
        'foo': () => ({text: `Foobar!`}),
        'widget/:id': (stateUpdate, id) => ({text: `Widget ${id}`}),
        'multiparam/:param1/lala:param2': (stateUpdate, param1, param2) => ({
          text: `param1: ${param1} param2: ${param2}`,
        }),
        'optional/:required(/:optional)': (stateUpdate, required, optional) => ({
          text: optional ? `Two params: ${required} and ${optional}` : `One param: ${required}`,
        }),
        '': () => ({text: `Default route!`}),
      },
      template: state => h(`p`, [state.text]),
    };
  }
}
customElements.define(`router-app`, RouterApp);

describe(`Router`, function() {
  beforeEach(async function() {
    document.body.innerHTML = ``;
    window.location = `#`;

    this.routerApp = document.createElement(`router-app`);
    document.body.appendChild(this.routerApp);

    await nextAnimationFrame();
  });

  it(`is not initialized when component has no routes defined`, function() {
    const simpleApp = document.createElement(`simple-app`);
    document.body.appendChild(simpleApp);
    expect(simpleApp).not.to.have.property(`router`);

    expect(this.routerApp.router).to.be.ok;
  });

  it(`is present when component has routes defined`, function() {
    expect(this.routerApp.router).to.be.ok;
  });

  it(`runs index route handler when window location is empty`, function() {
    expect(this.routerApp.textContent).to.equal(`Default route!`);
  });

  it(`reacts to location hash changes`, async function() {
    window.location.hash = `#foo`;
    await retryable(() => expect(this.routerApp.textContent).to.equal(`Foobar!`));
  });

  it(`passes params to route handlers`, async function() {
    window.location.hash = `#widget/15`;
    await retryable(() => expect(this.routerApp.textContent).to.equal(`Widget 15`));

    window.location.hash = `#multiparam/angry/lalallama`;
    await retryable(() => expect(this.routerApp.textContent).to.equal(`param1: angry param2: llama`));
  });

  it(`supports optional params`, async function() {
    window.location.hash = `#optional/wombat`;
    await retryable(() => expect(this.routerApp.textContent).to.equal(`One param: wombat`));

    window.location.hash = `#optional/wombat/32`;
    await retryable(() => expect(this.routerApp.textContent).to.equal(`Two params: wombat and 32`));
  });
});
