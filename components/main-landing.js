import { LitElement, html } from 'lit';

export class MainLanding extends LitElement {
  increment = () => {
    const countEl = this.shadowRoot.querySelector('.count');
    countEl.count += 1;
  };

  render() {
    return html`<main class="main--landing">
      <cds-button class="button" @click="${this.increment}"
        >Button <add-20-svg slot="icon"
      /></cds-button>
      <my-count class="count" count="3"></my-count>
      <div>LANDING PAGE component</div>
    </main>`;
  }
}
customElements.define('main-landing', MainLanding);
