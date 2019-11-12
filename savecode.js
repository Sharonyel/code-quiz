
var startButton = document.getElementById("start");
var instrc = document.getElementById("instruction");
var landingPage = document.getElementById("landing-page");
var jumbo = document.getElementById("jumbotron")
var questionBox = document.getElementById("question-box")
var messageBox = document.getElementById("message-box")
var ansLi = document.querySelector("#ansChoice");
var listQuest = document.getElementById("askQuestion");
var listMsg = document.getElementById("listmsg");
var doneMsg = document.getElementById("done-msg");
var scoreMsg = document.getElementById("score-msg");
var nameMsg = document.getElementById("name-msg");
var submitBtn = document.querySelector("#submit-btn");
var highScoreForm = document.querySelector("#score-form");
var highScoreList = document.querySelector("#highscore-list");
var enterName = document.querySelector("#enter-name");
var allDone = document.querySelector("#all-done");
// var displayHigh = document.querySelector("#display-high")
var highScoreBox = document.querySelector("#highscore-box");
var highScoreHead = document.querySelector("#highscore-header");
var clearScore = document.querySelector("#clear-score");
var playAgain = document.querySelector("#play-again");
var highScoreBtn = document.querySelector("#highscore-btn");
var scores = [];
// var scores = ""
// getHighscore();
var correct = document.getElementById("correct");
var correctMsg = "Correct";
var wrongMsg = "Wrong";
var setTheTimer = 0;
var finalScore = 0;
var i = 0;
var timeEl = document.querySelector(".time");
​
// var storedScores = JSON.parse(localStorage.getItem("scores"))
var storedScores = "";
​
​
​
​
startButton.addEventListener("click", function (event) {
  event.preventDefault();
  setTheTimer = 75;
  timerCount();
  getQuestion();
  questionBox.style.display = "inline-flex";
  allDone.style.display = "none";
  // landingPage.style.dispay = "block";
​
  if (instrc.style.display === "none") {
    instrc.style.display = "block";
  } else {
    instrc.style.display = "none";
  }
​
})
​
function getQuestion() {
  messageBox.style.display = "none";
​
  if (i === questions.length) {
​
    getDone();
    return;
  }
​
  listQuest.innerHTML = "";
  var getQuest = questions[i].title;
​
  var p = document.createElement("p");
  p.textContent = getQuest;
  p.setAttribute("askQuestion", i);
  listQuest.appendChild(p);
  getChoices();
}
​
function getChoices() {
  for (var j = 0; j < 4; j++) {
​
    var listA = questions[i].choices[j];
    var p = document.createElement("p");
    p.textContent = listA;
    p.setAttribute("ansChoice", j);
​
    var button = document.createElement("button");
    button.textContent = listA;
    button.setAttribute("ansChoice", j);
​
    listQuest.appendChild(button)
  }
​
}
listQuest.addEventListener("click", function (event) {
  var element = event.target;
​
  if (element.matches("button") === true) {
    var index = element.getAttribute("ansChoice");
    messageBox.style.display = "inline-flex";
​
  }
  if (questions[i].choices[index] === questions[i].answer) {
    listMsg.innerHTML = "";
​
​
    var message = document.createTextNode("Correct");
    listMsg.appendChild(message);
    i++
​
    setTimeout(getQuestion, 1000);
​
  } else {
    listMsg.innerHTML = "";
    var messagew = document.createTextNode("Wrong");
    listMsg.appendChild(messagew);
​
    setTheTimer -= 15;
    if (setTheTimer <= 0) {
      setTheTimer = 0;
      getDone();
    }
​
    i++
​
    setTimeout(getQuestion, 1000);
  }
  event.stopPropagation();
})
​
function getDone() {
  finalScore = setTheTimer;
​
  questionBox.style.display = "none";
  messageBox.style.display = "none";
  allDone.style.display = "inline";
​
  var enterName = innerHTML = "";
​
  doneMsg.textContent = ("All Done!");
​
  scoreMsg.textContent = ("Your Score is " + finalScore);
​
  nameMsg.textContent = ("Enter Your Name  ");
​
}
​
// When highscore name is submitted & Highscore
​
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
​
  var nameText = enterName.value.trim();
