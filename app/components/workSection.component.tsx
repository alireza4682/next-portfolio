import Work from "./work.component";

import Freelance2 from "./content/freelance2";
import Zeus from "./content/zues.ir";
import Freelance1 from "./content/freelance1";
import Alvand from "./content/alvand";

let fourthJobLogosNames = ["TypeScript", "React", "NextJs"];
let thirdJobLogosNames = ["TailwindCSS"];
let secondJobLogosNames = ["JavaScript"];
let firstJobLogosNames = ["Bootstrap", "CSS"];

const WorkSection = () => {
  return (
    <div className="m-2 p-2 ">
      <div className="flex flex-row gap-x-8 items-center">
        <h1 className="font-bold m-1">Work experience</h1>
        <span className="text-xs text-primary">5+ years of experience</span>
      </div>
      <div className="grid grid-col-2 gap-8">
        <Work
          heading={"Freelance"}
          description={"Front-End engineer"}
          content={<Freelance2 />}
          logos={fourthJobLogosNames}
        />
        <Work
          heading="Zeus.ir"
          description="Senior Front-End Developer"
          content={<Zeus />}
          logos={thirdJobLogosNames}
        />
        <Work
          heading="Freelance"
          description="Front-End Developer"
          content={<Freelance1 />}
          logos={secondJobLogosNames}
        />
        <Work
          heading="Alvand Payam Mehrgan"
          description="Front-End Developer"
          content={<Alvand />}
          logos={firstJobLogosNames}
        />
      </div>
    </div>
  );
};
export default WorkSection;
