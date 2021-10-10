import React from "react";
import { WishListContainer } from "./styles";

const WishList = ({ className }) => {
  return (
    <WishListContainer className={className}>
      <h3 className="text-lg text-center text-gray-400">
        Your wishlist is empty
      </h3>
      <h3 className="mt-4 text-sm font-semibold text-center text-purple-600">
        Explore Course
      </h3>
    </WishListContainer>
  );
};

export default WishList;
