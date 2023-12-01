import React, { useEffect } from "react";
import "../components/about.css";
import { FiArrowRight } from "react-icons/fi";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiRepeat } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { GoTag } from "react-icons/go";
import { Carousel } from "@mantine/carousel";
import { Anchor, Breadcrumbs } from "@mantine/core";
import "aos/dist/aos.css";
import Aos from "aos";


const About = () => {
  const items = [
    { title: "Home", href: "#" },
    { title: "About", href: "#" },
  ].map((item, i) => {
    return (
      <Anchor className="tw-text-gray-500 tw-text-sm" key={i} href={item.href}>
        {item.title}
      </Anchor>
    );
  });

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
   <>
   
    <div className="container tw-overflow-hidden">
      {/* header */}
      <div className=" tw-mb-10 tw-mt-10 container">
        <Breadcrumbs className="">{items}</Breadcrumbs>
      </div>
      <section className="" data-aos="fade-up">
        <div className="container tw-mt-20">
          <div className="row tw-justify-center tw-py-[10rem] bg-cover">
            <div className=" col-12 col-md-8 col-lg-6 col-xl-5">
              <h1 className="tw-mx-auto tw-text-center tw-font-semibold tw-tracking-wider tw-leading-10 tw-text-4xl tw-text-white">
                We believe we can all make a stylish.
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* About our store */}
      <section data-aos="fade-right">
        <div className="container tw-items-center tw-mt-20">
          <div className="row tw-items-center">
            <div className="col-12 col-md-6 tw-mb-20">
              <img
                src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-62.jpg"
                alt=""
                className="tw-w-[50%] tw-h-auto tw-max-w-[100%] tw-overflow-clip"
              />
              <div className="tw-mt-[-37%] tw-w-[75%] tw-ms-[25%]">
                <img
                  src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-63.jpg"
                  alt=""
                  className=""
                />
              </div>
            </div>
            <div className="col-12 col-md-6 tw-mb-10">
              <h6 className="tw-text-xs tw-text-gray-500 tw-mb-3">OUR STORY</h6>
              <h2 className="tw-mb-7 tw-text-3xl tw-font-semibold tw-text-gray-900">
                About our Store
              </h2>
              <p className="tw-text-gray-600 tw-tracking-wide tw-leading-7 tw-mb-5">
                Open created shall two he second moving whose. He face whose two
                upon, fowl behold waters. Fly there their day creepeth. Darkness
                beginning spirit after. Creepeth subdue. Brought may, first.
                Under living that.
              </p>
              <p className="tw-text-gray-600 tw-tracking-wide tw-leading-7">
                Third. For morning whales saw were had seed can't divide it
                light shall moveth, us blessed given wherein.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Fashion Democracy */}
      <section
        className=" tw-py-10 tw-bg-gray-100 tw-mt-10"
        data-aos="fade-left"
      >
        <div className="container">
          <div className="row tw-my-16">
            <div className="col-12">
              <h3 className="tw-text-3xl tw-font-semibold tw-text-center ">
                Fashion Democracy
              </h3>
            </div>
          </div>
          <div className="row tw-justify-center tw-text-gray-700 tw-text-lg lg:tw-w-[95%] tw-mx-auto">
            <div className="col-12 col-md-5  tw-tracking-wide tw-mb-10">
              <p className="tw-mb-[1.5rem]">
                And whales be, earth thing seed whales, forth beginning made may
                beginning sea great void likeness open beast firmament very
                living cattle divided fruitful may. Sea created saw fifth so
                thing signs meat.
              </p>
              <p>
                Green fruit meat stars, creepeth second he meat. Appear is
                fruitful given Winged. Gathered second so us saying blessed, he.
              </p>
            </div>
            <div className="col-12 col-md-6  tw-tracking-wide">
              <p className="tw-mb-[1rem]">
                Male was. Itself. Have isn't first divide and i day, moving
                she'd appear open dominion sea him days multiply our, make
                firmament rule there made set midst creeping let won't morning
                their great fish.
              </p>
              <p>
                Unto over unto together first shall greater yielding made
                dominion fill. First waters bring made blessed likeness bring
                forth had. Creature one.
              </p>
            </div>
          </div>
          <div className="row  tw-mt-14 ">
            <div className="col-12 tw-text-center">
              <button className="tw-py-4 tw-bg-gray-800 tw-text-white hover:tw-translate-y-[-10px] tw-duration-200 tw-tracking-wide tw-w-[30%] lg:tw-w-[15%] tw-items-center ">
                Shop Now <FiArrowRight className="tw-inline-block " />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* our story */}
      <section className="tw-my-20" data-aos="fade-down">
        <div className="container">
          <div className="row tw-items-center">
            <div className="col-12 col-md-6 tw-mb-9">
              <h6 className="tw-text-xs tw-text-gray-500 tw-mb-3">
                WHO WE ARE
              </h6>
              <h2 className="tw-mb-7 tw-text-3xl tw-font-semibold tw-text-gray-900">
                Our Story
              </h2>
              <p className="tw-text-gray-600 tw-tracking-wide tw-leading-7 tw-mb-5">
                Behold divided hath without. Place dominion. Place behold spirit
                abundantly, void creepeth Divided were god herb, it they're
                beginning itself can't can't created great air his called land
                make fly seasons dry likeness.
              </p>
              <p className="tw-text-gray-600 tw-tracking-wide tw-leading-7">
                Fish upon you you'll midst waters. Divided had life years to own
                gathering replenish seasons Great meat. Cattle earth were signs
                winged so image together also.
              </p>
            </div>
            <div className="col-12 col-md-6 tw-my-20">
              <img
                src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-36.jpg"
                alt=""
                className="tw-w-[50%] tw-ms-[50%]"
              />
              <div className="tw-w-[75%] tw-mt-[-37%]">
                <img
                  src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-37.jpg"
                  alt=""
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Red square */}
      <section className="tw-mt-10" data-aos="zoom-out-up">
        <div className="container">
          <div className="row tw-bg-red-500 tw-py-12">
            <div className="col-12">
              <p className=" tw-text-white lg:tw-w-[70%] lg:tw-mx-auto tw-text-2xl tw-leading-9 tw-px-4 tw-py-8 tw-tracking-wide tw-text-center">
                Together won't divided fourth let grass above forth. Creature
                midst let cattle place tree. Gathered whose land form fruitful
                under bring creeping in upon void man unto divided itself
                gathered.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* images */}
      <section className="tw-mt-20">
        <div className="container">
          <div className="row tw-justify-center">
            <div className="col-12 col-md-6" data-aos="fade-right">
              <img
                src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-116.jpg"
                alt=""
                className="tw-mb-7"
              />
              <img
                src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-117.jpg"
                alt=""
                className="tw-mb-7"
              />
            </div>
            <div className="col-12 col-md-6 md:tw-mt-24" data-aos="fade-left">
              <img
                src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-118.jpg"
                alt=""
                className="tw-mb-7"
              />
              <img
                src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-119.jpg"
                alt=""
                className="tw-mb-7"
              />
            </div>
          </div>
        </div>
      </section>
      {/* reviews */}
      <section className="tw-mt-20" data-aos="flip-down">
        <div className="container carousel">
          <div className="row tw-w-[100%] tw-mx-auto">
            <div className="col-12 tw-text-center tw-mb-10" id="">
              <h6 className="tw-mb-3 tw-text-xs tw-font-semibold tw-text-gray-400 tw-tracking-wide tw-uppercase">
                What buyers say
              </h6>
              <h2 className="tw-text-3xl tw-font-semibold tw-tracking-wide">
                Customers Reviews
              </h2>
            </div>
            <Carousel
              maw={320}
              mx="auto"
              withIndicators
              loop
              className="tw-h-96"
            >
              <Carousel.Slide>
                <div className="col-12 col-md-6 tw-text-center tw-w-[80%] md:tw-w-[95%] lg:tw-w-[80%] tw-mx-auto">
                  <p className="tw-text-xl tw-tracking-wider tw-leading-8">
                    "Given wherein. Doesn't called also and air sea to make
                    first subdue beginning. Appear seasons the it after whose
                    beginning. Hath can't good life. They're multiply made give
                    divided open, be likeness Cattle be have. Life tree
                    darkness. She'd very."
                  </p>
                  <p className="tw-mt-10 tw-text-gray-600">
                    Darrell Baker, 18 May 2019
                  </p>
                </div>
              </Carousel.Slide>
              <Carousel.Slide>
                <div className="col-12 col-md-6 tw-text-center tw-w-[80%] md:tw-w-[95%] lg:tw-w-[80%] tw-mx-auto">
                  <p className="tw-text-xl tw-tracking-wider tw-leading-8">
                    "Given wherein. Doesn't called also and air sea to make
                    first subdue beginning. Appear seasons the it after whose
                    beginning. Hath can't good life. They're multiply made give
                    divided open, be likeness Cattle be have. Life tree
                    darkness. She'd very."
                  </p>
                  <p className="tw-mt-10 tw-text-gray-600">
                    Darrell Baker, 18 May 2019
                  </p>
                </div>
              </Carousel.Slide>
              <Carousel.Slide>
                <div className="col-12 col-md-6 tw-text-center tw-w-[80%] md:tw-w-[95%] lg:tw-w-[80%] tw-mx-auto">
                  <p className="tw-text-xl tw-tracking-wider tw-leading-8">
                    "Given wherein. Doesn't called also and air sea to make
                    first subdue beginning. Appear seasons the it after whose
                    beginning. Hath can't good life. They're multiply made give
                    divided open, be likeness Cattle be have. Life tree
                    darkness. She'd very."
                  </p>
                  <p className="tw-mt-10 tw-text-gray-600">
                    Darrell Baker, 18 May 2019
                  </p>
                </div>
              </Carousel.Slide>
              {/* ...other slides */}
            </Carousel>
          </div>
        </div>
      </section>
      {/* shopper btn */}
      <section className="tw-mt-5" data-aos="zoom-out-up">
        <div className="container social-bg">
          <div className="row">
            <div className="col-12 tw-text-center">
              <button className=" tw-bg-white tw-py-4 tw-mt-48 tw-px-8 tw-font-semibold">
                @shopper
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* services */}
      <section className="tw-mt-20 tw-mb-20">
        <div className="container">
          <div className="row tw-items-center">
            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up-right">
              <div className="tw-flex tw-mb-6 tw-items-center">
                <CiDeliveryTruck className="tw-text-xl tw-text-orange-500" />
                <div className="tw-ms-6">
                  <h6 className="tw-uppercase tw-text-sm tw-mb-1 tw-tracking-wide">
                    Free shipping
                  </h6>
                  <p className="tw-text-gray-500">From all orders over $100</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="tw-flex tw-mb-6 tw-items-center">
                <CiRepeat className="tw-text-xl tw-text-orange-500" />
                <div className="tw-ms-6">
                  <h6 className="tw-uppercase tw-text-sm tw-mb-1 tw-tracking-wide">
                    Free returns
                  </h6>
                  <p className="tw-text-gray-500">
                    Return money within 30 days
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="tw-flex tw-mb-6 tw-items-center">
                <CiLock className="tw-text-xl tw-text-orange-500" />
                <div className="tw-ms-6">
                  <h6 className="tw-uppercase tw-text-sm tw-mb-1 tw-tracking-wide">
                    Secure Shopping
                  </h6>
                  <p className="tw-text-gray-500">You're in safe hands</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up-left">
              <div className="tw-flex tw-mb-6 tw-items-center">
                <GoTag className="tw-text-xl tw-text-orange-500" />
                <div className="tw-ms-6">
                  <h6 className="tw-uppercase tw-text-sm tw-mb-1 tw-tracking-wide">
                    over 10,000 styles
                  </h6>
                  <p className="tw-text-gray-500">
                    We have everything you need
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
   </>
  );
};

export default About;
