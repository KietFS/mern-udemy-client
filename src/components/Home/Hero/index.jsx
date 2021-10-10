import React from "react";
import {
  AdverDes,
  AdverModal,
  AdverTitle,
  HeroContainer,
  SearchBar,
  SearchContainer,
} from "./styles";
import Banner from "../../../images/banner.jpg";
import { SearchIcon } from "@heroicons/react/outline";
import { AuthContext } from "../../../contexts/AuthContext";
import { useContext } from "react";

const Hero = () => {
  const {
    authState: { user },
  } = useContext(AuthContext);

  if (!user) {
    return (
      <HeroContainer>
        <AdverModal>
          <AdverTitle>New to Udemy ?</AdverTitle>
          <AdverTitle>Lucky you</AdverTitle>
          <AdverDes>
            Courses start at $14.99. Get your new-student offer before it
            expires
          </AdverDes>
          <SearchContainer>
            <SearchBar placeholder="What do you want to learn ?" />
            <SearchIcon className="relative h-5 font-bold right-7" />
          </SearchContainer>
        </AdverModal>
        <img src={Banner} alt="/" />
      </HeroContainer>
    );
  } else {
    return (
      <HeroContainer>
        <AdverModal>
          <AdverTitle>Learning that gets</AdverTitle>
          <AdverTitle>you</AdverTitle>
          <AdverDes>
            Skills for your present (and your future). Get started with us.
          </AdverDes>
          <SearchContainer>
            <SearchBar
              placeholder={`What do you want to learn ${user.userName} ?`}
            />
            <SearchIcon className="relative h-5 font-bold right-7" />
          </SearchContainer>
        </AdverModal>
        <img src={Banner} alt="/" />
      </HeroContainer>
    );
  }
};

export default Hero;
