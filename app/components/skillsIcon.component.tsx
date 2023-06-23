import Image from "next/image";

const SkillsIcon = ({ svgIcon }: { svgIcon: string }) => {
  return (
    <div
      className="p-2 pr-4 m-1 
                  flex flex-row justify-between min-w-fit w-fit gap-2 items-center
                  rounded-sm bg-primary text-primary-foreground hover:bg-primary/90
                  h-10"
    >
      <Image
        src={`/library/${svgIcon}.svg`}
        width={24}
        height={24}
        alt={svgIcon}
      />
      <div className="px-1 text-blue-800">{svgIcon}</div>
    </div>
  );
};

export default SkillsIcon;
