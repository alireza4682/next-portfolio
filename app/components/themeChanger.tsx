"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "../../components/ui/button";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { CircleDashed } from "lucide-react";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon">
        <CircleDashed className="h4 w-4" />
      </Button>
    );
  }

  return theme === "dark" ? (
    <Button onClick={() => setTheme("light")} variant="ghost" size="icon">
      <Sun className="h4 w-4" />
    </Button>
  ) : (
    <Button onClick={() => setTheme("dark")} variant="ghost" size="icon">
      <Moon className="h-4 w-4" />
    </Button>
  );
};

export default ThemeSwitch;
