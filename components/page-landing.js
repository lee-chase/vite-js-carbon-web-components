import { LitElement, html } from 'lit';

export class PageLanding extends LitElement {
  increment = () => {
    const countEl = this.shadowRoot.querySelector('.count');
    countEl.count += 1;
  };

  render() {
    return html`<div class="page--landing">
      <cds-button class="button" @click="${this.increment}">Button</cds-button>
      <my-count class="count" count="3"></my-count>
      <div>LANDING PAGE component</div>
    </div>`;
  }
}
customElements.define('page-landing', PageLanding);
