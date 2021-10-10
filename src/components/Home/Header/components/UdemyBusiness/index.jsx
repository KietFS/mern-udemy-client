import React from "react";
import { UdemyBusinessContainer } from "./styles";

const UdemyBusiness = ({ className }) => {
  return (
    <UdemyBusinessContainer className={className}>
      <h3 className="text-lg font-bold text-center text-gray-900">
        Get your team access to over 6,000 top Udemy courses, anytime, anywhere.
      </h3>
      <button className="w-full px-4 py-2 mt-4 font-semibold text-center text-white bg-gray-900">
        Learn more
      </button>
    </UdemyBusinessContainer>
  );
};

export default UdemyBusiness;
