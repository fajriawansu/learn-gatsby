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
    kreativitas: 20,
    ketelitian: 20,
    keberuntungan: 20,
    kecemasan: 20,
    keberanian: 20,
    ketabahan: 20,
    keegoisan: 20,
    kejujuran: 20
  });

  const [questions, setQuestions] = React.useState<QuestionItem[]>([
    {
      question: "A",
      options: [
        {
          sentence: "Option 1",
          points: {
            keberanian: 1,
            ketabahan: 2
          }
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
