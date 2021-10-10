import React from "react";
import { NofiticationContainer, NofiticationHeader } from "./styles";

const Nofitication = ({ className }) => {
  return (
    <NofiticationContainer className={className}>
      <NofiticationHeader>
        <h3 className="text-lg font-bold text-gray-900">Nofitications</h3>
        <h3 className="text-sm font-semibold text-purple-600">Settings</h3>
      </NofiticationHeader>

      <h3 className="mt-10 text-lg text-center text-gray-400">
        No nofitications
      </h3>
    </NofiticationContainer>
  );
};

export default Nofitication;
