$(document).ready(function() {
	var magic8Ball = {};
magic8Ball.listOfAnswers = ["it is certain", "it is decidedly so", "without a doubt", "yes", "reply hazy try again", "ask again later", "concentrate and ask again", "my reply is no", "very doubtful", "don't count on it"];

$("#answer").hide();
	
magic8Ball.askQuestion = function(question)
{
	console.log(question);
};
$("#answer").hide();
	
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");

setTimeout(
	function() {
/*var onClick = function()*/ 
	var question = prompt("Ask a Yes/No question");
	magic8Ball.askQuestion(question);
	},500);

/*$("#questionButton").click( onClick);*/
	
$("#8ball").effect("shake");
	
magic8Ball.answerQuestion = function(answer) {
	$("#answer").fadeIn(4000);
	// create random number
	var randomNumber = Math.random();
	// make number between 0 and number itmes in 	array
	var randomNumberArray = randomNumber * this.listOfAnswers.length;
	// round number down
	var randomIndex = Math.floor(randomNumberArray);
//use random number to index from array
	var randomAnswer = this.listOfAnswers[randomIndex];
	
	$("#answer").text( randomAnswer);
	
};
magic8Ball.answerQuestion();

});
