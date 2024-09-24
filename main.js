import './style.scss';
import '@carbon/web-components/es/components/button/button.js';
import '@carbon/web-components/es/components/ui-shell/index';
import './components';

import { LitElement, html } from 'lit';

export class TutorialApp extends LitElement {
  render() {
    return html``;
  }
}
customElements.define('tutorial-app', TutorialApp);
