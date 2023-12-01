import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsMedium } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <footer className=" tw-mb-[-100px] lg:tw-mb-[-75px] tw-bg-center tw-bg-cover tw-bg-[url('https://yevgenysim-turkey.github.io/shopper/assets/img/patterns/pattern-2.svg')] tw-bg-opacity-100 tw-bg-[#1f1f1f]">
        <div className="tw-mx-auto tw-w-full tw-max-w-screen-xl tw-p-4 tw-py-6 lg:tw-py-8">
          <div className=" tw-flex tw-flex-col tw-items-center tw-my-16 md:tw-my-[60px]">
            <h2 className=" md:tw-mb-[-22px] tw-text-white tw-text-[25px] md:tw-text-2xl tw-font-medium">
              Want style Ideas and Treats?
            </h2>
            <div className=" tw-mt-[24px] tw-mb-[22px]">
              <div className=" tw-mt-[30px] tw-flex tw-justify-center tw-gap-[20px] md:tw-gap-[20px]">
                <input
                  type="text"
                  id="default-input"
                  placeholder="Enter Email *"
                  className="tw-bg-[#303030] tw-text-lg tw-text-white md:tw-text-base tw-block tw-w-[170px] md:tw-w-[380px] tw-px-[30px] focus:tw-ring-0 focus:tw-border-[#303030] tw-border-[#303030] tw-py-[20px] md:tw-py-[17px] tw-placeholder-gray-400"
                />
                <button className=" tw-relative tw-mt-[-1px] tw-bg-[#525252] hover:tw-bg-gray-700 tw-text-[16px] md:tw-font-[500] text-white tw-px-[40px] md:tw-px-[33px] tw-h-[69px] md:tw-h-[60px]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className=" md:tw-mr-4 md:tw-mb-[-8px] md:tw-flex md:tw-justify-around">
            <div className=" md:tw-mt-[-6px] md:tw-ml-[-8px]">
              <a href="#" className="tw-flex tw-items-center">
                <span className="tw-self-center tw-text-[30px] md:tw-text-[28px] tw-font-medium tw-whitespace-nowrap tw-text-white">
                  Shopper.
                </span>
              </a>
              <div className=" tw-relative tw-flex tw-my-6 tw-space-x-[0.55rem] md:tw-ml-[-5px] md:tw-justify-center md:tw-mt-[20px] tw-text-2xl md:tw-text-xl">
                <a href="#" className="tw-text-gray-400 hover:tw-text-gray-500">
                  <RiFacebookFill />
                  <span className=" tw-sr-only">Facebook page</span>
                </a>
                <a href="#" className="tw-text-gray-400 hover:tw-text-gray-500">
                  <AiFillYoutube />
                  <span className=" tw-sr-only">Youtube channel</span>
                </a>
                <a href="#" className="tw-text-gray-400 hover:tw-text-gray-500">
                  <AiOutlineTwitter />
                  <span className=" tw-sr-only">Twitter page</span>
                </a>
                <a href="#" className="tw-text-gray-400 hover:tw-text-gray-500">
                  <AiOutlineInstagram />
                  <span className=" tw-sr-only">Instagram page</span>
                </a>
                <a href="#" className="tw-text-gray-400 hover:tw-text-gray-500">
                  <BsMedium />
                  <span className=" tw-sr-only">Medium account</span>
                </a>
              </div>
            </div>
            <div className=" tw-grid tw-grid-cols-2 tw-mt-10 md:tw-mt-[-2px] tw-gap-8 md:tw-gap-4 lg:tw-gap-[56px] md:tw-grid-cols-4">
              <div>
                <h2 className="tw-mb-[16px] tw-text-[15px] md:tw-text-[13px] tw-font-[600] tw-uppercase tw-text-white">
                  Support
                </h2>
                <ul className="tw-text-gray-300 tw-text-[18px] md:tw-text-base">
                  <li>
                    <a href="#" className=" tw-font-light hover:tw-text-gray-400">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" tw-font-light hover:tw-text-gray-400">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" tw-font-light hover:tw-text-gray-400">
                      Size Guide
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" tw-font-light hover:tw-text-gray-400">
                      Shipping & Returns
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="tw-mb-[16px] tw-text-[15px] md:tw-text-[13px] tw-font-medium tw-uppercase tw-text-white">
                  Shop
                </h2>
                <ul className="tw-text-gray-300 tw-text-[18px] md:tw-text-[16px]">
                  <li>
                    <a href="#" className=" tw-font-light hover:tw-text-gray-400">
                      Men's Shopping
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" tw-font-light hover:tw-text-gray-400">
                      Women's Shopping
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" tw-font-light hover:tw-text-gray-400">
                      Kids' Shopping
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" tw-font-light hover:tw-text-gray-400">
                      Discounts
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="tw-mb-[16px] tw-text-[15px] md:tw-text-[13px] tw-font-medium tw-uppercase tw-text-white">
                  Company
                </h2>
                <ul className="tw-text-gray-300 tw-text-[18px] md:tw-text-[16px]">
                  <li>
                    <a href="#" className=" tw-font-light hover:tw-text-gray-400">
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" tw-font-light hover:tw-text-gray-400">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" tw-font-light hover:tw-text-gray-400">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" tw-font-light hover:tw-text-gray-400">
                      Privacy &amp; Cookie policy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="tw-mb-[16px] tw-text-[15px] md:tw-text-[13px] tw-font-medium tw-uppercase tw-text-white">
                  Contact
                </h2>
                <ul className="tw-text-gray-300 tw-text-[18px] md:tw-text-[16px]">
                  <li>
                    <a href="#" className=" tw-font-light hover:tw-text-gray-400">
                      1-202-555-0105
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" tw-font-light hover:tw-text-gray-400">
                      1-202-555-0106
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" tw-font-light hover:tw-text-gray-400">
                      help@shopper.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className=" tw-my-[100px] tw-relative tw-border-t-[1px] tw-border-gray-700 md:tw-my-[72px] tw-p-4 tw-py-[24px]">
          <div className=" md:tw-mx-[105px] tw-relative md:tw-flex md:tw-items-center md:tw-justify-between">
            <span className=" tw-relative tw-text-[14px] md:tw-text-[13px] md:tw-text-center tw-mt-[-10px] tw-text-gray-500">
              © 2019
              <a href="#" className=" hover:tw-text-gray-400">
                &nbsp;All rights reserved.
              </a>
              &nbsp;Designed by Unvab.
            </span>
            <div className="tw-flex tw-mt-4 tw-space-x-[0.31rem] md:tw-justify-center md:tw-mt-0 md:tw-mr-[-1px]">
              <a href="#" className="tw-text-gray-400 hover:tw-text-gray-500">
                <img
                  className=""
                  src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/mastercard.svg"
                  alt=""
                />
                <span className=" tw-sr-only">Mastercard</span>
              </a>
              <a href="#" className="tw-text-gray-400 hover:tw-text-gray-500">
                <img
                  className=""
                  src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/visa.svg"
                  alt=""
                />
                <span className=" tw-sr-only">Visa</span>
              </a>
              <a href="#" className="tw-text-gray-400 hover:tw-text-gray-500">
                <img
                  className=""
                  src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/amex.svg"
                  alt=""
                />
                <span className=" tw-sr-only">Amex</span>
              </a>
              <a href="#" className="tw-text-gray-400 hover:tw-text-gray-500">
                <img
                  src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/paypal.svg"
                  alt=""
                />
                <span className=" tw-sr-only">Paypal</span>
              </a>
              <a href="#" className="tw-text-gray-400 hover:tw-text-gray-500">
                <img
                  src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/maestro.svg"
                  alt=""
                />
                <span className=" tw-sr-only">Maestro</span>
              </a>
              <a href="#" className="tw-text-gray-400 hover:tw-text-gray-500">
                <img
                  src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/klarna.svg"
                  alt=""
                />
                <span className=" tw-sr-only">Klarna</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;