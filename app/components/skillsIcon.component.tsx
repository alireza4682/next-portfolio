import Image from "next/image";

const SkillsIcon = ({ svgIcon }: { svgIcon: string }) => {
  const svgIconAddress = svgIcon.replace(" ", "").toLowerCase();
  return (
    <div
      className="p-2 pr-4 m-1 
                  flex flex-row justify-between min-w-fit w-fit gap-2 items-center
                  rounded-sm bg-primary text-primary-foreground hover:bg-primary/90
                  h-10"
    >
      <Image
        src={`/library/${svgIconAddress}.svg`}
        width={20}
        height={20}
        alt={svgIcon}
      />
      <div className="px-1 text-primary-foreground text-xs">{svgIcon}</div>
    </div>
  );
};

export default SkillsIcon;
