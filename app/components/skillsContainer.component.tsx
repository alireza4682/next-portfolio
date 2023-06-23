import SkillsIcon from "./skillsIcon.component";
import { Card,CardHeader,CardTitle,CardContent } from "./ui/card";

const SkillsContainer = ({
  skills,
  section,
}: {
  skills: string[];
  section: string;
}) => {
  return (
    <Card className="w-max">
      <CardHeader><CardTitle>{section}</CardTitle></CardHeader>
      <CardContent>
      <div className="m-1 flex flex-wrap items-center justify-center">
        {skills.map((s, _) => {
          return <SkillsIcon svgIcon={s} key={s} />;
        })}
      </div>
</CardContent>
</Card>
  );
};

export default SkillsContainer;
