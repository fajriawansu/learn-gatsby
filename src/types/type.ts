export interface ObservedValue {
  kreativitas?: number,
  ketelitian?: number,
  keberuntungan?: number,
  kecemasan?: number,
  keberanian?: number,
  ketabahan?: number,
  keegoisan?: number,
  kejujuran?: number
}

export interface OptionItem {
  sentence: string
  points: ObservedValue
}

export interface QuestionItem {
  question: string
  options: OptionItem[]
}

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