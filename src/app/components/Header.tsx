"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const ToggleMode = (): React.JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const toggleModes = () => {
      isDarkMode
        ? localStorage.setItem("theme", "dark")
        : localStorage.setItem("theme", "light");

      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };
    toggleModes();
  }, [isDarkMode]);

  return (
    <button onClick={handleToggleMode}>
      {isDarkMode ? (
        <Image width={24} height={24} src={"/DarkMode.svg"} alt="Dark Mode" />
      ) : (
        <Image height={24} width={24} src={"/LightMode.svg"} alt="" />
      )}
    </button>
  );
};

const MenuItem = ({
  title,
  link,
  last = false,
}: {
  title: string;
  link: string;
  last: boolean;
}): React.JSX.Element => {
  if (last) {
    return (
      <li className=" border-l-2 border-r-2 h-full px-3 pr-3 pb-[14px] ">
        <button className="flex">
          <Link className="hover:bg-tertiary rounded-md" href={link}>
            {title}
          </Link>
        </button>
      </li>
    );
  }

  return (
    <li className=" border-l-2 h-full px-3 pr-3 pb-[14px] ">
      <button className="flex">
        <Link className=" hover:bg-tertiary rounded-md" href={link}>
          {title}
        </Link>
      </button>
    </li>
  );
};

const Menu = (): React.JSX.Element => {
  return (
    <ul className="hidden lg:flex justify-center p-3 pb-0 border-b-2 ">
      <MenuItem title="Manga" link="/" last={false} />
      <MenuItem title="Anime" link="/" last={false} />
      <MenuItem title="Games" link="/" last={false} />
      <MenuItem title="Merchendise" link="/" last={true} />
    </ul>
  );
};

const MobileMenuCard = ({
  title,
  link,
}: {
  title: string;
  link: string;
}): React.JSX.Element => {
  return (
    <button className=" w-11/12 border-b-2 p-1 text-left  ">
      <Link
        className=" hover:bg-tertiary block w-full rounded-md p-1 "
        href={link}
      >
        {title}
      </Link>
    </button>
  );
};

const MobileMenu = ({
  state,
  setState,
}: {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    const parentElem = document.querySelector("body");

    const handleEvent = (Event: Event) => {
      const currTarget = Event.target.closest("#mobile-menu");
      console.log(currTarget);

      if (!currTarget) setState(false);
      else {
        console.log("clicked inside");
      }
    };

    const handleHideMenu = () => {
      parentElem?.addEventListener("click", handleEvent);
    };
    handleHideMenu();

    return () => parentElem?.removeEventListener("click", handleEvent);
  }, []);

  const handleCloseMenu = () => {
    setState(!state);
    console.log("Inside moblie menu", state);
  };

  return (
    <div
      id="mobile-menu"
      className=" absolute top-[60px] lg:hidden sm:w-1/3 flex flex-col items-center p-1 border-gray-700 border-2 rounded-md shadow-lg "
    >
      <div className="flex justify-end w-full">
        <button onClick={handleCloseMenu}>
          <Image
            width={24}
            height={24}
            alt="Close mobile menu"
            src={"/exit.svg"}
          />
        </button>
      </div>
      <MobileMenuCard title="Manga" link="/" />
      <MobileMenuCard title="Anime" link="/" />
      <MobileMenuCard title="Games" link="/" />
      <MobileMenuCard title="Merchindise" link="/" />
    </div>
  );
};

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    console.log("Header component", showMobileMenu);
  }, [showMobileMenu]);

  const handleMenus = () => {
    if (showMobileMenu) {
      setShowMobileMenu(false);
    } else {
      setShowMobileMenu(true);
    }
  };

  return (
    <header className=" relative flex flex-col w-full flex-grow-0 ">
      <div className=" flex justify-between">
        <button onClick={handleMenus} className="lg:hidden">
          <Image width={24} height={24} src={"/hamburger-lg.svg"} alt="" />
        </button>

        <h1 className=" text-3xl p-3 font-bold ">
          <Link href={"/"}>ZenTokyo</Link>
        </h1>
        <ToggleMode />
      </div>

      {showMobileMenu ? (
        <MobileMenu state={showMobileMenu} setState={setShowMobileMenu} />
      ) : null}
      <Menu />
    </header>
  );
};

export default Header;
