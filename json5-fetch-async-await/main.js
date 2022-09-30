import { load } from './request.js';

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');
const buttonLoad = document.querySelector('.button-load');
const loadingBox = document.querySelector('.loading-box');
const checkBoxes = document.querySelectorAll('.checkbox');

let baseURL = 'https://random-data-api.com/api/v2/blood_types?size=3';
let sizeRequest = 3;
let isLoading = false;

const toggleLoading = () => {
  isLoading = !isLoading;

  loadingBox.style.display = isLoading ? 'initial' : 'none';
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

const setSizeRequest = (e) => {
  sizeRequest = e.target.value;
  baseURL = `https://random-data-api.com/api/v2/blood_types?size=${sizeRequest}`;
};

for (const checkBox of checkBoxes) {
  checkBox.addEventListener('click', (e) => setSizeRequest(e));
}

buttonLoad.addEventListener('click', async () => {
  const data = await sendRequest();
  load(data, thead, tbody, toggleLoading);

  toggleLoading();
});
