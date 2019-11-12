//  ***  Variables  ***
var startButton = document.getElementById("start");
var instrc = document.getElementById("instruction");
var landingPage = document.getElementById("landing-page");
var questionBox = document.getElementById("question-box")
var messageBox = document.getElementById("message-box")
var listQuest = document.getElementById("askQuestion");
var listMsg = document.getElementById("listmsg");
var doneMsg = document.getElementById("done-msg");
var scoreMsg = document.getElementById("score-msg");
var nameMsg = document.getElementById("name-msg");
var submitBtn = document.querySelector("#submit-btn");
var highScoreList = document.querySelector("#highscore-list");
var enterName = document.querySelector("#enter-name");
var allDone = document.querySelector("#all-done");
var highScoreBox = document.querySelector("#highscore-box");
var highScoreHead = document.querySelector("#highscore-header");
var highScoreBtn = document.querySelector("#highscore-btn");
var timeEl = document.querySelector(".time");

var scores = [];
var setTheTimer = 0;
var finalScore = 0;
var i = 0;
var storedScores = "";

//  ***  Start Quiz Button  ***
startButton.addEventListener("click", function (event) {
  event.preventDefault();
  setTheTimer = (questions.length * 15);
  timerCount();
  getQuestion();
  questionBox.style.display = "inline-flex";
  allDone.style.display = "none";

  if (instrc.style.display === "none") {
    instrc.style.display = "block";
  } else {
    instrc.style.display = "none";
  }

})
// ***  Load the questions  ***
function getQuestion() {
  messageBox.style.display = "none";

  if (i === questions.length) {
    getDone();
    return;
  }

  listQuest.innerHTML = "";
  var getQuest = questions[i].title;
  var p = document.createElement("p");
  p.textContent = getQuest;
  p.setAttribute("askQuestion", i);
  listQuest.appendChild(p);
  getChoices();
}
// ***  Load the answer choices  ***
function getChoices() {

  for (var j = 0; j < 4; j++) {
    var listA = questions[i].choices[j];
    var p = document.createElement("p");
    p.textContent = listA;
    p.setAttribute("ansChoice", j);

    var button = document.createElement("button");
    button.textContent = listA;
    button.setAttribute("ansChoice", j);
    listQuest.appendChild(button)
  }

}
// ***   Click the answer choice  ***
listQuest.addEventListener("click", function (event) {
  var element = event.target;

  if (element.matches("button") === true) {
    var index = element.getAttribute("ansChoice");
    messageBox.style.display = "inline-flex";

  }
  if (questions[i].choices[index] === questions[i].answer) {
    listMsg.innerHTML = "";

    var message = document.createTextNode("Correct");
    listMsg.appendChild(message);
    i++

    setTimeout(getQuestion, 1000);

  } else {
    listMsg.innerHTML = "";
    var messagew = document.createTextNode("Wrong");
    listMsg.appendChild(messagew);

    setTheTimer -= 10;

    if (setTheTimer <= 0) {
      setTheTimer = 0;
      getDone();
    }

    i++

    setTimeout(getQuestion, 1000);
  }
  event.stopPropagation();
})

// Last question answered or time is up  ***

function getDone() {
  //  Final score is the time left on the timer  ***
  finalScore = setTheTimer;

  questionBox.style.display = "none";
  messageBox.style.display = "none";
  allDone.style.display = "inline";

  var enterName = innerHTML = "";

  doneMsg.textContent = ("All Done!");
  scoreMsg.textContent = ("Your Score is " + finalScore);
  nameMsg.textContent = ("Enter Your Name  ");
}

// When highscore name is submitted

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  var nameText = enterName.value.trim();

  if (nameText === "") {
    return;
  }
  var highScoreString = (nameText + "   -   " + finalScore);

  scores.push(highScoreString);
  enterName.value = "";

  storeScore();

  highScoreBox.style.display = "inline-flex";

  postHighscores();

})
// ***  Get the High scores  ***
function getHighscore() {

  if (storedScores !== null) {
    scores = storedScores;
  }
  // postHighscores();
}

function storeScore() {

  // Stingify and set highscore in local storage to the array

  localStorage.setItem("scores", JSON.stringify(scores));

    if (storedScores) {
      scores = storedScores.concat(scores);

    };
    localStorage.setItem("scores", JSON.stringify(scores));
}
// *** View the High Score List  ***
function viewHighscore() {
  allDone.style.display = "none";
  instrc.style.display = "none";
  landingPage.style.display = "none";
  questionBox.style.display = "none";
  messageBox.style.display = "none";

  highScoreBox.style.display = "block";
     storedScores = JSON.parse(localStorage.getItem("scores"));

  return;
}
// *** Post the High Score List  ***()

function postHighscores() {
  allDone.style.display = "none";

  // highScoreHead.innerHTML = "";

  highScoreHead.textContent = "High Score List"
  highScoreBox.appendChild(highScoreHead);

  $(highScoreList).empty();

  for (var n = 0; n < scores.length; n++) {
    var score = scores[n];
    var newScore = document.createElement("p");
    // var scoreItem = scores[n];
    newScore.textContent = score;
    newScore.setAttribute("data-index", n)
    highScoreList.appendChild(newScore);
    console.log("n is " + n)
    console.log("length is " + scores.length)
  }
  highScoreHead.appendChild(highScoreList);
  highScoreList.appendChild(highScoreBtn);
   
}

// *** Clear the High Score List  ***
function clearList() {
console.log(scores)

  localStorage.removeItem("scores");
console.log("after " + scores)
  // highScoreHead.innerHTML = "";

  highScoreHead.textContent = "High Score List"
  highScoreBox.appendChild(highScoreHead);
  highScoreHead.appendChild(highScoreBtn);

  $("#highscore-list").empty();

  // storedScores = JSON.parse(localStorage.getItem("scores"));
  storedScores = [];
  // scores = "";
  scores = [];

}
// ***  Start over - Or play again  ***
function startOver() {

  setTheTimer = (questions.length * 15);
  i = 0;
  scores = [];
  $("#highscore-list").empty();
  storedScores = JSON.parse(localStorage.getItem("scores"))

  timerCount();

  questionBox.style.display = "inline-flex";
  landingPage.style.display = "inline";

  allDone.style.display = "none";
  highScoreBox.style.display = "none";
  getQuestion();
}

//  *** Go back to the landing page  ***
// function goBack() {

//   landingPage.style.display = "";
//   instrc.style.display = "block";
//   highScoreBox.style.display = "none";
//   allDone.style.display = "none";
//   setTheTimer = 0;
//   i = 0;
  // $("#highscore-list").empty();


// }
//  *** The timer  ***
function timerCount() {

  var timeInterval = setInterval(function () {

    timeEl.textContent = "Timer : " + setTheTimer;

    if (setTheTimer === 0) {
      clearInterval(timeInterval);
      getDone();
    }

    if (i === questions.length) {

      clearInterval(timeInterval);
    }
    if (setTheTimer <= 0) {
      setTheTimer = 0;
      clearInterval(timeInterval);

      getDone();
    }
    setTheTimer--;

  }, 1000)
}

