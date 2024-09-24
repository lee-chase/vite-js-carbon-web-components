# Code along

This document will grow and document what we did along the way.

## Step 1

1.  Check it runs
    1. pnpm dev
    2. Stop it.
2.  Add SASS.
    1. Install SASS.
    2. Rename `style.css` to `style.scss` and rerun.
    3. Update `main.js` to import the scss file.
    4. Check it runs.
3.  Add Carbon

    1. pnpm add @carbon/web-components @carbon/styles @carbon/icons
    2. In `main.js`
       1. `import "@carbon/web-components/es/components/button/button.js";`
       2. Delete imports for javascriptLogo, viteLogo and setupCounter and the files referred to.
       3. Delete everything else except the style and button import.
    3. In `style.scss`
       1. Replace contents with
    4. Check it runs.

       ```scss
       @use '@carbon/styles/scss/reset';
       @use '@carbon/styles/scss/theme' as *;
       @use '@carbon/styles/scss/themes';

       :root {
         @include theme(themes.$g10);
         background-color: $background;
         color: $text-primary;
       }
       ```

4.  In `index.html`

    1. Replace the contents of the `<body>` tag with

       ```html
       <div>
         Hello Carbon! Well, not quite yet. This is the starting point for the
         Carbon React tutorial.
       </div>
       ```

5.  A Carbon button in `index.html`

    1. Replace the body content again with

       ```html
       <cds-button class="button">Button</cds-button>
       <div><span>Count: </span><span class="count">0</span></div>
       ```

6.  Side quest... make the button do something

    1. In `main.js` add the following

       ```js
       export const increment = () => {
         const countEl = document.querySelector('.count');
         countEl.innerHTML = parseInt(countEl.innerText) + 1;
       };

       document.querySelector('.button').addEventListener('click', increment);
       ```

    2. A little bit of lit.

       1. Install `pnpm add lit`
       2. In `main.js` add the following import.

          ```js
          import { LitElement, html } from 'lit';
          ```

          Then replace the increment function with

          ```js
          export class MyCount extends LitElement {
            static properties = {
              count: { attribute: true, type: Number },
            };

            constructor() {
              super();
              this.count = this.count ?? 0;
            }

            render() {
              return html`<div>
                <span>Count: </span>
                <span class="count">${this.count}</span>
              </div>`;
            }
          }
          customElements.define('my-count', MyCount);

          export const increment = () => {
            const countEl = document.querySelector('.count');
            countEl.count += 1;
          };
          ```

       3. Then in `index.html` replace the counter and surrounding div with

          ```html
          <my-count class="count" count="100" />
          ```

7.  Next we add UI shell

    1. In `main.js` import the UIShell components using `import '@carbon/web-components/es/components/ui-shell/index';`
    2. An example of UIShell usage can be found here in the Web Components Storybook [https://web-components.carbondesignsystem.com/?path=/docs/components-ui-shell--header-base](https://web-components.carbondesignsystem.com/?path=/docs/components-ui-shell--header-base)
    3. Modify `index.html` first wrapping the contents of body with `<main class="main">...</main>`.
    4. Add the classes `<body class="app g10">` to the body tag.
    5. Then add the following `cds-header` before `main`

       ```html
       <header>
         <cds-header class="g100">
           <cds-header-name href="/" prefix="IBM"
             >Carbon Tutorial</cds-header-name
           >
         </cds-header>
       </header>
       ```

8.  Replacing the the `:root` CSS with the following in `style.scss`

    ```scss
    .app {
      display: grid;
      grid-template-rows: 3rem 1fr;
      height: 100vh;
      overflow: hidden;
    }

    .g10 {
      @include theme(themes.$g10);
      background-color: $background;
      color: $text-primary;
    }

    .g100 {
      @include theme(themes.$g100);

      background-color: $background;
      color: $text-primary;
    }
    ```

9.  Add a new page to the menu.

    1. After the `<cd-header-name>` tag add
       ```html
       <cds-header-nav menu-bar-label="Carbon Tutorial">
         <cds-header-nav-item href="./repositories.html"
           >Repositories</cds-header-nav-item
         >
       </cds-header-nav>
       ```
    2. Next duplicate `index.html` and name it `repositories.html`.
    3. Replace the contents of the `main` tag with the wordS `REPOSITORIES PAGE`.
    4. Give it a try

10. To complete step 1 of the tutorial, and before a `Lit`tle refactor we add the global actions to the header. 1. While we could copy the SVG files directly into our source we will instead create a simple Icon components in `main.js` utilizing icon functions exported with Carbon Web Components.

    1.  First import the following icons

        ```js
        import Notification20 from '@carbon/web-components/es/icons/notification/20.js';
        import UserAvatar20 from '@carbon/web-components/es/icons/user--avatar/20.js';
        import Switcher20 from '@carbon/web-components/es/icons/switcher/20.js';
        ```

    2.  Then create the add the following Icon component.

        ```js
        export class MyIcon extends LitElement {
          static properties = {
            icon: { attribute: true, type: String },
          };

          render() {
            return (
              { Notification20, UserAvatar20, Switcher20 }[this.icon] ??
              Notification20
            )();
          }
        }
        customElements.define('my-icon', MyIcon);
        ```

    3.  NOTE: It may not be the most efficient strategy to include large numbers of icons in one component.
    4.  In both`index.html`and`repositories.html` add the following to include the global actions. Note that at the time of writing `<cds-global-header>` did not appear to exist as a component.

        ```html
        <div class="cds--header__global">
          <cds-header-global-action
            aria-label="Notifications"
            className="action-icons"
          >
            <my-icon slot="icon" icon="Notification20" />
          </cds-header-global-action>
          <cds-header-global-action
            aria-label="User Avatar"
            className="action-icons"
          >
            <my-icon slot="icon" icon="UserAvatar20" />
          </cds-header-global-action>
          <cds-header-global-action aria-label="App Switcher">
            <my-icon slot="icon" icon="Switcher20" />
          </cds-header-global-action>
        </div>
        ```
