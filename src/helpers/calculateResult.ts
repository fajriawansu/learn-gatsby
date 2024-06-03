import { PERSONALITIES_BY_QUESTION } from "../constants";
import { ObservedEnum, PersonalitiesStoreType } from "../types/type";

export function personalityCalculation (answers: number[]): PersonalitiesStoreType {
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
    const answer = `${idx+1}${data+1}`
    Object.entries(PERSONALITIES_BY_QUESTION).forEach((v) => {
      if(v[1].includes(answer))result[v[0] as unknown as ObservedEnum] += 1
      
    });
  })
  return result
}