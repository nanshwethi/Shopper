import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="tw-mx-auto tw-w-full tw-max-w-screen-xl tw-p-4 tw-py-6 lg:tw-py-8 ">
      <div className="tw-flex tw-flex-col tw-gap-8 tw-justify-center tw-items-center">
        <h2 className=" tw-text-3xl tw-font-medium">Our Blog</h2>
        <div className=" tw-flex tw-flex-wrap tw-gap-[36px] tw-font-medium tw-justify-center">
          <button className=" tw-relative tw-mr-[-3px] tw-text-red-500 tw-border-b tw-border-red-500 tw-text-center tw-w-[28px] tw-h-[28px]">
            All
          </button>
          <button className=" hover:tw-text-red-500 focus:tw-text-red-500 ">
            Company
          </button>
          <button className=" hover:tw-text-red-500 focus:tw-text-red-500 ">
            Brand
          </button>
          <button className=" hover:tw-text-red-500 focus:tw-text-red-500 ">
            Fashion
          </button>
          <button className=" hover:tw-text-red-500 focus:tw-text-red-500 ">
            Shop
          </button>
        </div>
      </div>
      <div className=" tw-flex tw-flex-col tw-items-center lg:tw-grid lg:tw-grid-cols-2 lg:tw-place-items-center tw-mx-[55px] tw-mt-16 ">
        <Link to={"/blogPost"}>
          <div className=" tw-flex tw-flex-col tw-w-[335px] lg:tw-w-[536px]">
            <div className=" tw-absolute tw-flex tw-items-center tw-justify-center tw-mt-[21px] tw-bg-white tw-w-[59px] tw-h-[22px] tw-text-[11px] tw-font-medium">
              JUN 20
            </div>
            <img
              className=""
              src="https://yevgenysim-turkey.github.io/shopper/assets/img/blog/blog-1.jpg"
              alt=""
            />
            <div>
              <h2 className=" tw-text-[24px] tw-font-[500] tw-my-[24px]">
                So isn&#39;t land signs greater void face replenish.
              </h2>
              <p className=" tw-relative tw-mt-[-12px] tw-font-thin tw-text-[16px]">
                Midst one brought greater also morning green saying had good.
                Open stars day let over gathered, grass face one every light of
                under.
              </p>
              <div className=" tw-mb-[70px]">
                <button className=" tw-my-[14px] tw-text-[17px] tw-font-[500] tw-flex">
                  Read More
                </button>
                <span className=" tw-absolute tw-text-[22px] hover:tw-ml-[97px] tw-transition-all tw-duration-300 tw-ml-[90px] tw-mt-[-38px]">
                  <BsArrowRightShort />
                </span>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/blogPost"}>
          <div className=" tw-flex tw-flex-col tw-w-[335px] lg:tw-w-[536px]">
            <div className=" tw-absolute tw-flex tw-items-center tw-justify-center tw-mt-[21px] tw-bg-white tw-w-[59px] tw-h-[22px] tw-text-[11px] tw-font-medium">
              JUN 20
            </div>
            <img
              className=""
              src="https://yevgenysim-turkey.github.io/shopper/assets/img/blog/blog-4.jpg"
              alt=""
            />
            <div>
              <h2 className=" tw-text-[24px] tw-font-[500] tw-my-[24px]">
                Sea good every which said first divided.
              </h2>
              <p className=" tw-relative tw-mt-[-12px] tw-font-thin tw-text-[16px]">
                From fruit shall stars over. Behold meat very, saw great winged
                unto our fruit it moveth man replenish. Meat place is so fruit.
              </p>
              <div className=" tw-mb-[70px]">
                <button className=" tw-my-[14px] tw-text-[17px] tw-font-[500] tw-flex">
                  Read More
                </button>
                <span className=" tw-absolute tw-text-[22px] hover:tw-ml-[97px] tw-transition-all tw-duration-300 tw-ml-[90px] tw-mt-[-38px]">
                  <BsArrowRightShort />
                </span>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/blogPost"}>
          <div className=" tw-flex tw-flex-col tw-w-[335px] lg:tw-w-[536px]">
            <div className=" tw-absolute tw-flex tw-items-center tw-justify-center tw-mt-[21px] tw-bg-white tw-w-[59px] tw-h-[22px] tw-text-[11px] tw-font-medium">
              JUN 20
            </div>
            <img
              className=""
              src="https://yevgenysim-turkey.github.io/shopper/assets/img/blog/blog-5.jpg"
              alt=""
            />
            <div>
              <h2 className=" tw-text-[24px] tw-font-[500] tw-my-[24px]">
                Morning let you created every day.
              </h2>
              <p className=" tw-relative tw-mt-[-12px] tw-font-thin tw-text-[16px]">
                Created spirit fly was fifth. Their heaven, subdue let earth
                there morning after doesn't together bearing also can&apos;t
                heaven their.
              </p>
              <div className=" tw-mb-[70px]">
                <button className=" tw-my-[14px] tw-text-[17px] tw-font-[500] tw-flex">
                  Read More
                </button>
                <span className=" tw-absolute tw-text-[22px] hover:tw-ml-[97px] tw-transition-all tw-duration-300 tw-ml-[90px] tw-mt-[-38px]">
                  <BsArrowRightShort />
                </span>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/blogPost"}>
          <div className=" tw-flex tw-flex-col tw-w-[335px] lg:tw-w-[536px]">
            <div className=" tw-absolute tw-flex tw-items-center tw-justify-center tw-mt-[21px] tw-bg-white tw-w-[59px] tw-h-[22px] tw-text-[11px] tw-font-medium">
              JUN 20
            </div>
            <img
              className=""
              src="https://yevgenysim-turkey.github.io/shopper/assets/img/blog/blog-6.jpg"
              alt=""
            />
            <div>
              <h2 className=" tw-text-[24px] tw-font-[500] tw-my-[24px]">
                Third darkness and second dry second greater.
              </h2>
              <p className=" tw-relative tw-mt-[-12px] tw-font-thin tw-text-[16px]">
                Let meat subdue the first for fourth is. Them our meat
                isn&lsquo;t you'll, you're place Years dominion shall from years
                a hath Good appear yielding.
              </p>
              <div className=" tw-mb-[70px]">
                <button className=" tw-my-[14px] tw-text-[17px] tw-font-[500] tw-flex">
                  Read More
                </button>
                <span className=" tw-absolute tw-text-[22px] hover:tw-ml-[97px] tw-transition-all tw-duration-300 tw-ml-[90px] tw-mt-[-38px]">
                  <BsArrowRightShort />
                </span>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/blogPost"}>
          <div className=" tw-flex tw-flex-col tw-w-[335px] lg:tw-w-[536px]">
            <div className=" tw-absolute tw-flex tw-items-center tw-justify-center tw-mt-[21px] tw-bg-white tw-w-[59px] tw-h-[22px] tw-text-[11px] tw-font-medium">
              JUN 20
            </div>
            <img
              className=""
              src="https://yevgenysim-turkey.github.io/shopper/assets/img/blog/blog-7.jpg"
              alt=""
            />
            <div>
              <h2 className=" tw-text-[24px] tw-font-[500] tw-my-[24px]">
                Heaven upon heaven moveth every have.
              </h2>
              <p className=" tw-relative tw-mt-[-12px] tw-font-thin tw-text-[16px]">
                Divide own, there tree forth whales you, fill creepeth our.
                You&rsquo;re itself may yielding green was fly one kind fish
                hath be be winged.
              </p>
              <div className=" tw-mb-[70px]">
                <button className=" tw-my-[14px] tw-text-[17px] tw-font-[500] tw-flex">
                  Read More
                </button>
                <span className=" tw-absolute tw-text-[22px] hover:tw-ml-[97px] tw-transition-all tw-duration-300 tw-ml-[90px] tw-mt-[-38px]">
                  <BsArrowRightShort />
                </span>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/blogPost"}>
          <div className=" tw-flex tw-flex-col tw-w-[335px] lg:tw-w-[536px]">
            <div className=" tw-absolute tw-flex tw-items-center tw-justify-center tw-mt-[21px] tw-bg-white tw-w-[59px] tw-h-[22px] tw-text-[11px] tw-font-medium">
              JUN 20
            </div>
            <img
              className=""
              src="https://yevgenysim-turkey.github.io/shopper/assets/img/blog/blog-8.jpg"
              alt=""
            />
            <div>
              <h2 className=" tw-text-[24px] tw-font-[500] tw-my-[24px]">
                Created their subdue together.
              </h2>
              <p className=" tw-relative tw-mt-[-12px] tw-font-thin tw-text-[16px]">
                Stars female night fowl our second in great can't after he sea
                thing so a said two. Fowl may open first.
              </p>
              <div className=" tw-mb-[70px]">
                <button className=" tw-my-[14px] tw-text-[17px] tw-font-[500] tw-flex">
                  Read More
                </button>
                <span className=" tw-absolute tw-text-[22px] hover:tw-ml-[97px] tw-transition-all tw-duration-300 tw-ml-[90px] tw-mt-[-38px]">
                  <BsArrowRightShort />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className=" tw-mt-[34px]">
        <div className=" tw-flex tw-flex-col tw-gap-6 tw-justify-center tw-items-center">
          <p className=" tw-text-[15px] tw-text-gray-500 tw-font-[500]">
            Showing 16 of 24 products
          </p>
          <div className="tw-w-[255px] tw-bg-[#d7d7d7] tw-rounded-full tw-h-[2px] dark:bg-gray-700">
            <div className="tw-bg-black tw-h-[2px] tw-rounded-full tw-w-[66.67%]"></div>
          </div>
          <button className=" hover:tw-bg-black hover:tw-text-white tw-transition-all tw-duration-300 tw-mt-2 tw-mb-[61px] tw-font-medium tw-text-black tw-bg-transparent tw-border tw-py-[12px] tw-px-6 tw-border-black">
            Load more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;