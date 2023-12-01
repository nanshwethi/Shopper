import React, { useState } from "react";
import { Breadcrumbs, Anchor } from "@mantine/core";
import { AiOutlineMenu } from "react-icons/ai";


const Docs = () => {
  const [show, setShow] = useState(true);

  const Toggle = () => {
    let x = document.getElementById("myLinks");
    if (show === false) {
      x.style.display = "none";
    } else if (show === !false) {
      x.style.display = "block";
    }
    setShow(!show);
  };

  const items = [
    { title: "Docs", href: "#" },
    { title: "Getting Started", href: "#" },
  ].map((item, i) => {
    return (
      <Anchor className="tw-text-gray-500 tw-text-sm" key={i} href={item.href}>
        {item.title}
      </Anchor>
    );
  });

  return (
<>

<div className=" container-fluid tw-mt-10 main parent">
      <div className="row sticky">
        {/* Left */}
        {/* Navbar */}
        <div className=" col-12 col-md-4 col-lg-3 col-xl-2">
          <div className="dropdown">
            <div className="tw-flex tw-justify-between tw-mb-5">
              <Breadcrumbs className="">{items}</Breadcrumbs>
              <button className="tw-cursor-pointer" onClick={Toggle}>
                <AiOutlineMenu className="tw-text-2xl" />
              </button>
            </div>
            {/* menu list */}
            <div
              className="tw-py-3 md:tw-py-10 md:tw-px-8 scroll tw-h-[2000px] md:tw-h-[1000px]"
              id="myLinks"
            >
              <p className=" tw-uppercase tw-mb-5">Getting Started</p>
              <ul className="tw-text-gray-500 tw-leading-9 tw-mb-5">
                <li className="">
                  <p className="">Introduction</p>
                </li>
                <li>
                  <p className="">Changelog</p>
                </li>
              </ul>
              <p className="tw-uppercase tw-mb-5">components</p>
              <ul className="tw-text-gray-500 tw-leading-9 tw-mb-5">
                <li>Alerts</li>
                <li>Avatars</li>
                <li>Badges</li>
                <li>Brands</li>
                <li>Breadcrumb</li>
                <li>Buttons</li>
                <li>Cards</li>
                <li>Dropdowns</li>
                <li>Form</li>
                <li>Icons</li>
                <li>Lists</li>
                <li>Modals</li>
                <li>Navbar</li>
                <li>Navs</li>
                <li>Pagination</li>
                <li>Popovers</li>
                <li>Progress</li>
                <li>Rate</li>
                <li>Rating</li>
                <li>Reviews</li>
                <li>Spinner</li>
                <li>Tables</li>
                <li>Toats</li>
                <li>Tooltips</li>
                <li>Typography</li>
              </ul>
              <p className="tw-uppercase tw-mb-5">plugins</p>
              <ul className="tw-text-gray-500 tw-leading-9 tw-mb-5">
                <li>BigPicture</li>
                <li>Flickity</li>
                <li>Jarallax</li>
                <li>List.js</li>
                <li>Map</li>
                <li>Simplebar</li>
                <li>Smooth Scroll</li>
              </ul>
              <p className="tw-uppercase tw-mb-5">utilities</p>
              <ul className="tw-text-gray-500 tw-leading-9 tw-mb-5">
                <li>Background</li>
                <li>Border</li>
                <li>Lift</li>
                <li>Opacity</li>
                <li>Position</li>
                <li>Ratio</li>
                <li>Shadow</li>
                <li>Sizing</li>
                <li>Text</li>
                <li>Video</li>
                <li>Z-index</li>
              </ul>
              <p className="tw-uppercase tw-mb-5">design</p>
              <ul className="tw-text-gray-500 tw-leading-9 tw-mb-5">
                <li className="">Figma</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="col-12 col-md-8 col-lg-9 col-xl-10">
          <section className="md:tw-px-10 tw-py-10 right_side">
            <h3 className="tw-mb-5 tw-text-2xl">Introduction</h3>
            <p className="tw-tracking-wide tw-leading-6 tw-text-gray-500">
              This guide will help you get started with Shopper! All the
              important stuff – compiling the source, file structure, build
              tools, file includes – is documented here, but should you have any
              questions, always feel free to reach out to{" "}
              <a href="#" className="tw-text-red-600">
                plus.unvab@gmail.com
              </a>
              .
            </p>
            <hr className="tw-my-7" />
            <h5 className="tw-text-2xl tw-mb-5">Dev setup</h5>
            <p className="tw-text-gray-500 tw-mb-5 tw-tracking-wide">
              To get started, you need to do the following:{" "}
            </p>
            <ol className="tw-text-gray-500 tw-list-decimal tw-w-[85%] tw-mx-auto ">
              <li className="tw-tracking-wide">
                Make sure you have Node installed since Shopper uses npm to
                manage dependencies. If you don't, installing is quite easy,
                just visit the{" "}
                <a href="#" className="tw-text-red-600">
                  Node Downloads page
                </a>{" "}
                and install it.
              </li>
              <li className="tw-tracking-wide">
                Unzip your theme and open your command line, making sure your
                command line prompt is at the root of the unzipped theme
                directory.
              </li>
              <li className="tw-tracking-wide">
                <a href="#" className="tw-text-red-600">
                  npm install
                </a>
                : Open your command line to the root directory of your unzipped
                theme and run to install all of Shopper's dependencies.
              </li>
            </ol>
            <p className="tw-text-gray-500 tw-mt-8">
              It's that simple! If you're not used to using terminal, don't
              worry, this is as advanced as it gets. If you want to kill the
              server and stop Webpack, just hit{" "}
              <a href="#" className="tw-text-red-600">
                Control + C
              </a>
              .
            </p>
            <hr className="tw-my-7" />
            <h5 className="tw-text-2xl tw-mb-5">Compiling</h5>
            <p className=" tw-text-gray-500 tw-mb-5">
              Webpack is used to manage Shopper development. Open your command
              line to the root directory of the theme to use the following
              commands:
            </p>
            <ul className="list-item tw-list-disc tw-w-[85%] tw-mx-auto">
              <li className="">
                <a href="#" className="tw-text-red-600">
                  npm start:
                </a>{" "}
                Compile and watch the SCSS/JS/HTML, use Live Reload to update
                browsers instantly, start a server, and pop a tab in your
                default browser. Any changes made to the source files will be
                compiled as soon as you save the file.
              </li>
              <li className="">
                <a href="#" className="tw-text-red-600">
                  npm run build
                </a>
                : Generates a /dist directory with all the production files.
              </li>
            </ul>
            <hr className="tw-my-7" />
            <h5 className="tw-text-2xl tw-mb-5">File Structure</h5>
            <ul className="tw-text-gray-500 tw-w-[85%] tw-mx-auto tw-list-disc">
              <li className="">
                <strong className="">📁 dist</strong> - Generated production
                files
              </li>
              <li className="">
                <strong className="">📁 node_modules</strong> - Directory where
                npm installs dependencies
              </li>
              <li className="">
                <strong>📁 src</strong>
                <ol className="tw-list-disc tw-w-[75%] tw-mx-auto">
                  <li className="">
                    <strong>📁 favicon</strong> - Favicon files
                  </li>
                  <li className="">
                    <strong>📁 fonts</strong> - Font files
                  </li>
                  <li className="">
                    <strong>📁 html</strong> - HTML source
                  </li>
                  <li className="">
                    <strong>📁 img</strong> - image assets
                  </li>
                  <li className="">
                    <strong>📁 js</strong> - javascript source
                  </li>
                  <li className="">
                    <strong>📁 partials</strong> - HTML partials
                  </li>
                  <li className="">
                    <strong>📁 scss</strong> - SCSS source for theme
                  </li>
                  <li className="">
                    <strong>📁 video</strong> - Video assets
                  </li>
                </ol>
              </li>
              <li className="">
                <strong>📄 .browserslistrc </strong> - Config to share target
                browsers and Node.js version between different front-end tools
              </li>
              <li className="">
                <strong>📄 .gitignore</strong> - Hide all unnecessary files from
                Git
              </li>
              <li className="">
                <strong>📄 package.json</strong> - List all dependencies and npm
                information
              </li>
              <li className="">
                <strong>📄 package-lock.json</strong> - Describe the exact
                dependency tree that was generated
              </li>
              <li className="">
                <strong>📄 README.md</strong> - Theme info
              </li>
              <li className="">
                <strong>📄 webpack.config.js</strong> - Webpack config file
              </li>
            </ul>
            <hr className="tw-my-7" />
            <h5 className="tw-text-2xl tw-mb-5">Handlebars Webpack Plugin</h5>
            <p className="tw-text-gray-500 tw-mb-5 tw-tracking-wide">
              <a href="#" className="tw-text-red-600">
                The handlebars-webpack-plugin
              </a>{" "}
              is used to make partials easier to use for initial development.
              For Shopper, we only use it for a handful of components that are
              found on most pages. The following partials are available:
            </p>
            <ul className="tw-text-red-600 tw-mb-10 tw-list-disc tw-w-[85%] tw-mx-auto ">
              <li>
                <code>dropdown/*.html</code>
              </li>
              <li>
                <code>footer/*.html</code>
              </li>
              <li>
                <code>icons/*.svg</code>
              </li>
              <li>
                <code>modals/*.html</code>
              </li>
              <li>
                <code>navbars/*.html</code>
              </li>
              <li>
                <code>navs/*.html</code>
              </li>
              <li>
                <code>head.html</code>
                <ul className="">
                  <li className="">
                    <code>title (string) </code> - Parameter for the page title
                  </li>
                </ul>
              </li>
              <li>
                <code>modals.html</code>
              </li>
              <li>
                <code>script.html</code>
              </li>
            </ul>
            <p className="tw-text-gray-500 tw-mb-5">
              Easily create new
              <code>.html</code> partials inside the
              <code>/partials</code> folder and point to them from any file by
              specifying the path to the partial file inside curly brackets.
            </p>
            <p className="tw-text-gray-500">
              Please read the{" "}
              <a href="#" className="tw-text-red-600">
                official package documentation
              </a>{" "}
              for more info.
            </p>
            <hr className="tw-my-7" />
            <h5 className="tw-text-2xl tw-mb-5">Customizing SCSS</h5>
            <p className="tw-text-gray-500 tw-mb-5">
              There are 2 basic ways to customize your theme....
            </p>
            <ol className="tw-list-decimal tw-w-[85%] tw-mx-auto">
              <li className="">
                <strong>Customizing SCSS</strong> This is more versatile and
                sustainable way to customize Shopper, but requires the{" "}
                <code>webpack</code>
                compilation steps outlined above. The 2 major benefits of this
                strategy are using variable overrides to easily customize theme
                styles, plus you never have to touch Bootstrap or Shopper's
                source, meaning future updates will be much, much, simpler.
                There are 2 provided files that make this strategy simple to
                implement:
                <ul className="tw-w-[75%] tw-mx-auto tw-list-disc">
                  <li>
                    <code>user-variables.scss</code>: This file can be used to
                    override Bootstrap core and Shopper variables for
                    customizing elements that have been tied to variables.
                  </li>
                  <li>
                    <code>user.scss</code>: This file can be used for writing
                    custom SCSS that will be compiled alongside Bootstrap and
                    Shopper's core files.
                  </li>
                </ul>
              </li>
              <li className="">
                <strong>Compiled CSS.</strong> If you plan on using Shopper "as
                is", or only need limited customization, feel free to simply
                attach the compiled <code>theme.bundle.css</code> file in the{" "}
                <code>dist/assets/css</code>
                directory.
              </li>
            </ol>
          </section>
        </div>
      </div>
    </div>
</> 
  );
};

export default Docs;
