import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alireza",
  description: "portfolio",
};

export default function RootLayout(props: {
  main: React.ReactNode;
  Intro: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="grid grid-flow-col">
            <div>{props.Intro}</div>
            <div className="col-span-3">{props.main}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
