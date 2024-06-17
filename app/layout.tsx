import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className="menu">
        <div className="menu__header">
          <div className="menu__toggle">Close</div>
          <Link href="/">Recipes for Food</Link>
        </div>
        <ul className="menu__contents">
          <li className="menu__item">
            <Link className="menu__item__link" href="/bisuits">
              <p>
                <b>A batch of bisuits</b>
              </p>
              <p>Anthony Zukofsky</p>
            </Link>
          </li>
        </ul>
        <div className="menu__footer">
          <ul className="menu__footer__contents">
            <li className="menu__footer__item">
              <Link href="https://recipesforfood.net/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
