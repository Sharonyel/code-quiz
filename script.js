
var startButton = document.getElementById("start");
var instrc = document.getElementById("instruction");
var jumbo = document.getElementById("jumbotron")
var questionBox = document.getElementById("question-box")
var messageBox = document.getElementById("message-box")
var ansLi = document.querySelector("#ansChoice");
var listQuest = document.getElementById("askQuestion");
var listMsg = document.getElementById("listmsg");

var correct = document.getElementById("correct");
var correctMsg = "Correct";
var wrongMsg = "Wrong";
var setTheTimer = 0;
var subTime = -5;
var finalScore = 0;
var i = 0;
var timeEl = document.querySelector(".time");

startButton.addEventListener("click", function (event){
  event.preventDefault();
  setTheTimer = 15;

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
  // Get question info

if (i === questions.length) {
  console.log("done");
  finalScore = setTheTimer;
  // setTheTimer = 0;
  // timerCount();
  allDone();
  return;
}
  // for (var i = 0; i < questions.length; i++) {
    listQuest.innerHTML = "";
    var getQuest = questions[i].title;
    console.log("Length is " + questions.length);

    var p = document.createElement("p");
    p.textContent = getQuest;
    p.setAttribute("askQuestion", i);
    listQuest.appendChild(p);
    getChoices();
}
    // get choices

function getChoices() {
    for (var j = 0; j < 4; j++) {

      // console.log("the choice is " + questions[i].choices[j]);
      var listA = questions[i].choices[j];
      var p = document.createElement("p");
      p.textContent = listA;
      p.setAttribute("ansChoice", j);

      var button = document.createElement("button");
      button.textContent = listA;
      button.setAttribute("ansChoice", j);

      listQuest.appendChild(button)
      // console.log("lista " + listA);

      // listQuest.appendChild(p);
      // p.appendChild(button);

    }

  }
    listQuest.addEventListener("click", function(event) {
      var element = event.target;
      
       if (element.matches("button") === true) {
         var index= element.getAttribute("ansChoice");
        messageBox.style.display = "inline-flex";

       }
       if (questions[i].choices[index] === questions[i].answer) {
        listMsg.innerHTML = "";
        var message = document.createTextNode("CORRECT");
        listMsg.appendChild(message);
        console.log(message);
        i++
    
        getQuestion();
        
       } else {
        listMsg.innerHTML = "";
        var messagew = document.createTextNode("WRONG");
        listMsg.appendChild(messagew);

          console.log(messagew);
          i++
          getQuestion();
          // setTheTimer += subTime;
        } 
       event.stopPropagation();
  })

function allDone(){

  questionBox.style.display = "none";
  messageBox.style.display = "none";

  var targetDiv = document.getElementById("empty-div");
  targetDiv.textContent = "All Done!";
 
  var newDiv = document.createElement("div");
       newDiv.textContent = ("Your Socre is " + finalScore);
 
       targetDiv.appendChild(newDiv);
       var nameDiv = document.createElement("div");
          nameDiv.textContent = ("Enter Your Name ");
          newDiv.appendChild(nameDiv);
       var nameEntered = document.createElement("INPUT");
       nameEntered.setAttribute("type", "text");

       newDiv.appendChild(x);
}

// When highscore name is submitted & Highscore

// submitHighScore.addEventListener("enter", function(event) {
//   event.preventDefault();
//    var highscoreName =  
// })

  
function timerCount() {
  // Create the countdown timer.
  // setTheTimer = 15;

  var timeInterval = setInterval(function () {

    setTheTimer--;

    timeEl.textContent = "Timer : " + setTheTimer;

    if (setTheTimer === 0) {
      clearInterval(timeInterval);
      // alert("time up");
    }

  }, 1000)
}


