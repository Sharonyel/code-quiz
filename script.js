
var startButton = document.getElementById("start");
var instrc = document.getElementById("instruction");
var jumbo = document.getElementById("jumbotron")
var questionBox = document.getElementById("question-box")
var messageBox = document.getElementById("message-box")
var msgDiv = document.createElement("p");
var message = document.createTextNode("CORRECT");
var messagew = document.createTextNode("WRONG");

var ans1 = document.querySelector("choice1");
var ans2 = document.querySelector("choice2");
var ans3 = document.querySelector("choice3");
var ans4 = document.querySelector("choice4");
var ansLi = document.querySelector("#ansChoice");
var listQuest = document.getElementById("askQuestion");
var listMsg = document.getElementById("listmsg");

var correct = document.getElementById("correct");
var correctMsg = "Correct";
var wrongMsg = "Wrong";
var setTheTimer = 0;
var subTime = -5;
var i = 0;
var timeEl = document.querySelector(".time");

startButton.addEventListener("click", function (event){
  event.preventDefault();
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

if (i < questions.length){
  allDone();
}
  // for (var i = 0; i < questions.length; i++) {
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

      // console.log("the choice is " + questions[i].choices[j]);
      var listA = questions[i].choices[j];
      var p = document.createElement("p");
      p.textContent = listA;
      p.setAttribute("ansChoice", j);

      var button = document.createElement("button");
      // button.textContent = listA;
      // listQuest.appendChild(button)
      // console.log("lista " + listA);

      listQuest.appendChild(p);
      p.appendChild(button);

    }

  }
    listQuest.addEventListener("click", function(event) {
      var element = event.target;
      
       if (element.matches("button") === true) {
         var index= element.parentElement.getAttribute("ansChoice");
       
        if (questions[i].choices[index] === questions[i].answer) {
  
          listMsg.innerHTML = " ";
          listMsg.appendChild(message);
          i++
          getQuestion();
        } else {
          listMsg.innerHTML = " ";
          listMsg.appendChild(messagew);
          i++
          getQuestion();
        } 
    
return;

       }
       event.stopPropagation();
  })

  function allDone(){

    
    }




  
function timerCount() {
  // Create the countdown timer.
  setTheTimer = 15;

  var timeInterval = setInterval(function () {

    setTheTimer--;

    timeEl.textContent = "Timer : " + setTheTimer;

    if (setTheTimer === 0) {
      clearInterval(timeInterval);
      // alert("time up");
    }

  }, 1000)
}


