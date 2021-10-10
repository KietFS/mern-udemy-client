import tw from "tailwind-styled-components";

export const LoginFormContainer = tw.div`
     w-full max-h-full my-16 block
`;

export const LoginFormLabel = tw.h3`
    text-sm font-bold text-gray-900 block mb-12
`;

export const LoginFormBoard = tw.form`
    w-1/4 h-5/6 mx-auto 
`;

export const FaceBookButton = tw.button`
    bg-blue-900 text-white font-bold text-lg px-4 py-2 text-center w-full my-1
`;

export const GoogleButton = tw.button`
     text-gray-800 border-2 border-gray-900 font-bold text-lg px-4 py-2 text-center w-full my-1
`;

export const AppleButton = tw.button`
bg-gray-800 text-white font-bold text-lg px-4 py-2 text-center w-full my-1
`;

export const UsernameInput = tw.input`
 w-full border-2 border-black px-4 py-2 cursor-pointer my-1 text-lg
`;

export const PasswordInput = tw.input`
    w-full border-2 border-black px-4 py-2 cursor-pointer my-1 text-lg
`;

export const LoginButton = tw.input`
    bg-purple-500 text-white font-bold text-lg px-4 py-2 text-center w-full my-1 hover:bg-purple-600 cursor-pointer
`;

export const ForgotPassword = tw.button`
    text-purple-500 hover:text-black  text-sm mt-1 mb-2 text-center w-full
`;

export const SignUpLinkContainer = tw.div`
    mt-10 
`;

export const SignUpLinkLabel = tw.h3`
    text-gray-800  text-center text-sm font-bold cursor-pointer hover:text-purple-500
`;

export const SignupButton = tw.button`
    hover:text-gray-800  text-center text-sm font-bold cursor-pointer text-purple-500 w-full
`;
