export const gridClasses = ({
  class: className = '',
  fullWidth = false,
  sub = false,
  wide = false,
  ...rest
} = {}) => {
  const classes = [];

  if (className) {
    classes.push(className);
  }

  const gridClass = sub ? 'cds--subgrid' : 'cds--css-grid';
  classes.push(gridClass);

  if (fullWidth) {
    classes.push(`${gridClass}--full-width`);
  }

  if (wide) {
    classes.push(`${gridClass}--full-wide`);
  }

  return classes.join(' ');
};

export const colClasses = ({ class: className = '', sizes }) => {
  const classes = [];

  if (className) {
    classes.push(className);
  }

  const colClass = 'cds--css-grid-column';
  classes.push(colClass);

  for (let size in sizes) {
    const classSizes = `cds--${size}:`;

    const val = sizes[size];
    if (typeof val === 'object') {
      classes.push(`${classSizes}col-span-${val.span}`);
      if (val.offset) {
        classes.push(`${classSizes}col-start-${val.offset + 1}`);
      }
    } else {
      classes.push(`${classSizes}col-span-${val}`);
    }
  }

  return classes.join(' ');
};
