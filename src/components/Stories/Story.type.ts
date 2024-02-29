export interface StoryProps {
  onFinish: () => void;
}

export type StoryPhase = "narrate" | "endNarrate" | "showOptions" | "finish";
