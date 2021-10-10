import tw from "tailwind-styled-components";

export const MyLearningContainer = tw.div`
`;

export const MyLearningBanner = tw.div`
    bg-gray-900 px-48 py-16 text-3xl text-white font-bold
`;

export const MyLearningBody = tw.div`
    w-4/6 mt-20 grid grid-cols-3 gap-x-6 gap-y-8 mx-auto
`;

export const MyLearningItem = tw.div`
    h-64 shadow-lg 
`;

export const MyLearningItemContent = tw.div`
    w-4/6 mx-auto mt-2 
`;

export const MyLearningItemTitle = tw.h3`
    text-sm font-semibold text-gray-900 mt-4
`;

export const MyLearningItemLecture = tw.h3`
    text-sm font-semibold text-purple-500 mt-2
`;

export const MyLearningItemStart = tw.h3`
    cursor-pointer text-gray-600 text-lg mt-2
`;
