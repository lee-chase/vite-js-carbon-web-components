import { LitElement, html } from 'lit';

import Notification20 from '@carbon/web-components/es/icons/notification/20.js';
import UserAvatar20 from '@carbon/web-components/es/icons/user--avatar/20.js';
import Switcher20 from '@carbon/web-components/es/icons/switcher/20.js';

export class TutorialHeader extends LitElement {
  constructor() {
    super();
    this.globalActions = [
      {
        icon: Notification20,
        label: 'Notifications',
      },
      {
        icon: UserAvatar20,
        label: 'User avatar',
      },
      {
        icon: Switcher20,
        label: 'Switcher',
      },
    ];
  }

  render() {
    return html`<cds-header>
      <cds-header-name href="/" prefix="IBM">Carbon Tutorial</cds-header-name>
      <cds-header-nav menu-bar-label="Carbon Tutorial">
        <cds-header-nav-item href="./repositories.html"
          >Repositories</cds-header-nav-item
        >
      </cds-header-nav>
      <div class="cds--header__global">
        ${this.globalActions.map(
          (action) => html`
            <cds-header-global-action
              aria-label="${action.href}"
              class="action-icons"
            >
              ${action.icon({ slot: 'icon' })}
            </cds-header-global-action>
          `,
        )}
      </div>
    </cds-header>`;
  }
}
customElements.define('tutorial-header', TutorialHeader);
