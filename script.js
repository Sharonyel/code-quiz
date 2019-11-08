
var startButton = document.getElementById("start");
var instrc = document.getElementById("instruction");
var jumbo = document.getElementById("jumbotron")
var questionBox = document.getElementById("question-box")
var messageBox = document.getElementById("message-box")
var ansLi = document.querySelector("#ansChoice");
var listQuest = document.getElementById("askQuestion");
var listMsg = document.getElementById("listmsg");
var newDiv = document.createElement("div");
var nameEntered = document.createElement("INPUT");

var submitHighScore = document.querySelector("#highscore-sub");
var highScoreInput = document.querySelector("#highscore-text");
var scores = [];

var correct = document.getElementById("correct");
var correctMsg = "Correct";
var wrongMsg = "Wrong";
var setTheTimer = 0;
var finalScore = 0;
var i = 0;
var timeEl = document.querySelector(".time");

startButton.addEventListener("click", function (event){
  event.preventDefault();
  setTheTimer = 45;

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

  allDone();
  return;
}

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
    listQuest.addEventListener("click", function(event) {
      var element = event.target;
      
       if (element.matches("button") === true) {
         var index= element.getAttribute("ansChoice");
        messageBox.style.display = "inline-flex";

       }
       if (questions[i].choices[index] === questions[i].answer) {
        listMsg.innerHTML = "";        


        var message = document.createTextNode("Correct");
        listMsg.appendChild(message);
        console.log(message);
        i++

        // message = "";

        console.log(message);

        setTimeout(getQuestion, 1000);

        // getQuestion();
        
       } else {
        listMsg.innerHTML = "";
        var messagew = document.createTextNode("Wrong");
        listMsg.appendChild(messagew);

          setTheTimer -= 15;
          if (setTheTimer <= 0){
            setTheTimer = 0;
            allDone();
          }
         
          i++
          
          setTimeout(getQuestion, 1000);
          // messagew = "";
        } 
       event.stopPropagation();
  })

function allDone(){

  questionBox.style.display = "none";
  messageBox.style.display = "none";

  submitHighScore = innerHTML = "";

  var targetDiv = document.getElementById("empty-div");
  targetDiv.textContent = ("All Done!");
 
       newDiv.textContent = ("Your Socre is " + finalScore);
 
       targetDiv.appendChild(newDiv);
       var nameDiv = document.createElement("div");
          nameDiv.textContent = ("Enter Your Name ");
          newDiv.appendChild(nameDiv);
       nameEntered.setAttribute("type", "text");

       newDiv.appendChild(nameEntered);

      //  var buttonHS = document.createElement("button");
      //      buttonHS.textContent = "Submit";

      //      nameEntered.appendChild(button);



}

// When highscore name is submitted & Highscore

nameEntered.addEventListener("keypress", function(event) {
  event.preventDefault();

   var highscoreName =  nameEntered.value.trim();
  //  return if input is blank

  var key = event.which || event.keycode;
  if (highscoreName === ""){
    return;
  } else {
    if (key === 13) {
      scores.push(highscoreName);
      highScoreInput.value = "";
    console.log("key 13")
      storeHighscore();

    }
  }
  
})

function storeHighscore(){
  // JSON Stringify and set ke in localStorage to array
  localStorage.setItem("scores", JSON.stringify(scores));
}
  
function timerCount() {
  // Create the countdown timer.
  // setTheTimer = 15;

  var timeInterval = setInterval(function () {


    timeEl.textContent = "Timer : " + setTheTimer;

    if (setTheTimer === 0) {
      clearInterval(timeInterval);
     allDone();
    }

    if (i === questions.length) {
    
        clearInterval(timeInterval);
    console.log("timer stop")
    }
    if (setTheTimer <= 0) {
      setTheTimer = 0;
      console.log("settimer " + setTheTimer);
     clearInterval(timeInterval);

      allDone();
    }
    setTheTimer--;

  }, 1000)
}

