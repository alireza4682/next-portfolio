"use client";
import React from "react";
import { useReducer } from "react";
import { Button } from "./ui/button";
import WorkSection from "./workSection.component";
import Skills from "./skills.component";
import { Separator } from "./ui/seperator";
import ThemeSwitch from "./themeChanger";

const choices = {
  first: "first",
  second: "second",
  third: "third",
} as const;

type ObjectType<T> = T[keyof T];

type TActionChoices = ObjectType<typeof choices>;

const rightMenuBarReducer = (
  state: React.ReactElement,
  action: TActionChoices
) => {
  switch (action) {
    case "first":
      return (state = <WorkSection />);
    case "second":
      return (state = <Skills />);
    case "third":
      return (state = <div>wtf</div>);
    default:
      throw new Error(`can't do that: ${action}`);
  }
};

function RightMenuBar() {
  const [state, dispatch] = useReducer(rightMenuBarReducer, <WorkSection />);
  return (
    <div className="mt-20">
      <div className="flex flex-row justify-between items-center pr-2">
        <div className="flex flex-row justify-start gap-1 lg:gap-4 p-2 h-14">
          <Button onClick={() => dispatch("first")} variant="ghost">
            workSection
          </Button>
          <Separator orientation="vertical" />
          <Button onClick={() => dispatch("second")} variant="ghost">
            Skills & Tools
          </Button>
          <Separator orientation="vertical" />
          <Button onClick={() => dispatch("third")} variant="ghost">
            journey
          </Button>
        </div>
        <ThemeSwitch />
      </div>
      <Separator className="my-4" />
      {state}
    </div>
  );
}

export default RightMenuBar;
