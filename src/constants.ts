import { DICT } from "./dict";
import {
  CharacterRelations,
  CharacterReportEnum,
  ObservedEnum,
  QuestionItem,
} from "./types/type";

export const getQuestion = (lan: "id" | "en") : QuestionItem[] => [
  {
    number: 0,
    question: DICT.prologue[lan],
    options: [],
  },
  {
    number: 1,
    question: DICT.q1[lan],
    options: [
      {
        sentence: DICT.q1_opt1[lan],
        personality_points: {
          courage: 1,
        },
        trait: DICT.trait_11[lan],
      },
      {
        sentence: DICT.q1_opt2[lan],
        personality_points: {
          selfishness: 1,
        },
        trait: DICT.trait_12[lan],
      },
      {
        sentence: DICT.q1_opt3[lan],
        personality_points: {
          creativity: 1,
        },
        trait: DICT.trait_13[lan],
      },
    ],
  },
  {
    number: 2,
    question: DICT.q2[lan],
    options: [
      {
        sentence: DICT.q2_opt1[lan],
        personality_points: {
          curiosity: 1,
        },
        trait: DICT.trait_21[lan],
      },
      {
        sentence: DICT.q2_opt2[lan],
        personality_points: {
          charisma: 1,
        },
        trait: DICT.trait_22[lan],
      },
      {
        sentence: DICT.q2_opt3[lan],
        personality_points: {
          fortitude: 1,
        },
        trait: DICT.trait_23[lan],
      },
    ],
  },
  {
    number: 3,
    question: DICT.q3[lan],
    options: [
      {
        sentence: DICT.q3_opt1[lan],
        personality_points: {
          curiosity: 1,
        },
        trait: DICT.trait_31[lan],
      },
      {
        sentence: DICT.q3_opt2[lan],
        personality_points: {
          selfishness: 1,
        },
        trait: DICT.trait_32[lan],
      },
      {
        sentence: DICT.q3_opt3[lan],
        personality_points: {
          luck: 1,
        },
        trait: DICT.trait_33[lan],
      },
    ],
  },
  {
    number: 4,
    question: DICT.q4[lan],
    options: [
      {
        sentence: DICT.q4_opt1[lan],
        personality_points: {
          charisma: 1,
        },
        trait: DICT.trait_41[lan],
      },
      {
        sentence: DICT.q4_opt2[lan],
        personality_points: {
          courage: 1,
        },
        trait: DICT.trait_42[lan],
      },
      {
        sentence: DICT.q4_opt3[lan],
        personality_points: {
          anxiety: 1,
        },
        trait: DICT.trait_43[lan],
      },
    ],
  },
  {
    number: 5,
    question: DICT.q5[lan],
    options: [
      {
        sentence: DICT.q5_opt1[lan],
        personality_points: {
          courage: 1,
        },
        trait: DICT.trait_51[lan],
      },
      {
        sentence: DICT.q5_opt2[lan],
        personality_points: {
          anxiety: 1,
        },
        trait: DICT.trait_52[lan],
      },
      {
        sentence: DICT.q5_opt3[lan],
        personality_points: {
          creativity: 1,
        },
        trait: DICT.trait_53[lan],
      },
    ],
  },
  {
    number: 6,
    question: DICT.q6[lan],
    options: [
      {
        sentence: DICT.q6_opt1[lan],
        personality_points: {
          anxiety: 1,
        },
        trait: DICT.trait_61[lan],
      },
      {
        sentence: DICT.q6_opt2[lan],
        personality_points: {
          luck: 1,
        },
        trait: DICT.trait_62[lan],
      },
      {
        sentence: DICT.q6_opt3[lan],
        personality_points: {
          fortitude: 1,
        },
        trait: DICT.trait_63[lan],
      },
    ],
  },
  {
    number: 7,
    question: DICT.q7[lan],
    options: [
      {
        sentence: DICT.q7_opt1[lan],
        personality_points: {
          curiosity: 1,
        },
        trait: DICT.trait_71[lan],
      },
      {
        sentence: DICT.q7_opt2[lan],
        personality_points: {
          charisma: 1,
        },
        trait: DICT.trait_72[lan],
      },
      {
        sentence: DICT.q7_opt3[lan],
        personality_points: {
          selfishness: 1,
        },
        trait: DICT.trait_73[lan],
      },
    ],
  },
  {
    number: 8,
    question: DICT.q8[lan],
    options: [
      {
        sentence: DICT.q8_opt1[lan],
        personality_points: {
          fortitude: 1,
        },
        trait: DICT.trait_81[lan],
      },
      {
        sentence: DICT.q8_opt2[lan],
        personality_points: {
          selfishness: 1,
        },
        trait: DICT.trait_82[lan],
      },
      {
        sentence: DICT.q8_opt3[lan],
        personality_points: {
          courage: 1,
        },
        trait: DICT.trait_83[lan],
      },
    ],
  },
  {
    number: 9,
    question: DICT.q9[lan],
    options: [
      {
        sentence: DICT.q9_opt1[lan],
        personality_points: {
          curiosity: 1,
        },
        trait: DICT.trait_91[lan],
      },
      {
        sentence: DICT.q9_opt2[lan],
        personality_points: {
          creativity: 1,
        },
        trait: DICT.trait_92[lan],
      },
      {
        sentence: DICT.q9_opt3[lan],
        personality_points: {
          luck: 1,
        },
        trait: DICT.trait_93[lan],
      },
    ],
  },
  {
    number: 10,
    question: DICT.q10[lan],
    options: [
      {
        sentence: DICT.q10_opt1[lan],
        personality_points: {},
        trait: "",
      },
      {
        sentence: DICT.q10_opt2[lan],
        personality_points: {},
        trait: "",
      },
      {
        sentence: DICT.q10_opt3[lan],
        personality_points: {},
        trait: "",
      },
      {
        sentence: DICT.q10_opt4[lan],
        personality_points: {},
        trait: "",
      },
    ],
  },
  {
    number: 1,
    question: DICT.epilogue[lan],
    options: [],
  },
];

