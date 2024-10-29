// "use client"
import type { NextPage } from "next";
import { FaFacebook ,FaTwitter,FaInstagram } from "react-icons/fa";
import logo from "@/assets/icons/logo.png";
import Image from "next/image";

const Footer = ({ className = "" }) => {
  return (
    <>
    <hr />
    <div
      className="w-screen lg:w-[791px] xl:w-[100vw] 2xl:w-[100vw]  bg-gray-white box-border flex flex-col font-sans font-semibold  pt-[15px] px-[73px]  gap-[14px] leading-[normal] tracking-[normal] text-left text-base text-black   border-solid border-gray-400  mq725:box-border "
    >
      <div className="flex flex-row items-start justify-start py-2.5 px-0 box-border gap-[10px] max-w-full text-[24px]">
        <div className="w-[215px] flex flex-row items-start justify-start py-0 pr-4 pl-0 box-border">
          <div className="flex-1 flex flex-row items-start justify-start">
            <div className="relative leading-[150%]   whitespace-nowrap mq450:text-[19px] mq450:leading-[29px]">
              <Image src={logo} alt="logo"  />
              {/* <span>Ware</span>
              <span className="text-primary-color-blue">View</span> */}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end py-1.5 pr-0 pl-[557px] box-border gap-[24px] max-w-full text-base mq450:pl-5 mq450:box-border mq725:hidden mq725:pl-[139px] mq725:box-border mq1050:pl-[278px] mq1050:box-border">
          <div className="flex flex-row items-start justify-start py-0 px-2">
            <div className="relative inline-block min-w-[90px]">Dashboard</div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-2">
            <div className="relative inline-block min-w-[43px]">Sales</div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-2">
            <div className="relative inline-block min-w-[65px]">Banking</div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-2">
            <div className="relative inline-block min-w-[65px]">Records</div>
          </div>
          <div className="flex flex-row items-start justify-start">
            <div className="relative inline-block min-w-[89px] whitespace-nowrap">
              Contact Us
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] mq1000:flex-wrap">
        <div className="w-[697px] flex flex-row items-start justify-start max-w-full">
          <div className="relative">
            <p className="m-0">{`Cultivating Efficiency, Tracking Excellence — `}</p>
            <p className="m-0">Your Trusted Inventory Management Partner</p>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[24px]">
            <FaFacebook className="h-[29px] w-[29px] relative overflow-hidden shrink-0 min-h-[29px] text-primary-color-blue" />
            <FaTwitter className="h-[29px] w-[29px] relative overflow-hidden shrink-0 min-h-[29px] text-primary-color-blue" />
            <FaInstagram className="h-[29px] w-[29px] relative overflow-hidden shrink-0 min-h-[29px] text-primary-color-blue" />
          {/* <div className="h-[29px] w-[29px] rounded-[30px] bg-primary-color-blue flex flex-row items-center justify-center p-1.5 box-border">
            <img
              className="h-[17px] w-[17px] relative overflow-hidden shrink-0"
              alt=""
              src="/instagram.svg"
            />
          </div>
          <div className="h-[29px] w-[29px] rounded-[28px] bg-primary-color-blue flex flex-row items-center justify-center p-[5px] box-border">
            <img
              className="h-[19px] w-[19px] relative overflow-hidden shrink-0"
              alt=""
              src="/twitter.svg"
            />
          </div> */}
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start p-2.5">
        <div className="self-stretch h-0 bg-hitbox flex flex-col items-center justify-center pt-0 px-0 pb-0 box-border">
          <img
            className="self-stretch relative max-w-full overflow-clip max-h-[unset]"
            alt=""
            src="/line.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-center justify-between gap-[20px]">
        <div className="w-[233.3px] flex flex-row items-center justify-start py-0 pr-[22px] pl-0 box-border">
          <div className="h-[30px] flex-1 relative inline-block">
            Privacy Policy
          </div>
        </div>
        <div className="w-[233.3px] flex flex-row items-center justify-center py-0 px-0 box-border text-center text-dimgray">
          <div className="w-[264px] relative font-medium inline-block shrink-0">
            © 2023 Mugna Technologies, Inc.
          </div>
        </div>
        <div className="w-[233.3px] flex flex-row items-center justify-end text-right">
          <div className="relative">{`Terms & Conditions`}</div>
        </div>
      </div>
    </div>
    </>

  );
};

export default Footer