import RightMenuBar from "./components/rightMenuBar.component";
import Intro from "./components/Intro.component";
export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Intro />
      <div className="col-span-1 lg:col-span-2">
        <RightMenuBar />
      </div>
    </div>
  );
}
