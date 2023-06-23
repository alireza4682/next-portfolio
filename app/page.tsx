import Intro from "./components/Intro.component";
import Skills from "./components/skills.component";
import WorkSection from "./components/workSection.component";
import RightMenuBar from "./components/rightMenuBar.component";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row gap-6">
      <div className="flex flex-row">
        <Intro />
        <RightMenuBar />
      </div>
    </main>
  );
}
