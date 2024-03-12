import React, { useEffect, useState } from "react";
import ParallelogramStat from "./ParallelogramStat";
import { CharacterReportEnum, ObservedEnum } from "../types/type";
import { DICT } from "../dict";

interface TestResultProps {
  char: CharacterReportEnum;
  gender: "boy" | "girl";
}

export default function TestResult({ char, gender }: TestResultProps) {
  const [glitch, setGlitch] = useState(false);

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
      <div className="flex gap-2 items-center">
        <div className={`testResult ${glitch && "glitchPlease"}`}>
          <div className="imgWrap">
            <img className="red" src={`16_${char}_${gender}.jpg`} />
            <img className="green" src={`16_${char}_${gender}.jpg`} />
            <img className="blue" src={`16_${char}_${gender}.jpg`} />
          </div>
        </div>

        <div className="pr-4 font-sans flex flex-col gap-[3px]">
          {Object.values(ObservedEnum).map((v, k) => (
            <ParallelogramStat label={DICT[v].en} level={4} />
          ))}
        </div>
      </div>
    </div>
  );
}
