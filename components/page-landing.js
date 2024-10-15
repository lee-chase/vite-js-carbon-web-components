import { LitElement, html, unsafeCSS } from 'lit';
import styles from './page-landing.scss?inline';
import { colClasses, gridClasses } from '../utils/grid';

export class PageLanding extends LitElement {
  increment = () => {
    const countEl = this.shadowRoot.querySelector('.count');
    countEl.count += 1;
  };

  render() {
    return html`<div class="page--landing">
      <div class="${gridClasses({ class: 'page--landing', fullWidth: true })}">
        <div
          class="${colClasses({
            class: 'page--landing__banner',
            sizes: { sm: 4, md: 8, lg: 16 },
          })}"
        >
          1
        </div>
        <div
          class="${colClasses({
            class: 'page--landing__r2',
            sizes: { sm: 4, md: 8, lg: 16 },
          })}"
        >
          <div class="${gridClasses({ sub: true, wide: true })}">
            <div
              class="${colClasses({
                class: 'page--landing__tab-content',
                sizes: { sm: 4, md: 4, lg: 7 },
              })}"
            >
              7/16
            </div>
            <div class="${colClasses({ sizes: { sm: 4, md: 4, lg: 7 } })}">
              8/16
            </div>
          </div>
        </div>
        <div
          class="${colClasses({
            class: 'page--landing__r3',
            sizes: { sm: 4, md: 8, lg: 16 },
          })}"
        >
          <div class="${gridClasses({ sub: true, wide: true })}">
            <div
              class="${colClasses({
                class: 'page--landing__label',
                sizes: { sm: 4, md: 2, lg: 4 },
              })}"
            >
              1/4
            </div>
            <div
              class="${colClasses({
                class: 'page--landing__title',
                sizes: { sm: 4, md: 2, lg: 4 },
              })}"
            >
              1/4
            </div>
            <div
              class="${colClasses({
                class: 'page--landing__title',
                sizes: { sm: 4, md: 2, lg: 4 },
              })}"
            >
              1/4
            </div>
            <div
              class="${colClasses({
                class: 'page--landing__title',
                sizes: { sm: 4, md: 2, lg: 4 },
              })}"
            >
              1/4
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }

  static get styles() {
    return [unsafeCSS(styles)];
  }
}
customElements.define('page-landing', PageLanding);
