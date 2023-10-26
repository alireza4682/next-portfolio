"use client";
import { useTheme } from "next-themes";
import { Button } from "../../components/ui/button";
const CvDownload = () => {
  const { theme } = useTheme();
  const onDownloadClick = () => {
    return window.open(
      "https://drive.google.com/file/d/1c4YzROM0sbDlhzPA35C_i77JyznRayf6/view?usp=share_link"
    );
  };
  return (
    <div>
      <Button
        variant={"outline"}
        onClick={() => onDownloadClick()}
        className="mt-6 items-center justify-center text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
           disabled:opacity-50 disabled:cursor-not-allowed ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90
           h-10 hero-join-button-dark group relative mx-auto hidden w-fit overflow-hidden rounded-xl p-[1px] font-bold transition-all
           duration-300 dark:block dark:hover:shadow-[0_0_2rem_-0.5rem_#fff8] md:mr-0 lg:mr-auto"
      >
        <span className="inline-flex h-full w-fit items-center gap-1 rounded-xl px-4 py-2 transition-all duration-300 dark:bg-neutral-900 dark:text-white group-hover:dark:bg-black">
          Resume PDF
        </span>
      </Button>
      <Button
        variant={"outline"}
        onClick={() => onDownloadClick()}
        className="mt-6 inline-flex items-center justify-center text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
            disabled:opacity-50 disabled:cursor-not-allowed ring-offset-background bg-primary text-primary-foreground h-10 hero-join-button group
            relative mx-auto w-fit overflow-hidden rounded-xl p-[2px] font-bold transition-all duration-300 hover:bg-transparent hover:shadow-[0_0_2rem_-0.5rem_#3178c6] dark:hidden md:mr-0 lg:mr-auto"
      >
        <span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-white px-4 py-2 text-[#3178c6] transition-all duration-300">
          Resume PDF
        </span>
      </Button>
    </div>
  );
};
export default CvDownload;
