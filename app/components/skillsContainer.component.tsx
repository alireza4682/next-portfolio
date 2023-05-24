import SkillsIcon from "./skillsIcon.component";

import typescriptLogo from "../assets/typescript-icon.svg";
import reactLogo from "../assets/react.svg";
import javascript from "../assets/javascript.svg";

const SkillsContainer = () => {
  return (
    <div className="m-1 bg-yellow-200 p-1 rounded-xl">
      <h1 className="font-semibold m-1">tools :</h1>
      <div className="m-1 flex flex-wrap items-center justify-center">
        <SkillsIcon svgIcon={typescriptLogo} name={"typescript"} />
        <SkillsIcon svgIcon={reactLogo} name={"react"} />
        <SkillsIcon svgIcon={javascript} name={"javascript"} />
      </div>
    </div>
  );
};

export default SkillsContainer;
