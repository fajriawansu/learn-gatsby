import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { splitStringToTypeAnimation } from "../../helpers/splitStringToTypeAnimation";
import { useGlobalStore } from "../../stores/store";
import removeTextSplitter from "../../helpers/removeTextSplitter";
import { getQuestion } from "../../constants";

export default function Epilogue() {
  const { setActiveStoryIdx, noAnimation, language } = useGlobalStore();
  const [showNext, setShowNext] = useState(noAnimation);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (!visible) {
      setTimeout(() => {
        setActiveStoryIdx(12);
      }, 800);
    }
  }, [visible]);
  return (
    <div className="flex flex-col gap-8 font-mono text-sm">
      <div
        className={`w-full h-auto rounded-md overflow-hidden relative image-previewer ${
          visible ? "fadeInLeft" : "fadeOutRight"
        }`}
      >
        <div className="relative w-full h-full opacityIn">
          <img src={`../../epilogue.jpg`} />
        </div>
      </div>
      <div className={`${visible ? "" : "opacityOut"}`}>
        <div className="p-2 rounded-md">
          {noAnimation ? (
            <div
              style={{
                whiteSpace: "pre-line",
              }}
              dangerouslySetInnerHTML={{
                __html: removeTextSplitter(getQuestion("id")[11].question),
              }}
            />
          ) : (
            <TypeAnimation
              sequence={splitStringToTypeAnimation({
                text: getQuestion(language)[11].question,
                splitter: "|",
                onFinish: () => setShowNext(true),
              })}
              speed={70}
            />
          )}
        </div>
        {showNext && (
          <div className="flex justify-end">
            <div
              className="text-xs dip-animation cursor-pointer"
              style={{ animationDuration: "1s" }}
              onClick={() => setVisible(false)}
            >
              See Your Duality {">>"}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
