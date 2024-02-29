import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { splitStringToTypeAnimation } from "../../helpers/splitStringToTypeAnimation";
import { StoryPhase, StoryProps } from "./Story.type";
import { QUESTIONS_CONST } from "../../constants";

export default function StoryOne({ onFinish }: StoryProps) {
  const [phase, setPhase] = useState<StoryPhase>("narrate");

  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="w-full h-auto rounded-md overflow-hidden relative image-previewer">
          <img src={`../../story_1.jpg`} />
          <div className="flex gap-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-4 dip-animation">
            <div className="rounded-full w-10 h-10 overflow-hidden flex justify-center items-center floating-animation">
              <img
                src={`../../circle_root.jpg`}
                style={{ transform: "scale(1.1)" }}
              />
            </div>
            <div className="rounded-full w-10 h-10 overflow-hidden flex justify-center items-center floating-animation">
              <img
                src={`../../circle_water.jpg`}
                style={{ transform: "scale(2)" }}
              />
            </div>
            <div className="rounded-full w-10 h-10 overflow-hidden flex justify-center items-center floating-animation">
              <img
                src={`../../circle_chalk.jpg`}
                style={{ transform: "scale(2)" }}
              />
            </div>
          </div>
        </div>
        {phase.includes("arrate") && (
          <div className="p-2 rounded-md">
            <TypeAnimation
              sequence={splitStringToTypeAnimation({
                text: QUESTIONS_CONST[1].question,
                splitter: "|",
                onFinish: () => setPhase("endNarrate"),
              })}
              speed={50}
            />
          </div>
        )}
        {phase === "showOptions" && (
          <div>
            {QUESTIONS_CONST[1].options.map((v, k) => (
              <div key={`q1-${k}`} className="flex items-start gap-2">
                <input type="radio" name="options" className="mt-1.5" />
                <div>{v.sentence}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-end mx-4">
        {phase === "endNarrate" && (
          <div
            className="text-md dip-animation cursor-pointer"
            style={{ animationDuration: "1s" }}
            onClick={() => setPhase("showOptions")}
          >
            {">>"}
          </div>
        )}
      </div>
    </>
  );
}
