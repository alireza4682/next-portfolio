"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/seperator";
import ThemeSwitch from "../components/themeChanger";

export default function RightLayout({
  work,
  skills,
}: {
  work: React.ReactNode;
  skills: React.ReactNode;
}) {
  const choices = {
    first: work,
    second: skills,
  } as const;

  const tabs = [
    { id: "Work", value: work },
    { id: "Skills", value: skills },
  ] as const;

  const activeTabState = (state: (typeof tabs)[number]["id"]) => {
    return choices[state];
  };

  const [activeTab, setactiveTab] = useState<keyof typeof choices>("first");

  return (
    <div className="mt-20 relative">
      <div className="sticky top-0 z-10 bg-background">
        <div className="flex flex-row justify-between items-center pr-2 ">
          <div className="flex flex-row justify-start gap-1 lg:gap-4 p-2 h-14">
            <Button onClick={() => setactiveTab("first")} variant="ghost">
              Work
            </Button>
            <Separator orientation="vertical" />
            <Button onClick={() => setactiveTab("second")} variant="ghost">
              Skills
            </Button>
            <Separator orientation="vertical" />
          </div>
          <ThemeSwitch />
        </div>
        <Separator orientation="horizontal" className="my-2" />
      </div>
      {activeTabState(activeTab)}
    </div>
  );
}
