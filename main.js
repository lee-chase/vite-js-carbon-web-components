import './style.scss';
import '@carbon/web-components/es/components/button/button.js';
import '@carbon/web-components/es/components/ui-shell/index';
import '@carbon/web-components/es/components/checkbox/index';
import '@carbon/web-components/es/components/content-switcher/index';
import '@carbon/web-components/es/components/breadcrumb/index';
import '@carbon/web-components/es/components/tabs/index';
import '@carbon/web-components/es/components/data-table/index.js';
import '@carbon/web-components/es/components/link/index';
import '@carbon/web-components/es/components/pagination/index';

import { Octokit } from '@octokit/core';

const octokitClient = new Octokit({});

const bodyEl = document.querySelector('body');

// user profile click handler
const handleGlobalActionClick = (ev) => {
  const targetPanelId = ev.currentTarget.getAttribute('panel-id');
  const panels = document.querySelectorAll('cds-header-panel');
  panels.forEach((panel) => {
    if (panel.id !== targetPanelId) {
      panel.expanded = false;
    }
  });
};
const globalActions = document.querySelectorAll('cds-header-global-action');
[...globalActions].forEach((action) => action.addEventListener('click', handleGlobalActionClick));

const handleSwitch = (ev) => {
  // Applies new theme or defers to system preferences by removing theme
  switch (ev.detail.item.value) {
    case 'light':
      bodyEl.classList.remove('g100');
      bodyEl.classList.add('g10');
      break;
    case 'dark':
      bodyEl.classList.remove('g10');
      bodyEl.classList.add('g100');
      break;
    default:
      bodyEl.classList.remove('g10');
      bodyEl.classList.remove('g100');
  }
};
document.querySelector('.theme-selector').addEventListener('cds-content-switcher-selected', handleSwitch);

const handleHeaderCompliment = (ev) => {
  // toggles compliment theme on header element
  document.querySelector('header').classList.toggle('compliment', ev.target.checked);
};
document.querySelector('.theme-header__compliment').addEventListener('cds-checkbox-changed', handleHeaderCompliment);

// cds-table-row creation
let data = [];
let pageSize = 10;
let firstRowIndex = 0;

const updatedTable = () => {
  const tableRowTemplate = document.querySelector('template#template--table-row');
  const tableBody = document.querySelector('cds-table-body');
  if (tableBody && tableRowTemplate) {
    tableBody.innerHTML = '';
    data
      .filter((v, i) => i >= firstRowIndex && i < firstRowIndex + pageSize)
      .forEach((row) => {
        let newRow = tableRowTemplate.content.cloneNode(true);
        const keys = Object.keys(row);
        keys.forEach((key) => {
          const keyEl = newRow.querySelector(`[key="${key}"]`);
          if (key === 'links') {
            keyEl.innerHTML = `<ul class="link-list">
  <li>
    <cds-link href="${row[key].url}">Github</cds-link>
  </li>
  <li>
    <cds-link href="${row[key].homepage}">Homepage</cds-link>
  </li>
</ul>`;
          } else {
            keyEl.innerHTML = row[key];
          }
        });
        tableBody.appendChild(newRow);
      });
  }
};

const handlePageChangeCurrent = ({ detail }) => {
  firstRowIndex = (detail.page - 1) * detail.pageSize;
  // Unfortunately not working - seems to lose the expanding row
  // https://github.com/carbon-design-system/carbon/issues/#17894

  updatedTable();
};

const handlePageSizeChange = () => {
  // Unfortunately not working
  // https://github.com/carbon-design-system/carbon/issues/17713
};

const updatePagination = () => {
  // update pagination
  const paginationEl = document.querySelector('cds-pagination');
  paginationEl.setAttribute('total-items', data.length);

  setTimeout(() => {
    // defer until after the dom is updated
    paginationEl.addEventListener('cds-pagination-changed-current', handlePageChangeCurrent);
    paginationEl.addEventListener('cds-pagination-changed-page-size', handlePageSizeChange);
  }, 10);
};

const replaceSkeleton = () => {
  const tableSkeleton = document.querySelector('cds-table-skeleton');
  const tableTemplate = document.querySelector('template#template--table');

  if (tableSkeleton && tableTemplate) {
    tableSkeleton.replaceWith(tableTemplate.content.cloneNode(true));

    // update table rows
    updatedTable();

    updatePagination();
  }
};

const fetchData = async () => {
  const res = await octokitClient.request('GET /orgs/{org}/repos', {
    org: 'carbon-design-system',
    per_page: 75,
    sort: 'updated',
    direction: 'desc',
  });

  if (res.status === 200) {
    data = res.data.map((row) => ({
      name: row.name,
      created: new Date(row.created_at).toLocaleDateString(),
      updated: new Date(row.updated_at).toLocaleDateString(),
      openIssues: row.open_issues_count,
      stars: row.stargazers_count,
      links: { url: row.html_url, homepage: row.homepage },
      expansion: row.description,
    }));

    setTimeout(() => {
      replaceSkeleton();
    }, 1000);
  } else {
    console.log('Error obtaining repository data');
  }
};
fetchData();