export const CHARACTER_RELATIONS: CharacterRelations = {
  chance_maker: {
    buddies: [CharacterReportEnum.janken_master],
    rivals: [
      CharacterReportEnum.reader_in_the_corner,
      CharacterReportEnum.twister_fate,
    ],
  },

  janken_master: {
    buddies: [CharacterReportEnum.chance_maker],
    rivals: [
      CharacterReportEnum.reader_in_the_corner,
      CharacterReportEnum.twister_fate,
    ],
  },
  heist_mastermind: {
    buddies: [CharacterReportEnum.villain_material],
    rivals: [
      CharacterReportEnum.people_champion,
      CharacterReportEnum.hero_poser,
    ],
  },
  subway_artist: {
    buddies: [CharacterReportEnum.step_faker],
    rivals: [CharacterReportEnum.tomb_guard, CharacterReportEnum.twister_fate],
  },
  hero_poser: {
    buddies: [CharacterReportEnum.people_champion],
    rivals: [
      CharacterReportEnum.heist_mastermind,
      CharacterReportEnum.villain_material,
    ],
  },
  shadow_witch: {
    buddies: [CharacterReportEnum.pirate_crew],
    rivals: [
      CharacterReportEnum.firework_launcher,
      CharacterReportEnum.sad_swallow,
    ],
  },
  sad_swallow: {
    buddies: [CharacterReportEnum.firework_launcher],
    rivals: [CharacterReportEnum.pirate_crew, CharacterReportEnum.shadow_witch],
  },
  step_faker: {
    buddies: [CharacterReportEnum.subway_artist],
    rivals: [CharacterReportEnum.tomb_guard, CharacterReportEnum.twister_fate],
  },
  pirate_crew: {
    buddies: [CharacterReportEnum.shadow_witch],
    rivals: [
      CharacterReportEnum.firework_launcher,
      CharacterReportEnum.sad_swallow,
    ],
  },
  masochistic_dreamer: {
    buddies: [CharacterReportEnum.reader_in_the_corner],
    rivals: [
      CharacterReportEnum.chance_maker,
      CharacterReportEnum.janken_master,
    ],
  },
  firework_launcher: {
    buddies: [CharacterReportEnum.sad_swallow],
    rivals: [CharacterReportEnum.pirate_crew, CharacterReportEnum.shadow_witch],
  },
  tomb_guard: {
    buddies: [CharacterReportEnum.twister_fate],
    rivals: [CharacterReportEnum.step_faker, CharacterReportEnum.subway_artist],
  },
  people_champion: {
    buddies: [CharacterReportEnum.hero_poser],
    rivals: [
      CharacterReportEnum.villain_material,
      CharacterReportEnum.heist_mastermind,
    ],
  },
  villain_material: {
    buddies: [CharacterReportEnum.heist_mastermind],
    rivals: [
      CharacterReportEnum.people_champion,
      CharacterReportEnum.hero_poser,
    ],
  },
  reader_in_the_corner: {
    buddies: [CharacterReportEnum.masochistic_dreamer],
    rivals: [
      CharacterReportEnum.chance_maker,
      CharacterReportEnum.janken_master,
    ],
  },
  twister_fate: {
    buddies: [CharacterReportEnum.tomb_guard],
    rivals: [CharacterReportEnum.step_faker, CharacterReportEnum.subway_artist],
  },
  all_rounder: {
    buddies: [CharacterReportEnum.fair_tricker],
    rivals: [CharacterReportEnum.fair_tricker],
  },
  fair_tricker: {
    buddies: [CharacterReportEnum.all_rounder],
    rivals: [CharacterReportEnum.all_rounder],
  },
};

type ObservedGroupValue = Partial<Record<keyof typeof ObservedEnum, string[]>>;

export const PERSONALITIES_BY_QUESTION: ObservedGroupValue = {
  creativity: ["13", "53", "92"],
  charisma: ["22", "41", "72", "83"],
  luck: ["33", "92", "63"],
  anxiety: ["43", "52", "61", "72"],
  courage: ["11", "42", "51", "83"],
  fortitude: ["23", "63", "81"],
  selfishness: ["12", "32", "73", "82"],
  curiosity: ["21", "31", "71", "91"],
};
