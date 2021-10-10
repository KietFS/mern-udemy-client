import tw from "tailwind-styled-components";

export const DropDownContainer = tw.div`
    absolute top-24 z-20 bg-white w-80  right-5 shadow-lg px-4 py-4
`;

export const UserInfoContainer = tw.div`
    border-b-2 border-gray-200 flex py-2 items-center 
`;

export const AvtLarge = tw.div`
    text-center h-14 w-14 text-xl font-bold text-white bg-gray-900 p-4 rounded-full
`;

export const UserContent = tw.div`
ml-4
`;

export const UserName = tw.h3`
text-gray-900 text-lg font-semibold 
`;

export const UserEmail = tw.h3`
    text-gray-400 text-sm mt-1
`;

export const AcademicContainer = tw.div`
    border-b-2 border-gray-200 py-2
`;

export const AcademicItem = tw.h3`
    text-sm text-gray-900 hover:text-purple-600 my-4 cursor-pointer flex justify-between
`;

export const NumberButton = tw.div`
    w-5 h-5 bg-purple-500 text-white font-semibold text-center  rounded-full 
`;
