// Export function for next button

export function next(){
    if(questionCounter === quiz.length){
        console.log("quiz over");
        quizOver();
    }
    else{
        getNewQuestion();
    }
}