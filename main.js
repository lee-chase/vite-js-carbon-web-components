import { LitElement, html } from 'lit';

import '@carbon/web-components/es/components/button/button.js';
import '@carbon/web-components/es/components/ui-shell/index';
import './style.scss';

export class MyCount extends LitElement {
  static properties = {
    count: { attribute: true, type: Number },
  };

  constructor() {
    super();
    this.count = this.count ?? 0;
  }

  render() {
    return html`<div>
      <span>Count: </span>
      <span class="count">${this.count}</span>
    </div>`;
  }
}
customElements.define('my-count', MyCount);

export const increment = () => {
  const countEl = document.querySelector('.count');
  countEl.count += 1;
};

document.querySelector('.button').addEventListener('click', increment);
