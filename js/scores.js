'use strict';

let highScores = [];

function Score(userName, luggage) {
  this.username = userName;
  this.luggage = luggage;
  highScores.push(this);
}

let grabScore = localStorage.getItem('score');
if (grabScore) {
  let random = JSON.parse(grabScore);
  console.log(random);
}

// render list function

new Score('Jason', 15);
new Score('Shay', 5);
new Score('Darci', 12);
