export enum CharacterReport {
  chance_maker = "Chance Maker",
  firework_launcher = "Firework Launcher",
  heist_mastermind = "Heist Mastermind",
  hero_poser = "Hero Poser",
  janken_master = "Janken Master",
  masochistic_dreamer = "Masochistic Dreamer",
  people_champion = "People Champion",
  pirate_crew = "Pirate Crew",
  reader_in_the_corner = "Reader in The Corner",
  sad_swallow = "Sad Swallow",
  shadow_witch = "Shadow Witch",
  step_faker = "Step Faker",
  subway_artist = "Subway Artist",
  tomb_guard = "Guardian of The Lover's Tomb",
  twister_fate = "Twister Fate",
  villain_material = "Villain Material"
}

export type CharacterKeys = keyof typeof CharacterReport;
export interface CharacterDetail {
  code: CharacterKeys
  title: CharacterReport
  description: string
}

export type CharacterPoints = Partial<Record<CharacterKeys, number>>;

export enum ObservedEnum {
  creativity = "Kreativitas",
  thoroughness = "Ketelitian",
  luck = "Keberuntungan",
  anxiety = "Kecemasan",
  courage = "Keberanian",
  fortitude = "Ketabahan",
  selfishness = "Keegoisan",
  honesty = "Kejujuran"
}

export type ObservedValue = Partial<Record<keyof typeof ObservedEnum, number>>;
export interface OptionItem {
  sentence: string
  personality_points: ObservedValue
  character_points: CharacterPoints
}

export interface QuestionItem {
  question: string
  options: OptionItem[]
}