import { LitElement, html } from 'lit';

export class PageRepositories extends LitElement {
  render() {
    return html`<div class="page--repositories">
      REPOSITORIES PAGE component
    </div>`;
  }
}
customElements.define('page-repositories', PageRepositories);
