export type TsvgIcon = {
  svgIcon: string;
  name: string;
};

const SkillsIcon = ({ svgIcon, name }: TsvgIcon) => {
  return (
    <div
      className="bg-gray-200 p-1 px-2 m-1 
                  flex flex-row justify-between min-w-fit w-fit gap-2 items-center rounded-2xl "
    >
      <img
        src={svgIcon}
        alt="typescriptLogo"
        className="bg-white/0 text-black p-1.5 rounded-md w-16 h-16"
      />
      <div className="px-1">{name}</div>
    </div>
  );
};

export default SkillsIcon;
