import SkillsIcon from "./skillsIcon.component";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "./ui/card";

const SkillsContainer = ({
  skills,
  section,
}: {
  skills: string[];
  section: string;
}) => {
  return (
    <Card className="m-2">
      <CardHeader>
        <CardDescription>{section}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="m-1 flex flex-wrap items-center">
          {skills.map((s, _) => {
            return <SkillsIcon svgIcon={s} key={s} />;
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsContainer;
