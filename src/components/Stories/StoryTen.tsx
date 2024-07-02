import React, { useMemo } from "react";
import StoryComponent from "./StoryComponent";
import { useGlobalStore } from "../../stores/store";

export default function StoryTen() {
  const { answersLog } = useGlobalStore();

  const exitComp = useMemo(() => {
    const exitPosition: string =
      answersLog[0] === 0 ? "-48px" : answersLog[0] === 2 ? "+48px" : "";
    return (
      <div
        className={`flex gap-2 absolute left-[calc(50%${exitPosition})] top-1/2 -translate-x-1/2 -translate-y-1/2 -mt-4 items-center dip-animation`}
      >
        <div>Exit</div>
      </div>
    );
  }, [answersLog]);

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
            <div className="rounded-full w-10 h-10 overflow-hidden flex justify-center items-center floating-animation relative">
              <img
                src={`../../circle_chalk.jpg`}
                style={{ transform: "scale(2)" }}
              />
            </div>
          </div>
          {exitComp}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -ml-28 text-center text-xs mt-4">
            <img
              className="object-cover w-[26px] h-[44px]"
              src={`../../toilet_door.jpg`}
              style={{ objectPosition: "53% 0" }}
            />
          </div>
        </div>
      }
      questionIdx={10}
    />
  );
}
