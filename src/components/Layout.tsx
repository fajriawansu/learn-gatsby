import React, { ReactNode } from "react";

interface LayoutI {
  children: ReactNode;
  noPadding?: boolean;
}

export function Layout({ children, noPadding }: LayoutI) {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen">
      <div
        className={`max-w-[450px] w-full min-h-screen bg-darkest text-white font-mystery text-base ${
          noPadding ? "" : "p-4"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
