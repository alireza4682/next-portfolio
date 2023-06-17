import { cn } from "@/lib/utils";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";

const ColorScheme = () => {
  const userTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefered-color-scheme:dark)").matches;

  const icontToggle = () => {};
};
export default ColorScheme;
