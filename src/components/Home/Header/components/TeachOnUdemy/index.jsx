import React from "react";
import { TeachOnUdemyContainer } from "./styles";

const TechOnUdemy = ({ className }) => {
  return (
    <TeachOnUdemyContainer className={className}>
      <h3 className="text-lg font-bold text-center text-gray-900">
        Turn what you know into an opportunity and reach millions around the
        world.
      </h3>
      <button className="w-full px-4 py-2 mt-4 font-semibold text-center text-white bg-gray-900">
        Learn more
      </button>
    </TeachOnUdemyContainer>
  );
};

export default TechOnUdemy;
