// All Trivia Questions
var atq = [];
// Trivia Questions & Answers as Objects
var tq1 = { 
  ques: "How long did the Hundred Years' War last?",
  ans0: "1.) 98",
  ans1: "2.) 100",
  ans2: "3.) 110",
  ans3: "4.) 116"
  // ans3
}
var tq2 = {
  ques: "How many months of the year have 28 days?",
  ans0: "1.) 1",
  ans1: "2.) 3 every 4 years",
  ans2: "3.) 17",
  ans3: "4.) 12"
  // ans3
}
var tq3 = {
  ques: "In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?",
  ans0: "1.) William and Elizabeth",
  ans1: "2.) Joseph and Catherine",
  ans2: "3.) John and Mary",
  ans3: "4.) George and Anne"
  // ans2
}
var tq4 = {
  ques: "When did the Liberty Bell get its name?",
  ans0: "1.) When it was made, in 1701",
  ans1: "2.) When it rang on July 4, 1776",
  ans2: "3.) In the 19th century, when it became a symbol of the abolition of slavery",
  ans3: "4.) None of the above"
  // ans2
}
var tq5 = {
  ques: "In the Roy Rogers -Dale Evans Museum, you will find Roy and Dales stuffed horses. Roy's horse was named Trigger, which was Dales horse?",
  ans0: "1.) Buttermilk",
  ans1: "2.) Daisy",
  ans2: "3.) Scout",
  ans3: "4.) Tulip"
  // ans0
}
var tq6 = {
  ques: "Which of the following items was owned by the fewest U.S. homes in 1990?",
  ans0: "1.) Home computer",
  ans1: "2.) Compact disk player",
  ans2: "3.) Cordless phone",
  ans3: "4.) Dishwasher"
  // ans1
}
var tq7 = {
  ques: "Who holds the record for the most victories in a row on the professional golf tour?",
  ans0: "1.) Jack Nicklaus",
  ans1: "2.) Arnold Palmer",
  ans2: "3.) Byron Nelson",
  ans3: "4.) Ben Hogan"
  // ans2
}
var tq8 = {
  ques: "Who is third behind Hank Aaron and Babe Ruth in major league career home runs?",
  ans0: "1.) Reggie Jackson",
  ans1: "2.) Harmon Killebrew",
  ans2: "3.) Willie Mays",
  ans3: "4.) Frank Robinson"
  // ans2
}
var tq9 = {
  ques: "In 1990, in what percentage of U.S. married couples did the wife earn more money than the husband?",
  ans0: "1.) 8",
  ans1: "2.) 18",
  ans2: "3.) 38",
  ans3: "4.) 58"
  // ans1
} 
var tq10 = {
  ques: "The Philadelphia mint started putting a 'P' mint mark on quarters when?",
  ans0: "1.) 1960",
  ans1: "2.) 1980",
  ans2: "3.) Never",
  ans3: "4.) All of the above"
  // ans1
} 
var tq11 = {
  ques: "Which of these characters turned 40 years old in 1990?",
  ans0: "1.) Charlie Brown",
  ans1: "2.) Bugs Bunny",
  ans2: "3.) Mickey Mouse",
  ans3: "4.) Fred Flinstone"
  // ans2
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