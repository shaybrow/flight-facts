'use strict';

let userLuggage = 15;
let allCountries = [];
let gameContainer = document.getElementById('game-container');
let userName;

// document.getElementById.style("")
// let grabName = localStorage.getItem('user');
// if (grabName) {
//   userName = JSON.parse(grabName);
//   alert(`Welcome back ${userName}! Thanks for flying with us again.`);
// } else {
//   userName = prompt('Welcome aboard! Please enter your name:');
//   let stringName = JSON.stringify(userName);
//   localStorage.setItem('user', stringName);
// }


function Country(countryName, imgSrc1, imgSrc2, quizQ, quizA, answerType, choices = '') {
  this.name = countryName;
  this.src1 = imgSrc1;
  this.scr2 = imgSrc2;
  this.quizQ = quizQ;
  this.quizA = quizA;
  this.type = answerType;


  allCountries.push(this);
}

let canada = new Country('Canada', 'img/nick-karvounis-3_ZGrsirryY-unsplash.jpg', 'img/shawn-ang-72TE3gdDWhw-unsplash.jpg', 'Do all Canadians live in igloos?', false, 'trueOrFalse');
let newZealand = new Country('New Zealand', 'img/shawn-ang-72TE3gdDWhw-unsplash.jpg', 'img/shawn-ang-72TE3gdDWhw-unsplash.jpg', 'What is the population of New Zealand?', '5 million', 'multiChoice', ['5 million', '2 million', '7 million', '10 million']);

let h2 = document.createElement('h2');
h2.textContent = 'Welcome! Click START to begin';
h2.id = 'start';
gameContainer.appendChild(h2);

function clickStart(event) {
  let click = event.target.id;
  if (click === 'start') {
    gameContainer.innerHTML = '';
    // launch game
    canada.imgRender(this.src1);
    // canada.imgRender(this.src2);
    newZealand.qRender();
    // canada.qRender();

  }
  console.log('works');
}

Country.prototype.qRender = function () {
  let div = document.createElement('div');
  div.id = 'question-box';
  gameContainer.appendChild(div);
  let qH3 = document.createElement('h3');
  qH3.textContent = this.quizQ;
  div.appendChild(qH3);
  let fieldset = document.createElement('fieldset');
  div.appendChild(fieldset);


  let answer1 = document.createElement('input');
  let answer2 = document.createElement('input');
  let answer3 = document.createElement('input');
  let answer4 = document.createElement('input');
  if (this.type === 'trueOrFalse') {
    let answerLabelT = document.createElement('label');
    let answerLabelF = document.createElement('label');
    answerLabelT.textContent = 'True';
    answerLabelF.textContent = 'False';
    fieldset.appendChild(answerLabelT);
    fieldset.appendChild(answerLabelF);

    console.log('works1');
    answer1.type = 'radio';
    answer2.type = 'radio';
    answer1.name = 't';
    answer2.name = 't';
    // .name the same allows only 1 answer
    answerLabelT.appendChild(answer1);
    answerLabelF.appendChild(answer2);
  }
  else if (this.type === 'multiChoice') {
    let answerLabel1 = document.createElement('label');
    let answerLabel2 = document.createElement('label');
    let answerLabel3 = document.createElement('label');
    let answerLabel4 = document.createElement('label');
    answerLabel1.textContent = 'True';
    answerLabel2.textContent = 'False';
    answerLabel3.textContent = 'True1';
    answerLabel4.textContent = 'False2';
    fieldset.appendChild(answerLabel1);
    fieldset.appendChild(answerLabel2);
    fieldset.appendChild(answerLabel3);
    fieldset.appendChild(answerLabel4);

    console.log('works1');
    answer1.type = 'radio';
    answer2.type = 'radio';
    answer3.type = 'radio';
    answer4.type = 'radio';
    answer1.name = 't';
    answer2.name = 't';
    answer3.name = 't';
    answer4.name = 't';
    // .name the same allows only 1 answer
    answerLabel1.appendChild(answer1);
    answerLabel2.appendChild(answer2);
    answerLabel3.appendChild(answer3);
    answerLabel4.appendChild(answer4);
  }
  else if (this.type === 'userInput') {
    console.log('works');
  }
  let submit = document.createElement('button');
  submit.type = 'submit';
  submit.textContent = 'SUBMIT';
  fieldset.appendChild(submit);
};

function submitCheck(event) {
  event.preventDefault();



}

Country.prototype.imgRender = function () {
  let img = document.createElement('img');
  img.src = this.src1;
  img.classList = 'back-images';
  gameContainer.appendChild(img);
};











gameContainer.addEventListener('submit', submitCheck);
gameContainer.addEventListener('click', clickStart);