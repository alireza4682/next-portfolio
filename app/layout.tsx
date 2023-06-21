import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alireza",
  description: "portfolio",
};

export default function RootLayout(props: {
  children: React.ReactNode;
  rightPage: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col">
            {props.children}
            {props.rightPage}
          </div>
        </Providers>
      </body>
    </html>
  );
}
