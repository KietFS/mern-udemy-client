import React from "react";
import {
  Authorize,
  FooterContainer,
  FooterItem,
  FooterRow,
  FooterRowRight,
  LanguageButton,
} from "./styles";
import { GlobeAltIcon } from "@heroicons/react/outline";
import Logo from "../../../images/small-logo.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterRow>
        <FooterRowRight>
          <FooterItem>Udemy Business</FooterItem>
          <FooterItem>Carees</FooterItem>
          <FooterItem>Terms</FooterItem>
        </FooterRowRight>
        <LanguageButton>
          <GlobeAltIcon className="h-5 mr-2 font-semibold text-white" />
          English
        </LanguageButton>
      </FooterRow>
      <FooterRowRight>
        <FooterItem>Tech on Udemy</FooterItem>
        <FooterItem>Blog</FooterItem>
        <FooterItem>Privace Policy</FooterItem>
      </FooterRowRight>
      <FooterRowRight>
        <FooterItem>Get the app</FooterItem>
        <FooterItem>Help and Support</FooterItem>
        <FooterItem>Sitemap</FooterItem>
      </FooterRowRight>

      <FooterRowRight>
        <FooterItem>About us</FooterItem>
        <FooterItem>Affiliate</FooterItem>
        <FooterItem>Contact us</FooterItem>
      </FooterRowRight>

      <div className="mt-14">
        <FooterRow>
          <FooterItem>
            {" "}
            <img src={Logo} width={100} height={30} alt="/" />{" "}
          </FooterItem>
          <Authorize>© 2021 Developed by Kiet The Creator</Authorize>
        </FooterRow>
      </div>
    </FooterContainer>
  );
};

export default Footer;
