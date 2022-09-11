const div = document.getElementById('beers');
const buttonLoad = document.querySelector('.button-load');

buttonLoad.addEventListener('click', toggleDiv);

let isVisible = true;

function toggleDiv() {
  isVisible = !isVisible;
  buttonLoad.innerText = isVisible ? 'Hidden' : 'Show';
  div.style.opacity = isVisible ? 1 : 0;
}
