import { LitElement, html, unsafeCSS } from 'lit';
import styles from './my-grid.scss?inline';
import { gridClasses } from '../utils/grid';

export class myGrid extends LitElement {
  static properties = {
    class: { type: String },
    fullWidth: { type: Boolean },
    sub: { type: Boolean },
    wide: { type: Boolean },
    shadowStyle: { type: String },
  };

  constructor() {
    super();
    this.class = this.class ?? '';
    this.fullWidth = this.fullWidth ?? false;
    this.sub = this.sub ?? false;
    this.wide = this.wide ?? false;
    this.shadowStyle = this.shadowStyle ?? '';
  }

  render() {
    const classes = gridClasses(this).join(' ');

    // Grid styling added to contained components, allowing CSS Grid
    // to affect the it's own slot content.
    return html`<div class="${classes}" style="${this.shadowStyle}">
      <slot></slot>
    </div> `;
  }

  static get styles() {
    return [unsafeCSS(styles)];
  }
}
customElements.define('my-grid', myGrid);
