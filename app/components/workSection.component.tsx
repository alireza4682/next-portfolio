import Work from "./work.component";

import Freelance2 from "./content/freelance2";

const freelancer = [
  "used React's best practices, code splitting and render optimization to make our customer's websites load 30% faster and 15% smoother.",
  "with writing unit tests, using storybook.js and migrating from redux to redux toolkit, median time to design and develop components was improved by 20%.",
];

// const frontendDeveloper = [
//   "worked with 20+ customers to improve their website's responsiveness and load time.",
// ];
let fourthJobLogosNames = ["TypeScript", "React", "NextJs"];

const WorkSection = () => {
  return (
    <div className="m-2 p-2 ">
      <div className="flex flex-row gap-x-8 items-center">
        <h1 className="font-bold m-1">Work experience</h1>
        <span className="text-xs text-primary">5+ years of experience</span>
      </div>
      <div>
        <Work
          heading={"hi"}
          content={<Freelance2 />}
          logos={fourthJobLogosNames}
        />
      </div>
    </div>
  );
};
export default WorkSection;
