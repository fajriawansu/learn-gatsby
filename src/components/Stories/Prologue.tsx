import React from "react";
import { TypeAnimation } from "react-type-animation";
import { splitStringToTypeAnimation } from "../../helpers/splitStringToTypeAnimation";
import { StoryProps } from "./Story.type";
import { QUESTIONS_CONST } from "../../constants";

export default function Prologue({ onFinish }: StoryProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="w-full h-auto rounded-md overflow-hidden relative image-previewer">
        <div className="relative w-full h-full">
          <img src={`../../story_0.jpg`} />
          <div className="w-full h-full absolute z-10 bg-black left-0 top-0 opacity-50" />
          <div className="absolute z-20 w-1 h-1 rounded-full bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-8 floating-animation" />
        </div>
      </div>
      <div className="p-2 rounded-md">
        <TypeAnimation
          sequence={splitStringToTypeAnimation({
            text: QUESTIONS_CONST[0].question,
            splitter: "|",
            onFinish: onFinish,
          })}
          speed={50}
        />
      </div>
    </div>
  );
}
