"use client";
import { useTheme } from "next-themes";
import { MoonIcon } from "lucide-react";
import { SunDim } from "lucide-react";
import { useEffect, useState } from "react";

const DarkButton = () => {
  const { theme, setTheme } = useTheme();
  const [icon, setIcon] = useState(<SunDim />);
  useEffect(() => {
    theme !== "dark" ? setIcon(<MoonIcon />) : setIcon(<SunDim />);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="border rounded-md w-6 h-6 flex items-center justify-center"
    >
      {icon}
    </button>
  );
};

export default DarkButton;
