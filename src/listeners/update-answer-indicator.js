// Add listener for update answer indicator

import { updateAnswerIndicator } from "../handlers/update-answer-indicator.js";

document.getElementById('next-button').addEventListener("click", updateAnswerIndicator);