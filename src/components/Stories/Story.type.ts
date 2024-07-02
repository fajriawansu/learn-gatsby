import { ReactNode } from "react";
import { QuestionItem } from "../../types/type";

export interface StoryComponentProps {
  imgUrl: string;
  imgChild?: ReactNode;
  imgClass?: string;
  questionIdx: number;
}
