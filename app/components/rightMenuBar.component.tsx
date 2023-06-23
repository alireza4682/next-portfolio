import { useReducer } from "react";
import { Button } from "./ui/button";
import React from "react";

type choices = {
  first: "first";
  second: "second";
  third: "third";
};

interface choiceAction {
  type: choices;
  payload: number;
}

const rightMenuBarReducer = (state: number, action: choiceAction) => {
    const {type,payload} = action
    switch(type){
        case "first"
    }
};

function RightMenuBar() {
  return (
    <div className="flex flex-row items-center justify-center">
      <Button></Button>
      <Button></Button>
      <Button></Button>
    </div>
  );
}

export default RightMenuBar;
