import Image from "next/image";
import getSvg from "../api/getSvg.service";

const WorkIcon = async ({ svgIcon }: { svgIcon: string }) => {
  const { route: svgIconAddress } = await getSvg(svgIcon);
  return (
    <div className="w-10 h-10 bg-muted rounded-sm p-1 flex justify-center items-center">
      <Image
        src={svgIconAddress}
        width={30}
        height={30}
        alt={svgIconAddress}
        placeholder="empty"
        priority={false}
        className="object-contain h-full w-auto p-1"
      />
    </div>
  );
};

export default WorkIcon;
