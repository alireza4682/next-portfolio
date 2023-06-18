import Work from "./work.component";

import Freelance2 from "./content/freelance2";

let fourthJobLogosNames = ["TypeScript", "React", "NextJs"];

const WorkSection = () => {
  return (
    <div className="m-2 p-2 ">
      <div className="flex flex-row gap-x-8 items-center">
        <h1 className="font-bold m-1">Work experience</h1>
        <span className="text-xs text-primary">5+ years of experience</span>
      </div>
      <div className="grid grid-col-2 gap-8">
        <Work
          heading={"hi"}
          content={<Freelance2 />}
          logos={fourthJobLogosNames}
        />
        <Work
          heading="bye"
          content={<Freelance2 />}
          logos={fourthJobLogosNames}
        />
      </div>
    </div>
  );
};
export default WorkSection;
