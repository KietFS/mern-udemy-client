import tw from "tailwind-styled-components";

export const HeroContainer = tw.div`
    flex mt-1 
`;

export const AdverModal = tw.div`
    hidden xl:block absolute left-44 top-48 px-4 w-96 py-8 shadow-md bg-white
`;

export const AdverTitle = tw.h1`
    text-3xl font-bold leading-10
`;

export const AdverDes = tw.h3`
    text-lg mt-3
`;

export const SearchContainer = tw.div`
    mt-4 flex w-full items-center
`;

export const SearchBar = tw.input`
    border-2 border-black px-4 py-2 w-full
`;
