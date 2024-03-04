import React from "react";
import { QUESTIONS_CONST } from "../../constants";
import StoryComponent from "./StoryComponent";

export default function StoryTwo() {
  return (
    <StoryComponent
      imgUrl={`../../story_2.jpg`}
      imgChild={
        <div className="flex gap-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-5 dip-animation">
          <div className="border rounded-sm w-3 h-3 mt-20 overflow-hidden flex justify-center items-center floating-animation">
            <img
              src={`../../square_egg.jpg`}
              style={{ transform: "scale(0.8)" }}
            />
          </div>
          <div className="border rounded-sm w-3 h-3 mt-20 overflow-hidden flex justify-center items-center floatingRed">
            <img
              src={`../../square_egg.jpg`}
              style={{ transform: "scale(0.8)" }}
            />
          </div>
          <div className="border rounded-sm w-3 h-3 mt-20 overflow-hidden flex justify-center items-center floatingBlue">
            <img
              src={`../../square_egg.jpg`}
              style={{ transform: "scale(0.8)" }}
            />
          </div>
        </div>
      }
      question={QUESTIONS_CONST[2]}
    />
  );
}
