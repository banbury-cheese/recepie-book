import type { Metadata } from "next";
import "./globals.scss";
import Link from "next/link";
import { client } from "./lib/sanity";
import { recepieCard } from "./lib/interface";
import Navbar from "./components/navbar";
import MenuHeader from "./components/menuHeader";
import MenuMobile from "./components/menuMobile";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Recipes for Food",
  description: "Recipes for Food is a colaborative cookbook by Kay.",
};

async function getData() {
  const query = `
      *[_type == 'recepie'] | order(_createdAt desc){
      name,
      slug,
      duration,
      difficulty,
      chef,
    }
  `;

  const data = await client.fetch(query);

  return data;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const recipes: recepieCard[] = await getData();

  return (
    <html lang="en">
      <body className="layout-wrapper vsc-initialized">
        <MenuMobile />
        <div className="layout-wrapper__child menu">
          <MenuHeader />
          <Navbar recipes={recipes} />
          <div className="menu__footer">
            <ul className="menu__footer__contents">
              <li className="menu__footer__item">
                <Link href="/">About</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="content layout-wrapper__child">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
