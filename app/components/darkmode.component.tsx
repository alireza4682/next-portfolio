import { useTheme } from "next-themes";
const DarkButton = () => {
  const { theme, setTheme } = useTheme();
  const darkModeHandler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return <button onClick={() => darkModeHandler()}>dark</button>;
};

export default DarkButton;
