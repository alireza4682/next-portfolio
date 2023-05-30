"use client";
const CvDownload = () => {
  const onDownloadClick = () => {
    return window.open(
      "https://drive.google.com/file/d/1c4YzROM0sbDlhzPA35C_i77JyznRayf6/view?usp=share_link"
    );
  };
  return (
    <button
      className="bg-white text-black p-1.5 rounded-md m-2"
      onClick={() => onDownloadClick()}
    >
      download CV.pdf
    </button>
  );
};
export default CvDownload;
