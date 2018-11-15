// All Trivia Questions
var atq = [];
// Trivia Questions & Answers as Objects
var tq1 = { 
  ques: "How long did the Hundred Years' War last?",
  ans1: "1.) 98",
  ans2: "2.) 100",
  ans3: "3.) 110",
  ans4: "4.) 116"
  // ans4
}
var tq2 = {
  ques: "How many months of the year have 28 days?",
  ans1: "1.) 1",
  ans2: "2.) 3 every 4 years",
  ans3: "3.) 17",
  ans4: "4.) 12"
  // ans4
}
var tq3 = {
  ques: "In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?",
  ans1: "1.) William and Elizabeth",
  ans2: "2.) Joseph and Catherine",
  ans3: "3.) John and Mary",
  ans4: "4.) George and Anne"
  // ans3
}
var tq4 = {
  ques: "When did the Liberty Bell get its name?",
  ans1: "1.) When it was made, in 1701",
  ans2: "2.) When it rang on July 4, 1776",
  ans3: "3.) In the 19th century, when it became a symbol of the abolition of slavery",
  ans4: "4.) None of the above"
  // ans3
}
var tq5 = {
  ques: "In the Roy Rogers -Dale Evans Museum, you will find Roy and Dales stuffed horses. Roy's horse was named Trigger, which was Dales horse?",
  ans1: "1.) Buttermilk",
  ans2: "2.) Daisy",
  ans3: "3.) Scout",
  ans4: "4.) Tulip"
  // ans1
}
var tq6 = {
  ques: "Which of the following items was owned by the fewest U.S. homes in 1990?",
  ans1: "1.) Home computer",
  ans2: "2.) Compact disk player",
  ans3: "3.) Cordless phone",
  ans4: "4.) Dishwasher"
  // ans2
}
var tq6 = {
  ques: "Who holds the record for the most victories in a row on the professional golf tour?",
  ans1: "1.) Jack Nicklaus",
  ans2: "2.) Arnold Palmer",
  ans3: "3.) Byron Nelson",
  ans4: "4.) Ben Hogan"
  // ans3
}
var tq7 = {
  ques: "Who holds the record for the most victories in a row on the professional golf tour?",
  ans1: "1.) Reggie Jackson",
  ans2: "2.) Harmon Killebrew",
  ans3: "3.) Willie Mays",
  ans4: "4.) Frank Robinson"
  // ans3
}
var tq7 = {
  ques: "Who holds the record for the most victories in a row on the professional golf tour?",
  ans1: "1.) Reggie Jackson",
  ans2: "2.) Harmon Killebrew",
  ans3: "3.) Willie Mays",
  ans4: "4.) Frank Robinson"
  // ans3
}
var tq7 = {
  ques: "In 1990, in what percentage of U.S. married couples did the wife earn more money than the husband?",
  ans1: "1.) 8",
  ans2: "2.) 18",
  ans3: "3.) 38",
  ans4: "4.) 58"
  // ans3
} 

// Trivia Answers (in order according to above array)
// var ta = [
//   "Answer: It lasted 116 years, from 1337 to 1453.",
//   "Answer: All 12 months of the year have 28 days in them!",
//   "Answer: Just one."
// ]

// CountDown Number. Placed at global level to recall after answerSelected
var cdn = 5;
// Random Question.
var rq = Math.floor(Math.random() * 3);

// CountDown Function. Hoisted function to use inbetween questions.
var cdf = function(){
  
  var intervalId;

  function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
  cdn--;
  $("#question").html("<h2>" + cdn + "</h2>");
  if (cdn === 0) {
    stop();
    alert("Time Up!");
  }
  }

  function stop() {
  clearInterval(intervalId);
  }

  run();
}

cdf();

for (var i = 0; i < 11; i++){
  if (cdn === 0){
    Math.floor(Math.random())
  }
}