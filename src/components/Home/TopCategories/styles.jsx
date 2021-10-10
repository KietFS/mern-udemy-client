import tw from "tailwind-styled-components";

export const TopCategoriesContainer = tw.div`
    mt-28 mx-auto 
`;

export const TopCategoriesTitle = tw.h1`
    font-bold text-lg mb-8
`;

export const CategoriesWrapper = tw.div`
    grid gap-x-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-y-4  flex-wrap mx-auto
`;

export const ItemContainer = tw.div`
     cursor-pointer w-5/6 md:w-3/4 lg:w-3/4 xl:w-full
`;

export const ItemLabel = tw.h3`
    text-sm font-bold mt-2 
`;
