import tw from "tailwind-styled-components";

export const CartInfoContainer = tw.div`
    absolute top-24 z-20 bg-white w-80  right-32 shadow-md px-4 py-10  
`;

export const EmptyText = tw.h3`
    text-md text-gray-400 text-center font-semibold
`;
export const KeepShoppingText = tw.h3`
    text-sm text-purple-600 text-center mt-4 font-bold
`;

export const CartInfoItem = tw.div`
    grid grid-cols-2 gap-y-10 mb-4 gap-x-2  items-center
`;

export const CartItemImage = tw.div`
  
`;

export const CartItemContent = tw.div`
 
`;

export const CartItemLabel = tw.h3`
    text-xs font-bold text-gray-900
`;

export const CartItemLecture = tw.h3`
    text-xs text-gray-400 font-semibold 
`;

export const CartItemPrice = tw.h3`
    text-sm text-gray-900 font-semibold 
`;

export const CartTotalContainer = tw.div`
    border-t-2 border-gray-200 mt-4 flex justify-between pt-4
`;

export const CartTotalContent = tw.h3`
    text-gray-900 text-lg font-bold
`;

export const GoToCartButton = tw.button`
    block bg-gray-900 text-white font-semibold px-4 py-4 text-lg mt-4  w-full
`;
