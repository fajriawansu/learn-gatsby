import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import {
  CharacterKeys,
  CharacterPoints,
  CharacterReportEnum,
  ObservedValue,
  QuestionItem,
} from "../types/type";
import { DICT } from "../dict";
import { useGlobalStore } from "../stores/store";
import { QUESTIONS_CONST } from "../constants";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage: React.FC<PageProps> = () => {
  const { personalityPoints, characterPoints, updatePoint } = useGlobalStore();

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
    <main style={pageStyles}>
      <button onClick={handleCheckPoint}>TRIGGER TEST MODE</button>
      {QUESTIONS_CONST.map((v) => (
        <>
          <div>Q: {v.question}</div>
          <div>
            {" "}
            {v.options.map((data, idx) => (
              <>
                <div
                  style={{ margin: "12px 0" }}
                  onClick={() =>
                    handleSubmitOption(
                      data.personality_points,
                      data.character_points
                    )
                  }
                >
                  {idx + 1}. {data.sentence}
                </div>
              </>
            ))}
          </div>
        </>
      ))}
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
