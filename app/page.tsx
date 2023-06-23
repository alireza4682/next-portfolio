import Intro from "./components/Intro.component";
import Skills from "./components/skills.component";
import WorkSection from "./components/workSection.component";
import RightMenuBar from "./components/rightMenuBar.component";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row gap-6">
      <div className="grid grid-col-1 md:grid-cols-3">
        <Intro />
        <div className="col-span-2">
          <RightMenuBar />
        </div>
      </div>
    </main>
  );
}
