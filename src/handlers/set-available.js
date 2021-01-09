//Import Data Available Questions

import data from "../data.js"

// Export set available questions function

export function setAvailableQuestions(){
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++){
        data.availableQuestions.push(quiz[i])
    }
}

