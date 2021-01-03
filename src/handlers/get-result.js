'use strict';

import { data } from '../data.js';

// get the result of current attempt question
export function getResult(element) {
  const id = parseInt(element.id);
  // get the answer by comparing the id of clicked option 
  if(id === currentQuestion.answer){
      // set the green color to the correct option
      element.classList.add("correct");
      // add the indicator to correct mark
      updateAnswerIndicator("correct");
      correctAnswers++;
      // console.log("correct:"+correctAnswers)
  }
  else{
  // set the red color to the incorrect option
      element.classList.add("wrong");
      // add the indicator to wrong mark
      updateAnswerIndicator("wrong");

      // if the answer is incorrect the show the correct option by adding green color the correct option
      const optionLen = optionContainer.children.length;
      for(let i=0; i<optionLen; i++){
          if(parseInt(optionContainer.children[i].id) === currentQuestion.answer){
              optionContainer.children[i].classList.add("correct");

          }
      }
    }
  }