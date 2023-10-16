import SkillsIcon from "./skillsIcon.component";
import { Card, CardContent, CardDescription } from "./ui/card";

const SkillsContainer = ({
  skills,
  section,
}: {
  skills: string[];
  section: string;
}) => {
  return (
    <Card className="m-2 h-fit border-none bg-accent">
      <CardDescription className="m-2 ml-8 mt-4">{section}</CardDescription>
      <CardContent>
        <div className="m-1 flex flex-wrap">
          {skills.map((s, _) => {
            return <SkillsIcon svgIcon={s} key={s} />;
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsContainer;
