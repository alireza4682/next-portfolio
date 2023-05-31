import Image, { ImageLoaderProps } from "next/image";

const SkillsIcon = ({ svgIcon }: { svgIcon: string }) => {
  return (
    <div
      className="bg-gray-400 p-2 px-4 m-1 
                  flex flex-row justify-between min-w-fit w-fit gap-2 items-center rounded-2xl "
    >
      <Image
        src={`/library/${svgIcon}.svg`}
        width={64}
        height={64}
        alt="typescriptLogo"
      />
      <div className="px-1 text-blue-800">{svgIcon}</div>
    </div>
  );
};

export default SkillsIcon;
