import SkillsIcon from "./skillsIcon.component";

const SkillsContainer = ({
  skill,
  section,
}: {
  skill: string[];
  section: string;
}) => {
  return (
    <div className="m-1 bg-card p-1 rounded-xl border-4 border-border">
      <h1 className="font-semibold m-1">{section} :</h1>
      <div className="m-1 flex flex-wrap items-center justify-center">
        {skill.map((s, _) => {
          return <SkillsIcon svgIcon={s} />;
        })}
      </div>
    </div>
  );
};

export default SkillsContainer;
