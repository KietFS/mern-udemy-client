import React from "react";
import tw from "tailwind-styled-components";
import Header from "../components/Home/Header";
import Hero from "../components/Home/Hero";
import CourseBoard from "../components/Home/CourseBoard";
import FilterSlider from "../components/Home/FilterSlider";
import TopCategories from "../components/Home/TopCategories";
import Footer from "../components/Home/Footer";
import BottomHeader from "../components/Home/BottomHeader";

export const HomeWrapper = tw.div`w-5/6 overflow-x-hidden mx-auto`;

const Home = () => {
  return (
    <>
      <Header />
      <BottomHeader />
      <HomeWrapper>
        <Hero />
        <CourseBoard />
        <FilterSlider />
        <TopCategories />
      </HomeWrapper>
      <Footer />
    </>
  );
};

export default Home;
