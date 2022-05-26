# About The Project -

The backend project will combine the knowledge acquired in the following technologies [node + express] technologies, as well as mysql/sequelize.

The project will consist of an online shop (e-commerce) for devices (phones, tablets, computers and wearables).

## Online Shop

Javascript Quiz built with HTML, CSS & JS.

## Project Objective

The main objective of this project is to put into practice all that has been learnt in the last weeks of HTML5, CSS & JS.

The project contains only one page, but you get the feeling that there are several pages in it.

First Section -> Gif Init & Start

Second Section -> Quiz Questions

Third Section -> Show Results

## Built with...

_This Project was developed with the following technologies_

- JavaScript
- Dependencies: mySql2, Express, Sequelize, Nodemon, Nodemailer, Multer, Jsonwebtoken, Bcryptjs
- Postman
- Trello

## Action Route

1. Modelling the Online Shop's Diagram:

- Table Users.
- Table Orders.
- Table Reviews.
- Table Products.
- Section Table

## Challenges

We have found several challenges during the project...

1. Import Data from [Open Trivia API]('https://opentdb.com/api.php?amount=10&category=31&difficulty=medium&type=multiple').

In this case we use Fetch & async function to do...You can know more about Fetch in that post from [Dmitry Pavlutin](https://dmitripavlutin.com/javascript-fetch-async-await/)

```
# code block
async function loadQuestion() {
  const APIUrl =
    'https://opentdb.com/api.php?amount=10&category=31&difficulty=medium&type=multiple';
  const result = await fetch(`${APIUrl}`);
  //Starts a request and retuns a promise inside an async function
  const data = await result.json();
```

2. Show Questions Function.

In this section we found 2 problems:

- How to make random answers from de data API.

```
# code block
//Splice creates a new array with incorrect answers(random) + correct answer
  optionList.splice(
    Math.floor(Math.random() * (incorrectAnswers.length + 1)),
    0,
    correctAnswer
  );
```

- How to print the answers into de li.

```
# code block
options.innerHTML = `${optionList
    .map((option, index) => `<li> ${index + 1}. <span>${option}</span> </li>`)
    .join('')}`;
  selectOption();
  //With .map we can create a new array with 2 parameters: the answer number and the answer. This returns answer separeted with commas(array), so to solve that we use .join method to convert an Array like a String.
}

```

3. Check Answer Function.

In this section we need to extract the text form de li. In order to achieve this we use the Innertext method.[InnerHTML Documentation W3schools](https://www.w3schools.com/jsref/prop_html_innerhtml.asp)

```
# code block
function checkAnswer() {
  if (options.querySelector('.selected')) {
    let selectedAnswer = options.querySelector('.selected span').innerHTML;
    //InnerHtml returns the text content of an element (for saving the li's word)
```

4. Congrats Function

Shows the screen hits stored in a Local Storage variable

```
# code block

function congrats() {
  let puntosFinales = localStorage.getItem('aciertos');
  if (puntosFinales == 10) {
    finalPoints.innerHTML = `<b>You have a final score of ${puntosFinales} points!<br>Congratulations, you have reached a PERFECT SCORE!!<b/>`;
    gifFoot.innerHTML = `<img class="final-img" src="/assets/goku.gif">`;

```

### Getting Started - Installation

To deploy this project you must clone the repository through the following link:

```
https://github.com/Vincecoorp21/QuizApp
```

#### Preview

![foto](./assets/Loading.png)
![foto](./assets/Main.png)
![foto](./assets/Show_results.png)

## Author

👤 **Germán Molero**
👤 **Vince BC**

- GitHub: [@Molerog](https://github.com/Molerog)
- Github: [@Vincecoorp21](https://github.com/Vincecoorp21)

This project was developed By [Germán Molero](https://github.com/Molerog) & [Vicente Barberá - Vince BC -](https://github.com/Vincecoorp21)
