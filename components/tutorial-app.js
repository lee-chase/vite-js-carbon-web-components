import { LitElement, html, unsafeCSS } from 'lit';
import styles from './tutorial-app.scss?inline';

export class TutorialApp extends LitElement {
  render() {
    const path = window.location.pathname;
    let main;

    switch (path) {
      case '/repositories.html':
      case '/repositories':
        main = html`<page-repositories></page-repositories>`;
        break;
      default:
        if (path !== '/') {
          window.history.replaceState({}, '', '/');
        }
        main = html`<page-landing></page-landing>`;
        break;
    }

    return html`<div class="app g10">
      <header>
        <tutorial-header class="g100"></tutorial-header>
      </header>

      <main>${main}</main>
    </div>`;
  }

  static get styles() {
    return [unsafeCSS(styles)];
  }
}
customElements.define('tutorial-app', TutorialApp);
