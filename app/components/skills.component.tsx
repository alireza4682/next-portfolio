import SkillsContainer from "./skillsContainer.component";

//TODO need to query based on gategory and select

const mainFront = ["React", "Nextjs", "Redux"];
const Languages = ["TypeScript", "JavaScript", "Python"];
const styling = ["Sass", "Tailwind CSS"];
const ComponentLibraries = [
  "Material UI",
  "Headless UI",
  //  "Radix-UI"
];
const ReactLibraries = ["React Query", "React Router", "Framer"];
const BackEndTech = ["Node.js", "Express.js", "NestJS"];
const BackEndRelated = [
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  // "tRPC",
  "Firebase",
  "Supabase",
  "Postman",
];
const TestingLibraries = [
  "Jest",
  "Testing Library",
  "Playwright",
  "Storybook",
  // "Cypress",
];
const softTools = [
  "Git",
  "Github",
  "Docker",
  // "Jira"
];

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
