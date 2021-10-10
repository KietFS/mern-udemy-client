import React, { useContext } from "react";
import {
  SingleCartContainer,
  SingleCartInfo,
  SingleCartLecture,
  SingleCartLeft,
  SingleCartPrice,
  SingleCartRate,
  SingleCartRight,
  SingleCartTitle,
} from "./styles";
import { StarIcon, TagIcon } from "@heroicons/react/solid";
import { TrashIcon } from "@heroicons/react/outline";
import { CartContext } from "../../../contexts/CartContext";

const SingleCart = ({ title, lecture, price, rate, imageUrl }) => {
  const { deleteCart } = useContext(CartContext);

  return (
    <>
      <SingleCartContainer>
        <SingleCartLeft>
          <img src={imageUrl} alt="/" width={130} height={30} />
          <SingleCartInfo>
            <SingleCartTitle>{title}</SingleCartTitle>
            <SingleCartLecture>{lecture}</SingleCartLecture>
            <SingleCartRate>
              {[...Array(rate)].map((e, i) => {
                return (
                  <StarIcon key={i} className="h-3 text-yellow-400 xl:h-4" />
                );
              })}{" "}
              {[...Array(5 - rate)].map((e, i) => {
                return (
                  <StarIcon key={i} className="h-3 text-gray-200 xl:h-4" />
                );
              })}
            </SingleCartRate>
          </SingleCartInfo>
        </SingleCartLeft>
        <SingleCartRight>
          <SingleCartPrice>
            ${price}.99 <TagIcon className="h-5 text-purple-500" />
          </SingleCartPrice>

          <TrashIcon
            className="h-5 mt-4 text-purple-500 cursor-pointer"
            onClick={() => deleteCart(title)}
          />
        </SingleCartRight>
      </SingleCartContainer>
    </>
  );
};

export default SingleCart;
