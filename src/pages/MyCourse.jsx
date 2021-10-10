import React from "react";
import tw from "tailwind-styled-components";

import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
import MyLearning from "../components/MyCourse/MyLearning";

export const MyCourseContainer = tw.div`w-5/6 mx-auto h-screen`;

const MyCourse = () => {
  return (
    <>
      <Header />

      <MyLearning />
      <Footer />
    </>
  );
};

export default MyCourse;
