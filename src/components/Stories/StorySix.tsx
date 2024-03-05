import React from "react";
import { QUESTIONS_CONST } from "../../constants";
import StoryComponent from "./StoryComponent";

export default function StorySix() {
  return (
    <StoryComponent
      imgUrl={`../../story_6.jpg`}
      imgChild={
        <>
          <div className="absolute z-20 w-1 h-1 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -mt-1 -ml-4">
            <div className="rounded-full h-0.5 w-0.5 bg-transparent dipRed ml-[38px] -mt-[18px]" />
          </div>
          <div className="absolute z-20 w-1 h-1 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -mt-1 -ml-4">
            <div className="rounded-full h-0.5 w-0.5 bg-transparent dipRed ml-[52px] -mt-[24px]" />
          </div>
        </>
      }
      question={QUESTIONS_CONST[6]}
    />
  );
}
