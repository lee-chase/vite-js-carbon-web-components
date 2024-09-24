import { LitElement, html, unsafeCSS } from 'lit';
import styles from './tutorial-app.scss?inline';

export class TutorialApp extends LitElement {
  render() {
    const path = window.location.pathname;
    let main;

    switch (path) {
      case '/repositories.html':
      case '/repositories':
        main = html`<main-repositories></main-repositories>`;
        break;
      default:
        if (path !== '/') {
          window.history.replaceState({}, '', '/');
        }
        main = html`<main-landing></main-landing>`;
        break;
    }

    return html`<div class="app g10">
      <header>
        <tutorial-header class="g100"></tutorial-header>
      </header>

      <main class="main">${main}</main>
    </div>`;
  }

  static get styles() {
    return [unsafeCSS(styles)];
  }
}
customElements.define('tutorial-app', TutorialApp);
