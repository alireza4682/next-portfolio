import ContentWork from "./content-work.component";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import WorkIcon from "./workIcon.componetn";

type Twork = {
  heading: string;
  description: string;
  content: React.ReactNode;
  logos: string[];
  className?: string;
};

const Work = (props: Twork) => {
  const { heading, description, content, logos, className } = props;

  return (
    <Card className={`w-auto h-fit ${className}`}>
      <CardHeader>
        <CardTitle>{heading}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="">
        <ContentWork>{content}</ContentWork>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        {logos.map((l) => {
          return <WorkIcon svgIcon={l} key={l} />;
        })}
      </CardFooter>
    </Card>
  );
};
export default Work;
