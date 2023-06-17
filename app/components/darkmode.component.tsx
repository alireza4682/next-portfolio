import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";

const DarkButton = () => {
  const { theme, setTheme } = useTheme();

  const darkModeHandler = () => {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    }
  };
  const checkedHandler = () => {
    if (theme === "dark") {
      return true;
    } else if (theme === "light") {
      return false;
    }
  };
  return <Switch onCheckedChange={() => darkModeHandler()} />;
};

export default DarkButton;
