import tw from "tailwind-styled-components";

export const MyLearningInfoContainer = tw.div`
    absolute top-24 z-20 bg-white w-80  right-64 shadow-md px-4 py-10  
`;

export const EmptyText = tw.h3`
    text-md text-gray-400 text-center font-semibold
`;

export const KeepShoppingText = tw.h3`
    text-sm text-purple-600 text-center mt-4 font-bold
`;

export const CourseItemContainer = tw.div`
    
`;

export const CourseItem = tw.div`
    grid grid-cols-2 gap-y-10 mb-4 gap-x-2  items-center
`;

export const CourseItemImage = tw.div`

`;

export const CourseItemContent = tw.div`

`;

export const CourseItemLabel = tw.h3`
    text-sm font-bold text-gray-900 
`;

export const CourseLearning = tw.h3`
    text-xs text-purple-500 font-bold cursor-pointer
`;

export const GoToMyLearningContainer = tw.div`
    mt-4 py-2 border-t-2 border-gray-200
`;

export const GoToMyLearningButton = tw.button`
    block bg-black text-white font-semibold px-4 py-4 text-lg mt-4  w-full
`;
