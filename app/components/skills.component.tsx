import SkillsContainer from "./skillsContainer.component";

const toolsSkill = ["TypeScript", "NextJs", "Redux", "Tailwindcss", "SASS"];

const Skills = () => {
  return (
    <div>
      <h1 className="text-lg">My Skills :</h1>
      <SkillsContainer skills={toolsSkill} section="tools" />
    </div>
  );
};
export default Skills;
