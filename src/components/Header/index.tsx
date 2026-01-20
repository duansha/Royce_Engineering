"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <>
      <nav className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
        <header
          className={`header top-0 left-0 z-40 flex w-full items-center ${
            sticky
              ? "dark:shadow-sticky-dark shadow-sticky fixed z-9999 bg-[#1A237E] backdrop-blur-xs transition dark:bg-black"
              : "absolute bg-[#1A237E] dark:bg-black"
          }`}
        >
          <div className="container">
            <div className="relative -mx-4 flex items-center justify-between">
              <div className="flex w-180 max-w-full px-1 xl:mr-0">
                <Link
                  href="/"
                  className={`header-logo block flex w-full items-center space-x-2 ${
                    sticky ? "py-5 lg:py-2" : "py-8"
                  } `}
                >
                  <Image
                    src="/images/logo1-transparent.png"
                    width="65"
                    height="65"
                    alt=""
                  />
                  <span className="font-bold text-white/90 dark:text-white/80">
                    Royce &nbsp;
                    <span className="block text-[0.75rem] sm:text-[0.75rem]">
                      Engineering Build Projects
                    </span>
                  </span>
                  {/*<svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-music h-8 w-8 text-pink-500"
                  >
                    <path d="M9 18V5l12-2v13"></path>
                    <circle cx="6" cy="18" r="3"></circle>
                    <circle cx="18" cy="16" r="3"></circle>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-heart h-6 w-6 text-red-500"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>*/}
                </Link>
              </div>
              <div className="flex w-20 max-w-full px-1 xl:mr-12">
                <Link
                  href="/"
                  className={`header-logo block flex w-full items-center space-x-2 ${
                    sticky ? "py-5 lg:py-2" : "py-8"
                  } `}
                >
                  <span className="__className_168b81 bg-logo bg-clip-text text-2xl font-bold text-transparent"></span>
                </Link>
              </div>
              <div className="flex w-full items-center justify-between px-4">
                <div>
                  <button
                    onClick={navbarToggleHandler}
                    id="navbarToggler"
                    aria-label="Mobile Menu"
                    className="ring-primary absolute top-1/2 right-4 block translate-y-[-50%] rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
                  >
                    <span
                      className={`relative my-1.5 block h-0.5 w-[30px] bg-black bg-white transition-all duration-300 ${
                        navbarOpen ? "top-[7px] rotate-45" : " "
                      }`}
                    />
                    <span
                      className={`relative my-1.5 block h-0.5 w-[30px] bg-black bg-white transition-all duration-300 ${
                        navbarOpen ? "opacity-0" : " "
                      }`}
                    />
                    <span
                      className={`relative my-1.5 block h-0.5 w-[30px] bg-black bg-white transition-all duration-300 ${
                        navbarOpen ? "top-[-8px] -rotate-45" : " "
                      }`}
                    />
                  </button>
                  <nav
                    id="navbarCollapse"
                    className={`navbar border-body-color/50 dark:border-body-color/20 dark:bg-dark absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                      navbarOpen
                        ? "visibility top-full opacity-100"
                        : "invisible top-[120%] opacity-0"
                    }`}
                  >
                    <ul className="block lg:flex lg:space-x-12">
                      {menuData.map((menuItem, index) => (
                        <li key={index} className="group relative">
                          {menuItem.path ? (
                            <Link
                              href={menuItem.path}
                              className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                                usePathName === menuItem.path
                                  ? "text-primary lg:text-white dark:text-white"
                                  : "text-dark hover:text-primary lg:text-white/70 lg:hover:text-white dark:text-white/70 dark:hover:text-white"
                              }`}
                            >
                              {menuItem.title}
                            </Link>
                          ) : (
                            <>
                              <p
                                onClick={() => handleSubmenu(index)}
                                className="text-dark group-hover:text-primary flex cursor-pointer items-center justify-between py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 dark:text-white/70 dark:group-hover:text-white"
                              >
                                {menuItem.title}
                                <span className="pl-3">
                                  <svg
                                    width="25"
                                    height="24"
                                    viewBox="0 0 25 24"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                              </p>
                              <div
                                className={`submenu dark:bg-dark relative top-full left-0 rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                  openIndex === index ? "block" : "hidden"
                                }`}
                              >
                                {menuItem.submenu.map((submenuItem, index) => (
                                  <Link
                                    href={submenuItem.path}
                                    key={index}
                                    className="text-dark hover:text-primary block rounded-sm py-2.5 text-sm lg:px-3 dark:text-white/70 dark:hover:text-white"
                                  >
                                    {submenuItem.title}
                                  </Link>
                                ))}
                              </div>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
                <div className="flex items-center justify-end pr-16 lg:pr-0">
                  <div>
                    <ThemeToggler />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </nav>
    </>
  );
};

export default Header;
