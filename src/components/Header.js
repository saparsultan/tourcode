"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import gerbLogo from "@/assets/img/gerb.png";
import fondkamkorLogo from "@/assets/img/fondkamkor.png";
import tourcodeLogo from "@/assets/img/tourcode.svg";

const Header = () => {
  return (
    <header className="header__container">
      <div className="container">
        <div className="header">
          <div className="header-top">
            <Link
              href="/"
              className="header__link header__link--first"
            >
              <Image src={gerbLogo} alt="Министерство туризма и спорта РК" />
              <span>
                Министерство <br /> туризма и спорта РК
              </span>
            </Link>
            <Link href="/" className="header__link">
              <Image
                src={fondkamkorLogo}
                alt="Министерство туризма и спорта РК"
              />
            </Link>
            <Link
              href="/"
              className="header__link header__link--three"
            >
              <Image
                src={tourcodeLogo}
                alt="Министерство туризма и спорта РК"
              />
            </Link>
          </div>
          {/*<div className="header-bottom">*/}
          {/*  <div className="lang">*/}
          {/*    <div className="lang__select">*/}
          {/*      KZ*/}
          {/*    </div>*/}
          {/*    <div className="lang__select">*/}
          {/*      RU*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </header>
  );
};

export default Header;
