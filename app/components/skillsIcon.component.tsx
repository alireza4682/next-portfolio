import Image from "next/image";
import getSvg from "../api/getSvg.service";

const SkillsIcon = async ({ svgIcon }: { svgIcon: string }) => {
  const { route: svgIconAddress } = await getSvg(svgIcon);
  return (
    <div
      className="p-2 pr-4 m-1 
                  flex flex-row justify-between min-w-fit w-fit gap-2 items-center
                  rounded-sm bg-primary text-primary-foreground hover:bg-primary/90
                  h-10"
    >
      <div className="w-5 h-5 relative">
        <Image
          src={svgIconAddress}
          fill
          alt={svgIcon}
          className="object-contain"
        />
      </div>
      <div className="px-1 text-primary-foreground text-xs">{svgIcon}</div>
    </div>
  );
};

export default SkillsIcon;
