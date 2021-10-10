import tw from "tailwind-styled-components";

export const RegisterFormContainer = tw.div`
    my-16 min-w-full max-h-full block
`;

export const RegisterFormBoard = tw.form`
    w-1/4 h-5/6 mx-auto 
`;

export const RegisterFormLabel = tw.h3`
    text-sm font-bold text-gray-900 block mb-12
`;

export const UsernameInput = tw.input`
 w-full border-2 border-black px-4 py-2 cursor-pointer my-1 text-lg
`;

export const PasswordInput = tw.input`
    w-full border-2 border-black px-4 py-2 cursor-pointer my-1 text-lg
`;

export const CheckboxContainer = tw.div`
    w-full flex items-center my-4
`;

export const RegisterFormCheckbox = tw.input`
    mr-4
`;

export const RegisterButton = tw.input`
    bg-purple-500 text-white font-bold text-lg px-4 py-2 text-center w-full my-1 hover:bg-purple-600 cursor-pointer
`;

export const PrivacyAlert = tw.div`
    mt-4 text-xs text-gray-900 text-center
`;

export const LoginLinkContainer = tw.div`
    mt-10 
`;

export const LoginLinkLabel = tw.h3`
    text-gray-800  text-center text-sm font-bold cursor-pointer hover:text-purple-500
`;

export const LoginLinkButton = tw.button`
    hover:text-gray-800  text-center text-sm font-bold cursor-pointer text-purple-500 w-full
`;
