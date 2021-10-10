import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BuyButton,
  RateContainer,
  SliderContainer,
  SliderItem,
  SliderItemAuthor,
  SliderItemLabel,
  SliderItemPrice,
} from "./styles";
import { useReducer, useContext, useEffect } from "react";
import { CourseContext } from "../../../contexts/CourseContext";
import { StarIcon } from "@heroicons/react/solid";
import { useState } from "react/cjs/react.development";
import { CartContext } from "../../../contexts/CartContext";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "100%",
        background: "black",
        zIndex: "10",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "100%",
        background: "black",
        zIndex: "10",
      }}
      onClick={onClick}
    />
  );
}

const SliderComponent = ({ type }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const {
    courseState: { courses },
  } = useContext(CourseContext);

  const { addCart } = useContext(CartContext);

  return (
    <SliderContainer>
      <Slider {...settings}>
        {courses.map((course) => {
          if (course.topic === type || type === "All") {
            return (
              <SliderItem key={course._id}>
                <img src={course.imageUrl} alt="/" />
                <SliderItemLabel>{course.title}</SliderItemLabel>
                <SliderItemAuthor>{course.lecture}</SliderItemAuthor>
                <RateContainer>
                  {[...Array(course.rate)].map((e, i) => {
                    return (
                      <StarIcon
                        key={i}
                        className="h-3 text-yellow-400 xl:h-4"
                      />
                    );
                  })}{" "}
                  {[...Array(5 - course.rate)].map((e, i) => {
                    return (
                      <StarIcon key={i} className="h-3 text-gray-200 xl:h-4" />
                    );
                  })}
                </RateContainer>
                <SliderItemPrice>${course.price}.99</SliderItemPrice>
                <BuyButton
                  onClick={() => {
                    addCart({ title: course.title });
                  }}
                >
                  Add to cart
                </BuyButton>
              </SliderItem>
            );
          }
        })}
      </Slider>
    </SliderContainer>
  );
};

export default SliderComponent;
