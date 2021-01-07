// Add listener for get new question 

import { getNewQuestion } from "../handlers/get-new-question.js";

document.getElementById('next-button').addEventListener("click", getNewQuestion);