var panel = $("#gameArea");
var countStartNumber = 30;

// Question set
var questions = [{
  question: "Who is Daisy to Mario?",
  answers: ["Competition", "Luigi's Girlfriend", "Princess from a different castle", "All of the above"],
  correctAnswer: "All of the above",
  image: "assets/images/Daisy.gif"
}, {
  question: "Which version of Kirby was the original?",
  answers: ["Kirby: Adventure", "Kirby: Dream Land", "Kirby: Dream Course", "Kirby: Star Stacker"],
  correctAnswer: "Kirby: Dream Land",
  image: "assets/images/Kirby.gif"
}, {
  question: "How many Call Of Duty games are out now?",
  answers: ["4", "6", "10", "15"],
  correctAnswer: "15",
  image: "assets/images/COD.gif"
}, {
  question: "What game hosts the largest overall prize pool for major league gaming?",
  answers: ["League Of Legends", "DOTA 2", "Overwatch", "Fortnite"],
  correctAnswer: "DOTA 2",
  image: "assets/images/Money.gif"
}, {
  question: "Link, listen!",
  answers: ["Navi", "Magi", "Boroque", "Pretzi"],
  correctAnswer: "Navi",
  image: "assets/images/Navi.gif"
}, {
  question: "Saddest moment of pokemon?",
  answers: ["Ash getting petrified", "Butterfree migrating", "Pikachu's rival dying", "Mom let's Ash grow up"],
  correctAnswer: "Butterfree migrating",
  image: "assets/images/Butterfree.gif"
}, {
  question: "What game title included the first 'easter egg'?",
  answers: ["Harvest Moon", "Gauntlet", "Adventure", "Madden NFL"],
  correctAnswer: "Adventure",
  image: "assets/images/Easter.gif"
}, {
  question: "Tetris Attack for the SNES featured what character as the mascot?",
  answers: ["Donkey Kong", "QBert", "Wreckit Ralph", "Yoshi"],
  correctAnswer: "Yoshi",
  image: "assets/images/Yoshi.gif"
}];

// Variable to hold our setInterval
var timer;
var game = {

  questions: questions,
  currentQuestion: 0,
  counter: countStartNumber,
  correct: 0,
  incorrect: 0,

  countdown: function() {
    this.counter--;
    $("#counter-number").text(this.counter);
    if (this.counter === 0) {
      console.log("TIME UP");
      this.timeUp();
    }
  },

  loadQuestion: function() {

    timer = setInterval(this.countdown.bind(this), 1000);

    panel.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

    for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
      panel.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i]
      + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
    }
  },

  nextQuestion: function() {
    this.counter = window.countStartNumber;
    $("#counter-number").text(this.counter);
    this.currentQuestion++;
    this.loadQuestion.bind(this)();
  },

  timeUp: function() {

    clearInterval(window.timer);

    $("#counter-number").text(this.counter);

    panel.html("<h2>Out of Time!</h2>");
    panel.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);
    panel.append("<img src='" + questions[this.currentQuestion].image + "' />");

    if (this.currentQuestion === questions.length - 1) {
      setTimeout(this.results, 3 * 1000);
    }
    else {
      setTimeout(this.nextQuestion, 3 * 1000);
    }
  },

  results: function() {

    clearInterval(window.timer);

    panel.html("<h2>All done, heres how you did!</h2>");

    $("#counter-number").text(this.counter);

    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    panel.append("<br><button id='start-over'>Start Over?</button>");
  },

  clicked: function(e) {
    clearInterval(window.timer);
    if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
      this.answeredCorrectly();
    }
    else {
      this.answeredIncorrectly();
    }
  },

  answeredIncorrectly: function() {

    this.incorrect++;

    clearInterval(window.timer);

    panel.html("<h2>Nope!</h2>");
    panel.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer + "</h3>");
    panel.append("<img src='" + questions[this.currentQuestion].image + "' />");

    if (this.currentQuestion === questions.length - 1) {
      setTimeout(this.results.bind(this), 3 * 1000);
    }
    else {
      setTimeout(this.nextQuestion.bind(this), 3 * 1000);
    }
  },

  answeredCorrectly: function() {

    clearInterval(window.timer);

    this.correct++;

    panel.html("<h2>Correct!</h2>");
    panel.append("<img src='" + questions[this.currentQuestion].image + "' />");

    if (this.currentQuestion === questions.length - 1) {
      setTimeout(this.results.bind(this), 3 * 1000);
    }
    else {
      setTimeout(this.nextQuestion.bind(this), 3 * 1000);
    }
  },

  reset: function() {
    this.currentQuestion = 0;
    this.counter = countStartNumber;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();
  }
};

// CLICK EVENTS

$(document).on("click", "#start-over", game.reset.bind(game));

$(document).on("click", ".answer-button", function(e) {
  game.clicked.bind(game, e)();
});

$(document).on("click", "#start", function() {
  $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
  game.loadQuestion.bind(game)();
});