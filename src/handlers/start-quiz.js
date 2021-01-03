'use strict';

// #### STARTING POINT ####

export function startQuiz(){

  // hide home Box
  homeBox.classList.add("hide");
  // show quiz Box
  quizBox.classList.remove("hide");
// first we will set all questions in availableQuestions Array
  setAvailableQuestions();
  // second we will call getNewQuestion(); function
  getNewQuestion();
// to create indicator of answers
  answerIndicator();

}
