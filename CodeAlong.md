# Code along

This document will grow and document what we did along the way.

## Step 1

1. Check it runs
   1. pnpm dev
   2. Stop it.
2. Add SASS.
   1. Install SASS.
   2. Rename `style.css` to `style.scss` and rerun.
   3. Update `main.js` to import the scss file.
   4. Check it runs.
3. Add Carbon

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

4. In `index.html`

   1. Replace the contents of the `<body>` tag with

      ```html
      <div>
        Hello Carbon! Well, not quite yet. This is the starting point for the
        Carbon React tutorial.
      </div>
      ```

5. A Carbon button in `index.html`

   1. Replace the body content again with

      ```html
      <cds-button class="button">Button</cds-button>
      <div><span>Count: </span><span class="count">0</span></div>
      ```

6. Side quest... make the button do something

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

7. asdf
