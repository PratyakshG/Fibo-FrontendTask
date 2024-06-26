import { DM_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "../app/components/NavBar";
import TaskProvider from "../redux/Provider";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dm_sans.className} flex justify-between h-dvh`}>
        <TaskProvider>
          {children}
          {/* Bottom NavBar */}
          <NavBar />
        </TaskProvider>
      </body>
    </html>
  );
}
