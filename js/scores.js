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
}

let grabScore = localStorage.getItem('score');
if (grabScore) {
  let random = JSON.parse(grabScore);
  parseScore(random);
  console.log(highScores);
}

function renderScores() {
  for (let i = 0; i < highScores.length; i++) {
    let li1 = document.createElement('li');
    li1.textContent = highScores[i].luggage;
    parentUl.appendChild(li1);
    let li2 = document.createElement('li');
    li2.textContent = highScores[i].username;
    parentOl.appendChild(li2);
  }
}
// need to figure out how to order the objects from high score to low
function sortScores() {
  highScores.sort(function (a, b) {
    return b.luggage - a.luggage;
  });
}


// render list function

new Score('Jason', 15);
new Score('Shay', 5);
new Score('Darci', 12);
sortScores();
renderScores();
