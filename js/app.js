'use strict';

let userLuggage = 15;
let allCountries = [];
let gameContainer = document.getElementById('game-container');
let userName;
let currentCountry;
let form = document.createElement('form');
let lastQuestion = 0;
let lastCountry;

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
  this.src2 = imgSrc2;
  this.quizQ = quizQ;
  this.quizA = quizA;
  this.type = answerType;
  this.choices = choices;
  allCountries.push(this);
}

// instantiations of Country
new Country('Indonesia', 'img/indonesia.jpg', 'img/indonesia.png', 'In Indonesia resides the world\'s largest flower. What is its name?', 'Corpse lily', 'multiChoice', ['Corpse lily', 'Moth orchid', 'Flower of charm', 'Moon orchid']);

new Country('Australia', 'img/australia.jpg', 'img/australia.png', 'What is the capital of Australia?', 'Canberra', 'multiChoice', ['Canberra', 'Sydney', 'Brisbane', 'Melbourne']);

new Country('Germany', 'img/germany.jpg', 'img/germany.png', 'In what year did the Berlin Wall fall?', '1989', 'multiChoice', ['1968', '1977', '1989', '1991']);

new Country('Colombia', 'img/colombia.jpg', 'img/colombia.png', 'How many indigenous languages are spoken in Colombia?', '70', 'multiChoice', ['50', '60', '70', '80']);

new Country('South Korea', 'img/southkorea.jpg', 'img/southkorea.png', 'Does South Korea have the fastest average internet speed in the world?', 'true', 'trueOrFalse');

new Country('Ethiopia', 'img/ethiopia.jpg', 'img/ethiopia.png', 'How old is the worlds oldest hominid remains, discovered in Ethiopia?', '4.4 million years old', 'multiChoice', ['2000 years old', '200,000 years old', '3.2 million years old', '4.4 million years old', '1 billion years old']);

new Country('Denmark', 'img/denmark.jpg', 'img/denmark.png', 'In Denmark, one of the happiest countries in the world, the primary language is Danish. What\'s the Danish word for please?', 'Danish has no word for "please"', 'multiChoice', ['Dansk', 'Har ingen', 'ord for', 'Danish has no word for "please"']);

new Country('Canada', 'img/canada.jpg', 'img/canada.png', 'Do all Canadians live in igloos?', 'false', 'trueOrFalse');

new Country('New Zealand', 'img/newzealand.jpg', 'img/newzealand.png', 'What is the population of New Zealand?', '5 million', 'multiChoice', ['5 million', '2 million', '7 million', '10 million']);

new Country('Taiwan', 'img/taiwan.jpg', 'img/taiwan.png', 'In Taiwan, the garbage truck plays Beethoven\'s Fur Elise to announce their arrival.', 'true', 'trueOrFalse');

new Country('Norway', 'img/norway.jpg', 'img/norway.png', 'Norway is the name of the country in the English language. In Norwegian, the country is named which of the following:', 'Norge', 'multiChoice', ['Norja', 'Norge', 'Njorweg', 'Norwegen']);

new Country('Japan', 'img/japan.jpg', 'img/japan.png', 'What is the fifth largest city in Japan?', 'Sapporo', 'multiChoice', ['Fukuoka', 'Osaka', 'Sapporo', 'Kyoto']);

function initialDisplay() {
  let h2 = document.createElement('h2');
  h2.textContent = 'Welcome Aboard! Click here to begin.';
  h2.id = 'start';
  gameContainer.appendChild(h2);
  let img = document.createElement('img');
  img.src = 'img/takeoff.jpg';
  img.id = 'starting';
  gameContainer.appendChild(img);
}
function clickStart(event) {
  let click = event.target.id;
  if (click === 'start') {
    getUserName();
    gameContainer.innerHTML = '';
    let number = getRandomIndex(allCountries.length);
    currentCountry = allCountries[number];
    currentCountry.imgRender(this.src1);
    currentCountry.qRender();
    allCountries.splice(number, 1);
    gameContainer.removeEventListener('click', clickStart);
    gameContainer.addEventListener('submit', submitCheck);
  }
}

// get random index
function getRandomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

Country.prototype.qRender = function () {
  form = document.createElement('form');
  form.id = 'question-box';
  gameContainer.appendChild(form);
  answerResponse();
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
    answer1.id = 'true';
    answer2.id = 'false';
    answer1.value = 'true';
    answer2.value = 'false';
    answer1.type = 'radio';
    answer2.type = 'radio';
    answer1.name = 't';
    answer2.name = 't';
    // .name the same allows only 1 answer
    fieldset.appendChild(answer1);
    fieldset.appendChild(answerLabelT);
    fieldset.appendChild(answer2);
    fieldset.appendChild(answerLabelF);
  }
  else if (this.type === 'multiChoice') {
    for (let i = 0; i < this.choices.length; i++) {
      let answerLabel1 = document.createElement('label');
      answerLabel1.textContent = `${this.choices[i]}`;
      let answer = document.createElement('input');
      answer.type = 'radio';
      answer.name = 't';
      answer.value = `${this.choices[i]}`;
      fieldset.appendChild(answer);
      fieldset.appendChild(answerLabel1);
    }
  }
  // else if (this.type === 'userInput') {
  //   let userAnswer = document.createElement('input');
  //   userAnswer.type = 'text';
  //   fieldset.appendChild(userAnswer);

  // }
  let submit = document.createElement('button');
  submit.type = 'submit';
  submit.textContent = 'SUBMIT';
  fieldset.appendChild(submit);
};

function submitCheck(event) {
  event.preventDefault();
  let answerT = event.target.t.value;
  gameContainer.innerHTML = '';
  if (answerT === currentCountry.quizA) {
    lastQuestion = true;
  }
  else {
    lastQuestion = false;
  }
  if (allCountries.length === 0) {
    gameOver();
  }
  else {
    lastCountry = currentCountry;
    let number = getRandomIndex(allCountries.length);
    currentCountry = allCountries[number];

    currentCountry.imgRender(this.src1);
    currentCountry.qRender();
    allCountries.splice(number, 1);
  }
}

function gameOver() {
  let img = document.createElement('img');
  img.src = 'img/outro.gif';
  img.id = 'plane';
  gameContainer.appendChild(img);
  let div = document.createElement('div');
  gameContainer.appendChild(div);
  let aH4 = document.createElement('h4');
  aH4.textContent = `Congratulations! You saved ${userLuggage} pieces of luggage!`;
  div.appendChild(aH4);
  let a = document.createElement('a');
  a.id = 'high-score';
  a.href = 'scores.html';
  a.textContent = 'View High Scores';
  div.appendChild(a);
  let stringLuggage = JSON.stringify(`${userLuggage} ${userName}`);
  localStorage.setItem('score', stringLuggage);
}

function answerResponse() {
  if (lastQuestion === true) {
    let aH6 = document.createElement('h6');
    aH6.textContent = 'That\'s correct!';
    form.appendChild(aH6);
  }
  if (lastQuestion === false) {
    let aH6 = document.createElement('h6');
    aH6.textContent = `WRONG! The correct answer was ${lastCountry.quizA}.`;
    userLuggage--;
    form.appendChild(aH6);
  }
}

Country.prototype.imgRender = function () {
  let img1 = document.createElement('img');
  img1.src = this.src1;
  img1.classList = 'back-images';
  gameContainer.appendChild(img1);
  let img2 = document.createElement('img');
  img2.src = this.src2;
  img2.classList = 'corner-images';
  gameContainer.appendChild(img2);
};











initialDisplay();

gameContainer.addEventListener('click', clickStart);
