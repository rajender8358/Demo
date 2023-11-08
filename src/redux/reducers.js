/* Redux reducers */
import {
    SETHOMEDETAILS,
  } from "../../types";

  const iState = {
    homeDetails: {},
  };
  
  export default (state = iState, action) => {
    switch (action.type) {
      case SETHOMEDETAILS:
        return {
          ...state,
          homeDetails: action.payLoad,
        };     
      default:
        return state;
    }
  };
  