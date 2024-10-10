import { LitElement, html, unsafeCSS } from 'lit';

import styles from './info-card.scss?inline';

export class InfoCard extends LitElement {
  static properties = {
    headingPart1: String,
    headingPart2: String,
    message: String,
  };

  render() {
    return html`<div class="info-card">
      <div>
        <h4 class="info-card__heading">
          ${this.headingPart1}
          <strong>${this.headingPart2}</strong>
        </h4>
        <p class="info-card__body"><slot></slot></p>
      </div>
      <div class="info-card__icon">
        <slot name="icon"></slot>
      </div>
    </div>`;
  }

  static get styles() {
    return [unsafeCSS(styles)];
  }
}
customElements.define('info-card', InfoCard);
