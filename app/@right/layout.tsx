"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import ThemeSwitch from "../components/themeChanger";

export default function RightLayout({
  work,
  skills,
}: {
  work: React.ReactNode;
  skills: React.ReactNode;
}) {
  const choices = {
    first: work,
    second: skills,
  } as const;

  const sectionState = (state: keyof typeof choices) => {
    return <div>{choices[state]}</div>;
  };

  const [section, setSection] = useState<keyof typeof choices>("first");

  return (
    <div className="mt-20">
      <div className="flex flex-row justify-between items-center pr-2">
        <div className="flex flex-row justify-start gap-1 lg:gap-4 p-2 h-14">
          <Button onClick={() => setSection("first")} variant="ghost">
            Work
          </Button>
          <Separator orientation="vertical" />
          <Button onClick={() => setSection("second")} variant="ghost">
            Skills
          </Button>
          <Separator orientation="vertical" />
        </div>
        <ThemeSwitch />
      </div>
      <Separator className="my-4" />
      {sectionState(section)}
    </div>
  );
}
