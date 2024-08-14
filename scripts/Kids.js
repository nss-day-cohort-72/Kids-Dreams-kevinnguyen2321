import { getChildren } from './database.js';

const children = getChildren();

export const Kids = () => {
  let html = '<ol>';

  for (const child of children) {
    html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}">${child.name}</li>`;
  }

  html += '</ol>';
  return html;
};

document.addEventListener('click', (e) => {
  const clickedItem = e.target;
  if (clickedItem.dataset.type === 'child') {
    const wish = clickedItem.dataset.wish;
    const childName = clickedItem.textContent;
    alert(`${childName}'s wish is ${wish}`);
  }
});
