import React from "react";
import { CHARACTER_RELATIONS } from "../constants";
import { CharacterReportEnum } from "../types/type";
import { DICT } from "../dict";

interface Props {
  char: CharacterReportEnum;
  gender: "boy" | "girl";
}

function CardItem({ char, gender }: Props) {
  return (
    <div className="w-20 h-20">
      <img
        className="rounded-full opacity-70"
        src={`16_${char}_${gender}.jpg`}
      />
      <div className="text-sm max-w-20 text-center mt-1">
        {DICT[CharacterReportEnum[char]].en}
      </div>
    </div>
  );
}

export default function BuddyRIvals({ char, gender }: Props) {
  const buddy = CHARACTER_RELATIONS[CharacterReportEnum[char]].buddies;
  const rivals = CHARACTER_RELATIONS[CharacterReportEnum[char]].rivals;
  return (
    <>
      <div className="w-1/2">
        <div className="text-2xl mb-2">Buddy :</div>
        <CardItem char={buddy[0]} gender={gender} />
      </div>
      <div className="w-1/2">
        <div className="text-2xl mb-2">{`Rival${
          rivals.length > 1 ? "s" : ""
        } :`}</div>
        <div className="flex gap-2">
          <CardItem char={rivals[0]} gender={gender} />
          {rivals.length > 1 && <CardItem char={rivals[1]} gender={gender} />}
        </div>
      </div>
    </>
  );
}
