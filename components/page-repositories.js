import { LitElement, html, unsafeCSS } from 'lit';
import styles from './page-repositories.scss?inline';

import { colClasses, gridClasses } from '../utils/grid';

const headings = ['Name', 'Create', 'Updated', 'Open Issues', 'Stars', 'Links'];
const data = [
  {
    name: 'Repo 1',
    created: 'Date',
    updated: 'Date',
    openIssues: 123,
    stars: 456,
    links: 'Links',
    expansion: 'Row description',
  },
  {
    name: 'Repo 2',
    created: 'Date',
    updated: 'Date',
    openIssues: 123,
    stars: 456,
    links: 'Links',
    expansion: 'Row description',
  },
  {
    name: 'Repo 3',
    created: 'Date',
    updated: 'Date',
    openIssues: 123,
    stars: 456,
    links: 'Links',
    expansion: 'Row description',
  },
];

export class PageRepositories extends LitElement {
  render() {
    return html` <div
      class="${gridClasses({ class: 'page--repositories', fullWidth: true })}"
    >
      <div
        class="${colClasses({
          class: 'page--repositories__table',
          sizes: { sm: 4, md: 8, lg: 16 },
        })}"
      >
        <cds-table expandable>
          <cds-table-header-title slot="title"
            >Carbon Repositories</cds-table-header-title
          >
          <cds-table-header-description slot="description"
            >A collection of public Carbon
            repositories.</cds-table-header-description
          >
          <cds-table-head>
            <cds-table-header-row>
              ${headings.map(
                (heading) =>
                  html`<cds-table-header-cell
                    >${heading}</cds-table-header-cell
                  >`,
              )}
            </cds-table-header-row>
          </cds-table-head>
          <cds-table-body>
            ${data.map(
              (row) => html`<cds-table-row>
                  ${Object.keys(row).map((key) => {
                    const cell = row[key];
                    if (key !== 'expansion') {
                      return html`<cds-table-cell data-key="${key}"
                        >${cell}</cds-table-cell
                      >`;
                    }
                  })} </cds-table-row
                ><cds-table-expanded-row
                  >${row.expansion}</cds-table-expanded-row
                >`,
            )}
          </cds-table-body>
        </cds-table>
      </div>
    </div>`;
  }

  static get styles() {
    return [unsafeCSS(styles)];
  }
}
customElements.define('page-repositories', PageRepositories);
