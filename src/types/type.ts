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