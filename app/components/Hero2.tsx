"use client";
import Image from "next/image";
import React, { useState } from "react";

const ServicesComponent = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOptionToggle = (option) => {
      if (selectedOptions.includes(option)) {
        setSelectedOptions(
          selectedOptions.filter((selectedOption) => selectedOption !== option)
        );
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    };
  return (
    <>
      <div className="flex items-center justify-center p-8 bg-black">
        {/* Left side with text */}
        <div className="w-1/2 pl-32 flex flex-col justify-end">
          <h1 className="pb-16 font-bold">
            <span className="text-red-600 ">#</span>Services <br />
          </h1>
          <h4 className="text-2xl font-bold">
            <span className="text-[200px]">1</span> <br />
          </h4>
          <p className="text-xl mt-4 font-bold">
            BEAUTIFUL <br /> WEBSITE
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Website design & development is a combination of both, experience{" "}
            <br />
            and approach. We start by tackling what you want to convey, the{" "}
            <br /> problem you want to solve, or the reaction you want to
            provoke. <br /> We then utilize an agile methodology to execute
            rapidly.
          </p>
        </div>

        {/* Right side with image */}
        <div className="w-1/2">
          <img
            className="w-full h-auto"
            src="/img4.png"
            alt="Beautiful Website Image"
          />
        </div>
      </div>
      {/* // 2 */}
      <div className="flex p-8 m-8 ">
        {/* Left side - Image (adjust the src and alt attributes accordingly) */}
        <div className="flex-1 overflow-hidden mt-12">
          <Image
            src="/img5.png"
            alt="Service Image"
            layout="responsive"
            width={1920} // Set the width as per your image dimensions
            height={1080} // Set the height as per your image dimensions
          />
        </div>

        {/* Right side - Text content */}
        <div className="flex-1 p-8 mt-24">
          <h1 className=" font-bold">
            <span className="text-red-600 ">#</span>Services <br />
          </h1>
          <h4 className="text-2xl font-bold pt-16">
            <span className="text-[200px]">2</span> <br />
          </h4>
          <p className="text-xl mt-4 font-bold">
            ECOMMERCE <br /> ENABLEMENT
          </p>
          <p className="text-xs text-gray-400">
            E-commerce plays a role vital role in gaining and retaining
            customers. <br /> Incorporate directory management or have more
            targeted marketing <br /> behind it, your business can do all of
            these and more with the right <br /> e-commerce solution.
          </p>
        </div>
      </div>
      {/* 3 */}

      <div className="flex items-center justify-center p-8 bg-black">
        {/* Left side with text */}
        <div className="w-1/2 pl-32 flex flex-col justify-end">
          <h1 className="pb-16 font-bold">
            <span className="text-red-600 ">#</span>Services <br />
          </h1>
          <h4 className="text-2xl font-bold">
            <span className="text-[200px]">3</span> <br />
          </h4>
          <p className="text-xl mt-4 font-bold">BRANDING</p>
          <p className="text-xs text-gray-400 mt-2">
            We design consumer experience in a way that attracts loyalty to your
            brand. We understand and encompass who you are, take your unique
            offerings to the right people and clearly answers why consumers must
            choose you over the rest.
          </p>
        </div>
        <div className="w-1/2">
          <img
            className="w-full h-auto"
            src="/img6.png"
            alt="Beautiful Website Image"
          />
        </div>
      </div>

      {/* 4 */}
      <div className="flex p-8 m-8 ">
        {/* Left side - Image (adjust the src and alt attributes accordingly) */}
        <div className="flex-1 overflow-hidden mt-12">
          <Image
            src="/img7.png"
            alt="Service Image"
            layout="responsive"
            width={1920} // Set the width as per your image dimensions
            height={1080} // Set the height as per your image dimensions
          />
        </div>

        {/* Right side - Text content */}
        <div className="flex-1 p-8 mt-24">
          <h1 className=" font-bold">
            <span className="text-red-600 ">#</span>Services <br />
          </h1>
          <h4 className="text-2xl font-bold pt-16">
            <span className="text-[200px]">4</span> <br />
          </h4>
          <p className="text-xl mt-4 font-bold">
            INSTAGRAM & FACEBOOK <br /> MARKETING
          </p>
          <p className="text-xs text-gray-400">
            We have knowledge, tools and experiences since we have catered to
            many digital solutions and revolutions over the past decade. Digital
            and social makeovers certainly cannot be at the end of the tunnel of
            your growth strategy
          </p>
        </div>
      </div>

      {/* 5 */}

      <div className="flex flex-col items-center justify-center">
        {/* Heading */}
        <h2 className="text-6xl font-bold mb-4">
          Businesses we have empowered <br />{" "}
          <span className="flex justify-center">digitally!</span>
        </h2>

        {/* Text */}
        <p className="text-xs text-gray-400 text-center mb-6">
          Our innovative business framework is faster, superior, tested way to
          unlock your digital
        </p>

        {/* Image */}
        <div className="w-full max-w-md m-8">
          <img src="/img8.png" alt="img" className="w-full h-auto rounded-md" />
        </div>
      </div>
      {/* 6 */}
      <div className="flex flex-col items-center justify-center">
        {/* Heading */}
        <h2 className="text-6xl font-bold mb-4">Let's Work Together</h2>

        {/* Text */}
        <p className="text-xs text-gray-400 text-center mb-6">
          We’re passionate about brilliant ideas and the execution that brings
          it all together in one beautiful experience. If you are too, call or
          send us an email to get started.
        </p>
      </div>

      {/* 7 */}
      <div className="bg-black m-8">
        <div className="container mx-auto px-4 py-16 ">
          <div className="flex  overflow-x-hidden snap-x snap-mandatory">
            <div className="w-screen flex mx-2 snap-item">
              <div className=" p-8 rounded-lg shadow-md bg-black">
                <div className="flex flex-row">
                  <img src="/ii1.png" alt="image 1" className="h-10 w-10 " />
                  <h2 className="text-xl font-bold mb-4">WE DISCUSS</h2>
                </div>

                <p className="text-gray-300 text-sm pl-6">
                  We’re a full-service digital marketing agency that hustles
                  hard to makes users happy while infusing everything we do with
                  the heart.
                </p>
              </div>
            </div>
            <div className="w-screen flex mx-2 snap-item">
              <div className="bg-black p-8 rounded-lg shadow-md">
                <div className="flex flex-row">
                  <img src="/ii2.png" alt="" className="h-10 w-10" />
                  <h2 className="text-xl font-bold mb-4">WE DEVELOP</h2>
                </div>

                <p className="text-gray-300 text-sm pl-6">
                  We see beyond the insights and take you to the eye stand.
                </p>
              </div>
            </div>
            <div className="w-screen flex mx-2 snap-item">
              <div className="bg-black p-8 rounded-lg shadow-md">
                <div className="flex flex-row">
                  <img src="/ii3.png" alt="" className="h-10 w-10" />
                  <h2 className="text-xl font-bold mb-4">WE DELIVER</h2>
                </div>

                <p className="text-gray-300 text-sm pl-6">
                  As a multifaceted digital marketing agency, we craft beautiful
                  solutions that outdo business goals and garner recognition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <footer className="bg-black text-white p-8">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Part 1 - Logo and Address */}
          <div className="mb-4 md:mb-0">
            <div className="mb-4">
              <Image
                src="/logo.jpg" // Replace with the path to your logo image
                alt="Your Logo"
                width={150}
                height={50}
              />
            </div>
            <p className="text-xs text-gray-400">
              Cannyworx Digital is a full-service digital <br /> marketing
              agency and an affordable web <br /> design company with designers
              and hustlers <br /> who eat, drink & sleep digital design and
              marketing.
            </p>
          </div>

          {/* Part 2 - Headings and Texts */}
          <div className="mb-4 md:mb-0">
            <div className="mb-2 text-sm ">
              <h4 className="font-bold">OFFICE</h4>
              <p className="text-gray-400 text-xs mt-2">Pune</p>
              <p className="text-gray-400 text-xs mt-2">
                Office 001, City Vista,
                <br /> Near World Trade Center,
                <br /> Kharadi, Pune – 411014
              </p>

              <p className="text-gray-400 text-xs mt-2">Mumbai</p>
              <p className="text-gray-400 text-xs mt-2">
                Nav-Neelima, Opp Canosa High School, <br />
                Sher-e-Punjab, Andheri East, <br />
                Mumbai – 400093
              </p>
            </div>
          </div>

          {/* Part 3 - Contact Form */}
          <div>
            <h4 className="font-bold text-sm">REQUEST A QUOTE</h4>
            {/* Add your contact form component or form elements here */}
            <form>
              <div className="flex flex-col md:grid-cols-3 gap-4 pr-10">
                {/* <!-- Name Input --> */}
                <div>
                  <label
                    for="name"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Your Name"
                  />
                </div>

                {/* <!-- Contact Input --> */}
                <div>
                  <label
                    for="contact"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Contact
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Your Contact"
                  />
                </div>

                {/* <!-- Message Input --> */}
                <div>
                  <label
                    for="message"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Your Message"
                  ></textarea>
                </div>
              </div>

              <ul>
                <li className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id="logo"
                    checked={selectedOptions.includes("Logo")}
                    onChange={() => handleOptionToggle("Logo")}
                    className="mr-2"
                  />
                  <label htmlFor="logo" className="text-xs">
                    Logo
                  </label>
                </li>
                <li className="flex items-center mb-2 ">
                  <input
                    type="checkbox"
                    id="website-design"
                    className="text-xs"
                    checked={selectedOptions.includes("Website Design")}
                    onChange={() => handleOptionToggle("Website Design")}
                    className="mr-2"
                  />
                  <label htmlFor="website-design " className="text-xs">
                    Website Design
                  </label>
                </li>
                <li className="flex items-center mb-2 ">
                  <input
                    type="checkbox"
                    id="website-design"
                    className="text-xs"
                    checked={selectedOptions.includes("Website Design")}
                    onChange={() => handleOptionToggle("Website Design")}
                    className="mr-2"
                  />
                  <label htmlFor="website-design " className="text-xs">
                    SOCIAL MEDIA MANAGEMENT
                  </label>
                </li>
                <li className="flex items-center mb-2 ">
                  <input
                    type="checkbox"
                    id="website-design"
                    className="text-xs"
                    checked={selectedOptions.includes("Website Design")}
                    onChange={() => handleOptionToggle("Website Design")}
                    className="mr-2"
                  />
                  <label htmlFor="website-design " className="text-xs">
                    WEBSITE MAINTENANCE
                  </label>
                </li>
                <li className="flex items-center mb-2 ">
                  <input
                    type="checkbox"
                    id="website-design"
                    className="text-xs"
                    checked={selectedOptions.includes("Website Design")}
                    onChange={() => handleOptionToggle("Website Design")}
                    className="mr-2"
                  />
                  <label htmlFor="website-design " className="text-xs">
                    CORPORATE PRESENTATION
                  </label>
                </li>
                <li className="flex items-center mb-2 ">
                  <input
                    type="checkbox"
                    id="website-design"
                    className="text-xs"
                    checked={selectedOptions.includes("Website Design")}
                    onChange={() => handleOptionToggle("Website Design")}
                    className="mr-2"
                  />
                  <label htmlFor="website-design " className="text-xs">
                    Website Redesign
                  </label>
                </li>
                <li className="flex items-center mb-2 ">
                  <input
                    type="checkbox"
                    id="website-design"
                    className="text-xs"
                    checked={selectedOptions.includes("Website Design")}
                    onChange={() => handleOptionToggle("Website Design")}
                    className="mr-2"
                  />
                  <label htmlFor="website-design " className="text-xs">
                    BROCHURE/FLYERS
                  </label>
                </li>
                {/* Repeat similar blocks for other options */}
              </ul>

              {/* Display selected options */}
              <div className="mt-4">
               
                <ul>
                  {selectedOptions.map((option) => (
                    <li key={option}>{option}</li>
                  ))}
                </ul>
              </div>
              <button
                type="submit"
                className="bg-white text-xs text-black px-4 py-2 mt-2 rounded-full px-6"
              >
                Request a Quote
              </button>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ServicesComponent;
