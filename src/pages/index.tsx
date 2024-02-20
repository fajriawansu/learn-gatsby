import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { CharacterKeys, CharacterReport, ObservedValue, QuestionItem } from "../types/type";
import { DICT } from "../dict";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}


const IndexPage: React.FC<PageProps> = () => {

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
    let value: ObservedValue;
    questions.forEach(v => {

    })
    let data: CharacterKeys = "chance_maker";
    CharacterReport[data]

    let a: keyof CharacterKeys;
    console.log(CharacterReport[data]);
  }

  return (
    <main style={pageStyles}>
      <button onClick={handleCheckPoint}>TRIGGER TEST MODE</button>
      {DICT.q1.id}
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
