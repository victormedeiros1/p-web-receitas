const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');
const buttonLoad = document.querySelector('.button-load');
const loadingBox = document.querySelector('.loading-box');
const checkBoxes = document.querySelectorAll('.checkbox');

let baseURL = 'https://random-data-api.com/api/v2/banks?size=3';
let sizeRequest = 3;
let isLoading = false;

const toggleLoading = () => {
  isLoading = !isLoading;

  loadingBox.style.display = isLoading ? 'none' : 'initial';
};

const sendRequest = async () => {
  try {
    toggleLoading();
    const response = await fetch(baseURL).then((response) => response.json());

    return response;
  } catch (err) {
    console.log('Deu ruim');
  }
};

sendRequest();

const setSizeRequest = (e) => {
  size = e.target.value;
  baseURL = `https://random-data-api.com/api/v2/banks?size=${size}`;
};

const load = async () => {
  const data = await sendRequest();
  toggleLoading();

  thead.innerHTML = '';

  const keys = Object.keys(data[0]);

  // ===========================================================================

  let headerItemsArray = keys.map((key) => `<th>${key}</th>`);

  const headerItemsTag = `<tr>${headerItemsArray.join('')}</tr>`;

  thead.innerHTML = headerItemsTag;

  // ===========================================================================

  let keysArray = data.map(
    (item) => `<tr>${keys.map((key) => `<td>${item[key]}</td>`)}</tr>`
  );

  const bodyItemsTag = `<tr>${keysArray}</tr>`;

  tbody.innerHTML = bodyItemsTag.replaceAll('>,<', '><');
};

for (const checkBox of checkBoxes) {
  checkBox.addEventListener('click', (e) => setSizeRequest(e));
}

buttonLoad.addEventListener('click', () => load());
