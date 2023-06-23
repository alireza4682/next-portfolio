"use client";
import React from "react";
import { useReducer } from "react";
import { Button } from "./ui/button";
import WorkSection from "./workSection.component";

type choices = "first" | "second" | "third";

const rightMenuBarReducer = (state: React.ReactElement, action: choices) => {
  switch (action) {
    case "first":
      return (state = <WorkSection />);
    case "second":
      return (state = <div>yo</div>);
    case "third":
      return (state = <div>wtf</div>);
    default:
      throw new Error(`can't do that: ${action}`);
  }
};

function RightMenuBar() {
  const [state, dispatch] = useReducer(rightMenuBarReducer, <WorkSection />);
  return (
    <div>
      <div className="flex flex-row items-center justify-center">
        <Button onClick={() => dispatch("first")}></Button>
        <Button onClick={() => dispatch("second")}></Button>
        <Button onClick={() => dispatch("third")}></Button>
      </div>
      {state}
    </div>
  );
}

export default RightMenuBar;
