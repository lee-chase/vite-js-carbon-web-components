import { LitElement, html, unsafeCSS } from 'lit';
import styles from './link-list.scss?inline';

export class LinkList extends LitElement {
  static properties = {
    url: String,
    homepage: String,
  };

  render() {
    return html`<ul class="link-list">
      <li><cds-link href="${this.url}">Github</cds-link></li>
      <li>
        <cds-link href="${this.homepage}">Homepage</cds-link>
      </li>
    </ul>`;
  }

  static get styles() {
    return [unsafeCSS(styles)];
  }
}
customElements.define('link-list', LinkList);
