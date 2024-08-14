import { getCelebrities } from './database.js';

const celebrities = getCelebrities();

export const Celebrities = () => {
  let html = '<ol>';

  for (const celebrity of celebrities) {
    html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`;
  }

  html += '</ol>';
  return html;
};

document.addEventListener('click', (e) => {
  const clickedItem = e.target;
  if (clickedItem.dataset.type === 'celebrity') {
    const sport = clickedItem.dataset.sport;
    const celebName = clickedItem.textContent.trim();
    alert(`${celebName} is a ${sport} star`);
  }
});
