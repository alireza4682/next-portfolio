import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./components/providers";

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
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3">
            {left}
            <div className="col-span-1 lg:col-span-2">{right}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
