"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/seperator";
import ThemeSwitch from "../components/themeChanger";
import { motion } from "framer-motion";

export default function RightLayout({
  work,
  skills,
}: {
  work: React.ReactNode;
  skills: React.ReactNode;
}) {
  const tabs = [
    { id: "Work", value: work },
    { id: "Skills", value: skills },
  ] as const;

  const activeTabState = (state: (typeof tabs)[number]["id"]) => {
    return tabs.filter((tab) => tab["id"] === state).map((tab) => tab.value);
  };

  const [activeTab, setactiveTab] = useState<(typeof tabs)[number]["id"]>(
    tabs[0]["id"]
  );

  return (
    <div className="mt-20 relative">
      <div className="sticky top-0 z-10 bg-background">
        <div className="flex flex-row justify-between items-center pr-2 ">
          <div className="flex flex-row">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className="flex flex-row justify-start gap-1 lg:gap-4 p-2 h-14"
              >
                <Button onClick={() => setactiveTab(tab.id)} variant="ghost">
                  {tab.id}
                </Button>
                <Separator orientation="vertical" />
              </div>
            ))}
          </div>
          <ThemeSwitch />
        </div>
        <Separator orientation="horizontal" className="my-2" />
      </div>
      {activeTabState(activeTab)}
    </div>
  );
}
