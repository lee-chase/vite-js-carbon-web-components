import { LitElement, html } from 'lit';
import './style.scss';
import '@carbon/web-components/es/components/button/button.js';
import '@carbon/web-components/es/components/ui-shell/index';

import Notification20 from '@carbon/web-components/es/icons/notification/20.js';
import UserAvatar20 from '@carbon/web-components/es/icons/user--avatar/20.js';
import Switcher20 from '@carbon/web-components/es/icons/switcher/20.js';

export class MyIcon extends LitElement {
  static properties = {
    icon: { attribute: true, type: String },
  };

  render() {
    return (
      { Notification20, UserAvatar20, Switcher20 }[this.icon] ?? Notification20
    )();
  }
}
customElements.define('my-icon', MyIcon);

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
