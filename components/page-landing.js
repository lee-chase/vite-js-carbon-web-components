import { LitElement, html, unsafeCSS } from 'lit';

import styles from './page-landing.scss?inline';
import { colClasses, gridClasses } from '../utils/grid';

export class PageLanding extends LitElement {
  increment = () => {
    const countEl = this.shadowRoot.querySelector('.count');
    countEl.count += 1;
  };

  render() {
    return html`<div
      class="${gridClasses({ class: 'page--landing', fullWidth: true })}"
    >
      <div
        class="${colClasses({
          class: 'page--landing__banner',
          sizes: { sm: 4, md: 8, lg: 16 },
        })}"
      >
        <cds-breadcrumb noTrailingSlash aria-label="Page navigation">
          <cds-breadcrumb-item>
            <a href="/">Getting started</a>
          </cds-breadcrumb-item>
        </cds-breadcrumb>
        <h1 class="page--landing__heading">Design &amp; build with Carbon</h1>
      </div>
      <div
        class="${colClasses({
          class: 'page--landing__r2',
          sizes: { sm: 4, md: 8, lg: 16 },
        })}"
      >
        <cds-tabs
          class="page--landing__tabs"
          trigger-content="Select an item"
          value="about"
        >
          <cds-tab id="tab-about" value="about" target="panel-about"
            >About</cds-tab
          >
          <cds-tab id="tab-design" value="design" target="panel-design"
            >Design</cds-tab
          >
          <cds-tab id="tab-develop" value="develop" target="panel-develop"
            >Develop</cds-tab
          >
        </cds-tabs>

        <div id="panel-about" role="tabpanel" aria-labelledby="tab-about">
          <div
            class="${gridClasses({
              sub: true,
              wide: true,
            })}"
          >
            <div
              class="${colClasses({
                class: 'page--landing__tab-content',
                sizes: { sm: 4, md: 4, lg: 7 },
              })}"
            >
              <h3 class="page--landing__subheading">What is Carbon?</h3>
              <p class="page--landing__p">
                Carbon is IBM’s open-source design system for digital products
                and experiences. With the IBM Design Language as its foundation,
                the system consists of working code, design tools and resources,
                human interface guidelines, and a vibrant community of
                contributors.
              </p>
              <cds-button>Learn more</cds-button>
            </div>
            <div
              class="${colClasses({
                sizes: { sm: 4, md: 4, lg: { span: 8, offset: 8 } },
              })}"
            >
              <img
                class="page--landing__illo"
                src="./tab-illo.png"
                alt="Carbon illustration"
                width="640"
                height="498"
              />
            </div>
          </div>
        </div>

        <div id="panel-design" role="tabpanel" aria-labelledby="tab-design">
          <div
            class="${gridClasses({
              sub: true,
              wide: true,
            })}"
          >
            <div
              class="${colClasses({
                class: 'page--landing__tab-content',
                sizes: { sm: 4, md: 8, lg: 16 },
              })}"
            >
              <p class="page--landing__p">
                Rapidly build beautiful and accessible experiences. The Carbon
                kit contains all resources you need to get started.
              </p>
            </div>
          </div>
        </div>

        <div id="panel-develop" role="tabpanel" aria-labelledby="tab-develop">
          <div
            class="${gridClasses({
              sub: true,
              wide: true,
            })}"
          >
            <div
              class="${colClasses({
                class: 'page--landing__tab-content',
                sizes: { sm: 4, md: 8, lg: 16 },
              })}"
            >
              <p class="page--landing__p">
                Carbon provides styles and components in Vanilla, React,
                Angular, and Vue for anyone building on the web.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="${colClasses({
          sizes: { sm: 4, md: 8, lg: 16 },
        })}"
      >
        <div
          class="${gridClasses({
            class: 'page--landing__r3',
            sub: true,
            wide: true,
          })}"
        >
          <div
            class="${colClasses({
              class: 'page--landing__label',
              sizes: { sm: 4, md: 2, lg: 4 },
            })}"
          >
            The principles
          </div>
          <div
            class="${colClasses({
              class: 'page--landing__title',
              sizes: {
                sm: 4,
                md: { span: 6, offset: 2 },
                lg: { span: 4, offset: 4 },
              },
            })}"
          >
            Carbon is open
          </div>
          <div
            class="${colClasses({
              class: 'page--landing__title',
              sizes: {
                sm: 4,
                md: { span: 6, offset: 2 },
                lg: { span: 4, offset: 8 },
              },
            })}"
          >
            Carbon is modular
          </div>
          <div
            class="${colClasses({
              class: 'page--landing__title',
              sizes: {
                sm: 4,
                md: { span: 6, offset: 2 },
                lg: { span: 4, offset: 12 },
              },
            })}"
          >
            Carbon is consistent
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
