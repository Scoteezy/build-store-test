import React from "react";

import { Button } from "@/shared";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex-col-reverse sm:flex-row flex-center gap-8 sm:gap-28 w-full mb-[71px] wrapper">
      <div className="">
        <h1 className=" text-dark text-[44px] font-bold text-center sm:text-left">Hi, I am John,
          <br/>
          Creative Technologist
        </h1>
        <p className="mt-10 text-base text-dark font-normal text-center sm:text-left">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <Button className="bg-primary w-[208px] text-white  font-medium text-xl hover:bg-[#ff5353] hover:font-bold mt-9 mx-auto sm:mx-0">Download Resume</Button>
      </div>
      <div className=" sm:w-full max-w-[230px] max-h-[230px] ">
        <Image alt="Avatar" className="w-[170px] h-[170px] sm:w-[243px] sm:h-[243px] rounded-full" height={243} src='/images/avatar.png' width={243}/>
      </div>
    </section>
  );
};

export default Hero;