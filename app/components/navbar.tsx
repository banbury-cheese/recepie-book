"use client";

import Link from "next/link";
import { recepieCard } from "../lib/interface";
import { useEffect, useState } from "react";

export default function Navbar({ recipes }: { recipes: recepieCard[] }) {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  useEffect(() => {
    const tabs = document.querySelectorAll(".menu__item");
    tabs.forEach((card) => {
      card.addEventListener("click", function (item) {
        tabs.forEach((i) => i.classList.remove("menu__item-selected"));
        card.classList.add("menu__item-selected");
        if (isMobile) {
          const menu = document.querySelector(".menu") as HTMLElement;
          if (menu) {
            setTimeout(() => {
              menu.style.display = "none";
            }, 300);
          }
        }
      });
    });
  }, [recipes, isMobile]);

  return (
    <ul className="menu__contents">
      {recipes.map((recepie: any, idx: number) => (
        <li key={idx} className="menu__item">
          <Link
            className="menu__item__link"
            href={`/recepie/${recepie.slug.current}`}
          >
            <p>
              <b>{recepie.name}</b>
            </p>
            <p>
              {recepie.duration} - <i>{recepie.difficulty}</i>
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
