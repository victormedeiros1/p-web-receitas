const tbody = document.querySelector('tbody');

const buttonLoadBeers = document.querySelector('.button-load-beers');
const buttonLoadOrderedBeers = document.querySelector(
  '.button-load-ordered-beers'
);
const buttonLoadShuffleBeers = document.querySelector('.button-shuffle-beers');

buttonLoadBeers.addEventListener('click', loadBeers);
buttonLoadOrderedBeers.addEventListener('click', loadOrderedBeers);
buttonLoadShuffleBeers.addEventListener('click', loadShuffleBeers);

const beers = ['Heineken', 'Guiness', 'Desesperados', 'Becks'];

function loadBeers() {
  tbody.innerHTML = '';
  beers.map((beer) => (tbody.innerHTML += `<tr><td>${beer}</td></tr>`));
}

function loadOrderedBeers() {
  tbody.innerHTML = '';
  beers.sort().map((beer) => (tbody.innerHTML += `<tr><td>${beer}</td></tr>`));
}

function loadShuffleBeers() {
  tbody.innerHTML = '';
  beers
    .sort(() => Math.random() - 0.5)
    .map((beer) => (tbody.innerHTML += `<tr><td>${beer}</td></tr>`));
}
