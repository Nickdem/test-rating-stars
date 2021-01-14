export const starTemplate = `<div class="rating__star-item"></div>`;

function ratingStarTemplate(num) {
  return `<span>${num} ${starTemplate}</span>`
};

function ratingLineTemplate(num, num2) {
  return `
  <div class="rating__list-line line" data-title="${num2} чел.">
    <span class="line__colored" style="width: ${num}%;"></span>
    <span class="line__num">${num}%</span>
  </div>`
};

export function ratingsTemplate(ratingArr, numOfPeople) {
  return `
  <ul class='rating__list'>
    ${ratingArr.map(item => `
      <li class='rating__list-item'>
        ${ratingStarTemplate(item.stars)}
        ${ratingLineTemplate(Math.round((item.people/numOfPeople) * 100), item.people)}
      </li>
    `).join('')}
  </ul>
  <button class='remove-btn'>Кнопка</button>
  `
};