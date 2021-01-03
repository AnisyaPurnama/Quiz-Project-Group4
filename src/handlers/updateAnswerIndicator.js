'use strict';

import '../data.js';

export function updateAnswerIndicator(markType){
  console.log(answerIndicatorContainer);
  console.log(answerIndicatorContainer.children);
  console.log(answerIndicatorContainer.children.length);
  console.log(questionCounter);
  answerIndicatorContainer.children[questionCounter-1].classList.add(markType);

}
