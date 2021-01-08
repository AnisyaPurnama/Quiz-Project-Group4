// Add listener for try again quiz

import { tryAgainQuiz } from "../handlers/try-again.js";

document.getElementById('try-again-quiz-button').addEventListener("click", tryAgainQuiz);