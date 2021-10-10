import tw from "tailwind-styled-components";

export const SliderContainer = tw.div`
    mt-10 mr-10 gap-x-1 mx-auto grid-cols-5
    max-w-xs md:block
    xl:max-w-6xl lg:max-w-4xl md:max-w-2xl
`;

export const SliderItem = tw.div`
    cursor-pointer  flex flex-col  relative  h-72
`;

export const SliderItemLabel = tw.h3`
    text-sm w-11/12  font-bold mt-2
`;

export const SliderItemAuthor = tw.h3`
    text-xs text-gray-600 mt-2
`;

export const RateContainer = tw.h3`
    mt-2 flex 
`;

export const SliderItemPrice = tw.h3`
    text-lg font-bold
`;

export const BuyButton = tw.button`
    mx-auto  w-max bg-purple-500 text-white font-semibold text-sm  px-4 py-2 absolute bottom-0
`;
