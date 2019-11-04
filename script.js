
var startButton = document.getElementById("#start");
var ans1 = document.querySelector("#choice1");
var ans2 = document.querySelector("choice2");
var ans3 = document.querySelector("choice34");
var ans4 = document.querySelector("choice4");
var ansLi = document.querySelector("#ansChoice");
var listQuest = document.getElementById("askQuestion");

var setTheTimer = 0;
var timeEl = document.querySelector(".time");

startButton.addEventListener("click", function(event) {
  event.preventDefault();

  startQuiz();
})

function startQuiz() {
timerCount()

// style="display: none";



// Clear todoList element and update todoCountSpan
  // todoList.innerHTML = "";
  // todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < questions.length; i++) {
  //  console.log(" title is " + questions[i].title);
  //  console.log(" choices are " + questions[i].choices);
    listQuest.innerHTML = "";
    var getQuest = questions[i].title;

    var p = document.createElement("p");
    p.textContent = getQuest;
    p.setAttribute("askQuestion", i);
    listQuest.appendChild(p);

    for (var j = 0; j < 4; j++) {
      console.log("the choice is " + questions[i].choices[j]);
      var listA = questions[i].choices[j];
      var li = document.createElement("li");
      li.textContent = listA;
      li.setAttribute("ansChoice", j);

      var button = document.createElement("button");
      button.textContent = listA;

      listQuest.appendChild(button);
      console.log("listA is " + listA);

     

    }

  }
}
 
// function addChecked() {
//   var chButton = document.createElement("buttom");
//   li.setAttribute

  
// }

function timerCount() {
  // Create the countdown timer.
  setTheTimer = 5;

  var timeInterval = setInterval (function() {

    setTheTimer--;

    timeEl.textContent = "Timer : " + setTheTimer;

    if (setTheTimer === 0) {
      clearInterval(timeInterval);
    }

  }, 1000)
}


