
var startButton = document.getElementById("start");
var instrc = document.getElementById("instruction");
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

var scores = [];


var correct = document.getElementById("correct");
var correctMsg = "Correct";
var wrongMsg = "Wrong";
var setTheTimer = 0;
var finalScore = 0;
var i = 0;
var timeEl = document.querySelector(".time");

startButton.addEventListener("click", function (event) {
  event.preventDefault();
  setTheTimer = 45;
console.log("hello")
  timerCount();
  getQuestion();
  questionBox.style.display = "inline-flex";

  if (instrc.style.display === "none") {
    instrc.style.display = "block";
  } else {
    instrc.style.display = "none";
  }

})

function getQuestion() {
  messageBox.style.display = "none";

  if (i === questions.length) {
    console.log("done");
    finalScore = setTheTimer;

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
// get choices

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

    setTheTimer -= 15;
    if (setTheTimer <= 0) {
      setTheTimer = 0;
      getDone();
    }

    i++

    setTimeout(getQuestion, 1000);
  }
  event.stopPropagation();
})

function getDone() {

  questionBox.style.display = "none";
  messageBox.style.display = "none";
  allDone.style.display = "inline";

  var enterName = innerHTML = "";

  doneMsg.textContent = ("All Done!");

  scoreMsg.textContent = ("Your Score is " + finalScore);

  nameMsg.textContent = ("Enter Your Name please ");

}

// When highscore name is submitted & Highscore

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  var nameText = enterName.value.trim();

console.log("enter nameText  " + nameText)

  if (nameText === "") {
    return;
  } 
var highScoreString = (nameText + "   -   " + finalScore);

console.log("enter  here hs str " + highScoreString)


  scores.push(highScoreString);
  enterName.value = "";

  storeScore();

  // getHighscore()
 
  postHighscores();

})

function getHighscore(){
    // var storedScores = JSON.parse(localStorage.getItem("scores"))

    // if (storedScores !== null) {
    //   scores = storedScores;
    // }
    // console.log("stored scores8888   ");
    // alert("high scores are " + scores);
}
function storeScore(){
  
  // Stingify and set highscore ke in local storage to the array

  localStorage.setItem("scores", JSON.stringify(scores));

  console.log("enter name here as   " + scores)

}

function postHighscores(){

  highScoreList.innerHTML = "";

var highScoreHeader = document.createElement("h1") 
  highScoreHeader.textContent = "High Score List";
var scoreList = document.createElement("p");


  for (var n=0; n<scores.length; n++){

    var score = scores[n];

    var newScore = document.createElement("p");
    var scoreItem = scores[n];
    newScore.innerHTML = score;
    scoreList.appendChild(newScore);
    
}

  highScoreList.appendChild(scoreList)
}

function timerCount() {

  var timeInterval = setInterval(function () {


    timeEl.textContent = "Timer : " + setTheTimer;

    if (setTheTimer === 0) {
      clearInterval(timeInterval);
      getDone();
    }

    if (i === questions.length) {

      clearInterval(timeInterval);
      console.log("timer stop")
    }
    if (setTheTimer <= 0) {
      setTheTimer = 0;
      console.log("settimer " + setTheTimer);
      clearInterval(timeInterval);

      getDone();
    }
    setTheTimer--;

  }, 1000)
}

