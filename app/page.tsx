import Intro from "./components/Intro.component";
import Skills from "./components/skills.component";

export default function Home() {
  return (
    <main className="flex flex-row gap-6">
      <Intro />
      <Skills />
    </main>
  );
}
