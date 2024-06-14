"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { DribbbleIcon, GithubIcon, WhatsappIcon,LinkedinIcon, TwitterIcon } from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <footer className="mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark">
      <h3 className="mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
      Aklınızda bir proje var mı?      </h3>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
      Buradan bize ulaşın ve gerçekleştirelim.
      </p>

    
      <div className="flex items-center mt-8">
      <Link target="_blank" href={siteMetadata.whatsapp} rel="noopener noreferrer" className="bg-green-600 w-auto flex justify-center items-center py-2 px-4 gap-2  rounded-lg  text-center self-center my-2 mx-2 font-semibold text-white font-4  xl "><WhatsappIcon/> Whatsapp</Link>
      </div>

      <div className="w-full  mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex  flex-col md:flex-row items-center justify-between">
        <span className="text-center">
          &copy;2023 sakiceliks. All rights reserved.
        </span>
        <Link
          href="/sitemap.xml"
          className="text-center underline my-4 md:my-0"
        >
          sitemap.xml
        </Link>
        <div className="text-center">
          Made with &hearts; by{" "}
          <a href="https://sakicelik.com.tr" className="underline" target="_blank">
            sakiceliks
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
