import { Button } from "./ui/button";
import { UnfoldVerticalIcon, Minus } from "lucide-react";

const AccordionTrigger = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`w-full flex flex-row justify-start items-center [&>*]:aspect-square ${
        !show ? "border-y-2 border-dashed" : "my-0.5"
      }`}
    >
      <Button
        className="hover:bg-background"
        size={"icon"}
        variant={"ghost"}
        onClick={() => setShow(!show)}
      >
        {show ? <Minus size={16} /> : <UnfoldVerticalIcon size={16} />}
      </Button>
      {!show && <div className=" mx-2"></div>}
    </div>
  );
};

export default AccordionTrigger;
