# flight-facts

## User stories

### About me

As a user I would like to learn about the site creators so I can get to know them better

- link to about me page from home 

- about me populate with interesting info about creators
About me page is readable and accessible

### Trivia game

As a user I’d like to test my knowledge about countries around the world

- user is asked trivia questions about countries around the world

- different question types (multiple choice, fill in the blank, t/f)

- user is returned score (feedback) based on their results

- tell user whether they answered question correct or not

- ensure score goes up with correct answers

- test for form validation (correct input type, provided input)

### Layout

As a user I’d like intuitive and easy to read layout of the site

- content is uniform across quiz q’s

- pleasant color scheme

- no scrolling required to see content on game page

- color contrast testing (2 check marks)

- solicit outside feedback

### Location

As a user I’d like to see something about the country I’m questioned about

- picture displayed of each country

- map location indicated

- store img source in country object

- ensure prev pictures removed and new one’s displayed moving country to country

### Score Board

As a user I’d like to see my score recorded, displayed and saved.

- once quiz completes scoreboard is displayed with user’s score

- ensure user’s score is added to scoreboard

- ensure scoreboard displays on common web browsers

## Vision

We aim to deliver an engaging app that quizzes the user on their knowledge of various countries around the world. This app will help our users learn more about us and the world in which they live. You can use this app to learn some fun facts about places you’ve probably never been to before.

### Scope - IN

Users are prompted for their handle which is stored and saved for interaction
Users are taken around the world through various visual aids and text prompts.
Users are asked trivia about each location and are informed of the answer if they’re incorrect
Users can click a link to learn about the creators of the game
When the game is completed a scoreboard is displayed with user’s name

### Scope - OUT

This website will never be optimised for mobile
This app will never save scores across different computers

### MVP

A functional trivia game that confirms correct answers or provides correct answer if user provided them wrong 
User is provided visual cues to share a small story about the country they’re visiting 
User provides a handle which is stored locally 
Upon completing the game user’s score is displayed on a scoreboard along with their handle, this score is also stored locally
3 question types: t/f, multiple choice, fill in the blank

- link to about me and scoreboard page

### Stretch Goals

User Input
Animation for traveling to each country
Multiple questions for each country
Difficulty options affecting submission type for questions
If user attempts to navigate away from page while game is active, display alert informing them progress will be lost if they leave page
Hide then display scoreboard
Reviews and comments can be left on scoreboard
Game over logic
Timer

### Functional Requirements

A user can play the flight facts game to completion
A user can easily navigate between all pages on the site
A user can return later on the same computer and see their score displayed 

### Data Flow

When the user enters the site for the first time they are prompted for their username. This string is stored in an array of all usernames. The user then has the option of starting the game, checking the leaderboard and checking out the creator’s about me page. If they navigate to the leaderboard or about me page they can navigate back and their username will still be saved. As they play the game their score will be added to and displayed at the end. They will also be prompted to go to the leaderboard if they wish to see how they stack up. Their saved score would be added to the existing leaderboard.

## Flight Facts Domain Model

Index.html
Nav bar:
Link to About Me’s (website creators)
Link to Leaderboard
Username Prompt (user input saved to local storage)
Instructions
Instructions will be located in the footer on the main page (under the game container)
Start game?
Launch game function
Render Health/Luggage
Math.random inArray (gets a random object in the array)
Question (random order) and remove country
Display country imgSrc
“Welcome to [countryName]!”
Display question + answerType
splice() into local variable 
Submit button; user answers
checkCorrectAnswer
If the user guesses correctly (userAnswer === Country.answer)
Confirm correct to user
If the user guesses incorrectly (userAnswer !== Country.answer)
Luggage--; re-render
Alert wrong answer (luggage remaining)
Check if 10 questions
End game; “Congrats user, you saved [x] pieces of luggage”
Adding score to leaderboard array and save to locaStorage
countryName; imgSrc; quizQuestion
quizQuestion: answers → answerType (event handler)
Multiple choice
true/false
Select value: radio value
Form
Select value: input value
Global variables
userLuggage = 15;
maxLuggage = 15;
userName
getElementById(“picture-spot”)
getElementById(“game-container”)
allCountries array
Country constructor

## Leaderboard

Leaderboard should be separately iterated through to be ordered in highest to lowest and saved to localStorage upon loading the webpage for the first time and then anytime the leaderboard array on app.js is updated. Leaderboard.js will load the leaderboard array from localStorage then use DOM manipulation to render an ordered list onto the page with the most updated list of scores.

## Sources

- [HP BAR](https://stackoverflow.com/questions/20277052/how-to-make-a-health-bar/20277165)

- [Radio Button](https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/)

- [Array Sorting](https://stackoverflow.com/questions/38843059/how-to-set-font-style-italic-using-javascript)

- [Italics](https://stackoverflow.com/questions/38843059/how-to-set-font-style-italic-using-javascript)

- [Splitting hairs (and strings)](https://stackoverflow.com/questions/42827884/split-a-number-from-a-string-in-javascript)

- [Styling hyperlinks](https://www.w3schools.com/css/css_link.asp)