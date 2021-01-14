import { renderRatingsList } from './rating-list';
import { starTemplate } from './templates';

export function init() {
  const starListNode = document.querySelector('.rating__star-list');
  const stars = 5;

  for (let i = 0; i < stars; i++) starListNode.insertAdjacentHTML('beforeend', starTemplate);

  const starItems = [...starListNode.children];
  
  starListNode.addEventListener('mouseover', e => eventHandler(e, 'rating__star-item--hover', starItems));
  starListNode.addEventListener('mouseleave', e => {
    e.stopPropagation();
    defaultStars('rating__star-item--hover', starItems);
  });

  starListNode.addEventListener('click', e => {
    eventHandler(e, 'rating__star-item--clicked', starItems);
    renderRatingsList();
  });
}

function eventHandler(evt, cls, collection) {
  evt.stopPropagation();
  const idx = collection.findIndex(item => item === evt.target);
  coloredStars(idx, cls, collection);
};

function defaultStars(cls, collection) {
  collection.forEach((child) => child.classList.remove(cls));
};

function coloredStars(num, cls, collection) {
  defaultStars(cls, collection);
  collection.forEach((child, idx) => (num + 1 > idx) && child.classList.add(cls));
};