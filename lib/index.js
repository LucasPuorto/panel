/**
 * Entry point for Panel apps and components
 * @module panel
 * @example
 * import { Component } from 'panel';
 * customElements.define('my-widget', class extends Component {
 *   // app definition
 * });
 */

import Component from './component';
import ControlledComponent from './controlled-component';
import ProxyComponent from './proxy-component';
import StateController from './state-controller';
import StateStore from './state-store';
import {h} from './dom-patcher';

export {
  /** {@link Component} class, to be subclassed by apps */
  Component,

  /** {@link ControlledComponent} class, to be subclassed by apps */
  ControlledComponent,

  /** {@link ProxyComponent} class, to be subclassed by apps */
  ProxyComponent,

  /** {@link StateController} class, to be subclassed by apps */
  StateController,

  /** A simple subscribable state store */
  StateStore,

  /**
   * [snabbdom]{@link https://github.com/snabbdom/snabbdom} function to create Hyperscript nodes,
   * exported here for user convenience
   */
  h,
};
