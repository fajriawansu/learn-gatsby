import { DICT } from "./dict";
import { QuestionItem } from "./types/type";

export const QUESTIONS_CONST: QuestionItem[] = [
  {
    question: DICT.q1["id"],
    options: [
      {
        sentence: DICT.q1_opt1["id"],
        personality_points: {
          courage: 1,
          thoroughness: 2,
        },
        character_points: {},
      },
      {
        sentence: DICT.q1_opt2["id"],
        personality_points: {
          courage: 1,
          thoroughness: 2,
        },
        character_points: {},
      },
      {
        sentence: DICT.q1_opt2["id"],
        personality_points: {
          courage: 1,
          thoroughness: 2,
        },
        character_points: {},
      },
    ],
  },
];
