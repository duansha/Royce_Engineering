"use client";
import Image from "next/image";
import Link from "next/link";
import StayUPdated from "./StayUpdated";

const Footer = () => {
  return (
    <>
      <footer className="dark:bg-gray-dark bg-footer-bg relative z-10 pt-12 md:pt-15 lg:pt-18">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <div className="mb-4 flex items-center">
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
                    className="lucide lucide-music mr-2 h-8 w-8 text-pink-400"
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
                    className="lucide lucide-heart mr-3 h-6 w-6 text-red-400"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>*/}
                  <Image
                    src="/images/logo-transparent.png"
                    width="400"
                    height="50"
                    alt=""
                  />
                  {/*<span className="gradient-to-r from-pink-500 to-purple-600 text-2xl font-bold dark:text-white">
                    MU5IC4GOOD
                  </span>*/}
                </div>
                <p className="dark:text-body-color-dark text-footer mb-9 text-base leading-relaxed">
                  Bringing togetherLove, Learn, Thrive
                  <br />
                  Growing with Love, Thriving with Joy
                  <br />
                  Where Children Explore, Learn, and Thrive
                </p>
                <div className="flex items-center">
                  <a
                    href="https://www.facebook.com/mu5ic4good/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dark:text-body-color-dark dark:hover:text-primary text-footer mr-6 duration-300 hover:text-white"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://x.com/MU5IC4GOOD_US"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dark:text-body-color-dark dark:hover:text-primary text-footer mr-6 duration-300 hover:text-white"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/mu5ic4good_us/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dark:text-body-color-dark dark:hover:text-primary text-footer mr-6 duration-300 hover:text-white"
                  >
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
                      className="lucide lucide-instagram h-5 w-5"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@MU5IC4GOOD"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dark:text-body-color-dark dark:hover:text-primary text-footer duration-300 hover:text-white"
                  >
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
                      className="lucide lucide-youtube h-5 w-5"
                    >
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                      <path d="m10 15 5-3-5-3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <div className="mb-4 flex items-center">
                  <span className="text-footer text-2xl font-bold dark:text-white">
                    Contact Us
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
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
                      className="lucide lucide-mail mr-3 h-4 w-4 text-gray-500"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <a
                      href="mailto:info@mu5ic4good.org"
                      className="dark:text-body-color-dark text-footer transition-colors hover:text-white dark:hover:text-gray-300"
                    >
                      merrimanclc@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
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
                      className="lucide lucide-phone mr-3 h-4 w-4 text-gray-500"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <a
                      href="tel:+14254924621"
                      className="dark:text-body-color-dark text-footer transition-colors hover:text-white dark:hover:text-gray-300"
                    >
                      + 1 (425) 492-4621
                    </a>
                  </div>
                  <div className="flex items-start">
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
                      className="lucide lucide-map-pin mt-1 mr-3 h-4 w-4 text-gray-500"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span className="dark:text-body-color-dark text-footer transition-colors">
                      1934 108th Ave. NE, Bellevue Washington 98004
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/*<StayUPdated />*/}
          </div>

          <div className="h-px w-full bg-linear-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
