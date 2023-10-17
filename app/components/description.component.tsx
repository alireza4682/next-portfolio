"use client";

import { useState } from "react";

const ContentWork = ({ children }: { children: React.ReactNode }) => {
  const [show, setShow] = useState(true);

  return (
    <div className="p-2" onClick={() => setShow(!show)}>
      {show && children}
    </div>
  );
};
export default ContentWork;
