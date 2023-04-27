import React from "react";
import Logo from "./Logo";

const FooterCheckOut = () => {
  return (
    <div>
      {/*Footer*/}
      <div className="bg-zinc-800 sticky top-0 z-20">
        <div className="container mx-auto bg-zinc-800 px-2 xl:px-44 md:py-1">
          <div className="flex">
            <Logo />

            <p className="text-zinc-100 my-auto h-8 md:h-14 pt-1.5 md:pt-3 pl-4 ml-4 text-sm md:text-lg border-l ">
              Sitio seguro
            </p>
          </div>
        </div>
      </div>
      {/*Firma*/}
      <div className="px-0 md:px-4 pb-2 py-1 bg-zinc-900 border-t border-zinc-600 flex justify-center">
        <span className=" text-zinc-400 text-sm md:text-base">
          © 2023 <a href="https://flowbite.com/">aTempo</a>. Desarollado por{" "}
          <a
            href="https://www.linkedin.com/in/lucas-castillo-20a331193/"
            target={"_blank"}
            className="hover:text-zinc-100"
          >
            Lucas Castillo
          </a>
        </span>
      </div>
    </div>
  );
};

export default FooterCheckOut;
