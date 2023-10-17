"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const ContentWork = ({ children }: { children: React.ReactNode }) => {
  const [show, setShow] = useState(true);

  return (
    <div className="p-2 overflow-hidden" onClick={() => setShow(!show)}>
      <AnimatePresence initial={false}>
        {show && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default ContentWork;
