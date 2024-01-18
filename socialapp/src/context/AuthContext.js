import  { createContext, useReducer } from "react";
import AuthReducer  from "./AuthReducer";


const INITIAL_STATE = {
    user : {
    _id: "65a52497f1341528a745b99d",
    username: "Killua",
    email: "zoldyck@gmail.com",
    password: "$2b$10$gQn1XXTpyLk6DCxwZqzPG.6r9eIutFe8xfFVQDhO9HDz5wOCHAUCe",
    profilePicture: "people/Img3.jpg",
    coverPicture: "",
    followers: [],
    following: [],
  },
    isFetching : false,
    error : false,
};  

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AuthReducer,INITIAL_STATE);

    return(
      <AuthContext.Provider  
      value =
      {{user: state.user, 
      isFetching: state.isFetching,
      error: state.error,
      dispatch, }}
      >
        {children}
      </AuthContext.Provider>
    );
}