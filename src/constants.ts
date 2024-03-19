import { DICT } from "./dict";
import { QuestionItem } from "./types/type";

export const QUESTIONS_CONST: QuestionItem[] = [
  {
    number: 0,
    question: DICT.prologue["id"],
    options: [],
  },
  {
    number: 1,
    question: DICT.q1["id"],
    options: [
      {
        sentence: DICT.q1_opt1["id"],
        personality_points: {
          courage: 1
        },
        trait: DICT.trait_11["id"]
      },
      {
        sentence: DICT.q1_opt2["id"],
        personality_points: {
          selfishness: 1
        },
        trait: DICT.trait_12["id"]
      },
      {
        sentence: DICT.q1_opt3["id"],
        personality_points: {
          creativity: 1
        },
        trait: DICT.trait_13["id"]
      },
    ],
  },
  {
    number: 2,
    question: DICT.q2["id"],
    options: [
      {
        sentence: DICT.q2_opt1["id"],
        personality_points: {
          curiosity: 1
        },
        trait: DICT.trait_21["id"]
      },
      {
        sentence: DICT.q2_opt2["id"],
        personality_points: {
          charisma: 1
        },
        trait: DICT.trait_22["id"]
      },
      {
        sentence: DICT.q2_opt3["id"],
        personality_points: {
          fortitude: 1
        },
        trait: DICT.trait_23["id"]
      },
    ],
  },
  {
    number: 3,
    question: DICT.q3["id"],
    options: [
      {
        sentence: DICT.q3_opt1["id"],
        personality_points: {
          curiosity: 1
        },
        trait: DICT.trait_31["id"]
      },
      {
        sentence: DICT.q3_opt2["id"],
        personality_points: {
          selfishness: 1
        },
        trait: DICT.trait_32["id"]
      },
      {
        sentence: DICT.q3_opt3["id"],
        personality_points: {
          luck: 1
        },
        trait: DICT.trait_33["id"]
      },
    ],
  },
  {
    number: 4,
    question: DICT.q4["id"],
    options: [
      {
        sentence: DICT.q4_opt1["id"],
        personality_points: {
          charisma: 1
        },
        trait: DICT.trait_41["id"]
      },
      {
        sentence: DICT.q4_opt2["id"],
        personality_points: {
          courage: 1
        },
        trait: DICT.trait_42["id"]
      },
      {
        sentence: DICT.q4_opt3["id"],
        personality_points: {
          anxiety: 1
        },
        trait: DICT.trait_43["id"]
      },
    ],
  },
  {
    number: 5,
    question: DICT.q5["id"],
    options: [
      {
        sentence: DICT.q5_opt1["id"],
        personality_points: {
          courage: 1
        },
        trait: DICT.trait_51["id"]
      },
      {
        sentence: DICT.q5_opt2["id"],
        personality_points: {
          anxiety: 1
        },
        trait: DICT.trait_52["id"]
      },
      {
        sentence: DICT.q5_opt3["id"],
        personality_points: {
          creativity: 1
        },
        trait: DICT.trait_53["id"]
      },
    ],
  },
  {
    number: 6,
    question: DICT.q6["id"],
    options: [
      {
        sentence: DICT.q6_opt1["id"],
        personality_points: {
          anxiety: 1
        },
        trait: DICT.trait_61["id"]
      },
      {
        sentence: DICT.q6_opt2["id"],
        personality_points: {
          luck: 1
        },
        trait: DICT.trait_62["id"]
      },
      {
        sentence: DICT.q6_opt3["id"],
        personality_points: {
          fortitude: 1
        },
        trait: DICT.trait_63["id"]
      },
    ],
  },
  {
    number: 7,
    question: DICT.q7["id"],
    options: [
      {
        sentence: DICT.q7_opt1["id"],
        personality_points: {
          curiosity: 1
        },
        trait: DICT.trait_71["id"]
      },
      {
        sentence: DICT.q7_opt2["id"],
        personality_points: {
          charisma: 1
        },
        trait: DICT.trait_72["id"]
      },
      {
        sentence: DICT.q7_opt3["id"],
        personality_points: {
          selfishness: 1
        },
        trait: DICT.trait_73["id"]
      },
    ],
  },
  {
    number: 8,
    question: DICT.q8["id"],
    options: [
      {
        sentence: DICT.q8_opt1["id"],
        personality_points: {
          fortitude: 1
        },
        trait: DICT.trait_81["id"]
      },
      {
        sentence: DICT.q8_opt2["id"],
        personality_points: {
          selfishness: 1
        },
        trait: DICT.trait_82["id"]
      },
      {
        sentence: DICT.q8_opt3["id"],
        personality_points: {
          courage: 1
        },
        trait: DICT.trait_83["id"]
      },
    ],
  },
  {
    number: 9,
    question: DICT.q9["id"],
    options: [
      {
        sentence: DICT.q9_opt1["id"],
        personality_points: {
          curiosity: 1
        },
        trait: DICT.trait_91["id"]
      },
      {
        sentence: DICT.q9_opt2["id"],
        personality_points: {
          creativity: 1
        },
        trait: DICT.trait_92["id"]
      },
      {
        sentence: DICT.q9_opt3["id"],
        personality_points: {
          luck: 1
        },
        trait: DICT.trait_93["id"]
      },
    ],
  },
  {
    number: 10,
    question: DICT.q10["id"],
    options: [
      {
        sentence: DICT.q10_opt1["id"],
        personality_points: {},
        trait: ""
      },
      {
        sentence: DICT.q10_opt2["id"],
        personality_points: {},
        trait: ""
      },
      {
        sentence: DICT.q10_opt3["id"],
        personality_points: {},
        trait: ""
      },
      {
        sentence: DICT.q10_opt4["id"],
        personality_points: {},
        trait: ""
      },
    ],
  },
  {
    number: 1,
    question: DICT.epilogue["id"],
    options: [],
  },
];
