import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { CharacterKeys, CharacterReportEnum, ObservedValue, QuestionItem } from "../types/type";
import { DICT } from "../dict";
import { useGlobalStore } from "../stores/store";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}


const IndexPage: React.FC<PageProps> = () => {

  const {personalityPoints, updatePoint} = useGlobalStore();

  const [observed, setObserved] = React.useState<ObservedValue>({
    creativity: 20,
    thoroughness: 20,
    luck: 20,
    anxiety: 20,
    courage: 20,
    fortitude: 20,
    selfishness: 20,
    honesty: 20
  });

  const [questions, setQuestions] = React.useState<QuestionItem[]>([
    {
      question: "A",
      options: [
        {
          sentence: "Option 1",
          personality_points: {
            courage: 1,
            thoroughness: 2
          },
          character_points: {}
        }
      ]
    }
  ]);

  const handleCheckPoint = () => {
    updatePoint(observed, {});
    let value: ObservedValue;
    questions.forEach(v => {

    })
    let data: CharacterKeys = "chance_maker";
    CharacterReportEnum[data]

    let a: keyof CharacterKeys;
    // console.log(CharacterReportEnum[data]);
  }

  return (
    <main style={pageStyles}>
      <button onClick={handleCheckPoint}>TRIGGER TEST MODE</button>
      {personalityPoints.creativity}
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
