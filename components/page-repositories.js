import { LitElement, html, unsafeCSS } from 'lit';
import { Octokit } from '@octokit/core';
import styles from './page-repositories.scss?inline';

const octokitClient = new Octokit({});

const headings = ['Name', 'Create', 'Updated', 'Open Issues', 'Stars', 'Links'];

export class PageRepositories extends LitElement {
  constructor() {
    super();
    this.data = [];
    this.loading = true;
    this.error = null;
  }

  connectedCallback() {
    super.connectedCallback();
    // setTimeout(() => {
    this.fetchData();
    // }, 100);
  }

  async fetchData() {
    // this.data = [...data];
    const res = await octokitClient.request('GET /orgs/{org}/repos', {
      org: 'carbon-design-system',
      per_page: 75,
      sort: 'updated',
      direction: 'desc',
    });

    if (res.status === 200) {
      this.data = res.data.map((row) => ({
        name: row.name,
        created: new Date(row.created_at).toLocaleDateString(),
        updated: new Date(row.updated_at).toLocaleDateString(),
        openIssues: row.open_issues_count,
        stars: row.stargazers_count,
        links: { url: row.html_url, homepage: row.homepage },
        expansion: row.description,
      }));
      this.loading = false;
      this.requestUpdate();
    } else {
      console.log('Error obtaining repository data');
    }
  }

  render() {
    return html`
      <my-grid class="page--repositories" fullWidth>
        <my-col
          class="page--repositories__table"
          .sizes="${{ sm: 4, md: 8, lg: 16 }}"
        >
          ${this.loading
            ? html`<cds-table-skeleton></cds-table-skeleton>`
            : html`
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
                    ${this.data.map(
                      (row) => html`<cds-table-row>
                          ${Object.keys(row).map((key) => {
                            const cell = row[key];
                            if (key !== 'expansion') {
                              return html`<cds-table-cell data-key="${key}"
                                >${key === 'links'
                                  ? html`<link-list
                                      homepage="${cell.homepage}"
                                      url="${cell.url}"
                                    >
                                    </link-list>`
                                  : cell}</cds-table-cell
                              >`;
                            }
                          })} </cds-table-row
                        ><cds-table-expanded-row
                          >${row.expansion}</cds-table-expanded-row
                        >`,
                    )}
                  </cds-table-body>
                </cds-table>
              `}
        </my-col>
      </my-grid>
    `;
  }

  static get styles() {
    return [unsafeCSS(styles)];
  }
}
customElements.define('page-repositories', PageRepositories);
