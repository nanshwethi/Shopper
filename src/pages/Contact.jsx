import React from "react";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { Anchor, Breadcrumbs } from "@mantine/core";


const Contact = () => {
  const items = [
    { title: "Home", href: "#" },
    { title: "Contact Us", href: "#" },
  ].map((item, i) => {
    return (
      <Anchor className="tw-text-gray-500 tw-text-sm" key={i} href={item.href}>
        {item.title}
      </Anchor>
    );
  });

  return (
    <div className="">
      {/* content */}
      
      <section className="tw-pt-7 tw-pb-12">
        <div className="container">
          <div className="row">
            <div className="col-12  tw-mb-5">
              <div className="tw-flex tw-justify-between tw-mb-10">
                <Breadcrumbs className="">{items}</Breadcrumbs>
              </div>
              <h3 className="tw-mb-10 tw-text-center tw-text-3xl ">
                Contact Us
              </h3>
            </div>
          </div>
          <div className="row">
            {/* service */}
            <div className="col-12 col-md-4 tw-mb-10">
              <aside className="">
                <div className="tw-flex tw-gap-5 tw-items-center tw-mb-5">
                  <BsTelephone className="tw-text-xl tw-text-red-600" />
                  <h6 className="tw-text-xl ">Call to Us:</h6>
                </div>
                <p className="tw-text-gray-500 tw-mb-5">
                  We're available from 10 am - 10 pm EST, 7 days a week.
                </p>
                <p className="tw-mb-7">
                  <strong>Customer Service:</strong>
                  <br />
                  <a href="#" className="tw-text-gray-500">
                    6-146-389-574
                  </a>
                </p>
                <p className="">
                  <strong>Careers:</strong>
                  <br />
                  <a href="#" className="tw-text-gray-500">
                    6-146-389-574
                  </a>
                </p>
                <hr className="tw-my-10" />

                <div className="tw-flex tw-gap-5 tw-items-center tw-mb-5">
                  <MdOutlineMail className="tw-text-xl tw-text-red-600" />
                  <h6 className="tw-text-xl ">Write to Us:</h6>
                </div>
                <p className="tw-text-gray-500 tw-mb-5">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="tw-mb-7">
                  <strong>Customer Service:</strong>
                  <br />
                  <a href="#" className="tw-text-gray-500">
                    customer@example.com
                  </a>
                </p>
                <p className="">
                  <strong>Careers:</strong>
                  <br />
                  <a href="#" className="tw-text-gray-500">
                    careers@example.com
                  </a>
                </p>
                <hr className="tw-my-10" />
                <div className="tw-flex tw-gap-5 tw-items-center tw-mb-5">
                  <MdOutlineMail className="tw-text-xl tw-text-red-600" />
                  <h6 className="tw-text-xl ">Find Us:</h6>
                </div>
                <p className="tw-text-gray-500 tw-mb-5">
                  Want to visit our Offline Stores?
                </p>
                <p className="tw-flex tw-items-center tw-gap-3">
                  <a href="#" className="">
                    Go to Store Locator
                  </a>
                  <BsArrowRightShort className="tw-text-2xl" />
                </p>
              </aside>
            </div>
            {/* form */}
            <div className="col-12 col-md-8">
              <div className="form-group tw-flex tw-flex-col tw-gap-6 tw-mb-7">
                <input
                  type="text"
                  className="tw-w-[95%] tw-h-[3rem]"
                  placeholder="Your Name *"
                />
                <input
                  type="text"
                  className="tw-w-[95%] tw-h-[3rem]"
                  placeholder="Your Email *"
                />
                <input
                  type="text"
                  className="tw-w-[95%] tw-h-[3rem]"
                  placeholder="Title *"
                />
                <textarea
                  name=""
                  className="tw-w-[95%]"
                  id=""
                  rows="5"
                  placeholder="Message *"
                ></textarea>
              </div>
              <button className="tw-bg-black tw-text-white tw-py-4 tw-px-7">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
