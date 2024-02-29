import React, { ReactNode } from "react";

interface LayoutI {
  children: ReactNode;
}

export function Layout({ children }: LayoutI) {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-[450px] w-full min-h-screen bg-darkest text-white font-mystery text-base p-4">
        {children}
      </div>
    </div>
  );
}
