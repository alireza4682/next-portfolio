"use client";
import React from "react";
import { useReducer } from "react";
import { Button } from "./ui/button";
import WorkSection from "./workSection.component";
import Skills from "./skills.component";

type choices = "first" | "second" | "third";

const rightMenuBarReducer = (state: React.ReactElement, action: choices) => {
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
    <div className="w-full">
      <div className="flex flex-row items-center justify-center gap-8">
        <Button onClick={() => dispatch("first")}>workSection</Button>
        <Button onClick={() => dispatch("second")}>skills</Button>
        <Button onClick={() => dispatch("third")}>journey</Button>
      </div>
      {state}
    </div>
  );
}

export default RightMenuBar;
