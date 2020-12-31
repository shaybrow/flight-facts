'use strict';

let highScores = [];
let parentUl = document.getElementById('leader-board');
let parentOl = document.getElementById('leader-name');

parentOl.textContent = 'Username';
parentUl.textContent = 'Score (luggage remaining)';

function Score(userName, luggage) {
  this.username = userName;
  this.luggage = luggage;
  highScores.push(this);
}

function parseScore(score) {
  let parsedScore = score.match(/\d+/g);
  let parsedUser = score.match(/[a-zA-Z]+/g);
  new Score(parsedUser, parsedScore);
  let stringifyScores = JSON.stringify(highScores);
  localStorage.setItem('scores', stringifyScores);
}
let grabScores = localStorage.getItem('scores');
if (grabScores) {
  highScores = JSON.parse(grabScores);
} else {
  new Score('Jason', 14);
  new Score('Shay', 5);
  new Score('Darci', 12);
  new Score('Pilot Jane', 15);
  new Score('Flight Attendant Jim', 13);
  new Score('Simple Sam', 7);

}

let grabScore = localStorage.getItem('score');
if (grabScore) {
  let random = JSON.parse(grabScore);
  parseScore(random);
}

function renderScores() {
  let previous;
  let previous2;
  for (let i = 0; i < highScores.length; i++) {
    let li1 = document.createElement('li');
    li1.textContent = highScores[i].luggage;
    let li2 = document.createElement('li');
    li2.textContent = highScores[i].username;
    if (previous !== li2.textContent || previous2 !== li1.textContent) {
      parentUl.appendChild(li1);
      parentOl.appendChild(li2);
    }
    previous = li2.textContent;
    previous2 = li1.textContent;

  }
}


// order the objects from high score to low
function sortScores() {
  highScores.sort(function (a, b) {
    return b.luggage - a.luggage;
  });
}


// render list function
sortScores();
renderScores();
