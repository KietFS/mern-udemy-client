import tw from "tailwind-styled-components";

export const SingleCartContainer = tw.div`
    my-10 border-2 border-gray-200 w-2/3 px-4 py-2 flex items-center justify-between
`;

export const SingleCartLeft = tw.div`
    w-3/4 flex 
`;

export const SingleCartInfo = tw.div`
    ml-4 w-full
`;

export const SingleCartTitle = tw.h3`
    font-semibold text-black text-sm
`;

export const SingleCartLecture = tw.h3`
    font-semibold text-gray-500 text-sm mt-1
`;

export const SingleCartRate = tw.div`
    flex mt-1 text-gray-600
`;

export const SingleCartRight = tw.div`

`;

export const SingleCartPrice = tw.h3`
    text-purple-500 text-lg font-semibold flex
`;
