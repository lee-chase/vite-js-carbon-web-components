import './style.scss';
import '@carbon/web-components/es/components/button/button.js';
import '@carbon/web-components/es/components/ui-shell/index';

const bodyEl = document.querySelector('body');

// button click handler
const handleClick = () => {
  bodyEl.classList.toggle('g10');
  bodyEl.classList.toggle('g100');
};
document.querySelector('.button').addEventListener('click', handleClick);

// set initial theme based on preferences
if (matchMedia('(prefers-color-scheme: dark)')) {
  bodyEl.classList.add('g100');
} else {
  bodyEl.classList.add('g10');
}
