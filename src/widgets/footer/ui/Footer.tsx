import React from "react";

import { footerNav } from "@/shared";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full flex-center flex-col my-14" >
      <div className="flex-center gap-9">
        {footerNav.map((link)=>
          <a href={link.href} key={link.icon}> 
            <Image alt={link.name} height={30} src={link.icon} width={30} />
          </a>
        )}
      </div>
      <p className="font-normal text-sm text-dark mt-6">Copyright ©2020 All rights reserved </p>
    </footer>
  );
};

export default Footer;