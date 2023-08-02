"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import WorkSection from "./workSection.component";
import Skills from "./skills.component";
import { Separator } from "./ui/seperator";
import ThemeSwitch from "./themeChanger";

const choices = {
  first: <WorkSection />,
  second: <Skills />,
  third: <div>wtf</div>,
} as const;

const sectionState = (state: keyof typeof choices) => {
  return <div>{choices[state]}</div>;
};

function RightMenuBar() {
  const [section, setSection] = useState<keyof typeof choices>("first");
  return (
    <div className="mt-20">
      <div className="flex flex-row justify-between items-center pr-2">
        <div className="flex flex-row justify-start gap-1 lg:gap-4 p-2 h-14">
          <Button onClick={() => setSection("first")} variant="ghost">
            workSection
          </Button>
          <Separator orientation="vertical" />
          <Button onClick={() => setSection("second")} variant="ghost">
            Skills & Tools
          </Button>
          <Separator orientation="vertical" />
          <Button onClick={() => setSection("third")} variant="ghost">
            journey
          </Button>
        </div>
        <ThemeSwitch />
      </div>
      <Separator className="my-4" />
      {sectionState(section)}
    </div>
  );
}

export default RightMenuBar;
