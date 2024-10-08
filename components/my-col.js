import { LitElement, html, unsafeCSS } from 'lit';

import styles from './my-col.scss?inline';
import { colClasses } from '../utils/grid';

export class MyCol extends LitElement {
  static properties = {
    class: { type: String },
    sizes: { type: Object },
  };

  constructor() {
    super();
    this.class = this.class ?? '';
    this.sizes = this.sizes ?? undefined;
  }

  render() {
    const classes = colClasses(this);

    // Add the classes to the container so they see the grid
    classes.forEach((val) => this.classList.add(val));

    return html`<slot></slot>`;
  }

  static get styles() {
    return [unsafeCSS(styles)];
  }
}
customElements.define('my-col', MyCol);
