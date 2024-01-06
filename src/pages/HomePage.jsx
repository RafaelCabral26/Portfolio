import React from "react";
import { PortraitBg } from "../components/PortraitBg";
import { SocialButtons } from "../components/SocialButtons";

export function HomePage() {
  return (
    <div id="home" className="relative  py-20 px-10 lg:px-24 lg:py-32 gap-20 2xl:gap-52 min-h-screen sm:min-h-[90vh] flex flex-col 2xl:flex-row items-center ">
      <div className="basis-1/2 z-10 flex flex-col self-start 2xl:ml-20  gap-10">
        <div className="divisor border-b-2 border-white w-32"></div>
        <h1>
          Desenvolvedor Web
          <br /> Full Stack
        </h1>
        <span className="max-w-md z-10">
          Sou um desenvolvedor de softwares residindo em Rio de Janeiro, RJ. Voltado ao estudo e criação de tecnologias e aplicações web.{" "}
        </span>
      </div> <div className="block md:hidden"> <PortraitBg></PortraitBg>{" "}
      </div>
      <div className=" z-10 self-start  flex flex-col sm:flex-row 2xl:flex-col gap-20 2xl:items-end ">
        <div className="">    
          <h2>Responsividade </h2>
          <span className="xl:w-[75%] 2xl:w-full">Design de aplicações flexíveis, com layout adaptado para diversos aparelhos como celular, tablet e desktop. </span>
        </div>
        <div className="">
          <h2>Full-Stack</h2>
      <span className="xl:w-[75%] 2xl:w-full ">Desenvolvimento de todos os aspectos da programação web, desde a interface, UI/UX, até o  armazenamento e processamento de dados.</span>
        </div>
      </div>
      <div className="absolute z-0 hidden md:block left-[60%] 2xl:bottom-[18.5vh] 2xl:left-[30%] ">
        <PortraitBg></PortraitBg>
      </div>
      <SocialButtons></SocialButtons>
    </div>
  );
}
