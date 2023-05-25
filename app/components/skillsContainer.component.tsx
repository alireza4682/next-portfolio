import SkillsIcon from "./skillsIcon.component";

const SkillsContainer = () => {
  return (
    <div className="m-1 bg-yellow-200 p-1 rounded-xl">
      <h1 className="font-semibold m-1">tools :</h1>
      <div className="m-1 flex flex-wrap items-center justify-center">
        <SkillsIcon svgIcon={"typescript"} name={"typescript"} />
        <SkillsIcon svgIcon={"react"} name={"react"} />
        <SkillsIcon svgIcon={"javascript"} name={"javascript"} />
      </div>
    </div>
  );
};

export default SkillsContainer;
