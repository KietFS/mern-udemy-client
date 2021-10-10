export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "https://server-mern-udemy.herokuapp.com/api"
    : "https://server-mern-udemy.herokuapp.com/api";

export const LOCAL_STORAGE_TOKEN_NAME = "token_name";
