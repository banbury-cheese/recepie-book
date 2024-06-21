"use client";

import Link from "next/link";

export default function MenuMobile() {
  return (
    <div className="menu--mobile">
      <div
        className="menu__toggle"
        onClick={() => {
          const menu = document.querySelector(".menu") as HTMLElement;
          if (menu) {
            menu.style.display = "block";
          }
        }}
      >
        Recipes
      </div>
      <div className="menu--mobile__header">
        <Link href="/">
          <b>Recipes for Food</b>
        </Link>
      </div>
    </div>
  );
}
