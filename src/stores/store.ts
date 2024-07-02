import { create } from "zustand";
import {
  CharacterPoints,
  CharacterReportEnum,
  LanguageType,
  LastAnsweredType,
  ObservedEnum,
  ObservedValue,
  PersonalitiesStoreType,
  PlayerInfoType,
} from "../types/type";

interface BearState {
  language: LanguageType;
  playerInfo: PlayerInfoType;
  activeStoryIdx: number;
  noAnimation: boolean;
  answersLog: number[];
  lastAnswer?: LastAnsweredType;
  characterPoints: Record<keyof typeof CharacterReportEnum, number>;
  personalityPoints: PersonalitiesStoreType;
  setLanguage: (lang: LanguageType) => void;
  updatePoint: (persona: ObservedValue, char: CharacterPoints) => void;
  setActiveStoryIdx: (idx: number) => void;
  updateAnswersLog: (questionNumber: number, value: number) => void;
  handleSkipAnimation: (skip: boolean) => void;
  submitLastAnswer: (val: LastAnsweredType) => void;
  setPlayerInfo: (info: PlayerInfoType) => void;
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
  language: "id",
  playerInfo: { name: "", gender: "boy" },
  activeStoryIdx: 99,
  noAnimation: false,
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
    creativity: 1,
    charisma: 1,
    luck: 1,
    anxiety: 1,
    courage: 1,
    fortitude: 1,
    selfishness: 1,
    curiosity: 1,
  },
  setLanguage: (lang) =>
    set(() => ({
      language: lang,
    })),
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
    set((state) => {
      let temp = state.answersLog;
      temp[qNumber - 1] = val;
      return {
        answersLog: temp,
      };
    });
  },
  submitLastAnswer: (val: LastAnsweredType) => {
    set(() => ({
      lastAnswer: val,
    }));
  },
  handleSkipAnimation: (bool: boolean) =>
    set(() => ({
      noAnimation: bool,
    })),
  setPlayerInfo: (info: PlayerInfoType) =>
    set(() => ({
      playerInfo: info,
    })),
}));
