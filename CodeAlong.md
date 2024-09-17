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
@use '@carbon/styles/scss/theme';
@use '@carbon/styles/scss/themes';

:root {
  @include theme.theme(themes.$g10);
  background-color: var(--cds-background);
  color: var(--cds-text-primary);
}
```

4.  In `index.html`
    1. Replace the contents of the `<body>` tag with

```html
<div>
  Hello Carbon! Well, not quite yet. This is the starting point for the Carbon
  React tutorial.
</div>
```
