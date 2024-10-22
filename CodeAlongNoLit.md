# Step 1

# Code along

This document will grow and document what we did along the way.

## Step 1

Using your favorite package installer or `yarn` as we will use here. Create a Vite app with Vanilla Javascript.

[Vite getting started](https://vite.dev/guide/#scaffolding-your-first-vite-project)

1.  Check it runs
    1. yarn dev
    2. Stop it.
2.  Add SASS.
    1. Install SASS `yarn sass`
    2. Rename `style.css` to `style.scss` and rerun.
    3. Update `main.js` to import the scss file.
    4. Check it runs.
3.  Add Carbon

    1. `yarn add @carbon/web-components @carbon/styles @carbon/icons`
    2. In `main.js`

       1. Import the Carbon button component.

          ```js
          import '@carbon/web-components/es/components/button/button.js';
          ```

       2. Delete imports for javascriptLogo, viteLogo and setupCounter and the files referred to.
       3. Delete everything else except the style and button import.

    3. In `style.scss` replace the contents with

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
