import SkillsContainer from "./skillsContainer.component";

const toolsSkill = ["typescript", "nextjs", "redux", "tailwindcss", "sass"];

const Skills = () => {
  return (
    <div>
      <h1 className="text-gray-500 text-lg">My Skills :</h1>
      <SkillsContainer skill={toolsSkill} section="tools" />
    </div>
  );
};
export default Skills;
