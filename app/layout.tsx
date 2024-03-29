import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./components/providers";
import styles from "./shadow.module.css";
import clsx from "clsx";
import { relative } from "path";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alireza",
  description: "portfolio",
};

export default function RootLayout({
  left,
  right,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scrollbar-hide">
      <body className={inter.className}>
        <Providers>
          <div className={clsx("relative", "p-20")}>
            <div className={clsx("absolute", styles.shadow)}></div>
            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 bg-background rounded-xl p-8 shadow-2xl">
              {left}
              <div className="col-span-1 lg:col-span-2 mx-4">{right}</div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
