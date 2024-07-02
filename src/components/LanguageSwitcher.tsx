import React from "react";
import { useGlobalStore } from "../stores/store";

interface Props {
  className?: string;
  withInfo?: boolean;
}

export default function LanguageSwitcher({ className, withInfo }: Props) {
  const { language, setLanguage } = useGlobalStore();
  return (
    <div className="absolute right-4 top-12">
      {withInfo && <div className="text-xs text-center">test text in</div>}
      <div
        className={`${className} flex w-16 h-6 rounded-md bg-grayest  p-1 text-sm items-center justify-center cursor-pointer`}
        onClick={() => setLanguage(language === "id" ? "en" : "id")}
      >
        <div
          className={`w-1/2 text-center rounded-md ${
            language === "id" && "bg-yellow-500"
          }`}
        >
          ID
        </div>
        <div
          className={`w-1/2 text-center rounded-md ${
            language === "en" && "bg-yellow-500"
          }`}
        >
          EN
        </div>
      </div>
    </div>
  );
}
