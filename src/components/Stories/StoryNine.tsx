import React, { useEffect, useRef, useState } from "react";
import { QUESTIONS_CONST } from "../../constants";
import StoryComponent from "./StoryComponent";

export default function StoryNine() {
  const divRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [changePic, setChangePic] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 500);
    setTimeout(() => setIsShaking(true), 15000);
    setTimeout(() => setIsShaking(false), 20000);
    setTimeout(() => setChangePic(true), 18000);
  }, []);
  return (
    <StoryComponent
      imgUrl={changePic ? `story_9_2.jpg` : `story_9.jpg`}
      imgClass={isShaking ? "shake" : ""}
      question={QUESTIONS_CONST[9]}
      imgChild={
        <div
          ref={divRef}
          className={`absolute z-20 left-0 top-0 w-full h-full ${
            changePic ? "inOutLight" : ""
          }`}
          style={{ animationDelay: "-2s" }}
        >
          {show && (
            <div
              className={`absolute right-64 bg-red-400 ${
                !changePic && "dipRedLaser"
              }`}
              style={{
                right: `${(214 * (divRef.current?.offsetWidth ?? 1)) / 343}px`,
                top: `${(95 * (divRef.current?.offsetWidth ?? 1)) / 343}px`,
              }}
            />
          )}
        </div>
      }
    />
  );
}
