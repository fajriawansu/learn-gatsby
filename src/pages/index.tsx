import React from "react";
import type { PageProps } from "gatsby";
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
import { finalDuality } from "../helpers/calculateResult";
import Register from "../components/Register";

const IndexPage: React.FC<PageProps> = () => {
  const { activeStoryIdx, answersLog, lastAnswer, playerInfo } =
    useGlobalStore();
  window.onbeforeunload = function () {
    return "";
  };

  return (
    <Layout noPadding={activeStoryIdx > 11}>
      {/* <button onClick={() => handleSkipAnimation(true)}>
        {noAnimation ? "Skipped" : "Skip Animation"}
      </button> */}
      {activeStoryIdx === 99 && <Register />}
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
      {activeStoryIdx === 12 && (
        <TestResult
          char={finalDuality(answersLog, lastAnswer)}
          playerInfo={playerInfo}
        />
      )}
      <div className="fixed bottom-0 left-0 flex justify-center items-center w-full h-6 text-white bg-opacity-30 bg-black">
        <div>
          developed by:&nbsp;
          <a
            href="https://fajriawan.vercel.app/"
            className="text-yellow-300 underline"
            target="_blank"
          >
            fjrwn.
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
