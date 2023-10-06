import "./globals.css";
import { Montserrat } from "next/font/google";
import { TokenProvider, AvatarProvider } from "../app/context";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <TokenProvider>
          <AvatarProvider>{children}</AvatarProvider>
        </TokenProvider>
      </body>
    </html>
  );
}