import Intro from "./components/Intro.component";
import Skills from "./components/skills.component";
import WorkSection from "./components/workSection.component";
import IntroSection from "./introSection/page";
import RightPage from "./rightPage/page";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row gap-6">
      <div className="flex flex-row">
        <IntroSection />
        <RightPage />
      </div>
    </main>
  );
}
