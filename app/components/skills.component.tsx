import SkillsContainer from "./skillsContainer.component";

const mainFront = ["React", "NextJs", "Redux"];
const Languages = ["TypeScript", "JavaScript", "Python"];
const styling = ["SASS", "Tailwindcss"];
const ComponentLibraries = [
  "Material UI",
  "Headless UI",
  "DaisyUI",
  "Radix-UI",
];
const ReactLibraries = ["React Query", "React Router", "Framer"];
const BackEndTech = ["Nodejs", "ExpressJs", "NestJs"];
const BackEndRelated = [
  "GraphQl",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "tRPC",
  "Firebase",
  "supabase",
  "Postman",
];
const TestingLibraries = ["Jest", "Testing Library", "Playwright", "storybook"];
const softTools = ["git", "github", "docker", "Jira"];

const Skills = () => {
  return (
    <div className="p-10">
      <h1 className="text-lg">My Skills :</h1>
      <div className="flex flex-wrap">
        <SkillsContainer skills={mainFront} section="Main Front-End Tech" />
        <SkillsContainer skills={Languages} section="Programing Languages" />
        <SkillsContainer skills={styling} section="Styling" />
        <SkillsContainer
          skills={ComponentLibraries}
          section="Component Libraries"
        />
        <SkillsContainer skills={ReactLibraries} section="React Libraries" />
        <SkillsContainer skills={BackEndTech} section="Back-End Tech" />
        <SkillsContainer skills={BackEndRelated} section="Back-End Related" />
        <SkillsContainer
          skills={TestingLibraries}
          section="Testing Libraries"
        />
        <SkillsContainer skills={softTools} section="Soft Tools" />
      </div>
    </div>
  );
};
export default Skills;
