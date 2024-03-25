import { DICT } from "./dict";
import {
  CharacterRelations,
  CharacterReportEnum,
  QuestionItem,
} from "./types/type";

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
          courage: 1,
        },
        trait: DICT.trait_11["id"],
      },
      {
        sentence: DICT.q1_opt2["id"],
        personality_points: {
          selfishness: 1,
        },
        trait: DICT.trait_12["id"],
      },
      {
        sentence: DICT.q1_opt3["id"],
        personality_points: {
          creativity: 1,
        },
        trait: DICT.trait_13["id"],
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
          curiosity: 1,
        },
        trait: DICT.trait_21["id"],
      },
      {
        sentence: DICT.q2_opt2["id"],
        personality_points: {
          charisma: 1,
        },
        trait: DICT.trait_22["id"],
      },
      {
        sentence: DICT.q2_opt3["id"],
        personality_points: {
          fortitude: 1,
        },
        trait: DICT.trait_23["id"],
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
          curiosity: 1,
        },
        trait: DICT.trait_31["id"],
      },
      {
        sentence: DICT.q3_opt2["id"],
        personality_points: {
          selfishness: 1,
        },
        trait: DICT.trait_32["id"],
      },
      {
        sentence: DICT.q3_opt3["id"],
        personality_points: {
          luck: 1,
        },
        trait: DICT.trait_33["id"],
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
          charisma: 1,
        },
        trait: DICT.trait_41["id"],
      },
      {
        sentence: DICT.q4_opt2["id"],
        personality_points: {
          courage: 1,
        },
        trait: DICT.trait_42["id"],
      },
      {
        sentence: DICT.q4_opt3["id"],
        personality_points: {
          anxiety: 1,
        },
        trait: DICT.trait_43["id"],
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
          courage: 1,
        },
        trait: DICT.trait_51["id"],
      },
      {
        sentence: DICT.q5_opt2["id"],
        personality_points: {
          anxiety: 1,
        },
        trait: DICT.trait_52["id"],
      },
      {
        sentence: DICT.q5_opt3["id"],
        personality_points: {
          creativity: 1,
        },
        trait: DICT.trait_53["id"],
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
          anxiety: 1,
        },
        trait: DICT.trait_61["id"],
      },
      {
        sentence: DICT.q6_opt2["id"],
        personality_points: {
          luck: 1,
        },
        trait: DICT.trait_62["id"],
      },
      {
        sentence: DICT.q6_opt3["id"],
        personality_points: {
          fortitude: 1,
        },
        trait: DICT.trait_63["id"],
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
          curiosity: 1,
        },
        trait: DICT.trait_71["id"],
      },
      {
        sentence: DICT.q7_opt2["id"],
        personality_points: {
          charisma: 1,
        },
        trait: DICT.trait_72["id"],
      },
      {
        sentence: DICT.q7_opt3["id"],
        personality_points: {
          selfishness: 1,
        },
        trait: DICT.trait_73["id"],
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
          fortitude: 1,
        },
        trait: DICT.trait_81["id"],
      },
      {
        sentence: DICT.q8_opt2["id"],
        personality_points: {
          selfishness: 1,
        },
        trait: DICT.trait_82["id"],
      },
      {
        sentence: DICT.q8_opt3["id"],
        personality_points: {
          courage: 1,
        },
        trait: DICT.trait_83["id"],
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
          curiosity: 1,
        },
        trait: DICT.trait_91["id"],
      },
      {
        sentence: DICT.q9_opt2["id"],
        personality_points: {
          creativity: 1,
        },
        trait: DICT.trait_92["id"],
      },
      {
        sentence: DICT.q9_opt3["id"],
        personality_points: {
          luck: 1,
        },
        trait: DICT.trait_93["id"],
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
        trait: "",
      },
      {
        sentence: DICT.q10_opt2["id"],
        personality_points: {},
        trait: "",
      },
      {
        sentence: DICT.q10_opt3["id"],
        personality_points: {},
        trait: "",
      },
      {
        sentence: DICT.q10_opt4["id"],
        personality_points: {},
        trait: "",
      },
    ],
  },
  {
    number: 1,
    question: DICT.epilogue["id"],
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
