import tw from "tailwind-styled-components";

export const CourseBoardContainer = tw.div`
    mt-10 w-11/12 mx-auto
`;

export const CourseBoardLabel = tw.h1`
    text-3xl font-bold mb-2
`;

export const CourseBoardDes = tw.h3`
    text-xl my-4
`;

export const SetTopicBar = tw.div`
    flex mt-10
`;

export const TopicItem = tw.h3`
    text-lg text-gray-600 cursor-pointer font-semibold mr-4 hover:text-black 
`;

export const WelcomeBackContainer = tw.div`
    flex flex-col lg:flex-row justify-between items-center 
`;
