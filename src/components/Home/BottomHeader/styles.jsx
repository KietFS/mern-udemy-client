import tw from "tailwind-styled-components";

export const BottomHeaderContainer = tw.div`
    px-48 py-4 hidden xl:flex justify-between shadow-md
`;

export const BottomHeaderItem = tw.li`
    font-semibold text-xs text-gray-900 cursor-pointer list-none hover:text-purple-500
`;
