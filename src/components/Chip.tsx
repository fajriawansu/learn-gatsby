import React from "react";

interface Props {
  label: string;
}

export default function Chip({ label }: Props) {
  return (
    label.length > 0 && (
      <div className="rounded-lg py-1 px-2 bg-gray-100 text-darkest text-sm">
        {label}
      </div>
    )
  );
}
