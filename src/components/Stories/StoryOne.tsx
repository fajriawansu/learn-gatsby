import React from "react";
import StoryComponent from "./StoryComponent";
import { getQuestion } from "../../constants";

export default function StoryOne() {
  return (
    <StoryComponent
      imgUrl={`story_1.jpg`}
      imgChild={
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
      }
      questionIdx={1}
    />
  );
}
