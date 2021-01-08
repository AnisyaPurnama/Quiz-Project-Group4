// Add listener for quit quiz

import { quizOver } from "../handlers/quit.js";

document.getElementById('quit-button').addEventListener("click", quizOver);