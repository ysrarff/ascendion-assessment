"use client";

import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import { navigationObj } from "@/constants/navigation-links";

import Input from "./input";
import Text from "./text";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const renderDesktopLinks = () => {
    return (
      <>
        {navigationObj.map((item) => (
          <li key={item.value}>
            <a href={item.href}>
              <Text
                type="p"
                variation="navbarText"
                styling={"font-bold text-gray-500"}
                value={item.value}
              />
            </a>
          </li>
        ))}
      </>
    );
  };

  const renderMobileLinks = () => {
    return (
      <>
        {navigationObj.map((item) => (
          <li key={item.value} className="container flex justify-between my-4">
            <a href={item.href}>
              <Text
                type="h3"
                variation="navbarText"
                styling={"font-bold text-gray-500"}
                value={item.value}
              />
            </a>
          </li>
        ))}
      </>
    );
  };

  const toggleMobileMenu = () => {
    setMobileMenu((prevVal) => !prevVal);
  };

  return (
    <>
      <div className="w-full lg:min-h-30 xs:min-h-20 bg-white sticky top-0 border border-gray-300 border-b-gray-300">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between">
            <div className="hidden lg:flex justify-start py-4">
              <Text
                type="h1"
                variation="navbarText"
                styling={"font-bold"}
                value="Desktop"
              />
              &nbsp;
              <Text type="h1" variation="navbarText" value="View" />
            </div>

            <div className="lg:hidden flex justify-start py-4">
              <Text
                type="h1"
                variation="navbarText"
                styling={"font-bold"}
                value="Mobile"
              />
              &nbsp;
              <Text type="h1" variation="navbarText" value="View" />
            </div>
            <button
              className="lg:hidden flex my-auto"
              type="button"
              onClick={toggleMobileMenu}
            >
              {mobileMenu ? (
                <XMarkIcon className="size-8 text-black" />
              ) : (
                <Bars3Icon className="size-8 text-black" />
              )}
            </button>
          </div>

          {/* Desktop view */}
          <div className="flex justify-between items-center">
            <ul className="hidden lg:flex lg:gap-x-6 xs:gap-x-3 jusitfy-center items-center">
              {/* Desktop Links */}
              {renderDesktopLinks()}
            </ul>

            {/* Search Bar */}
            <div className="hidden lg:flex ">
              <Input
                id="search"
                variation="searchInput"
                type="string"
                labelName=""
                placeholder="Search documentation..."
              />
            </div>
          </div>

          {/* Mobile view */}
          <div
            className={`sidebar-container fixed w-full h-full overflow-hidden bg-white grid pt-1 left-0 z-10 border border-gray-300 border-b-gray-300 ${
              mobileMenu ? "opacity-100" : "opacity-0"
            }`}
          >
            <ul className="container mx-auto px-4">{renderMobileLinks()}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
