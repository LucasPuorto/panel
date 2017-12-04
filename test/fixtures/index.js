import {AttrReflectionApp} from './attr-reflection-app';
import {BreakableApp} from './breakable-app';
import {CssNoShadowApp} from './css-no-shadow-app';
import {NestedApp, NestedChild} from './nested-app';
import {NestedPartialStateParent, NestedPartialStateChild} from './nested-partial-state-app';
import {ShadowDomApp} from './shadow-dom-app';
import {SimpleApp} from './simple-app';
import {ControlledApp} from './controlled-app';

document.registerElement(`attr-reflection-app`, AttrReflectionApp);
document.registerElement(`breakable-app`, BreakableApp);
document.registerElement(`css-no-shadow-app`, CssNoShadowApp);
document.registerElement(`nested-app`, NestedApp);
document.registerElement(`nested-child`, NestedChild);
document.registerElement(`nested-partial-state-parent`, NestedPartialStateParent);
document.registerElement(`nested-partial-state-child`, NestedPartialStateChild);
document.registerElement(`shadow-dom-app`, ShadowDomApp);
document.registerElement(`simple-app`, SimpleApp);
document.registerElement(`controlled-app`, ControlledApp);
