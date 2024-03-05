import React, { useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import { CharacterPoints, ObservedValue } from "../types/type";
import { useGlobalStore } from "../stores/store";
import { Layout } from "../components/Layout";
import Prologue from "../components/Stories/Prologue";
import StoryOne from "../components/Stories/StoryOne";
import StoryTwo from "../components/Stories/StoryTwo";
import StoryThree from "../components/Stories/StoryThree";
import StoryFour from "../components/Stories/StoryFour";
import StoryFive from "../components/Stories/StoryFive";
import StorySix from "../components/Stories/StorySix";

const IndexPage: React.FC<PageProps> = () => {
  const { personalityPoints, characterPoints, updatePoint, activeStoryIdx } =
    useGlobalStore();

  const handleCheckPoint = () => {
    console.log({ personalityPoints, characterPoints });
  };

  const handleSubmitOption = (
    persona: ObservedValue,
    char: CharacterPoints
  ) => {
    updatePoint(persona, char);
  };

  return (
    <Layout>
      {activeStoryIdx === 0 && <Prologue />}
      {activeStoryIdx === 1 && <StoryOne />}
      {activeStoryIdx === 2 && <StoryTwo />}
      {activeStoryIdx === 3 && <StoryThree />}
      {activeStoryIdx === 4 && <StoryFour />}
      {activeStoryIdx === 5 && <StoryFive />}
      {activeStoryIdx === 6 && <StorySix />}
    </Layout>
  );
};

export default IndexPage;
