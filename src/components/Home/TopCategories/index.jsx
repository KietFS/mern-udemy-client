import React, { useState } from "react";
import {
  CategoriesWrapper,
  ItemContainer,
  ItemLabel,
  TopCategoriesContainer,
  TopCategoriesTitle,
} from "./styles";
import Design from "../../../images/design.jpg";
import Development from "../../../images/development.jpg";
import Marketting from "../../../images/marketting.jpg";
import ItAndSoftware from "../../../images/itandsoftware.jpg";
import PersonalDevelopment from "../../../images/personaldevelopment.jpg";
import Business from "../../../images/business.jpg";
import Photography from "../../../images/photography.jpg";
import Music from "../../../images/music.jpg";

const TopCategories = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      title: "Design",
      background: Design,
    },

    {
      id: 2,
      title: "Development",
      background: Development,
    },

    {
      id: 3,
      title: "Marketting",
      background: Marketting,
    },

    {
      id: 4,
      title: "It And Software",
      background: ItAndSoftware,
    },

    {
      id: 5,
      title: "Personal Development",
      background: PersonalDevelopment,
    },
    {
      id: 6,
      title: "Business",
      background: Business,
    },
    {
      id: 7,
      title: "Photography",
      background: Photography,
    },
    {
      id: 8,
      title: "Music",
      background: Music,
    },
  ]);

  return (
    <TopCategoriesContainer>
      <TopCategoriesTitle>Top Categories</TopCategoriesTitle>
      <CategoriesWrapper>
        {categories.map((item) => {
          return (
            <ItemContainer key={item.id}>
              <img src={item.background} alt="/" />
              <ItemLabel>{item.title}</ItemLabel>
            </ItemContainer>
          );
        })}
      </CategoriesWrapper>
    </TopCategoriesContainer>
  );
};

export default TopCategories;