​
  if (nameText === "") {
    return;
  } 
var highScoreString = (nameText + "   -   " + finalScore);
​
  scores.push(highScoreString);
  enterName.value = "";
​
  storeScore();
​
  // getHighscore()
  highScoreBox.style.display = "inline-flex";
​
  postHighscores();
​
})
​
function getHighscore(){
​
    if (storedScores !== null) {
      scores = storedScores;
    }
      postHighscores();
}
function storeScore(){
  
  // Stingify and set highscore in local storage to the array
  console.log("Setting array",scores);
  storedScores = JSON.parse(localStorage.getItem("scores"));
  if (storedScores) {
    scores = storedScores.concat(scores);
  };
  console.log(storedScores, "Combination of scores");
  localStorage.setItem("scores", JSON.stringify(scores));
​
  console.log("enter name here as   " + scores)
​
}
// ***************************
function viewHighscore(){
  allDone.style.display = "none";
  instrc.style.display = "none";
  landingPage.style.display = "none";
  questionBox.style.display = "none";
  messageBox.style.display = "none";
​
​
  highScoreBox.style.display = "block";
​
​
  return;
}
​
​
​
​
​
// *******************************
​
function postHighscores(){
  allDone.style.display = "none";
  // highScoreBox.style.display = "inline";
​
  //highScoreHead.innerHTML = "";
​
  highScoreHead.textContent = "High Score List"
  highScoreBox.appendChild(highScoreHead);
  console.log("Scores:",scores);
  $(highScoreList).empty();
  for (var n = 0 ; n < scores.length; n++){
    var score = scores[n];
    var newScore = document.createElement("p");
    // var scoreItem = scores[n];
    newScore.textContent = score;
    newScore.setAttribute("data-index", n)
    highScoreList.appendChild(newScore);
​
  }
  highScoreHead.appendChild(highScoreList);
  highScoreList.appendChild(highScoreBtn);
  
​
}
​
​
function clearList() {
​
​
  console.log(scores);
  localStorage.removeItem("scores");
  console.log("after " + scores);
​
​
  // highScoreHead.innerHTML = "";
​
  highScoreHead.textContent = "High Score List"
  highScoreBox.appendChild(highScoreHead);
  highScoreHead.appendChild(highScoreBtn);
​
  $("#highscore-list").empty();
​
  console.log("stored " + storedScores);
 //storedScores = JSON.parse(localStorage.getItem("scores"));
 storedScores = [];
 console.log("stored after json " + storedScores);
 //scores = "";
 scores = [];
 console.log(storedScores, "Extra log");
​
​
​
}
​
function startOver(){
​
  setTheTimer = 75;
  i = 0; 
  scores=[];
  $("#highscore-list").empty();
  storedScores = JSON.parse(localStorage.getItem("scores"))
​
​
  // storedScores = "";
  timerCount();
  
  questionBox.style.display = "inline-flex";
  // instrc.style.display = "block";
  landingPage.style.display = "inline";
​
  allDone.style.display = "none";
  highScoreBox.style.display = "none";
  getQuestion();
}
​
​
function goBack(){
  
  landingPage.style.display = "";
  instrc.style.display = "block";
  highScoreBox.style.display = "none";
  allDone.style.display = "none";
  setTheTimer = 0;
  i = 0;
 
}
​
​
​
function timerCount() {
​
  var timeInterval = setInterval(function () {
​
​
    timeEl.textContent = "Timer : " + setTheTimer;
​
    if (setTheTimer === 0) {
      clearInterval(timeInterval);
      getDone();
    }
​
    if (i === questions.length) {
​
      clearInterval(timeInterval);
      console.log("timer stop")
    }
    if (setTheTimer <= 0) {
      setTheTimer = 0;
      console.log("settimer " + setTheTimer);
      clearInterval(timeInterval);
​
      getDone();
    }
    setTheTimer--;
​
  }, 1000)
}