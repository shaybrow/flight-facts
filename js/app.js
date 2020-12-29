'use strict';

let userLuggage = 15;
let allCountries = [];
let gameContainer = document.getElementById('game-container');
let userName;
let currentCountry;
let form = document.createElement('form');

function getUserName() {
  // document.getElementById.style('');
  let grabName = localStorage.getItem('user');
  if (grabName) {
    userName = JSON.parse(grabName);
    let whatever = confirm(`Welcome back ${userName}! Thanks for flying with us again. Would you like to change your user name?`);
    if (whatever === true) {
      userName = prompt('What would you like your name to be?');
      let stringName = JSON.stringify(userName);
      localStorage.setItem('user', stringName);
    }
  } else {
    userName = prompt('Welcome aboard! Please enter your name:');
    let stringName = JSON.stringify(userName);
    localStorage.setItem('user', stringName);
  }
}


function Country(countryName, imgSrc1, imgSrc2, quizQ, quizA, answerType, choices = '') {
  this.name = countryName;
  this.src1 = imgSrc1;
  this.scr2 = imgSrc2;
  this.quizQ = quizQ;
  this.quizA = quizA;
  this.type = answerType;
  this.choices = choices;


  allCountries.push(this);
}
new Country('South Korea', 'img/shawn-ang-72TE3gdDWhw-unsplash (1).jpg', 'placeholder', 'Does South Korea have the fastest average internet speed in the world?', 'true', 'trueOrFalse');
new Country('Ethiopia', 'img/daggy-j-ali-MUcM3GCCQPk-unsplash (1).jpg', 'placeholder', 'How old is the worlds oldest hominid remains, discovered in Ethiopia?', '4.4 million years old', 'multiChoice', ['2000 years old', '200,000 years old', '3.2 million years old', '4.4 million years old', '1 billion years old']);
new Country('Denmark', 'img/nick-karvounis-3_ZGrsirryY-unspl.jpg', 'placeholder', 'What\'s the capitol of Denmark?', 'Copenhagen', 'multiChoice', ['Copenhagen', 'Stockholm', 'Helsinki', 'Toronto']);

new Country('Canada', 'img/conor-samuel-Onadzzr1yBU-unsplas.jpg', 'img/shawn-ang-72TE3gdDWhw-unsplash.jpg', 'Do all Canadians live in igloos?', 'false', 'trueOrFalse');

new Country('New Zealand', 'img/shawn-ang-72TE3gdDWhw-unsplash.jpg', 'img/shawn-ang-72TE3gdDWhw-unsplash.jpg', 'What is the population of New Zealand?', '5 million', 'multiChoice', ['5 million', '2 million', '7 million', '10 million']);
// let denmark = new Country('Denmark', 'img/shawn-ang-72TE3gdDWhw-unsplash.jpg', 'img/shawn-ang-72TE3gdDWhw-unsplash.jpg', 'What\'s the capitol of Denmark?', 'Copenhagen', 'userInput');

let h2 = document.createElement('h2');
h2.textContent = 'Welcome! Click START to begin';
h2.id = 'start';
gameContainer.appendChild(h2);

function clickStart(event) {
  let click = event.target.id;
  if (click === 'start') {
    getUserName();
    gameContainer.innerHTML = '';
    // launch game
    // canada.imgRender(this.src2);
    // newZealand.qRender();
    let number = getRandomIndex(allCountries.length);
    currentCountry = allCountries[number];
    currentCountry.imgRender(this.src1);
    currentCountry.qRender();
    allCountries.splice(number, 1);
    // canada.qRender();
    // denmark.qRender();
    // form.id = 'question-box';
    // gameContainer.appendChild(form);
    gameContainer.removeEventListener('click', clickStart);
    gameContainer.addEventListener('submit', submitCheck);
  }
  console.log('works');
}

// get random index
function getRandomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

Country.prototype.qRender = function () {
  let form = document.createElement('form');
  form.id = 'question-box';
  gameContainer.appendChild(form);
  let qH3 = document.createElement('h3');
  qH3.textContent = this.quizQ;
  form.appendChild(qH3);
  let fieldset = document.createElement('fieldset');
  form.appendChild(fieldset);


  let answer1 = document.createElement('input');
  let answer2 = document.createElement('input');
  // let answer3 = document.createElement('input');
  // let answer4 = document.createElement('input');
  if (this.type === 'trueOrFalse') {
    let answerLabelT = document.createElement('label');
    let answerLabelF = document.createElement('label');
    answerLabelT.textContent = 'True';
    answerLabelF.textContent = 'False';
    fieldset.appendChild(answerLabelT);
    fieldset.appendChild(answerLabelF);
    answer1.id = 'true';
    answer2.id = 'false';
    answer1.value = 'true';
    answer2.value = 'false';
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
    for (let i = 0; i < this.choices.length; i++) {
      let answerLabel1 = document.createElement('label');
      answerLabel1.textContent = `${this.choices[i]}`;
      fieldset.appendChild(answerLabel1);
      let answer = document.createElement('input');
      answer.type = 'radio';
      answer.name = 't';
      answer.value = `${this.choices[i]}`;
      answerLabel1.appendChild(answer);
    }
  }
  // else if (this.type === 'userInput') {
  //   let userAnswer = document.createElement('input');
  //   userAnswer.type = 'text';
  //   fieldset.appendChild(userAnswer);

  //   console.log('works2');
  // }
  let submit = document.createElement('button');
  submit.type = 'submit';
  submit.textContent = 'SUBMIT';
  fieldset.appendChild(submit);
};

function submitCheck(event) {
  event.preventDefault();
  // console.log('I am here');
  let answerT = event.target.t.value;
  // console.log(answerT);
  gameContainer.innerHTML = '';
  if (answerT === currentCountry.quizA) {
    let aH3 = document.createElement('h3');
    aH3.textContent = 'That\'s correct!';
    form.appendChild(aH3);
  }
  else {
    let aH3 = document.createElement('h3');
    aH3.textContent = 'WRONG!';
    userLuggage--;
    form.appendChild(aH3);
  }
  if (allCountries.length === 0) {
    let aH4 = document.createElement('h4');
    aH4.textContent = `Congratulations! You saved ${userLuggage} pieces of luggage!`;
    gameContainer.appendChild(aH4);
    let a = document.createElement('a');
    a.id = 'high-score';
    a.href = 'scores.html';
    a.textContent = 'View High Scores';
    gameContainer.appendChild(a);
    let stringLuggage = JSON.stringify(`${userLuggage} ${userName}`);
    localStorage.setItem('score', stringLuggage);
  }
  else {
    let number = getRandomIndex(allCountries.length);
    currentCountry = allCountries[number];

    currentCountry.imgRender(this.src1);
    currentCountry.qRender();
    allCountries.splice(number, 1);
  }
}

// function gameOver(){

// }

Country.prototype.imgRender = function () {
  let img = document.createElement('img');
  img.src = this.src1;
  img.classList = 'back-images';
  gameContainer.appendChild(img);
};












gameContainer.addEventListener('click', clickStart);
