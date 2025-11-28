import React from "react";
import { NETFLIX_IMG } from "../utils/constant";

function Header() {
  return (
    <div className="header-container absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <img src={NETFLIX_IMG} alt="logo" className="w-[200px]" />
    </div>
  );
}

export default Header;
