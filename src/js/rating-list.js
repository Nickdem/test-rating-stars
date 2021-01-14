import { ratingsTemplate } from "./templates";

const ratings = [
  { stars: 1, people: 20 },
  { stars: 2, people: 25 },
  { stars: 3, people: 66 },
  { stars: 4, people: 52 },
  { stars: 5, people: 93 }
];

let prevIdx;

function allPeople(arr) {
  return arr.map(item => item.people).reduce((accumulator, currentValue) => accumulator + currentValue);
}

export function renderRatingsList() {
  removeRatingList();
  const idx = document.querySelectorAll('.rating__star-item--clicked').length;

  if ((idx > 0) && (idx !== prevIdx)) {
    if (prevIdx) ratings[prevIdx - 1].people = ratings[prevIdx - 1].people - 1;
    prevIdx = idx;
    ratings[idx - 1].people = ratings[idx - 1].people + 1;
    document.querySelector('.rating').insertAdjacentHTML('beforeend', ratingsTemplate(ratings, allPeople(ratings)));
    document.querySelector('.remove-btn').addEventListener('click', removeRatingList);
  }
};

function removeRatingList() {
  if (document.querySelector('.rating__list')) {
    document.querySelector('.rating__list').remove();
    document.querySelector('.remove-btn').removeEventListener('click', removeRatingList);
    document.querySelector('.remove-btn').remove();
  }
};