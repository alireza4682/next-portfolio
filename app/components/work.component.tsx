import WorkIcon from "./workIcon.componetn";
import Spotlight from "./spotlight.component";

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
    <Spotlight>
      <div className={`${className}`}>
        <h1 className="text-2xl font-semibold">{heading}</h1>
        <h3 className="text-sm mb-4">{description}</h3>
        <div className="mb-4">{content}</div>
        <div className="flex flex-wrap gap-2">
          {logos.map((l) => {
            return <WorkIcon svgIcon={l} key={l} />;
          })}
        </div>
      </div>
    </Spotlight>
  );
};

export default Work;
