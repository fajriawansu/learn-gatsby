export enum CharacterReportEnum {
  chance_maker = "chance_maker",
  firework_launcher = "firework_launcher",
  heist_mastermind = "heist_mastermind",
  hero_poser = "hero_poser",
  janken_master = "janken_master",
  masochistic_dreamer = "masochistic_dreamer",
  people_champion = "people_champion",
  pirate_crew = "pirate_crew",
  reader_in_the_corner = "reader_in_the_corner",
  sad_swallow = "sad_swallow",
  shadow_witch = "shadow_witch",
  step_faker = "step_faker",
  subway_artist = "subway_artist",
  tomb_guard = "tomb_guard",
  twister_fate = "twister_fate",
  villain_material = "villain_material",
}

export type CharacterKeys = keyof typeof CharacterReportEnum;
export interface CharacterDetail {
  code: CharacterKeys;
  title: CharacterReportEnum;
  description: string;
}

export type CharacterPoints = Partial<Record<CharacterKeys, number>>;

export enum ObservedEnum {
  creativity = "creativity",
  charisma = "charisma",
  luck = "luck",
  anxiety = "anxiety",
  courage = "courage",
  fortitude = "fortitude",
  selfishness = "selfishness",
  honesty = "honesty",
}

export type ObservedValue = Partial<Record<keyof typeof ObservedEnum, number>>;
export interface OptionItem {
  sentence: string;
  personality_points: ObservedValue;
  character_points: CharacterPoints;
}

export interface QuestionItem {
  number: number;
  question: string;
  options: OptionItem[];
}
