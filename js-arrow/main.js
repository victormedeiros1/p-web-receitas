const tbody = document.querySelector('tbody');
const buttonLoadBeers = document.querySelector('.button-load-beers');

const beers = ['Heineken', 'Guiness', 'Desesperados', 'Becks'];
buttonLoadBeers.addEventListener('click', () => loadBeers(beers));

const loadBeers = (beers) => {
  tbody.innerHTML = '';
  beers.map((beer) => (tbody.innerHTML += `<tr><td>${beer}</td></tr>`));
};
