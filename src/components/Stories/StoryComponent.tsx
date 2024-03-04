import React, { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { splitStringToTypeAnimation } from "../../helpers/splitStringToTypeAnimation";
import removeTextSplitter from "../../helpers/removeTextSplitter";
import { StoryComponentProps } from "./Story.type";
import { useGlobalStore } from "../../stores/store";
export default function StoryComponent({
  imgUrl,
  imgChild,
  question,
}: StoryComponentProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const { setActiveStoryIdx } = useGlobalStore();
  const [visible, setVisible] = useState(true);
  const [skipAnimation, setSkipAnimation] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [checkedIdx, setCheckedIdx] = useState<number>();

  useEffect(() => {
    if (!visible) {
      setTimeout(() => {
        setActiveStoryIdx(question.number);
      }, 1000);
    }
  }, [visible]);

  useEffect(() => {
    const interval = setInterval(() => {
      textRef.current?.scrollIntoView();
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col gap-8">
        <div
          className={`w-full h-auto rounded-md overflow-hidden relative image-previewer ${
            visible ? "fadeInLeft" : "fadeOutRight"
          }`}
        >
          <img src={imgUrl} />
          {imgChild}
        </div>
        <div className={`${visible ? "" : "opacityOut"}`}>
          {!showOptions && !!question?.options && (
            <>
              <div className="p-2 max-h-[45vh] overflow-auto">
                <div className="rounded-md">
                  {skipAnimation ? (
                    <>{removeTextSplitter(question.question)}</>
                  ) : (
                    <TypeAnimation
                      sequence={splitStringToTypeAnimation({
                        text: question.question,
                        splitter: "|",
                        onFinish: () => setSkipAnimation(true),
                      })}
                      speed={60}
                    />
                  )}
                </div>
                <div ref={skipAnimation ? null : textRef} />
              </div>
              {skipAnimation && (
                <div
                  className="flex justify-end mt-1 text-md dip-animation cursor-pointer font-mono"
                  style={{ animationDuration: "1s" }}
                  onClick={() => setShowOptions(true)}
                >
                  {">>>"}
                </div>
              )}
            </>
          )}
          {showOptions && !!question?.options && (
            <div className="p-2">
              <div>
                {question.options.map((v, k) => (
                  <div
                    key={`q1-${k}`}
                    className="flex items-start gap-2"
                    onClick={() => {
                      setCheckedIdx(k + 1);
                    }}
                  >
                    <input
                      type="radio"
                      name="options"
                      className="mt-1.5"
                      checked={k + 1 === checkedIdx}
                      onChange={() => {}}
                    />
                    <div
                      className={`${
                        checkedIdx === k + 1 ? "text-yellow-200" : ""
                      }`}
                    >
                      {v.sentence}
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="flex text-md dip-animation justify-between mt-1"
                style={{ animationDuration: "1s" }}
              >
                <div
                  className="cursor-pointer font-mono"
                  onClick={() => {
                    setShowOptions(false);
                    setSkipAnimation(true);
                  }}
                >
                  {"<<<"}
                </div>
                {!!checkedIdx && (
                  <div
                    className="text-xs cursor-pointer"
                    style={{ animationDuration: "1s" }}
                    onClick={() => setVisible(false)}
                  >
                    NEXT {">>"}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
