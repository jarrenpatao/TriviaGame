var questions = {
  questionOne: {
    queString: "How long did the Hundred Years' War last?",
    answerOne: "1.) 98",
    answerTwo: "2.) 100",
    answerThree: "3.) 110",
    answerFour: "4.) 116"
    // answer is 3.
  },
  questionTwo: {
    queString: "How many months of the year have 28 days?",
    answerOne: "1.) 1",
    answerTwo: "2.) 3 every 4 years",
    answerThree: "3.) 17",
    answerFour: "4.) 12"
    // answer is 3.
  },
  questionThree: {
    queString: "In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?",
    answerOne: "1.) William and Elizabeth",
    answerTwo: "2.) Joseph and Catherine",
    answerThree: "3.) John and Mary",
    answerFour: "4.) George and Anne"
    // ans2
  },
  questionFour: {
    queString: "When did the Liberty Bell get its name?",
    answerOne: "1.) When it was made, in 1701",
    answerTwo: "2.) When it rang on July 4, 1776",
    answerThree: "3.) In the 19th century, when it became a symbol of the abolition of slavery",
    answerFour: "4.) None of the above"
    // ans2
  },
  questionFive: {
    queString: "In the Roy Rogers -Dale Evans Museum, you will find Roy and Dales stuffed horses. Roy's horse was named Trigger, which was Dales horse?",
    answerOne: "1.) Buttermilk",
    answerTwo: "2.) Daisy",
    answerThree: "3.) Scout",
    answerFour: "4.) Tulip"
    // answerOne
  },
  questionSix: {
    queString: "Which of the following items was owned by the fewest U.S. homes in 1990?",
    answerOne: "1.) Home computer",
    answerTwo: "2.) Compact disk player",
    answerThree: "3.) Cordless phone",
    answerFour: "4.) Dishwasher"
    // answerTwo
  },
  questionSeven: {
    queString: "Who holds the record for the most victories in a row on the professional golf tour?",
    answerOne: "1.) Jack Nicklaus",
    answerTwo: "2.) Arnold Palmer",
    answerThree: "3.) Byron Nelson",
    answerFour: "4.) Ben Hogan"
    // answerThree
  },
  questionEight: {
    queString: "Who is third behind Hank Aaron and Babe Ruth in major league career home runs?",
    answerOne: "1.) Reggie Jackson",
    answerTwo: "2.) Harmon Killebrew",
    answerThree: "3.) Willie Mays",
    answerFour: "4.) Frank Robinson"
    // answerThree
  },
  questionNine: {
    queString: "In 1990, in what percentage of U.S. married couples did the wife earn more money than the husband?",
    answerOne: "1.) 8",
    answerTwo: "2.) 18",
    answerThree: "3.) 38",
    answerFour: "4.) 58"
    // answerTwo
  },
  questionTen: {
    queString: "The Philadelphia mint started putting a 'P' mint mark on quarters when?",
    answerOne: "1.) 1960",
    answerTwo: "2.) 1980",
    answerThree: "3.) Never",
    answerFour: "4.) All of the above"
    // answerTwo
  },
  questionEleven: {
    queString: "Which of these characters turned 40 years old in 1990?",
    answerOne: "1.) Charlie Brown",
    answerTwo: "2.) Bugs Bunny",
    answerThree: "3.) Mickey Mouse",
    answerFour: "4.) Fred Flinstone"
    // answerThree
  }
}
// CountDown Number. Placed at global level to recall after answerSelected
var icdn = 4;
// Round CountDown
var cdn = 30;
// Hide splash page
var hideTriviaSplash = function(){
  if (icdn === 0) {
    $("#trivBody2").hide();
  }
}
// StartBoolean
var gameStart = false;
// Initial CountDown Function. One use function.
var icdf = function(){
  
  var intervalId;

  function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
  icdn--;
  $("#question").html("<h2>" + icdn + "</h2>");
  if (icdn === 0) {
    stop();
    console.log("Let's begin. You have 30 seconds to answer each question.");
    hideTriviaSplash();
  }
  }

  function stop() {
  clearInterval(intervalId);
  }

  run();
  gameStart = true;
}
// CountDown Function.
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
    nq();
  }
  }

  function stop() {
  clearInterval(intervalId);
  }

  run();
}

icdf();

// Loop through questions
if (!gameStart)
  for (var i = 0; i < questions.length; i++){
    $('#qr').append('<h2>' + questions.questionOne.queString + '</h2>');
    $('#qa').append(questions.questionOne.answerOne);
  }
  console.log(questions.questionOne.queString);
