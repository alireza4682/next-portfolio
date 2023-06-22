"use client";
import { Button } from "./ui/button";
const CvDownload = () => {
  const onDownloadClick = () => {
    return window.open(
      "https://drive.google.com/file/d/1c4YzROM0sbDlhzPA35C_i77JyznRayf6/view?usp=share_link"
    );
  };
  return (
    <Button className="" onClick={() => onDownloadClick()}>
      download CV.pdf
    </Button>
  );
};
export default CvDownload;
