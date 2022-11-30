// @ts-check

import questionRunner from "./question-runner.mjs";
import questions from "./questions.mjs";

for (const [i, q] of questions.entries()) {
  const result = await questionRunner(q);
  console.log(`Q${i + 1}: ${result}`);
}