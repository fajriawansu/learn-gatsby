import React, { useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import {
  CharacterPoints,
  CharacterReportEnum,
  ObservedValue,
} from "../types/type";
import { useGlobalStore } from "../stores/store";
import { Layout } from "../components/Layout";
import Prologue from "../components/Stories/Prologue";
import StoryOne from "../components/Stories/StoryOne";
import StoryTwo from "../components/Stories/StoryTwo";
import StoryThree from "../components/Stories/StoryThree";
import StoryFour from "../components/Stories/StoryFour";
import StoryFive from "../components/Stories/StoryFive";
import StorySix from "../components/Stories/StorySix";
import StorySeven from "../components/Stories/StorySeven";
import StoryEight from "../components/Stories/StoryEight";
import StoryNine from "../components/Stories/StoryNine";
import StoryTen from "../components/Stories/StoryTen";
import Epilogue from "../components/Stories/Epilogue";
import TestResult from "../components/TestResult";

const IndexPage: React.FC<PageProps> = () => {
  const {
    personalityPoints,
    characterPoints,
    updatePoint,
    activeStoryIdx,
    handleSkipAnimation,
    noAnimation,
  } = useGlobalStore();

  const handleSubmitOption = (
    persona: ObservedValue,
    char: CharacterPoints
  ) => {
    updatePoint(persona, char);
  };

  return (
    <Layout noPadding={activeStoryIdx > 11}>
      {/* <button onClick={() => handleSkipAnimation(true)}>
        {noAnimation ? "Skipped" : "Skip Animation"}
      </button> */}
      {activeStoryIdx === 0 && <Prologue />}
      {activeStoryIdx === 1 && <StoryOne />}
      {activeStoryIdx === 2 && <StoryTwo />}
      {activeStoryIdx === 3 && <StoryThree />}
      {activeStoryIdx === 4 && <StoryFour />}
      {activeStoryIdx === 5 && <StoryFive />}
      {activeStoryIdx === 6 && <StorySix />}
      {activeStoryIdx === 7 && <StorySeven />}
      {activeStoryIdx === 8 && <StoryEight />}
      {activeStoryIdx === 9 && <StoryNine />}
      {activeStoryIdx === 10 && <StoryTen />}
      {activeStoryIdx === 11 && <Epilogue />}
      {activeStoryIdx > 11 && (
        <TestResult char={CharacterReportEnum.chance_maker} gender="girl" />
      )}
    </Layout>
  );
};

export default IndexPage;
