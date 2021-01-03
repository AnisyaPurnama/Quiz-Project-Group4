'use strict';

// get the quiz Result
export function quizResult(){
  resultBox.querySelector(".total-question").innerHTML = quiz.length;
  resultBox.querySelector(".total-attempt").innerHTML = attempt;
  resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
  resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
  const percentage = (correctAnswers/quiz.length)*100;
  resultBox.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";
  resultBox.querySelector(".total-score").innerHTML = correctAnswers +" / " + quiz.length;
}