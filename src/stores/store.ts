import { create } from "zustand";
import {
  CharacterPoints,
  CharacterReportEnum,
  ObservedEnum,
  ObservedValue,
} from "../types/type";

interface BearState {
  activeStoryIdx: number;
  answersLog: number[];
  characterPoints: Record<keyof typeof CharacterReportEnum, number>;
  personalityPoints: Record<keyof typeof ObservedEnum, number>;
  updatePoint: (persona: ObservedValue, char: CharacterPoints) => void;
  setActiveStoryIdx: (idx: number) => void;
  updateAnswersLog: (questionNumber: number, value: number) => void
}

function sumPersonalities(
  defaultVal: ObservedValue,
  additionVal: ObservedValue
) {
  let temp = defaultVal;
  for (let k in additionVal) {
    temp[k as keyof ObservedValue] =
      (additionVal[k as keyof ObservedValue] ?? 0) +
      (temp[k as keyof ObservedValue] ?? 0);
  }

  return temp as Record<keyof ObservedValue, number>;
}

function sumCharacters(
  defaultVal: CharacterPoints,
  additionVal: CharacterPoints
) {
  let temp = defaultVal;
  for (let k in additionVal) {
    temp[k as keyof CharacterPoints] =
      (temp[k as keyof CharacterPoints] ?? 0) +
      (additionVal[k as keyof CharacterPoints] ?? 0);
  }

  return temp as Record<keyof CharacterPoints, number>;
}

export const useGlobalStore = create<BearState>()((set) => ({
  activeStoryIdx: 9,
  answersLog: [],
  characterPoints: {
    chance_maker: 0,
    firework_launcher: 0,
    heist_mastermind: 0,
    hero_poser: 0,
    janken_master: 0,
    masochistic_dreamer: 0,
    people_champion: 0,
    pirate_crew: 0,
    reader_in_the_corner: 0,
    sad_swallow: 0,
    shadow_witch: 0,
    step_faker: 0,
    subway_artist: 0,
    tomb_guard: 0,
    twister_fate: 0,
    villain_material: 0,
    fair_tricker: 0,
    all_rounder: 0,
  },
  personalityPoints: {
    creativity: 20,
    charisma: 20,
    luck: 20,
    anxiety: 20,
    courage: 20,
    fortitude: 20,
    selfishness: 20,
    curiosity: 20,
  },
  updatePoint: (personas, chars) =>
    set((state) => ({
      characterPoints: sumCharacters(state.characterPoints, chars),
      personalityPoints: sumPersonalities(state.personalityPoints, personas),
    })),
  setActiveStoryIdx: (idx: number) =>
    set(() => ({
      activeStoryIdx: idx,
    })),
    updateAnswersLog: (qNumber: number, val: number) => {
      set(state => {
        let temp = state.answersLog;
        temp[qNumber-1] = val;
        console.log({temp})
        return {
          answersLog: temp
        }
      })
    }
}));

// const x = Object.keys(CharacterReportEnum).map(v => ({[v]: 0})).reduce(
//   (result, item) => {
//     const key = Object.keys(item)[0];
//     result[key] = item[key];
//     return result;
//   }, {}
// );
