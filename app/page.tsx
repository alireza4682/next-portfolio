import WorkSection from "./components/workSection.component";
import Intro from "./components/Intro.component";
export default function Page() {
  return (
    <div className="grid grid-col-1 md:grid-col-2 lg:grid-col-3">
      <Intro />
      <div className="col-span-1 lg:col-span-2">
        <WorkSection />
      </div>
    </div>
  );
}
