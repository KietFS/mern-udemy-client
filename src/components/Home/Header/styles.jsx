import tw from "tailwind-styled-components";

export const HeaderContainer = tw.div`
    flex justify-between items-center px-6 py-5 border-b-2 border-gray-200 z-50 w-full
`;

export const HeaderItem = tw.h4`
    hidden lg:flex  text-sm text-gray-900 hover:text-purple-500 cursor-pointer font-semibold
`;

export const SearchContainer = tw.div`
   hidden lg:flex lg:w-1/5 xl:w-2/5   items-center
`;

export const SearchBar = tw.input`
    px-3 py-2 border-2 border-gray-800 w-full rounded-3xl outline-none
`;

export const LoginButton = tw.button`
    px-4 py-2 border-2 border-black font-semibold hover:bg-gray-100 hidden xl:flex
`;

export const SignupButton = tw.button`
    text-white bg-black border-2 border-white font-semibold px-4 py-2 hover:bg-gray-900 hidden xl:flex
`;

export const ChangeLanguageButton = tw.button`
    hidden xl:flex px-2 py-2 border-2 border-black hover:bg-gray-100
`;

export const AvtButton = tw.button`
    w-8 h-8 rounded-full bg-black text-white  font-bold
`;

export const SurplusButton = tw.button`
    w-7 h-7 text-xs  rounded-full bg-purple-500 text-white font-bold ml-6
`;

export const CartCount = tw.button`
    w-5 h-5 text-xs  rounded-full bg-purple-500 text-white font-bold hidden xl:block
`;

export const ShoppingCartContainer = tw.div`
    items-center xl:flex hidden
`;

export const MyLearningContainer = tw.div`
    items-center xl:flex hidden
`;

export const NofiticationContainer = tw.div`
    items-center xl:flex hidden
`;

export const MyWishListContainer = tw.div`
    items-center xl:flex hidden
`;

export const AvtContainer = tw.div`
    items-center flex
`;

export const UdemyTeachContainer = tw.div`
    items-center xl:flex hidden

`;

export const BusinessContainer = tw.div`
    items-center xl:flex hidden

`;
