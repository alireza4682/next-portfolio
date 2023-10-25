"use client";
import { Button } from "../../components/ui/button";
const CvDownload = () => {
  const onDownloadClick = () => {
    return window.open(
      "https://drive.google.com/file/d/1c4YzROM0sbDlhzPA35C_i77JyznRayf6/view?usp=share_link"
    );
  };
  return (
    <Button
      variant={"outline"}
      onClick={() => onDownloadClick()}
      className="mt-6"
    >
      Resume PDF
    </Button>
  );
};
export default CvDownload;
