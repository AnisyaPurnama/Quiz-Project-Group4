// Export get new question Function


// set question number and question and options
export function getNewQuestion() {
    // set question number
    questionNumber.innerHTML = "Question:" + (questionCounter + 1) + "/" + quiz.length;

    // set question text
    // get random question
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    //get the position of 'questionIndex' from the availableQuestion Array
    const index1 = availableQuestions.indexOf(questionIndex);
    // Remove the 'questionIndex' from the availableQuestion Array, so that the question does not repeat
    availableQuestions.splice(index1, 1);
    // console.log(questionIndex)
    // console.log(availableQuestions)

    // Set options
    // Get the length of options 
    const optionLen = currentQuestion.options.length
        // push options into availableOptions Array
    for (let i = 0; i < optionLen; i++) {
        availableOptions.push(i)
    }
    optionContainer.innerHTML = '';
    let animationDelay = 0.15;
    // create options in html 
    for (let i = 0; i < optionLen; i++) {
        // Rdandom option
        const optonIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)]
            // Get the position of 'optonIndex' from the availableOptions Array
        const index2 = availableOptions.indexOf(optonIndex);
        // Remove the 'optonIndex' from the availableOptions Array, so that the option does not repeat
        availableOptions.splice(index2, 1);
        // console.log(optonIndex)
        // console.log(optonIndex)
        // console.log(availableOptions)
        var option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optonIndex];
        option.id = optonIndex;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.15;
        option.className = "option";
        optionContainer.appendChild(option)
        option.setAttribute("onclick", "getResult(this)")
            // console.log(availableOptions)
    }
    questionCounter++
}