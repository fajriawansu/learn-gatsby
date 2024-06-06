import { PERSONALITIES_BY_QUESTION } from "../constants";
import {
  CharacterReportEnum,
  LastAnsweredType,
  ObservedEnum,
  PersonalitiesStoreType,
} from "../types/type";

export function personalityCalculation(
  answers: number[],
  last: LastAnsweredType | undefined
): PersonalitiesStoreType {
  let result = {
    creativity: 1,
    charisma: 1,
    luck: 1,
    anxiety: 1,
    courage: 1,
    fortitude: 1,
    selfishness: 1,
    curiosity: 1,
  } as PersonalitiesStoreType;
  answers.forEach((data, idx) => {
    const answer = `${idx + 1}${data + 1}`;
    Object.entries(PERSONALITIES_BY_QUESTION).forEach((v) => {
      if (v[1].includes(answer)) result[v[0] as unknown as ObservedEnum] += 1;
    });
  });
  switch (last) {
    case "another":
      result.luck += 1;
      break;
    case "exit":
      result.fortitude += 1;
      break;
    case "toilet":
      result.creativity += 1;
      break;
    default:
      break;
  }
  return result;
}

export function finalDuality(
  answers: number[],
  last: LastAnsweredType | undefined
): CharacterReportEnum {
  // const persona = personalityCalculation(answers, last);
  const persona = {
    creativity: 4,
    charisma: 3,
    luck: 3,
    anxiety: 2,
    courage: 2,
    fortitude: 2,
    selfishness: 2,
    curiosity: 2,
  }
  const stringQnA = answers.map((v, idx) => `${idx + 1}${v + 1}`);
  const hasFour3 = Object.values(persona).filter((v) => v >= 3).length >= 4;
  let dominatedIdx = Object.values(persona).filter(v => v === 5)[0];
  const allHave2 = Object.values(persona).filter((v) => v >= 2).length === Object.values(persona).length
  const mostDominatedPersona: ObservedEnum = Object.keys(persona)[
    dominatedIdx
  ] as unknown as ObservedEnum;

  console.log({ persona, last, hasFour3, dominatedIdx, stringQnA, allHave2 });

  if (hasFour3) return CharacterReportEnum.all_rounder;
  if (allHave2) return CharacterReportEnum.fair_tricker;
  switch (mostDominatedPersona) {
    case ObservedEnum.luck:
      if (persona.luck === 5) {
        return persona.creativity > 2
          ? CharacterReportEnum.janken_master
          : CharacterReportEnum.chance_maker;
      } else {
        return ["33", "93"].every((v) => stringQnA.includes(v))
          ? CharacterReportEnum.janken_master
          : CharacterReportEnum.chance_maker;
      }
    case ObservedEnum.creativity:
      if (persona.charisma > 2 || persona.courage > 2) {
        return CharacterReportEnum.heist_mastermind;
      }
      return CharacterReportEnum.subway_artist;
    case ObservedEnum.charisma:
      if (persona.selfishness > 2 || stringQnA.includes("42")) {
        return CharacterReportEnum.shadow_witch;
      }
      return CharacterReportEnum.hero_poser;
    case ObservedEnum.anxiety:
      return ["52", "61"].every((v) => stringQnA.includes(v))
        ? CharacterReportEnum.step_faker
        : CharacterReportEnum.sad_swallow;
    case ObservedEnum.courage:
      return ["11", "51"].every((v) => stringQnA.includes(v))
        ? CharacterReportEnum.pirate_crew
        : CharacterReportEnum.masochistic_dreamer;
    case ObservedEnum.fortitude:
      if (
        persona.charisma > 2 ||
        stringQnA.includes("72") ||
        last === "exit"
      ) {
        return CharacterReportEnum.tomb_guard;
      } else return CharacterReportEnum.firework_launcher;
    case ObservedEnum.selfishness:
      return ["71", "61"].some((v) => stringQnA.includes(v))
        ? CharacterReportEnum.villain_material
        : CharacterReportEnum.people_champion;
    case ObservedEnum.curiosity:
      return ["93", "23"].some((v) => stringQnA.includes(v)) ||
        persona.charisma > 2
        ? CharacterReportEnum.reader_in_the_corner
        : CharacterReportEnum.twister_fate;
    default:
      return CharacterReportEnum.fair_tricker
  }

}
