import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";
import { useState } from "react";

const DarkButton = () => {
  const { theme, setTheme } = useTheme();
  const initialTheme = false;
  const [booleanTheme, setBooleanTheme] = useState(initialTheme);
  console.log(initialTheme);

  const darkModeHandler = () => {
    if (theme === "dark") {
      setTheme("light");
      setBooleanTheme(false);
    } else {
      setTheme("dark");
      setBooleanTheme(true);
    }
  };
  return (
    <Switch checked={booleanTheme} onCheckedChange={() => darkModeHandler()} />
  );
};

export default DarkButton;
