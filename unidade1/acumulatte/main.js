let numbers = [];
const display = document.querySelector('#display');

const generateNumbers = () => {
  for (let i = 0; i < 10; i++) {
    let randNumber = Math.floor(Math.random() * 10);
    numbers.push(randNumber);
    display.innerHTML += `<span>${randNumber}<span/>`;
  }

  const sum = numbers.reduce((sum, number) => sum + number, 0);

  display.innerHTML += `<span><br/>${sum}<span/>`;
};

generateNumbers();
