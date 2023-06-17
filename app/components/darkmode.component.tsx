"use client";
import { useTheme } from "next-themes";
import { MoonIcon } from "lucide-react";
import { SunDim } from "lucide-react";

const DarkButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="border rounded-md w-6 h-6 flex items-center justify-center"
    >
      {theme !== "dark" ? <MoonIcon /> : <SunDim />}
    </button>
  );
};

export default DarkButton;
