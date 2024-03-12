import React from "react";
import { QUESTIONS_CONST } from "../../constants";
import StoryComponent from "./StoryComponent";

export default function StoryFour() {
  return (
    <StoryComponent
      imgUrl={`story_4.jpg`}
      imgChild={
        <>
          <div className="absolute z-20 w-1 h-1 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -mt-1 -ml-4" />
          <div className="h-full w-full z-10 bg-darkest absolute left-0 top-0 dip-animation" />
        </>
      }
      question={QUESTIONS_CONST[4]}
    />
  );
}
