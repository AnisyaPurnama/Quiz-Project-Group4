// Export quit Quiz Function
export function quizOver() {
    // hide quiz Box
    quizBox.classList.add("hide");
    // show result Box
    resultBox.classList.remove("hide");
    quizResult();
}