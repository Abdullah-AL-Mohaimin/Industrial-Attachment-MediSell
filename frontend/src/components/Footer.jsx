import React from "react";
import Container from "./common/Container";
import footer from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer>
      <section className="bg-black py-10">
        <Container>
          <div className="h-[2px] bg-white w-full"></div>

          <div className=" mt-8 flex items-start flex-wrap gap-[80px] md:gap-0 justify-between">
            <div className="w-full md:w-6/12">
              <img src={footer} alt="footer" className="w-[220px]" />

              <p className="font-normal text-base text-white w-full lg:w-[280px] mt-2">
                Bangladesh's most trusted online pharmacy and healthcare platform.
              </p>
            </div>

            <div className="w-full md:w-6/12">
              <div className="flex items-center flex-wrap justify-between">
                <div className=" w-6/12 md:w-4/12">
                  <h4 className=" font-medium text-base text-green-400 mb-6">
                    ABOUT US
                  </h4>

                  <ul>
                    <li className="font-medium text-base text-white mb-5">
                      Founder's Profile
                    </li>
                    <li className="font-medium text-base text-white mb-5">
                      Mission 
                    </li>
                    <li className="font-medium text-base text-white mb-5">
                      Vision
                    </li>
                  </ul>
                </div>
                <div className=" w-6/12 md:w-4/12">
                  <h4 className=" font-medium text-base text-green-400 mb-6">
                    PRODUCTS
                  </h4>

                  <ul>
                    <li className="font-medium text-base text-white mb-5">
                      By Trade Name
                    </li>
                    <li className="font-medium text-base text-white mb-5">
                      By Generic Name
                    </li>
                    <li className="font-medium text-base text-white mb-5">
                      Available Jobs
                    </li>
                  </ul>
                </div>
                <div className=" w-12/12 md:w-4/12">
                  <h4 className=" font-medium text-base text-green-400 mb-6">
                    MEDIA
                  </h4>

                  <ul>
                    <li className="font-medium text-base text-white mb-5">
                      Latest News
                    </li>
                    <li className="font-medium text-base text-white mb-5">
                      Newsletters
                    </li>
                    <li className="font-medium text-base text-white mb-5">
                      Available Jobs
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className=" bg-gray-200 py-7">
        <Container>
          <div className=" flex items-center justify-between">
            <span className="font-normal text-sm text-gray-500">
              ©MediSell All Rights Reserved.
            </span>
            <span className="font-normal text-sm text-gray-500">
              Design By Mohaimin
            </span>
          </div>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
