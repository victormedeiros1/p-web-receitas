const div = document.getElementById('beers');
const buttonLoad = document.querySelector('.button-load');

buttonLoad.addEventListener('click', toggleDiv);

let isVisible = true;

function toggleDiv() {
  isVisible = !isVisible;
  buttonLoad.innerText = isVisible ? 'Hidden' : 'Show';

  console.log(isVisible);

  if (isVisible) {
    div.innerHTML = `<h1>Guiness</h1>`;
    setTimeout(() => {
      div.style.opacity = 1;
    }, 300);
  } else {
    div.style.opacity = 0;
    setTimeout(() => {
      div.innerHTML = '';
    }, 300);
  }
}
