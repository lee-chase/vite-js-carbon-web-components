import { LitElement, html } from 'lit';

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
