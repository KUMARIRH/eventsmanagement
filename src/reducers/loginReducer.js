import { LOGGED_IN, LOGGED_USER } from "../actions/types";

const initialState = {
  login: false,
  userLogged: {}
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return {
        ...state,
        login: action.payload
      };

    case "LOGGED_USER":
      console.log("goes into the LOGGED_USER functionality");
      return {
        ...state,
        userLogged: action.payload
      };

    default:
      return state;
  }
};

export default loginReducer;
