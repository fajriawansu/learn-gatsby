import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { ObservedValue, QuestionItem } from "../types/type";

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
    kecemburuan: 20,
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
  }

  return (
    <main style={pageStyles}>
      <button onClick={handleCheckPoint}>TRIGGER TEST MODE</button>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
