import Work from "./work.component";

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
    <div className="m-1 p-1 border-4 border-border rounded-lg bg-card">
      <div className="flex flex-row gap-8">
        <h1 className="font-bold">Work experience</h1>
        <div> 5+ years of experience</div>
      </div>
      <Work heading={"hi"} content={freelancer} logos={fourthJobLogosNames} />
      {/* <Work heading={"bye"} content={frontendDeveloper} logos={["3", "4"]} /> */}
    </div>
  );
};
export default WorkSection;
