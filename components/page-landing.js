import { LitElement, html, unsafeCSS } from 'lit';

import styles from './page-landing.scss?inline';

import advocate from '@carbon/pictograms/svg/advocate.svg?raw';
import accelerating from '@carbon/pictograms/svg/accelerating-transformation.svg?raw';
import globe from '@carbon/pictograms/svg/globe.svg?raw';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';

export class PageLanding extends LitElement {
  constructor() {
    super();

    this.advocate = unsafeSVG(advocate);
    this.accelerating = unsafeSVG(accelerating);
    this.globe = unsafeSVG(globe);
  }

  increment = () => {
    const countEl = this.shadowRoot.querySelector('.count');
    countEl.count += 1;
  };

  render() {
    return html`<my-grid
      class="page--landing"
      fullWidth
      shadowStyle="grid-template-rows: auto 1fr auto"
    >
      <my-col
        class="page--landing__banner"
        .sizes="${{
          sm: 4,
          md: 8,
          lg: 16,
        }}"
      >
        <cds-breadcrumb noTrailingSlash aria-label="Page navigation">
          <cds-breadcrumb-item>
            <a href="/">Getting started</a>
          </cds-breadcrumb-item>
        </cds-breadcrumb>
        <h1 class="page--landing__heading">Design &amp; build with Carbon</h1>
      </my-col>
      <my-col class="page--landing__r2" .sizes="${{ sm: 4, md: 8, lg: 16 }}">
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
          <my-grid sub wide>
            <my-col
              class="page--landing__tab-content"
              .sizes="${{
                sm: 4,
                md: 4,
                lg: 7,
              }}"
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
            </my-col>
            <my-col .sizes="${{ sm: 4, md: 4, lg: { span: 8, offset: 8 } }}">
              <img
                class="page--landing__illo"
                src="./tab-illo.png"
                alt="Carbon illustration"
                width="640"
                height="498"
              />
            </my-col>
          </my-grid>
        </div>

        <div id="panel-design" role="tabpanel" aria-labelledby="tab-design">
          <my-grid sub wide>
            <my-col
              class="page--landing__tab-content"
              .sizes="${{
                sm: 4,
                md: 8,
                lg: 16,
              }}"
            >
              <p class="page--landing__p">
                Rapidly build beautiful and accessible experiences. The Carbon
                kit contains all resources you need to get started.
              </p>
            </my-col>
          </my-grid>
        </div>

        <div id="panel-develop" role="tabpanel" aria-labelledby="tab-develop">
          <my-grid sub wide>
            <my-col
              class="page--landing__tab-content"
              .sizes="${{
                sm: 4,
                md: 8,
                lg: 16,
              }}"
            >
              <p class="page--landing__p">
                Carbon provides styles and components in Vanilla, React,
                Angular, and Vue for anyone building on the web.
              </p>
            </my-col>
          </my-grid>
        </div>
      </my-col>
      <my-col .sizes="${{ sm: 4, md: 8, lg: 16 }}">
        <my-grid class="page--landing__r3" sub wide>
          <my-col
            class="page--landing__label"
            .sizes="${{
              sm: 4,
              md: 6,
              lg: 4,
            }}"
          >
            The principles
          </my-col>
          <my-col
            class="page--landing__title"
            .sizes="${{
              sm: 4,
              md: 6,
              lg: { span: 4, offset: 4 },
            }}"
          >
            <info-card headingPart1="Carbon is" headingPart2="Open">
              It's a distributed effort, guided by the principles of the
              open-source movement. Carbon's users are also it's makers, and
              everyone is encouraged to contribute."

              <div slot="icon">${this.advocate}</div>
            </info-card>
          </my-col>
          <my-col
            class="page--landing__title"
            .sizes="${{
              sm: 4,
              md: 6,
              lg: { span: 4, offset: 8 },
            }}"
          >
            <info-card headingPart1="Carbon is" headingPart2="Modular">
              Carbon's modularity ensures maximum flexibility in execution. It's
              components are designed to work seamlessly with each other, in
              whichever combination suits the needs of the user.

              <div slot="icon">${this.accelerating}</div>
            </info-card>
          </my-col>
          <my-col
            class="page--landing__title"
            .sizes="${{
              sm: 4,
              md: 6,
              lg: { span: 4, offset: 12 },
            }}"
          >
            <info-card headingPart1="Carbon is" headingPart2="Consistent">
              Based on the comprehensive IBM Design Language, every element and
              component of Carbon was designed from the ground up to work
              elegantly together to ensure consistent, cohesive user
              experiences.

              <div slot="icon">${this.globe}</div>
            </info-card>
          </my-col>
        </my-grid>
      </my-col>
    </my-grid>`;
  }

  static get styles() {
    return [unsafeCSS(styles)];
  }
}
customElements.define('page-landing', PageLanding);
