import tw from "tailwind-styled-components";

export const FooterContainer = tw.div`

 bg-gray-900 px-10 py-10 mt-20

`;

export const FooterRow = tw.div`
    flex justify-between  items-center 
`;

export const FooterRowRight = tw.div`
    grid grid-cols-3 gap-x-8 w-full xl:w-2/5 mt-4
`;

export const FooterItem = tw.div`
    text-white text-sm font-semibold cursor-pointer
`;

export const LanguageButton = tw.button`
    px-4 py-2 border-2 border-white text-white hidden items-center  lg:flex
`;

export const Authorize = tw.div`
    text-xs text-white font-semibold
`;
