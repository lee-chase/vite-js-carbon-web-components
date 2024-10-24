import './style.scss';
import '@carbon/web-components/es/components/button/button.js';
import '@carbon/web-components/es/components/ui-shell/index';
import '@carbon/web-components/es/components/checkbox/index';
import '@carbon/web-components/es/components/content-switcher/index';
import '@carbon/web-components/es/components/breadcrumb/index';
import '@carbon/web-components/es/components/tabs/index';
import '@carbon/web-components/es/components/data-table/index.js';

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
[...globalActions].forEach((action) =>
  action.addEventListener('click', handleGlobalActionClick),
);

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
document
  .querySelector('.theme-selector')
  .addEventListener('cds-content-switcher-selected', handleSwitch);

const handleHeaderCompliment = (ev) => {
  // toggles compliment theme on header element
  document
    .querySelector('header')
    .classList.toggle('compliment', ev.target.checked);
};
document
  .querySelector('.theme-header__compliment')
  .addEventListener('cds-checkbox-changed', handleHeaderCompliment);

// cds-table-row creation
const data = [
  {
    name: 'Repo A',
    created: 'Date',
    updated: 'Date',
    openIssues: 123,
    stars: 456,
    links: 'Links',
    expansion: 'Row description',
  },
  {
    name: 'Repo B',
    created: 'Date',
    updated: 'Date',
    openIssues: 123,
    stars: 456,
    links: 'Links',
    expansion: 'Row description',
  },
  {
    name: 'Repo C',
    created: 'Date',
    updated: 'Date',
    openIssues: 123,
    stars: 456,
    links: 'Links',
    expansion: 'Row description',
  },
];
const tableRowTemplate = document.querySelector('template#template--table-row');
const tableBody = document.querySelector('cds-table-body');
if (tableBody && tableRowTemplate) {
  tableBody.innerHTML = '';
  data.forEach((row) => {
    let newRow = tableRowTemplate.content.cloneNode(true);
    const keys = Object.keys(row);
    keys.forEach((key) => {
      const keyEl = newRow.querySelector(`[key="${key}"]`);
      keyEl.innerHTML = row[key];
    });
    tableBody.appendChild(newRow);
  });
}
