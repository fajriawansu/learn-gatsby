import React, { useState } from "react";
import Prologue from "./Stories/Prologue";
import StoryOne from "./Stories/StoryOne";

export default function ImagePreviewer() {
  const [showNext, setShowNext] = useState(false);

  return (
    <div>
      {/* <Prologue onFinish={() => setShowNext(true)} /> */}
      <StoryOne onFinish={() => setShowNext(true)} />
      <div className="flex justify-end mx-4">
        {showNext && (
          <div
            className="text-xs dip-animation cursor-pointer"
            style={{ animationDuration: "1s" }}
          >
            NEXT {">>"}
          </div>
        )}
      </div>
    </div>
  );
}
