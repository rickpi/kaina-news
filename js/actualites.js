document.addEventListener('DOMContentLoaded', () => {
  const lastNewsContainer = document.querySelector('.last-news');
  const left = document.querySelector('.last-news__item--left');
  const middle = document.querySelector('.last-news__item--middle');
  const right = document.querySelector('.last-news__item--right');

  lastNewsContainer.addEventListener('mouseover', (event) => {
    const { target } = event;

    if (target === left) {
      left.classList.add('last-news__item--left--highlighted');
      middle.classList.remove('last-news__item--middle--highlighted');
      right.classList.remove('last-news__item--right--highlighted');
    }

    if (target === middle) {
      left.classList.remove('last-news__item--left--highlighted');
      middle.classList.add('last-news__item--middle--highlighted');
      right.classList.remove('last-news__item--right--highlighted');
    }

    if (target === right) {
      right.classList.add('last-news__item--right--highlighted');
      left.classList.remove('last-news__item--left--highlighted');
      middle.classList.remove('last-news__item--middle--highlighted');
    }
    
  });
});