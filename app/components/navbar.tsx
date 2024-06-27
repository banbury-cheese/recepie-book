"use client";

import Link from "next/link";
import { recepieCard } from "../lib/interface";
import { useEffect } from "react";
import $ from "jquery";
import useMediaQuery from "../lib/mediaQuery";
import { usePathname } from "next/navigation";

export default function Navbar({ recipes }: { recipes: recepieCard[] }) {
  const isMobile = useMediaQuery();
  const pathname = usePathname();

  // sets active tab on page re-load
  useEffect(() => {
    const recepieSlug = pathname.split("/")[2];
    console.log(recepieSlug);
    $(`.recepie__${recepieSlug}`).addClass("menu__item-selected");
  }, [pathname]);

  useEffect(() => {
    const tabs = $(".menu__item");
    const menu = $(".menu");

    function handleClick(card: Element) {
      tabs.removeClass("menu__item-selected");
      $(card).addClass("menu__item-selected");
      if (menu && isMobile) {
        setTimeout(() => {
          menu.css("display", "none");
        }, 300);
      }
    }

    tabs.each((_index, card) => {
      $(card).on("click", () => handleClick(card));
    });

    return () => {
      tabs.each((_index, card) => {
        $(card).off("click");
      });
    };
  }, [recipes, isMobile]);

  useEffect(() => {
    const menu = $(".menu");
    menu.css("display", isMobile ? "none" : "block");
  }, [isMobile]);

  return (
    <ul className="menu__contents">
      {recipes.map((recepie: any, idx: number) => (
        <li key={idx} className={`menu__item recepie__${recepie.slug.current}`}>
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
