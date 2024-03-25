import React, { useEffect, useState } from "react";
import ParallelogramStat from "./ParallelogramStat";
import { CharacterReportEnum, ObservedEnum } from "../types/type";
import { DICT } from "../dict";
import Chip from "./Chip";
import { useGlobalStore } from "../stores/store";
import { CHARACTER_RELATIONS } from "../constants";
import BuddyRIvals from "./BuddyRIvals";

interface TestResultProps {
  char: CharacterReportEnum;
  gender: "boy" | "girl";
}

export default function TestResult({ char, gender }: TestResultProps) {
  const [glitch, setGlitch] = useState(false);

  const { answersLog } = useGlobalStore();

  useEffect(() => {
    setTimeout(() => {
      setGlitch(!glitch);
    }, Math.floor(Math.random() * 1000));
  }, [glitch]);

  return (
    <div
      className="w-full h-full min-h-[100vh] bg-cover"
      style={{ backgroundImage: "url(result_bg.avif)" }}
    >
      <div className="p-4 flex w-full justify-between">
        <div className="min-w-[120px]">
          <span className="text-2xl">SABIL</span> <br />
          Your duality is :
        </div>
        <div className="text-2xl text-end">
          {DICT[CharacterReportEnum[char]].en.toUpperCase()}
        </div>
      </div>
      <div className="flex gap-2 justify-around items-center">
        <div className={`testResult ${glitch && "glitchPlease"}`}>
          <div className="imgWrap">
            <img className="red" src={`16_${char}_${gender}.jpg`} />
            <img className="green" src={`16_${char}_${gender}.jpg`} />
            <img className="blue" src={`16_${char}_${gender}.jpg`} />
          </div>
        </div>

        <div className="pr-4 font-mono flex flex-col gap-[3px]">
          {Object.values(ObservedEnum).map((v, k) => (
            <ParallelogramStat label={DICT[v].en} level={5} />
          ))}
        </div>
      </div>
      <div className="p-4 flex items-center font-mono">
        &ldquo;{DICT[`desc_${CharacterReportEnum[char]}`].en}.&rdquo;
      </div>
      <div className="p-4">
        <div className="text-2xl">Traits :</div>
        <div className="flex font-mono gap-1 flex-wrap">
          {answersLog.map((v, k) => (
            <Chip label={DICT[`trait_${k + 1}${v + 1}`].en} />
          ))}
        </div>
      </div>
      <BuddyRIvals char={char} gender={gender} />
    </div>
  );
}
