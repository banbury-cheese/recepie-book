"use client";

import Link from "next/link";

export default function MenuHeader() {
  return (
    <div className="menu__header">
      <div
        className="menu__toggle"
        onClick={() => {
          const menu = document.querySelector(".menu") as HTMLElement;
          if (menu) {
            menu.style.display = "none";
          }
        }}
      >
        Close
      </div>
      <Link href="/">
        <b>Recipes for Food</b>
      </Link>
    </div>
  );
}
