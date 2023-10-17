import Work from "./work.component";

import Freelance2 from "./content/freelance2";
import Zeus from "./content/zues.ir";
import Freelance1 from "./content/freelance1";
import Alvand from "./content/alvand";

let fourthJobLogosNames = ["TypeScript", "React", "Nextjs"];
let thirdJobLogosNames = ["Tailwind CSS"];
let secondJobLogosNames = ["JavaScript"];
let firstJobLogosNames = ["Bootstrap", "CSS"];

const WorkSection = () => {
  return (
    <div className="p-2">
      <div className="flex flex-row gap-x-8 items-center">
        <h1 className="font-bold m-1">Work experience</h1>
        <span className="text-xs text-primary">5+ years of experience</span>
      </div>
      <div className="columns-1 lg:columns-2 gap-8 [&>*]:break-inside-avoid [&>*]:mb-8">
        <Work
          heading={"Freelance"}
          description={"Front-End engineer -- Nov 2022 - Present"}
          content={<Freelance2 />}
          logos={fourthJobLogosNames}
        />
        <Work
          heading="Zeus.ir"
          description="Senior Front-End Developer -- Apr 2021 - Oct 2022"
          content={<Zeus />}
          logos={thirdJobLogosNames}
        />
        <Work
          heading="Freelance"
          description="Front-End Developer -- Mar 2020 - Mar 2021"
          content={<Freelance1 />}
          logos={secondJobLogosNames}
        />
        <Work
          heading="Alvand Payam Mehrgan"
          description="Front-End Developer -- May 2018 - Feb 2020"
          content={<Alvand />}
          logos={firstJobLogosNames}
        />
      </div>
    </div>
  );
};
export default WorkSection;
