import './style.scss';
import '@carbon/web-components/es/components/button/button.js';

const handleClick = () => {
  document.querySelector(':root').classList.toggle('light');
};

document.querySelector('.button').addEventListener('click', handleClick);
