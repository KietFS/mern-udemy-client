import React from "react";
import SliderComponent from "../Slider";
import {
  CourseBannerContainer,
  CourseBannerDes,
  CourseBannerTitle,
  ExploreButton,
} from "./styles";

const CourseBanner = ({ topic }) => {
  return (
    <>
      <CourseBannerContainer>
        <CourseBannerTitle>
          Expand your knowledge with {topic.title}
        </CourseBannerTitle>
        <CourseBannerDes>{topic.description}</CourseBannerDes>
        <ExploreButton>Explore {topic.title}</ExploreButton>

        <SliderComponent type={topic.type} />
      </CourseBannerContainer>
    </>
  );
};

export default CourseBanner;
