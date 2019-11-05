
var startButton = document.getElementById("start");
var instContainer = document.getElementById("instruction");

var ans1 = document.querySelector("choice1");
var ans2 = document.querySelector("choice2");
var ans3 = document.querySelector("choice3");
var ans4 = document.querySelector("choice4");
var ansLi = document.querySelector("#ansChoice");
var listQuest = document.getElementById("askQuestion");
var correct = document.getElementById("correct");

var setTheTimer = 0;
var subTime = -5;
var i = 0;
var timeEl = document.querySelector(".time");

startButton.addEventListener("click", function (event) {
  event.preventDefault();
  timerCount();

  getQuestion();
})

function getQuestion() {
  // Get question info


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
      var li = document.createElement("li");
      li.textContent = listA;
      li.setAttribute("ansChoice", j);

      var button = document.createElement("button");
      // button.textContent = listA;
      
      console.log("lista " + listA);

      listQuest.appendChild(li);
      li.appendChild(button);

    }

  }
    listQuest.addEventListener("click", function(event) {
      var element = event.target;
      
       if (element.matches("button") === true) {
         var index= element.parentElement.getAttribute("ansChoice");
         console.log("index is " + index);
         console.log(questions[i].choices[index]);
         console.log(questions[i].answer);

       }
       if (questions[i].choices[index] === questions[i].answer) {
        console.log("correct")
        i++
        getQuestion();
       } else {
          console.log("wrong")
          i++
          getQuestion();
          // setTheTimer += subTime;
        } 
       
  })

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


