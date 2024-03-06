import React, { useEffect, useRef, useState } from "react";
import { QUESTIONS_CONST } from "../../constants";
import StoryComponent from "./StoryComponent";

export default function StorySix() {
  const divRef = useRef<HTMLDivElement>(null);
  const [isShaking, setIsShaking] = useState(false);
  const [changePic, setChangePic] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsShaking(true), 15000);
    setTimeout(() => setIsShaking(false), 21000);
    setTimeout(() => setChangePic(true), 18000);
  }, []);

  return (
    <StoryComponent
      imgUrl={changePic ? `../../story_6.jpg` : `../../story_6_pre.jpg`}
      imgClass={isShaking ? "shake" : ""}
      imgChild={
        <div ref={divRef}>
          <div
            className={`absolute z-20 left-0 top-0 w-full h-full ${
              changePic ? "inOutLight" : ""
            }`}
            style={{ animationDelay: "-2s" }}
          />
          <div className="absolute z-10 w-1 h-1 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {changePic && (
              <div
                className="rounded-full bg-transparent dipRed -mt-[18px]"
                style={{
                  marginLeft: `${
                    (22 * (divRef.current?.offsetWidth ?? 1)) / 343
                  }px`,
                  marginTop: `-${
                    (22 * (divRef.current?.offsetWidth ?? 1)) / 343
                  }px`,
                }}
              />
            )}
          </div>
          <div className="absolute z-10 w-1 h-1 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {changePic && (
              <div
                className="rounded-full bg-transparent dipRed"
                style={{
                  marginLeft: `${
                    (36 * (divRef.current?.offsetWidth ?? 1)) / 343
                  }px`,
                  marginTop: `-${
                    (26 * (divRef.current?.offsetWidth ?? 1)) / 343
                  }px`,
                }}
              />
            )}
          </div>
        </div>
      }
      question={QUESTIONS_CONST[6]}
    />
  );
}
