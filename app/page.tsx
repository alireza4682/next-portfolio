import Intro from "./components/Intro.component";
import Skills from "./components/skills.component";
import WorkSection from "./components/workSection.component";

export default function Home() {
  return (
    <main className="flex flex-row gap-6">
      <Intro />
      <div>
        <Skills />
        <WorkSection />
      </div>
    </main>
  );
}
