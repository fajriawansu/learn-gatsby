import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { CharacterPoints, ObservedValue } from "../types/type";
import { useGlobalStore } from "../stores/store";
import { QUESTIONS_CONST } from "../constants";
import { DICT } from "../dict";
import ImagePreviewer from "../components/ImagePreviewer";
import { Layout } from "../components/Layout";

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
    <Layout>
      <ImagePreviewer />
    </Layout>
  );
};

export default IndexPage;
