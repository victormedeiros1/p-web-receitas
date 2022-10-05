const tbody = document.querySelector('tbody');

const buttonLoadFootballTeams = document.querySelector(
  '.button-load-football-teams'
);
const buttonLoadOrderedFootballTeams = document.querySelector(
  '.button-load-ordered-football-teams'
);
const buttonLoadShuffleFootballTeams = document.querySelector(
  '.button-shuffle-football-teams'
);

buttonLoadFootballTeams.addEventListener('click', () =>
  loadFootballTeams(footballTeams)
);
buttonLoadOrderedFootballTeams.addEventListener('click', () =>
  loadOrderedFootballTeams(footballTeams)
);
buttonLoadShuffleFootballTeams.addEventListener('click', () =>
  loadShuffleFootballTeams(footballTeams)
);

const footballTeams = [
  'Real Madrid',
  'Liverpool',
  'Flamengo',
  'Chelsea',
  'Everton',
  'Leeds',
  'Tottenham',
];

const loadFootballTeams = (footballTeams) => {
  tbody.innerHTML = '';
  footballTeams.map((team) => (tbody.innerHTML += `<tr><td>${team}</td></tr>`));
};

const loadOrderedFootballTeams = (footballTeams) => {
  tbody.innerHTML = '';
  footballTeams
    .sort()
    .map((team) => (tbody.innerHTML += `<tr><td>${team}</td></tr>`));
};

const loadShuffleFootballTeams = (footballTeams) => {
  tbody.innerHTML = '';
  footballTeams
    .sort(() => Math.random() - 0.5)
    .map((team) => (tbody.innerHTML += `<tr><td>${team}</td></tr>`));
};
