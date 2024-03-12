import React, { useEffect, useState } from "react";
import { QUESTIONS_CONST } from "../../constants";
import StoryComponent from "./StoryComponent";

export default function StoryFive() {
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsShaking(true), 15000);
  }, []);

  return (
    <StoryComponent
      imgUrl={`story_5.jpg`}
      imgClass={`blueFilter ${isShaking ? "shake" : ""}`}
      imgChild={
        <>
          <div className="absolute z-20 w-1 h-1 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -mt-1 -ml-4" />
        </>
      }
      question={QUESTIONS_CONST[5]}
    />
  );
}
