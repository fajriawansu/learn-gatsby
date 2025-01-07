import React, { useState } from "react";
import { PlayerInfoType } from "../types/type";
import { useGlobalStore } from "../stores/store";
import { TypeAnimation } from "react-type-animation";
import { splitStringToTypeAnimation } from "../helpers/splitStringToTypeAnimation";
import LanguageSwitcher from "./LanguageSwitcher";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";

export default function Register() {
  const { setActiveStoryIdx, setPlayerInfo, language } = useGlobalStore();
  const [value, setValue] = useState<PlayerInfoType>({
    name: "",
    gender: undefined,
  });

  const handleSubmit = () => {
    setPlayerInfo(value);
    setActiveStoryIdx(0);
    trackCustomEvent({
      action: "click",
      category: "Gender Select Start",
      label: `${value.gender}`
    })
  };

  return (
    <div className="h-screen w-full flex justify-center items-center flex-col gap-2 relative">
      <h1 className="text-3xl">16Coolities</h1>
      <LanguageSwitcher withInfo />
      <TypeAnimation
        sequence={splitStringToTypeAnimation({
          text: "everyone has a hidden personality, ||| and that`s cool",
          splitter: "|",
          onFinish: () => {},
        })}
      />
      <div className="text-darkest flex flex-col items-center">
        <input
          maxLength={10}
          name="name"
          type="text"
          placeholder="your name"
          className="px-2 py-1"
          onChange={(e) =>
            setValue({
              ...value,
              name: e.target.value,
            })
          }
        />
        <div className="flex gap-4 mt-2">
          <div>
            <input
              name="gender"
              type="radio"
              onClick={() => setValue({ ...value, gender: "boy" })}
            />
            <label htmlFor="gender" className="text-white ml-1">
              {language === "id" ? "Laki" : "Male"}
            </label>
          </div>
          <div>
            <input
              name="gender"
              type="radio"
              onClick={() => setValue({ ...value, gender: "girl" })}
            />
            <label htmlFor="gender" className="text-white ml-1">
              {language === "id" ? "Perempuan" : "Female"}
            </label>
          </div>
        </div>
        <button
          className="py-1 px-3 mt-2 border border-white text-md rounded-md text-white disabled:opacity-25"
          disabled={!value?.gender || value.name.length < 2}
          onClick={handleSubmit}
        >
          {language === "id" ? "Mulai" : "Start"}
        </button>
      </div>
    </div>
  );
}
