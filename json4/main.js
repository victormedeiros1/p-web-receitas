const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');

const buttonLoadBeers = document.querySelector('.button-load-beers');

const beers = [
  { name: 'Heineken', alcohol: '10%', ibu: '30', style: 'Red Ale' },
  { name: 'Guiness', alcohol: '20%', ibu: '22', style: 'English IPA' },
  { name: 'Desesperados', alcohol: '5%', ibu: '21', style: 'Imperial Stout' },
  { name: 'Becks', alcohol: '30%', ibu: '43', style: 'Cream Ale' },
];

buttonLoadBeers.addEventListener('click', () =>
  loadBeers(['Beers', 'Alcohol', 'Ibu', 'Style'], beers)
);

const loadBeers = (
  headerItems = ['Nome', 'Álcool', 'Estilo', 'Amargor'],
  data
) => {
  thead.innerHTML = '';

  let headerItemsArray = headerItems.map((item) => `<th>${item}</th>`);

  const headerItemsTag = `<tr>${headerItemsArray.join('')}</tr>`;

  thead.innerHTML = headerItemsTag;

  // ===========================================================================

  const keys = Object.keys(data[0]);

  let keysArray = data.map(
    (item) => `<tr>${keys.map((key) => `<td>${item[key]}</td>`)}</tr>`
  );

  const bodyItemsTag = `<tr>${keysArray}</tr>`;

  tbody.innerHTML = bodyItemsTag.replaceAll('>,<', '><');
};
