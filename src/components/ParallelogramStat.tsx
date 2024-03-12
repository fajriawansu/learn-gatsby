import React from "react";

interface Props {
  label: string;
  level: 1 | 2 | 3 | 4 | 5;
}

function Blok({ className }: { className: string }) {
  return <div className={`w-3 h-1 -skew-x-[50deg] ${className}`}></div>;
}

export default function ParallelogramStat({ label, level }: Props) {
  return (
    <div className="flex gap-1 text-sm items-center">
      <div className="w-20">{label}</div>
      <div className="flex gap-1 ml-1">
        {Array.from(Array(5)).map((v, k) => (
          <Blok
            className={`${
              k === 0
                ? "bg-red-500"
                : k === 1
                ? "bg-orange-500"
                : k === 2
                ? "bg-yellow-500"
                : k === 3
                ? "bg-green-400"
                : "bg-green-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
