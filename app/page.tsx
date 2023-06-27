import RightMenuBar from "./components/rightMenuBar.component";
import Intro from "./components/Intro.component";
export default function Page() {
  return (
    <div className="grid grid-col-3">
      <Intro />
      <div className="col-span-2">
        <RightMenuBar />
      </div>
    </div>
  );
}
