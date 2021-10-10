import React from "react";
import SliderComponent from "../Slider";
import {
  FilterSliderContainer,
  FilterSliderLabel,
  FilterSliderItem,
} from "./styles";
import { AuthContext } from "../../../contexts/AuthContext";
import { useContext } from "react";

const FilterSlider = () => {
  const {
    authState: { user },
  } = useContext(AuthContext);

  if (!user) {
    return (
      <FilterSliderContainer>
        <FilterSliderItem>
          <FilterSliderLabel>Students are viewing</FilterSliderLabel>
          <SliderComponent type={"All"} />
        </FilterSliderItem>

        <FilterSliderItem>
          <FilterSliderLabel>
            Because you search for{" "}
            <FilterSliderLabel className="ml-2 text-purple-600">
              Web Development
            </FilterSliderLabel>
          </FilterSliderLabel>
          <SliderComponent type={"Web"} />
        </FilterSliderItem>
      </FilterSliderContainer>
    );
  } else {
    return (
      <FilterSliderContainer>
        <FilterSliderItem>
          <FilterSliderLabel>
            Recommend for
            <FilterSliderLabel className="ml-2 text-purple-600">
              you
            </FilterSliderLabel>
          </FilterSliderLabel>
          <SliderComponent type={"Mobile"} />
        </FilterSliderItem>

        <FilterSliderItem>
          <FilterSliderLabel>
            Popular now on
            <FilterSliderLabel className="ml-2 text-purple-600">
              Udemy
            </FilterSliderLabel>
          </FilterSliderLabel>
          <SliderComponent type={"CyberSec"} />
        </FilterSliderItem>
      </FilterSliderContainer>
    );
  }
};

export default FilterSlider;
