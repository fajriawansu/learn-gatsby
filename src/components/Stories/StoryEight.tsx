import React from "react";
import { QUESTIONS_CONST } from "../../constants";
import StoryComponent from "./StoryComponent";

export default function StoryEight() {
  return (
    <StoryComponent
      imgUrl={`story_8.jpg`}
      imgClass="redFilter"
      question={QUESTIONS_CONST[8]}
    />
  );
}
