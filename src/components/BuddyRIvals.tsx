import React from "react";
import { CHARACTER_RELATIONS } from "../constants";
import { CharacterReportEnum } from "../types/type";
import { DICT } from "../dict";

interface Props {
  char: CharacterReportEnum;
  gender: "boy" | "girl";
}

export default function BuddyRIvals({ char, gender }: Props) {
  const buddy = CHARACTER_RELATIONS[CharacterReportEnum[char]].buddies;
  const rivals = CHARACTER_RELATIONS[CharacterReportEnum[char]].rivals;
  return (
    <div className="p-4 flex">
      <div className="w-1/2">
        <div className="text-2xl">Buddy:</div>
        <div>{CHARACTER_RELATIONS[CharacterReportEnum[char]].buddies[0]}</div>
        <div className="w-16 h-16">
          <img className="rounded-full" src={`16_${char}_${gender}.jpg`} />
        </div>
        <div className="text-2xl text-end">
          {DICT[CharacterReportEnum[char]].en.toUpperCase()}
        </div>
      </div>
      <div className="w-1/2">
        <div className="text-2xl">Rivals:</div>
        <div>{CHARACTER_RELATIONS[CharacterReportEnum[char]].rivals[0]}</div>
      </div>
    </div>
  );
}
