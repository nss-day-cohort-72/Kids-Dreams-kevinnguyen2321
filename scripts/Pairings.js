import { getChildren, getCelebrities } from './database.js';

const kids = getChildren();
const celebrities = getCelebrities();

const findCelebrityMatch = (kidObject, celebrityArray) => {
  let celebrity = null;

  for (const star of celebrityArray) {
    if (kidObject.id === star.id) {
      celebrity = star;
    }
  }
  return celebrity;
};

export const Pairings = () => {
  let html = '';
  html = '<ul>';

  for (const kid of kids) {
    const kidsStar = findCelebrityMatch(kid, celebrities);
    html += `
            <li>
                ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}
            </li>
        `;
  }

  html += '</ul>';

  return html;
};
