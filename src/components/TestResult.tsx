import React, { useEffect, useRef, useState } from "react";
import ParallelogramStat from "./ParallelogramStat";
import { CharacterReportEnum, ObservedEnum } from "../types/type";
import { DICT } from "../dict";
import Chip from "./Chip";
import { useGlobalStore } from "../stores/store";
import BuddyRIvals from "./BuddyRIvals";
import * as htmlToImage from "html-to-image";

interface TestResultProps {
  char: CharacterReportEnum;
  gender: "boy" | "girl";
}

export default function TestResult({ char, gender }: TestResultProps) {
  const [glitch, setGlitch] = useState(false);

  const { answersLog } = useGlobalStore();
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setGlitch(!glitch);
    }, Math.floor(Math.random() * 1000));
  }, [glitch]);

  const domEl = useRef<HTMLDivElement>(null);

  const downloadImage = () => {
    setDownloading(true);
    setTimeout(async () => {
      if (domEl.current) {
        const dataUrl = await htmlToImage.toPng(domEl.current);

        // download image
        const link = document.createElement("a");
        link.download = "result-character.png";
        link.href = dataUrl;
        link.click();
      }
      setDownloading(false);
    }, 1000);
  };

  return (
    <div className="relative">
      <div
        id="domEl"
        ref={domEl}
        className="w-full h-full pb-8 min-h-screen"
        style={{
          backgroundImage: "url(result_bg.avif)",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="p-4 flex w-full justify-between">
          <div className="min-w-[120px]">
            <span className="text-2xl">SABIL</span> <br />
            Your duality is :
          </div>
          <div className="text-2xl flex flex-col text-end justify-center">
            {DICT[CharacterReportEnum[char]].en.toUpperCase()}
          </div>
        </div>
        <div className="flex gap-2 justify-around items-center">
          <div
            className={`testResult ${glitch && !downloading && "glitchPlease"}`}
          >
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
        <div className="m-4">
          <div className="text-2xl mb-2">Motto :</div>
          <div className="font-mono">
            &ldquo;{DICT[`desc_${CharacterReportEnum[char]}`].en}&rdquo;
          </div>
        </div>
        <div className="m-4">
          <div className="text-2xl mb-2">Traits :</div>
          <div className="flex font-mono gap-1 flex-wrap">
            {answersLog.map((v, k) => (
              <Chip label={DICT[`trait_${k + 1}${v + 1}`].en} />
            ))}
          </div>
        </div>
        <div className={`mt-4 px-4 flex ${downloading ? "mb-4" : "mb-12"}`}>
          <BuddyRIvals char={char} gender={gender} />
        </div>
      </div>
      <div className="absolute bottom-4 right-0 flex items-center justify-center w-full font-mono">
        <button
          onClick={downloadImage}
          className="py-1 px-3 border border-white text-xs rounded-md"
        >
          Download Result
        </button>
      </div>
    </div>
  );
}
