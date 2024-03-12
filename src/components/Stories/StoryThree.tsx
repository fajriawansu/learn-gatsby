import React from "react";
import { QUESTIONS_CONST } from "../../constants";
import StoryComponent from "./StoryComponent";

export default function StoryThree() {
  return (
    <StoryComponent
      imgUrl={`story_3.jpg`}
      imgChild={
        <div className="h-full w-full z-10 bg-darkest absolute left-0 top-0 opacity-20" />
      }
      question={QUESTIONS_CONST[3]}
    />
  );
}
