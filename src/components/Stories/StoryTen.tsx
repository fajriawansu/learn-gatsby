import React from "react";
import { QUESTIONS_CONST } from "../../constants";
import StoryComponent from "./StoryComponent";

export default function StoryTen() {
  return (
    <StoryComponent
      imgUrl={`story_1.jpg`}
      imgChild={
        <div>
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
          <div className="flex gap-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -mt-4 items-center dip-animation">
            <div>Exit</div>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -ml-28 text-center text-xs mt-4">
            <img
              className="object-cover w-[26px] h-[44px]"
              src={`../../toilet_door.jpg`}
              style={{ objectPosition: "53% 0" }}
            />
          </div>
        </div>
      }
      question={QUESTIONS_CONST[10]}
    />
  );
}
