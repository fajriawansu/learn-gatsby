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
  all_rounder = "all_rounder",
  fair_tricker = "fair_tricker",
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
  curiosity = "curiosity",
}

export type ObservedValue = Partial<Record<keyof typeof ObservedEnum, number>>;
export interface OptionItem {
  sentence: string;
  personality_points: ObservedValue;
  trait: string;
}

export interface QuestionItem {
  number: number;
  question: string;
  options: OptionItem[];
}

export type RelationsBank = {
  buddies: CharacterReportEnum[];
  rivals: CharacterReportEnum[];
};

export type CharacterRelations = Record<CharacterReportEnum, RelationsBank>;

export type PersonalitiesStoreType = Record<keyof typeof ObservedEnum, number>;

export type LastAnsweredType = "another" | "exit" | "toilet";
export type GenderType = "boy" | "girl";

export type PlayerInfoType = {
  gender?: GenderType;
  name: string;
};
