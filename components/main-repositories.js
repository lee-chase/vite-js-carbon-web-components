import { LitElement, html } from 'lit';

export class MainRepositories extends LitElement {
  render() {
    return html`<div class="main--repositories">
      REPOSITORIES PAGE component
    </div>`;
  }
}
customElements.define('main-repositories', MainRepositories);
