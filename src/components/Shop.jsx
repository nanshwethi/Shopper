// import { Carousel } from "@mantine/carousel";
import React from "react";
// import { BackgroundImage, Center, Text } from "@mantine/core";
import { BsXLg } from "react-icons/bs";
import { FiEye, FiShoppingCart } from "react-icons/fi";
import { BiHeart } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import { BsFillCaretRightFill, BsCaretLeftFill } from "react-icons/bs";

import {
  Accordion,
  Anchor,
  Box,
  Breadcrumbs,
  Button,
  CheckIcon,
  CloseButton,
  Collapse,
  ColorInput,
  ColorSwatch,
  Group,
  Text,
  rem,
  useMantineTheme,
} from "@mantine/core";
// import { RiArrowDropDownLine } from "react-icons/ri"
// import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";


const Shop = () => {
  // const [opened, { toggle }] = useDisclosure(false);
  const theme = useMantineTheme();
  const [checkedr, setCheckedr] = useState(true);
  const [checkedbr, setCheckedbr] = useState(true);
  const [checkedb, setCheckedb] = useState(true);
  const [checkedg, setCheckedg] = useState(true);
  const [checkedc, setCheckedc] = useState(true);


  const [checkedp, setCheckedp] = useState(true);

  const [checkedd, setCheckedd] = useState(true);

  const [checkedw, setCheckedw] = useState(true);

  const items = [
    { title: 'Home', href: '#' },
    { title: `Womens' Clothing`, href: '#' },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));
  return (
   <>
   
    <div>
      <div className=" container py-4">
        <div className="  row">
          <div className="  col-lg-3 col-sm-12">
            <div
              className=" accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed tw-font-medium tw-text-lg tw-my-1"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Category
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div
                    className=" accordion-body collapse show"
                    id="categoryCollapse"
                  >
                    <div className=" form-group">
                      <ul className=" list-group-flush mb-0" id="productsNav">
                        <li className=" list-group-item">
                          <a
                            className=" tw-text-lg tw-text-gray-600 tw-font-normal"
                            href="#"
                          >
                            All Products
                          </a>
                        </li>
                        <li className=" list-group-item tw-mt-4">
                          <a
                            className=" tw-text-lg tw-text-gray-600 tw-font-normal collapsed"
                            data-bs-toggle="collapse"
                            href="#blousesCollapse"
                            aria-expanded="false"
                          >
                            Blouses and Shirts
                          </a>

                          <div
                            className="collapse"
                            id="blousesCollapse"
                            data-bs-parent="#productsNav"
                          >
                            <div className="py-4 ps-5">
                              <div className="form-check mb-3">
                                <input
                                  className="form-check-input"
                                  id="blousesOne"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label tw-text-lg tw-text-gray-500 tw-font-normal tw-capitalize"
                                  htmlFor="blousesOne"
                                >
                                  Women Tops, Tees &amp; Blouses
                                </label>
                              </div>
                              <div className="form-check mb-3">
                                <input
                                  className="form-check-input"
                                  id="blousesTwo"
                                  type="checkbox"
                                />

                                <label
                                  className="form-check-label tw-text-lg tw-text-gray-500 tw-font-normal tw-capitalize"
                                  htmlFor="blousesTwo"
                                >
                                  Petite
                                </label>
                              </div>
                              <div className="form-check mb-3">
                                <input
                                  className="form-check-input"
                                  id="blousesThree"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label tw-text-lg tw-text-gray-500 tw-font-normal tw-capitalize"
                                  htmlFor="blousesThree"
                                >
                                  Petite-Size Blouses &amp; Button-Down Shirts
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  id="blousesFour"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label tw-text-lg tw-text-gray-500 tw-font-normal tw-capitalize"
                                  htmlFor="blousesFour"
                                >
                                  Women Plus Tops &amp; Tees
                                </label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item tw-mt-4">
                          <a
                            className="tw-text-lg tw-text-gray-600 tw-font-normal collapsed"
                            data-bs-toggle="collapse"
                            href="#coatsCollapse"
                            aria-expanded="false"
                          >
                            Coats and Jackets
                          </a>

                          <div
                            className="collapse"
                            id="coatsCollapse"
                            data-bs-parent="#productsNav"
                          >
                            <div className="py-4 ps-5">
                              <div className="form-check mb-3">
                                <input
                                  className="form-check-input"
                                  id="coatsOne"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label tw-text-lg tw-text-gray-500 tw-font-normal tw-capitalize"
                                  htmlFor="coatsOne"
                                >
                                  Coats, Jackets &amp; Vests
                                </label>
                              </div>
                              <div className="form-check mb-3">
                                <input
                                  className="form-check-input"
                                  id="coatsTwo"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label tw-text-lg tw-text-gray-500 tw-font-normal tw-capitalize"
                                  htmlFor="coatsTwo"
                                >
                                  Down Jackets &amp; Parkas
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  id="coatsThree"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label tw-text-lg tw-text-gray-500 tw-font-normal tw-capitalize"
                                  htmlFor="coatsThree"
                                >
                                  Wool &amp; Pea Coats Plus-Size
                                </label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className=" list-group-item tw-mt-4">
                          <a
                            className=" tw-text-lg tw-text-gray-600 tw-font-normal collapsed"
                            data-bs-toggle="collapse"
                            href="#dressesCollapse"
                            aria-expanded="false"
                          >
                            Dresses
                          </a>

                          <div
                            className="collapse"
                            id="dressesCollapse"
                            data-bs-parent="#productsNav"
                          >
                            <div className="py-4 ps-5">
                              <div className="form-check mb-3">
                                <input
                                  className="form-check-input"
                                  id="dressesOne"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label tw-text-lg tw-text-gray-500 tw-font-normal tw-capitalize"
                                  htmlFor="dressesOne"
                                >
                                  A-line Dresses
                                </label>
                              </div>
                              <div className="form-check mb-3">
                                <input
                                  className="form-check-input"
                                  id="dressesTwo"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label tw-text-lg tw-text-gray-500 tw-font-normal tw-capitalize"
                                  htmlFor="dressesTwo"
                                >
                                  Shift Dresses
                                </label>
                              </div>
                              <div className="form-check mb-3">
                                <input
                                  className="form-check-input"
                                  id="dressesThree"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label tw-text-lg tw-text-gray-500 tw-font-normal tw-capitalize"
                                  htmlFor="dressesThree"
                                >
                                  Wrap Dresses
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  id="dressesFour"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label tw-text-lg tw-text-gray-500 tw-font-normal tw-capitalize"
                                  htmlFor="dressesFour"
                                >
                                  Maxi Dresses
                                </label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item tw-mt-4">
                          <a
                            className="tw-text-lg tw-text-gray-600 tw-font-normal"
                            data-bs-toggle="collapse"
                            href="#hoodiesCollapse"
                            aria-expanded="true"
                          >
                            Hoodies and Sweats
                          </a>

                          <div
                            className="collapse show"
                            id="hoodiesCollapse"
                            data-bs-parent="#productsNav"
                          >
                            <div className="py-4 ps-5">
                              <div className="form-check mb-3">
                                <input
                                  className="form-check-input"
                                  id="hoodiesOne"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label tw-text-lg tw-text-gray-500 tw-font-normal tw-capitalize"
                                  htmlFor="hoodiesOne"
                                >
                                  Activewear
                                </label>
                              </div>
                              <div className="form-check mb-3">
                                <input
                                  className="form-check-input"
                                  id="hoodiesTwo"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label tw-text-lg tw-text-gray-500 tw-font-normal tw-capitalize"
                                  htmlFor="hoodiesTwo"
                                >
                                  Fashion Hoodies &amp; Sweatshirts
                                </label>
                              </div>
                              <div className="form-check mb-3">
                                <input
                                  className="form-check-input"
                                  id="hoodiesThree"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label tw-text-lg tw-text-gray-500 tw-font-normal tw-capitalize"
                                  htmlFor="hoodiesThree"
                                >
                                  Big &amp; Tall Sweatshirts
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  id="hoodiesFour"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label tw-text-lg tw-text-gray-500 tw-font-normal tw-capitalize"
                                  htmlFor="hoodiesFour"
                                >
                                  Big &amp; Tall Fashion Hoodies
                                </label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item tw-mt-4">
                          <a
                            className="list-styled-link tw-text-lg tw-text-gray-600 tw-font-normal collapsed"
                            data-bs-toggle="collapse"
                            href="#denimCollapse"
                            aria-expanded="false"
                          >
                            Denim
                          </a>

                          <div
                            className="collapse"
                            id="denimCollapse"
                            data-bs-parent="#productsNav"
                          >
                            <div className="py-4 ps-5">
                              <div className="form-check mb-3">
                                <input
                                  className="form-check-input"
                                  id="denimOne"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label tw-text-lg tw-text-gray-500 tw-font-normal tw-capitalize"
                                  htmlFor="denimOne"
                                >
                                  Women Shorts
                                </label>
                              </div>
                              <div className="form-check mb-3">
                                <input
                                  className="form-check-input"
                                  id="denimTwo"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label tw-text-lg tw-text-gray-500 tw-font-normal tw-capitalize"
                                  htmlFor="denimTwo"
                                >
                                  Juniors' Shorts
                                </label>
                              </div>
                              <div className="form-check mb-3">
                                <input
                                  className="form-check-input"
                                  id="denimThree"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label tw-text-lg tw-text-gray-500 tw-font-normal tw-capitalize"
                                  htmlFor="denimThree"
                                >
                                  Petite
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  id="denimFour"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label tw-text-lg tw-text-gray-500 tw-font-normal tw-capitalize"
                                  htmlFor="denimFour"
                                >
                                  Women Plus Shorts
                                </label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item tw-mt-4">
                          <a
                            className="list-styled-link tw-text-lg tw-text-gray-600 tw-font-normal collapsed"
                            data-bs-toggle="collapse"
                            href="#jeansCollapse"
                            aria-expanded="false"
                          >
                            Jeans
                          </a>

                          <div
                            className="collapse"
                            id="jeansCollapse"
                            data-bs-parent="#productsNav"
                          >
                            <div className="py-4 ps-5">
                              <div className="form-check mb-3">
                                <input
                                  className="form-check-input"
                                  id="jeansOne"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label tw-text-lg tw-text-gray-500 tw-font-normal tw-capitalize"
                                  htmlFor="jeansOne"
                                >
                                  Men Jeans
                                </label>
                              </div>
                              <div className="form-check mb-3">
                                <input
                                  className="form-check-input"
                                  id="jeansTwo"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label tw-text-lg tw-text-gray-500 tw-font-normal tw-capitalize"
                                  htmlFor="jeansTwo"
                                >
                                  Men Big &amp; Tall Jeans
                                </label>
                              </div>
                              <div className="form-check mb-3">
                                <input
                                  className="form-check-input"
                                  id="jeansThree"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label tw-text-lg tw-text-gray-500 tw-font-normal tw-capitalize"
                                  htmlFor="jeansThree"
                                >
                                  Surf, Skate &amp; Street Clothing
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  id="jeansFour"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label tw-text-lg tw-text-gray-500 tw-font-normal tw-capitalize"
                                  htmlFor="jeansFour"
                                >
                                  Men Big &amp; Tall Pants
                                </label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item tw-mt-4">
                          <a
                            className="list-styled-link tw-text-lg tw-text-gray-600 tw-font-normal collapsed"
                            data-bs-toggle="collapse"
                            href="#jumpersCollapse"
                            aria-expanded="false"
                          >
                            Jumpers and Cardigans
                          </a>

                          <div
                            className="collapse"
                            id="jumpersCollapse"
                            data-bs-parent="#productsNav"
                          >
                            <div className="py-4 ps-5">
                              <div className="form-check mb-3">
                                <input
                                  className="form-check-input"
                                  id="jumpersOne"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label tw-text-lg tw-text-gray-500 tw-font-normal tw-capitalize"
                                  htmlFor="jumpersOne"
                                >
                                  Sweaters Plus-Size
                                </label>
                              </div>
                              <div className="form-check mb-3">
                                <input
                                  className="form-check-input"
                                  id="jumpersTwo"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label tw-text-lg tw-text-gray-500 tw-font-normal tw-capitalize"
                                  htmlFor="jumpersTwo"
                                >
                                  Plus Sweaters
                                </label>
                              </div>
                              <div className="form-check mb-3">
                                <input
                                  className="form-check-input"
                                  id="jumpersThree"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label tw-text-lg tw-text-gray-500 tw-font-normal tw-capitalize"
                                  htmlFor="jumpersThree"
                                >
                                  Petite Cardigans
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  id="jumpersFour"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label tw-text-lg tw-text-gray-500 tw-font-normal tw-capitalize"
                                  htmlFor="jumpersFour"
                                >
                                  Tops, Tees &amp; Blouses
                                </label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item tw-mt-4">
                          <a
                            className="list-styled-link tw-text-lg tw-text-gray-600 tw-font-normal collapsed"
                            data-bs-toggle="collapse"
                            href="#legginsCollapse"
                            aria-expanded="false"
                          >
                            Leggings
                          </a>

                          <div
                            className="collapse"
                            id="legginsCollapse"
                            data-bs-parent="#productsNav"
                          >
                            <div className="py-4 ps-5">
                              <div className="form-check mb-3">
                                <input
                                  className="form-check-input"
                                  id="legginsOne"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label tw-text-lg tw-text-gray-500 tw-font-normal tw-capitalize"
                                  htmlFor="legginsOne"
                                >
                                  Novelty Leggings
                                </label>
                              </div>
                              <div className="form-check mb-3">
                                <input
                                  className="form-check-input"
                                  id="legginsTwo"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label tw-text-lg tw-text-gray-500 tw-font-normal tw-capitalize"
                                  htmlFor="legginsTwo"
                                >
                                  Novelty Pants &amp; Capris
                                </label>
                              </div>
                              <div className="form-check mb-3">
                                <input
                                  className="form-check-input"
                                  id="legginsThree"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label tw-text-lg tw-text-gray-500 tw-font-normal tw-capitalize"
                                  htmlFor="legginsThree"
                                >
                                  Women Yoga Leggings
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  id="legginsFour"
                                  type="checkbox"
                                />
                                <label
                                  className="form-check-label tw-text-lg tw-text-gray-500 tw-font-normal tw-capitalize"
                                  htmlFor="legginsFour"
                                >
                                  Workout &amp; Training Leggings
                                </label>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed tw-font-medium tw-text-lg tw-my-1"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Season
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div
                      className="collapse show"
                      id="seasonCollapse"
                      data-simplebar-collapse="#seasonGroup"
                    >
                      <div
                        className="form-group form-group-overflow mb-6"
                        id="seasonGroup"
                        data-simplebar="init"
                      >
                        <div className="simplebar-wrapper">
                          <div className="simplebar-height-auto-observer-wrapper">
                            <div className="simplebar-height-auto-observer"></div>
                          </div>
                          <div className="simplebar-mask">
                            <div className="simplebar-offset">
                              <div
                                className="simplebar-content-wrapper"
                                tabIndex="0"
                                role="region"
                                aria-label="scrollable content"
                              >
                                <div className="simplebar-content">
                                  <div className="form-check mb-3">
                                    <input
                                      className="form-check-input"
                                      id="seasonOne"
                                      type="checkbox"
                                    />
                                    <label
                                      className="form-check-label tw-text-lg tw-text-gray-600 tw-font-normal"
                                      htmlFor="seasonOne"
                                    >
                                      Summer
                                    </label>
                                  </div>
                                  <div className="form-check mb-3">
                                    <input
                                      className="form-check-input"
                                      id="seasonTwo"
                                      type="checkbox"
                                    />
                                    <label
                                      className="form-check-label tw-text-lg tw-text-gray-600 tw-font-normal"
                                      htmlFor="seasonTwo"
                                    >
                                      Winter
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      id="seasonThree"
                                      type="checkbox"
                                    />
                                    <label
                                      className="form-check-label tw-text-lg tw-text-gray-600 tw-font-normal"
                                      htmlFor="seasonThree"
                                    >
                                      Spring &amp; Autumn
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="simplebar-placeholder"></div>
                        </div>
                        <div className="simplebar-track simplebar-horizontal">
                          <div className="simplebar-scrollbar"></div>
                        </div>
                        <div className="simplebar-track simplebar-vertical">
                          <div className="simplebar-scrollbar"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed tw-font-medium tw-text-lg tw-my-1"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Size
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div
                      className="collapse show"
                      id="seasonCollapse"
                      data-simplebar-collapse="#seasonGroup"
                    >
                      <div className=" tw-flex tw-flex-col ">
                        <div className=" tw-flex tw-justify-around">
                        <div className=" tw-me-3 tw-mb-3">
                          {/* <input
                                      className="form-check-input"
                                      id="seasonOne"
                                      type="checkbox"
                                    /> */}
                          <Button
                            variant="outline"
                            className="tw-text-lg tw-text-gray-600 tw-font-normal"
                          >
                            3XS
                          </Button>
                        </div>
                        <div className=" tw-me-3 tw-mb-3">
                          {/* <input
                                      className="form-check-input"
                                      id="seasonTwo"
                                      type="checkbox"
                                    /> */}
                          <Button
                            variant="outline"
                            className="tw-text-lg tw-text-gray-600 tw-font-normal"
                          >
                            2XS
                          </Button>
                        </div>
                        <div className="tw-me-3 tw-mb-3">
                          {/* <input
                                      className="form-check-input"
                                      id="seasonTwo"
                                      type="checkbox"
                                    /> */}
                          <Button
                            variant="outline"
                            className="tw-text-lg tw-text-gray-600 tw-font-normal"
                          >
                            XS
                          </Button>
                        </div>
                        <div className="tw-me-3 tw-mb-3">
                          {/* <input
                                      className="form-check-input"
                                      id="seasonTwo"
                                      type="checkbox"
                                    /> */}
                          <Button
                            variant="outline"
                            className="tw-text-lg tw-text-gray-600 tw-font-normal"
                          >
                            S
                          </Button>
                        </div>
                        </div>
                        <div className="tw-flex tw-justify-around">
                        <div className="tw-me-3 tw-mb-3">
                          {/* <input
                                      className="form-check-input"
                                      id="seasonTwo"
                                      type="checkbox"
                                    /> */}
                          <Button
                            variant="outline"
                            className="tw-text-lg tw-text-gray-600 tw-font-normal"
                          >
                            M
                          </Button>
                        </div>
                        <div className="tw-me-3 tw-mb-3">
                          {/* <input
                                      className="form-check-input"
                                      id="seasonTwo"
                                      type="checkbox"
                                    /> */}
                          <Button
                            variant="outline"
                            className="tw-text-lg tw-text-gray-600 tw-font-normal"
                          >
                            M
                          </Button>
                        </div>
                        <div className="tw-me-3 tw-mb-3">
                          {/* <input
                                      className="form-check-input"
                                      id="seasonTwo"
                                      type="checkbox"
                                    /> */}
                          <Button
                            variant="outline"
                            className="tw-text-lg tw-text-gray-600 tw-font-normal"
                          >
                            L
                          </Button>
                        </div>
                        <div className="tw-me-3 tw-mb-3">
                          {/* <input
                                      className="form-check-input"
                                      id="seasonTwo"
                                      type="checkbox"
                                    /> */}
                          <Button
                            variant="outline"
                            className="tw-text-lg tw-text-gray-600 tw-font-normal"
                          >
                            XL
                          </Button>
                        </div>
                        </div>
                        <div className=" tw-flex tw-justify-around">
                        <div className="tw-me-3 tw-mb-3">
                          {/* <input
                                      className="form-check-input"
                                      id="seasonTwo"
                                      type="checkbox"
                                    /> */}
                          <Button
                            variant="outline"
                            className="tw-text-lg tw-text-gray-600 tw-font-normal"
                          >
                            2XL
                          </Button>
                        </div>
                        <div className="tw-me-3 tw-mb-3">
                          {/* <input
                                      className="form-check-input"
                                      id="seasonTwo"
                                      type="checkbox"
                                    /> */}
                          <Button
                            variant="outline"
                            className="tw-text-lg tw-text-gray-600 tw-font-normal"
                          >
                            3XL
                          </Button>
                        </div>
                        <div className="tw-me-3 tw-mb-3">
                          {/* <input
                                      className="form-check-input"
                                      id="seasonTwo"
                                      type="checkbox"
                                    /> */}
                          <Button
                            variant="outline"
                            className="tw-text-lg tw-text-gray-600 tw-font-normal"
                          >
                            4XL
                          </Button>
                        </div>
                        <div className="tw-me-3 tw-mb-3">
                          {/* <input
                                      className="form-check-input"
                                      id="seasonTwo"
                                      type="checkbox"
                                    /> */}
                          <Button
                            variant="outline"
                            className="tw-text-lg tw-text-gray-600 tw-font-normal"
                          >
                            One Size
                          </Button>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button
                    className="accordion-button collapsed tw-font-medium tw-text-lg tw-my-1"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    Color
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div
                      className="collapse show"
                      id="colorCollapse"
                      data-simplebar-collapse="#colorGroup"
                    >
                      <div
                        className="form-group form-group-overflow mb-6"
                        id="colorGroup"
                        data-simplebar="init"
                      >
                        <div className="simplebar-wrapper">
                          <div className="simplebar-height-auto-observer-wrapper">
                            <div className="simplebar-height-auto-observer"></div>
                          </div>
                          <div className="simplebar-mask">
                            <div className="simplebar-offset">
                              <div
                                className="simplebar-content-wrapper"
                                tabIndex="0"
                                role="region"
                                aria-label="scrollable content"
                              >
                                <div className="simplebar-content">
                                  <div className=" tw-flex tw-item-center tw-mb-3">
                                    <ColorSwatch
                                      className=" tw-me-3"
                                      component="button"
                                      color={theme.colors.dark[8]}
                                      onClick={() => setCheckedd((c) => !c)}
                                      sx={{ color: "#fff", cursor: "pointer" }}
                                    >
                                      {checkedd && <CheckIcon width={rem(10)} />}
                                    </ColorSwatch>

                                    <label
                                      className=" tw-text-lg tw-text-gray-600 tw-font-normal text-body"
                                      htmlFor="colorOne"
                                    >
                                      Black
                                    </label>
                                  </div>
                                  <div className=" tw-flex tw-item-center tw-mb-3">
                                    <ColorSwatch
                                      className=" tw-me-3"
                                      component="button"
                                      color={theme.colors.gray[0]}
                                      onClick={() => setCheckedw((c) => !c)}
                                      sx={{ color: "#000", cursor: "pointer" }}
                                    >
                                      {checkedw && <CheckIcon width={rem(10)} />}
                                    </ColorSwatch>

                                    <label
                                      className=" tw-text-lg tw-text-gray-600 tw-font-normal text-body"
                                      htmlFor="colorOne"
                                    >
                                      White
                                    </label>
                                  </div>
                                  <div className=" tw-flex tw-item-center tw-mb-3">
                                    <ColorSwatch
                                      className=" tw-me-3"
                                      component="button"
                                      color={theme.colors.indigo[7]}
                                      onClick={() => setCheckedb((c) => !c)}
                                      sx={{ color: "#fff", cursor: "pointer" }}
                                    >
                                      {checkedb && <CheckIcon width={rem(10)} />}
                                    </ColorSwatch>

                                    <label
                                      className=" tw-text-lg tw-text-gray-600 tw-font-normal text-body"
                                      htmlFor="colorOne"
                                    >
                                      Blue
                                    </label>
                                  </div>
                                  <div className=" tw-flex tw-item-center tw-mb-3">
                                    <ColorSwatch
                                      className=" tw-me-3"
                                      component="button"
                                      color={theme.colors.red[7]}
                                      onClick={() => setCheckedr((c) => !c)}
                                      sx={{ color: "#fff", cursor: "pointer" }}
                                    >
                                      {checkedr && <CheckIcon width={rem(10)} />}
                                    </ColorSwatch>

                                    <label
                                      className=" tw-text-lg tw-text-gray-600 tw-font-normal text-body"
                                      htmlFor="colorOne"
                                    >
                                      Red
                                    </label>
                                  </div>
                                  <div className=" tw-flex tw-item-center tw-mb-3">
                                    <ColorSwatch
                                      className=" tw-me-3"
                                      component="button"
                                      color={theme.colors.pink[9]}
                                      onClick={() => setCheckedbr((c) => !c)}
                                      sx={{ color: "#fff", cursor: "pointer" }}
                                    >
                                      {checkedbr && <CheckIcon width={rem(10)} />}
                                    </ColorSwatch>

                                    <label
                                      className=" tw-text-lg tw-text-gray-600 tw-font-normal text-body"
                                      htmlFor="colorOne"
                                    >
                                      Brown
                                    </label>
                                  </div>
                                  <div className=" tw-flex tw-item-center tw-mb-3">
                                    <ColorSwatch
                                      className=" tw-me-3"
                                      component="button"
                                      color={theme.colors.gray[5]}
                                      onClick={() => setCheckedg((c) => !c)}
                                      sx={{ color: "#fff", cursor: "pointer" }}
                                    >
                                      {checkedg && <CheckIcon width={rem(10)} />}
                                    </ColorSwatch>

                                    <label
                                      className=" tw-text-lg tw-text-gray-600 tw-font-normal text-body"
                                      htmlFor="colorOne"
                                    >
                                      Gray
                                    </label>
                                  </div>
                                  <div className=" tw-flex tw-item-center tw-mb-3">
                                    <ColorSwatch
                                      className=" tw-me-3"
                                      component="button"
                                      color={theme.colors.cyan[6]}
                                      onClick={() => setCheckedc((c) => !c)}
                                      sx={{ color: "#fff", cursor: "pointer" }}
                                    >
                                      {checkedc && <CheckIcon width={rem(10)} />}
                                    </ColorSwatch>

                                    <label
                                      className=" tw-text-lg tw-text-gray-600 tw-font-normal text-body"
                                      htmlFor="colorOne"
                                    >
                                      Cyan
                                    </label>
                                  </div>
                                  <div className=" tw-flex tw-item-center tw-mb-3">
                                    <ColorSwatch
                                      className=" tw-me-3"
                                      component="button"
                                      color={theme.colors.pink[5]}
                                      onClick={() => setCheckedp((c) => !c)}
                                      sx={{ color: "#fff", cursor: "pointer" }}
                                    >
                                      {checkedp && <CheckIcon width={rem(10)} />}
                                    </ColorSwatch>

                                    <label
                                      className=" tw-text-lg tw-text-gray-600 tw-font-normal text-body"
                                      htmlFor="colorOne"
                                    >
                                      Pink
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="simplebar-placeholder"></div>
                        </div>
                        <div className="simplebar-track simplebar-horizontal">
                          <div className="simplebar-scrollbar"></div>
                        </div>
                        <div className="simplebar-track simplebar-vertical">
                          <div className="simplebar-scrollbar"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFive">
                  <button
                    className="accordion-button collapsed tw-font-medium tw-text-lg tw-my-1"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    Brand
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFive"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div
                      className="form-group form-group-overflow mb-6"
                      id="brandGroup"
                      data-simplebar="init"
                    >
                      <div className="simplebar-wrapper">
                        <div className="simplebar-height-auto-observer-wrapper">
                          <div className="simplebar-height-auto-observer"></div>
                        </div>
                        <div className="simplebar-mask">
                          <div className="simplebar-offset">
                            <div
                              className="simplebar-content-wrapper"
                              tabIndex="0"
                              role="region"
                              aria-label="scrollable content"
                            >
                              <div className="simplebar-content">
                                <div className="list">
                                  <div className="form-check mb-3">
                                    <input
                                      className="form-check-input"
                                      id="brandOne"
                                      type="checkbox"
                                    />
                                    <label
                                      className="form-check-label name tw-text-lg tw-text-gray-600 tw-font-normal"
                                      htmlFor="brandOne"
                                    >
                                      Dsquared2
                                    </label>
                                  </div>
                                  <div className="form-check mb-3">
                                    <input
                                      className="form-check-input"
                                      id="brandTwo"
                                      type="checkbox"
                                      disabled=""
                                    />
                                    <label
                                      className="form-check-label name tw-text-lg tw-text-gray-600 tw-font-normal"
                                      htmlFor="brandTwo"
                                    >
                                      Alexander McQueen
                                    </label>
                                  </div>
                                  <div className="form-check mb-3">
                                    <input
                                      className="form-check-input"
                                      id="brandThree"
                                      type="checkbox"
                                    />
                                    <label
                                      className="form-check-label name tw-text-lg tw-text-gray-600 tw-font-normal"
                                      htmlFor="brandThree"
                                    >
                                      Balenciaga
                                    </label>
                                  </div>
                                  <div className="form-check mb-3">
                                    <input
                                      className="form-check-input"
                                      id="brandFour"
                                      type="checkbox"
                                    />
                                    <label
                                      className="form-check-label name tw-text-lg tw-text-gray-600 tw-font-normal"
                                      htmlFor="brandFour"
                                    >
                                      Adidas
                                    </label>
                                  </div>
                                  <div className="form-check mb-3">
                                    <input
                                      className="form-check-input"
                                      id="brandFive"
                                      type="checkbox"
                                    />
                                    <label
                                      className="form-check-label name tw-text-lg tw-text-gray-600 tw-font-normal"
                                      htmlFor="brandFive"
                                    >
                                      Balmain
                                    </label>
                                  </div>
                                  <div className="form-check mb-3">
                                    <input
                                      className="form-check-input"
                                      id="brandSix"
                                      type="checkbox"
                                    />
                                    <label
                                      className="form-check-label name tw-text-lg tw-text-gray-600 tw-font-normal"
                                      htmlFor="brandSix"
                                    >
                                      Burberry
                                    </label>
                                  </div>
                                  <div className="form-check mb-3">
                                    <input
                                      className="form-check-input"
                                      id="brandSeven"
                                      type="checkbox"
                                    />
                                    <label
                                      className="form-check-label name tw-text-lg tw-text-gray-600 tw-font-normal"
                                      htmlFor="brandSeven"
                                    >
                                      Chloé
                                    </label>
                                  </div>
                                  <div className="form-check mb-3">
                                    <input
                                      className="form-check-input"
                                      id="brandEight"
                                      type="checkbox"
                                    />
                                    <label
                                      className="form-check-label name tw-text-lg tw-text-gray-600 tw-font-normal"
                                      htmlFor="brandEight"
                                    >
                                      Kenzo
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      id="brandNine"
                                      type="checkbox"
                                    />
                                    <label
                                      className="form-check-label name tw-text-lg tw-text-gray-600 tw-font-normal"
                                      htmlFor="brandNine"
                                    >
                                      Givenchy
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="simplebar-placeholder"></div>
                      </div>
                      <div className="simplebar-track simplebar-horizontal">
                        <div className="simplebar-scrollbar"></div>
                      </div>
                      <div className="simplebar-track simplebar-vertical">
                        <div className="simplebar-scrollbar"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingSix">
                  <button
                    className="accordion-button collapsed tw-font-medium tw-text-lg tw-my-1"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSix"
                    aria-expanded="false"
                    aria-controls="flush-collapseSix"
                  >
                    Price
                  </button>
                </h2>
                <div
                  id="flush-collapseSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingSix"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div
                      className="collapse show"
                      id="priceCollapse"
                      data-simplebar-collapse="#priceGroup"
                    >
                      <div
                        className="form-group form-group-overflow mb-6"
                        id="priceGroup"
                        data-simplebar="init"
                      >
                        <div className="simplebar-wrapper">
                          <div className="simplebar-height-auto-observer-wrapper">
                            <div className="simplebar-height-auto-observer"></div>
                          </div>
                          <div className="simplebar-mask">
                            <div className="simplebar-offset">
                              <div
                                className="simplebar-content-wrapper"
                                tabIndex="0"
                                role="region"
                                aria-label="scrollable content"
                              >
                                <div className="simplebar-content">
                                  <div className="form-check mb-3">
                                    <input
                                      className="form-check-input"
                                      id="priceOne"
                                      type="checkbox"
                                    />
                                    <label
                                      className="form-check-label tw-text-lg tw-text-gray-600 tw-font-normal"
                                      htmlFor="priceOne"
                                    >
                                      $10.00 - $49.00
                                    </label>
                                  </div>
                                  <div className="form-check mb-3">
                                    <input
                                      className="form-check-input"
                                      id="priceTwo"
                                      type="checkbox"
                                    />
                                    <label
                                      className="form-check-label tw-text-lg tw-text-gray-600 tw-font-normal"
                                      htmlFor="priceTwo"
                                    >
                                      $50.00 - $99.00
                                    </label>
                                  </div>
                                  <div className="form-check mb-3">
                                    <input
                                      className="form-check-input"
                                      id="priceThree"
                                      type="checkbox"
                                    />
                                    <label
                                      className="form-check-label tw-text-lg tw-text-gray-600 tw-font-normal"
                                      htmlFor="priceThree"
                                    >
                                      $100.00 - $199.00
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      id="priceFour"
                                      type="checkbox"
                                    />
                                    <label
                                      className="form-check-label tw-mb-3 tw-text-lg tw-text-gray-600 tw-font-normal"
                                      htmlFor="priceFour"
                                    >
                                      $200.00 and Up
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="simplebar-placeholder"></div>
                        </div>
                        <div className="simplebar-track simplebar-horizontal">
                          <div className="simplebar-scrollbar"></div>
                        </div>
                        <div className="simplebar-track simplebar-vertical">
                          <div className="simplebar-scrollbar"></div>
                        </div>
                      </div>

                      <div className="d-flex align-items-center">
                        <input
                          type="number"
                          className="form-control form-control-xs"
                          placeholder="$10.00"
                          min="10"
                        />

                        <div className="text-gray-350 mx-2">‒</div>

                        <input
                          type="number"
                          className="form-control form-control-xs"
                          placeholder="$350.00"
                          max="350"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=""></div>
          </div>

          <div className=" col-lg-9 col-sm-12">
            <div className=" d-flex flex-column">
              <div className=" col-12">
                <div id="carouselExampleCaptions" className="carousel slide ">
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner tw-min-h-fit">
                    <div className=" carousel-item active">
                      <div className=" d-flex">
                        <div className=" tw-w-[50%]">
                          <div className="d-none d-md-block bg-img1 tw-h-[400px] ">
                            <div className=" d-flex align-items-center tw-ms-20 tw-h-[100%]">
                              <div className=" py-4 px-2">
                                <h4 className=" tw-text-2xl tw-font-medium">
                                  2019 Summer
                                </h4>
                                <span className=" tw-text-2xl tw-font-medium">
                                  Collection
                                </span>
                                <div className=" tw-mt-6 tw-font-medium tw-text-lg d-flex align-items-center ">
                                  <a className=" tw-me-4 " href="#">
                                    View Collection
                                  </a>
                                  <div className=" tw-text-xl tw-transition tw-delay-150 tw-duration-300 hover:tw-translate-x-2">
                                    <i className=" ">
                                      <BiRightArrowAlt />
                                    </i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className=" tw-w-[50%] bg-img2"></div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className=" d-none d-md-block bg-img3">
                        <div className=" d-flex justify-content-start align-items-center tw-h-[400px]">
                          <div className=" tw-ms-20 ">
                            <div className=" tw-text-3xl tw-font-medium tw-mb-7">
                              <h4 className="  ">Get -50% from</h4>
                              <span className="">Summer Collection</span>
                            </div>

                            <p className=" tw-text-base tw-text-gray-600">
                              Appear, dry there darkness they're
                            </p>
                            <span className=" tw-text-base">seas.</span>
                            <br />
                            <strong className=" tw-text-red-500 tw-text-base tw-font-medium">
                              Use code 4GF5SD
                            </strong>

                            <div className=" tw-mt-7 ">
                              <a
                                className=" d-flex align-items-center tw-justify-around tw-p-3 tw-text-lg tw-font-medium tw-transition tw-delay-75 tw-w-40 tw-outline tw-outline-gray-400 hover:tw-bg-gray-900 hover:tw-text-yellow-50"
                                href=""
                              >
                                Shop Now
                                <BiRightArrowAlt className=" tw-text-xl tw-ms-4 tw-transition tw-delay-150 tw-duration-300 hover:tw-translate-x-2" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className=" d-flex justify-content-center align-items-center tw-h-[400px] bg-img4">
                        <div className="">
                          <div className="card-body tw-px-md-10 tw-py-11 text-center text-white">
                            <p className=" tw-uppercase tw-text-base tw-mb-7">
                              Enjoy an extra
                            </p>

                            <h1 className=" tw-uppercase tw-text-6xl tw-tracking-wide tw-font-semibold tw-mb-5">
                              50% off
                            </h1>

                            <a
                              className=" tw-font-medium tw-text-base tw-underline-offset-8 tw-no-underline hover:tw-underline tw-decoration-white tw-decoration-2"
                              href="shop.html"
                            >
                              Shop Collection
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>

              <div className=" col-12 tw-mt-16 tw-mb-6 tw-flex tw-justify-between tw-item-center">
                <div className="">
                  <h1 className=" tw-text-3xl tw-font-medium tw-mb-3">
                    Womens' Clothing
                  </h1>
                  <div className=" tw-text-gray-500">
                    {/* <p className=" tw-text-gray-600 tw-text-lg">Home</p>
                    <span className=" tw-text-gray-600 tw-text-lg">Womens' Clothing</span> */}

                
                      
                      
      <Breadcrumbs separator=">" mt="xs" className="tw-text-gray-500 tw-text-sm">{items}</Breadcrumbs>
                 
                  </div>
                </div>
                <div className="">
                  <a className=" tw-p-2 tw-text-lg tw-font-medium tw-transition tw-delay-75 tw-w-50 tw-outline tw-outline-gray-400 hover:tw-bg-gray-900 hover:tw-text-yellow-50">Most Popular</a>
                </div>
              </div>
              <div className="row tw-mb-12">
                <div className=" tw-flex tw-flex-wrap">
                  <div className=" d-flex tw-mb-3 justify-content-center align-items-center tw-p-4 tw-bg-gray-100 tw-me-4">
                    <h2 className=" tw-me-4 tw-text-base tw-text-gray-500">
                      Shift dresses
                    </h2>
                    <span className="">
                      <BsXLg className="" />
                    </span>
                  </div>
                    
                  <div className=" d-flex tw-mb-3 justify-content-center align-items-center tw-p-4 tw-bg-gray-100 tw-me-4">
                    <h2 className=" tw-me-4 tw-text-base tw-text-gray-500">
                      Summer
                    </h2>
                    <span className="">
                      <BsXLg className="" />
                    </span>
                  </div>
                  <div className=" d-flex tw-mb-3 justify-content-center align-items-center tw-p-4 tw-bg-gray-100 tw-me-4">
                    <h2 className=" tw-me-4 tw-text-base tw-text-gray-500">
                      M
                    </h2>
                    <span className="">
                      <BsXLg className="" />
                    </span>
                  </div>
                  <div className=" d-flex justify-content-center align-items-center tw-p-4 tw-bg-gray-100 tw-me-4">
                    <h2 className=" tw-me-4 tw-text-base tw-text-gray-500">
                      White
                    </h2>
                    <span className="">
                      <BsXLg className="" />
                    </span>
                  </div>
                  <div className=" d-flex justify-content-center align-items-center tw-p-4 tw-bg-gray-100 tw-me-4">
                    <h2 className=" tw-me-4 tw-text-base tw-text-gray-500">
                      Dress
                    </h2>
                    <span className="">
                      <BsXLg className="" />
                    </span>
                  </div>
                  <div className=" d-flex justify-content-center align-items-center tw-p-4 tw-bg-gray-100 tw-me-4">
                    <h2 className=" tw-me-4 tw-text-base tw-text-gray-500">
                      Adidas
                    </h2>
                    <span className="">
                      <BsXLg className="" />
                    </span>
                  </div>
                </div>
                <div className="d-flex tw-mt-4">
                  <div className=" d-flex justify-content-center align-items-center tw-p-4 tw-bg-gray-100 tw-me-4">
                    <h2 className=" tw-me-4 tw-text-base tw-text-gray-500">
                      $10.00 - $49.00
                    </h2>
                    <span className="">
                      <BsXLg className="" />
                    </span>
                  </div>
                  <div className=" d-flex justify-content-center align-items-center tw-p-4 tw-bg-gray-100">
                    <h2 className=" tw-me-4 tw-text-base tw-text-gray-500">
                      $50.00 - $99.00
                    </h2>
                    <span className="">
                      <BsXLg className="" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-6">
                  <div className=" card tw-mb-7">
                    <div className="badge bg-white text-body card-badge card-badge-start text-uppercase">
                      New
                    </div>

                    <div className=" card-img ">
                      <a className="card-img-hover">
                        <img
                          className="card-img-top card-img-back"
                          src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-5.jpg"
                          alt="..."
                        />
                        <img
                          className="card-img-top card-img-front"
                          src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-120.jpg"
                          alt="..."
                        />
                      </a>

                      <div className="card-actions ">
                        <span className="card-action eye">
                          <a
                            className="btn cus-btn-circle cus-btn-white"
                            data-bs-toggle="modal"
                            data-bs-target="#modalProduct"
                          >
                            <i className="">
                              <FiEye className=" tw-text-lg" />
                            </i>
                          </a>
                        </span>
                        <span className="card-action shop">
                          <a
                            className="btn cus-btn-circle cus-btn-white"
                            data-toggle="button"
                          >
                            <i className="">
                              <FiShoppingCart className=" tw-text-lg" />
                            </i>
                          </a>
                        </span>
                        <span className="card-action heart">
                          <a
                            className="btn cus-btn-circle cus-btn-white"
                            data-toggle="button"
                          >
                            <i className="">
                              <BiHeart className=" tw-text-lg" />
                            </i>
                          </a>
                        </span>
                      </div>
                    </div>

                    <div className=" -tw-mt-8 tw-p-2  tw-mb-3 ">
                      <div className=" ">
                        <a className=" tw-text-sm tw-text-gray-600" href="">
                          Shoes
                        </a>
                      </div>

                      <div className="tw-font-medium">
                        <a className="" href="">
                          Leather mid-heel Sandals
                        </a>
                      </div>

                      <div className=" tw-font-medium tw-text-gray-500">
                        $129.00
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-6">
                  <div className="card tw-mb-7">
                    <div className="badge bg-white text-body card-badge card-badge-start tw-text-uppercase">
                      New
                    </div>

                    <div className="card-img">
                      <a className="card-img-hover">
                        <img
                          className="card-img-top card-img-back"
                          src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-6.jpg"
                          alt="..."
                        />
                        <img
                          className="card-img-top card-img-front"
                          src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-121.jpg"
                          alt="..."
                        />
                      </a>

                      <div className="card-actions ">
                        <span className="card-action eye">
                          <a
                            className="btn cus-btn-circle cus-btn-white"
                            data-bs-toggle="modal"
                            data-bs-target="#modalProduct"
                          >
                            <i className="">
                              <FiEye className=" tw-text-lg" />
                            </i>
                          </a>
                        </span>
                        <span className="card-action shop">
                          <a
                            className="btn cus-btn-circle cus-btn-white"
                            data-toggle="button"
                          >
                            <i className="">
                              <FiShoppingCart className=" tw-text-lg" />
                            </i>
                          </a>
                        </span>
                        <span className="card-action heart">
                          <a
                            className="btn cus-btn-circle cus-btn-white"
                            data-toggle="button"
                          >
                            <i className="">
                              <BiHeart className=" tw-text-lg" />
                            </i>
                          </a>
                        </span>
                      </div>
                    </div>

                    <div className=" -tw-mt-8 tw-p-2  tw-mb-3 ">
                      <div className=" ">
                        <a className=" tw-text-sm tw-text-gray-600" href="">
                          Shoes
                        </a>
                      </div>

                      <div className="tw-font-medium">
                        <a className="" href="">
                          Leather mid-heel Sandals
                        </a>
                      </div>

                      <div className=" tw-font-medium tw-text-gray-500">
                        $129.00
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-6">
                  <div className="card tw-mb-7">
                    <div className="badge bg-dark card-badge card-badge-start text-uppercase">
                      Sale
                    </div>

                    <div className="card-img">
                      <a className="card-img-hover">
                        <img
                          className="card-img-top card-img-back"
                          src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-122.jpg"
                          alt="..."
                        />
                        <img
                          className="card-img-top card-img-front"
                          src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-7.jpg"
                          alt="..."
                        />
                      </a>

                      <div className="card-actions ">
                        <span className="card-action eye">
                          <a
                            className="btn cus-btn-circle cus-btn-white"
                            data-bs-toggle="modal"
                            data-bs-target="#modalProduct"
                          >
                            <i className="">
                              <FiEye className=" tw-text-lg" />
                            </i>
                          </a>
                        </span>
                        <span className="card-action shop">
                          <a
                            className="btn cus-btn-circle cus-btn-white"
                            data-toggle="button"
                          >
                            <i className="">
                              <FiShoppingCart className=" tw-text-lg" />
                            </i>
                          </a>
                        </span>
                        <span className="card-action heart">
                          <a
                            className="btn cus-btn-circle cus-btn-white"
                            data-toggle="button"
                          >
                            <i className="">
                              <BiHeart className=" tw-text-lg" />
                            </i>
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className=" -tw-mt-8 tw-p-2  tw-mb-3 ">
                      <div className=" ">
                        <a className=" tw-text-sm tw-text-gray-600" href="">
                          Shoes
                        </a>
                      </div>

                      <div className="tw-font-medium">
                        <a className="" href="">
                          Leather mid-heel Sandals
                        </a>
                      </div>

                      <div className=" tw-font-medium tw-text-gray-500">
                        $129.00
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-6">
                  <div className="card tw-mb-7">
                    <div className="badge bg-white text-body card-badge card-badge-start text-uppercase">
                      New
                    </div>

                    <div className="card-img">
                      <a className="card-img-hover">
                        <img
                          className="card-img-top card-img-back"
                          src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-8.jpg"
                          alt="..."
                        />
                      </a>

                      <div className="card-actions">
                        <span className="card-action eye">
                          <a
                            className="btn cus-btn-circle cus-btn-white"
                            data-bs-toggle="modal"
                            data-bs-target="#modalProduct"
                          >
                            <i className="">
                              <FiEye className=" tw-text-lg" />
                            </i>
                          </a>
                        </span>
                        <span className="card-action shop">
                          <a
                            className="btn cus-btn-circle cus-btn-white"
                            data-toggle="button"
                          >
                            <i className="">
                              <FiShoppingCart className=" tw-text-lg" />
                            </i>
                          </a>
                        </span>
                        <span className="card-action heart">
                          <a
                            className="btn cus-btn-circle cus-btn-white"
                            data-toggle="button"
                          >
                            <i className="">
                              <BiHeart className=" tw-text-lg" />
                            </i>
                          </a>
                        </span>
                      </div>
                    </div>

                    <div className=" -tw-mt-8 tw-p-2  tw-mb-3 ">
                      <div className=" ">
                        <a className=" tw-text-sm tw-text-gray-600" href="">
                          Shoes
                        </a>
                      </div>

                      <div className="tw-font-medium">
                        <a className="" href="">
                          Leather mid-heel Sandals
                        </a>
                      </div>

                      <div className=" tw-font-medium tw-text-gray-500">
                        $129.00
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-6">
                  <div className="card tw-mb-7">
                    <div className="badge bg-white text-body card-badge card-badge-start text-uppercase">
                      New
                    </div>

                    <div className="card-img">
                      <a className="card-img-hover">
                        <img
                          className="card-img-top card-img-back"
                          src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-9.jpg"
                          alt="..."
                        />
                      </a>

                      <div className="card-actions">
                        <span className="card-action eye">
                          <a
                            className="btn cus-btn-circle cus-btn-white"
                            data-bs-toggle="modal"
                            data-bs-target="#modalProduct"
                          >
                            <i className="">
                              <FiEye className=" tw-text-lg" />
                            </i>
                          </a>
                        </span>
                        <span className="card-action shop">
                          <a
                            className="btn cus-btn-circle cus-btn-white"
                            data-toggle="button"
                          >
                            <i className="">
                              <FiShoppingCart className=" tw-text-lg" />
                            </i>
                          </a>
                        </span>
                        <span className="card-action heart">
                          <a
                            className="btn cus-btn-circle cus-btn-white"
                            data-toggle="button"
                          >
                            <i className="">
                              <BiHeart className=" tw-text-lg" />
                            </i>
                          </a>
                        </span>
                      </div>
                    </div>

                    <div className=" -tw-mt-8 tw-p-2  tw-mb-3 ">
                      <div className=" ">
                        <a className=" tw-text-sm tw-text-gray-600" href="">
                          Shoes
                        </a>
                      </div>

                      <div className="tw-font-medium">
                        <a className="" href="">
                          Leather mid-heel Sandals
                        </a>
                      </div>

                      <div className=" tw-font-medium tw-text-gray-500">
                        $129.00
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-6">
                  <div className="card tw-mb-7">
                    <div className="badge bg-dark card-badge card-badge-start text-uppercase">
                      Sale
                    </div>

                    <div className="card-img">
                      <a className="card-img-hover">
                        <img
                          className="card-img-top card-img-back"
                          src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-10.jpg"
                          alt="..."
                        />
                        <img
                          className="card-img-top card-img-front"
                          src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-123.jpg"
                          alt="..."
                        />
                      </a>

                      <div className="card-actions">
                        <span className="card-action eye">
                          <a
                            className="btn cus-btn-circle cus-btn-white"
                            data-bs-toggle="modal"
                            data-bs-target="#modalProduct"
                          >
                            <i className="">
                              <FiEye className=" tw-text-lg" />
                            </i>
                          </a>
                        </span>
                        <span className="card-action shop">
                          <a
                            className="btn cus-btn-circle cus-btn-white"
                            data-toggle="button"
                          >
                            <i className="">
                              <FiShoppingCart className=" tw-text-lg" />
                            </i>
                          </a>
                        </span>
                        <span className="card-action heart">
                          <a
                            className="btn cus-btn-circle cus-btn-white"
                            data-toggle="button"
                          >
                            <i className="">
                              <BiHeart className=" tw-text-lg" />
                            </i>
                          </a>
                        </span>
                      </div>
                    </div>

                    <div className=" -tw-mt-8 tw-p-2  tw-mb-3 ">
                      <div className=" ">
                        <a className=" tw-text-sm tw-text-gray-600" href="">
                          Shoes
                        </a>
                      </div>

                      <div className="tw-font-medium">
                        <a className="" href="">
                          Leather mid-heel Sandals
                        </a>
                      </div>

                      <div className=" tw-font-medium tw-text-gray-500">
                        $129.00
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-6">
                  <div className="card tw-mb-7">
                    <div className="badge bg-white text-body card-badge card-badge-start text-uppercase">
                      New
                    </div>

                    <div className="card-img">
                      <a className="card-img-hover">
                        <img
                          className="card-img-top card-img-back"
                          src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-11.jpg"
                          alt="..."
                        />
                        <img
                          className="card-img-top card-img-front"
                          src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-124.jpg"
                          alt="..."
                        />
                      </a>

                      <div className="card-actions">
                        <span className="card-action eye">
                          <a
                            className="btn cus-btn-circle cus-btn-white"
                            data-bs-toggle="modal"
                            data-bs-target="#modalProduct"
                          >
                            <i className="">
                              <FiEye className=" tw-text-lg" />
                            </i>
                          </a>
                        </span>
                        <span className="card-action shop">
                          <a
                            className="btn cus-btn-circle cus-btn-white"
                            data-toggle="button"
                          >
                            <i className="">
                              <FiShoppingCart className=" tw-text-lg" />
                            </i>
                          </a>
                        </span>
                        <span className="card-action heart">
                          <a
                            className="btn cus-btn-circle cus-btn-white"
                            data-toggle="button"
                          >
                            <i className="">
                              <BiHeart className=" tw-text-lg" />
                            </i>
                          </a>
                        </span>
                      </div>
                    </div>

                    <div className=" -tw-mt-8 tw-p-2  tw-mb-3 ">
                      <div className=" ">
                        <a className=" tw-text-sm tw-text-gray-600" href="">
                          Shoes
                        </a>
                      </div>

                      <div className="tw-font-medium">
                        <a className="" href="">
                          Leather mid-heel Sandals
                        </a>
                      </div>

                      <div className=" tw-font-medium tw-text-gray-500">
                        $129.00
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-6">
                  <div className="card tw-mb-7">
                    <div className="badge bg-white text-body card-badge card-badge-start text-uppercase">
                      New
                    </div>

                    <div className="card-img">
                      <a className="card-img-hover">
                        <img
                          className="card-img-top card-img-back"
                          src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-12.jpg"
                          alt="..."
                        />
                        
                      </a>

                      <div className="card-actions">
                        <span className="card-action eye">
                          <a
                            className="btn cus-btn-circle cus-btn-white"
                            data-bs-toggle="modal"
                            data-bs-target="#modalProduct"
                          >
                            <i className="">
                              <FiEye className=" tw-text-lg" />
                            </i>
                          </a>
                        </span>
                        <span className="card-action shop">
                          <a
                            className="btn cus-btn-circle cus-btn-white"
                            data-toggle="button"
                          >
                            <i className="">
                              <FiShoppingCart className=" tw-text-lg" />
                            </i>
                          </a>
                        </span>
                        <span className="card-action heart">
                          <a
                            className="btn cus-btn-circle cus-btn-white"
                            data-toggle="button"
                          >
                            <i className="">
                              <BiHeart className=" tw-text-lg" />
                            </i>
                          </a>
                        </span>
                      </div>
                    </div>

                    <div className=" -tw-mt-8 tw-p-2  tw-mb-3 ">
                      <div className=" ">
                        <a className=" tw-text-sm tw-text-gray-600" href="">
                          Shoes
                        </a>
                      </div>

                      <div className="tw-font-medium">
                        <a className="" href="">
                          Leather mid-heel Sandals
                        </a>
                      </div>

                      <div className=" tw-font-medium tw-text-gray-500">
                        $129.00
                      </div>
                    </div>
                  </div>
                </div>

                
              </div>

                   {/* https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-12.jpg */}

            </div>
          </div>
        </div>
        <div className=" tw-flex lg:tw-justify-end tw-justify-center tw-my-8">
          <nav aria-label="...">
            <ul className="pagination">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex="-1">
                  <BsCaretLeftFill className=" tw-text-2xl" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link px-4" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link px-4" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link px-4" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link px-4" href="#">
                  4
                </a>
              </li>
              <li className="page-item">
                <a className="page-link px-4" href="#">
                  5
                </a>
              </li>
              <li className="page-item">
                <a className="page-link px-4" href="#">
                  6
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <BsFillCaretRightFill className=" tw-text-2xl" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
   </>
  );
};

export default Shop;