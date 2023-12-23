import React from "react";
import { BurguerSocialButtons } from "../components/SocialButtons";

export function FooterPage() {

    return (
        <footer className="bg-neutral-900  text-center text-white">
  <div className="container m-auto ">
    <div className="m-auto h-[10vh] flex justify-center">

    <BurguerSocialButtons></BurguerSocialButtons>
    </div>
</div>
  <div
    className="p-4 text-center  bg-secondary "
    >
        <span className="text-center"> © 2023 - Rafael Cabral</span>
    
  </div>
</footer>
    )
}
