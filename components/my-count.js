import { LitElement, html } from 'lit';

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
