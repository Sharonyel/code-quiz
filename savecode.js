

// 

var newText = JSON.stringify(questions[2])
console.log("what is this " + newText);
var newText2 = document.getElementById("questionInfo").innerHTML;


//  get the choice array

console.log(questions[2].choices);

// get the array choice index element
var choiceIndv = questions[2].choices;
console.log(choiceIndv[1]);