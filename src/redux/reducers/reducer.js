import * as actionTypes from "../actions/actionTypes";


const initialState = {
data: null,
error: false,
fetching: false,
postres:null,
loading:false
};

export function reducer(state = initialState, action) {
   
    switch (action.type) {
      case actionTypes.CREATE_BATTLE_REQUEST:
        
      return {
          ...state,
          error: false,
          fetching: true
        };
      case actionTypes.CREATE_BATTLE_SUCCESS:
       
      return {
          ...state,
          data:  action.Response.data,
          fetching: false
        };
      case actionTypes.CREATE_BATTLE_FAILURE:
       
      return {
         ...state,
         error:true,
        fetching: false
     };
     case actionTypes.CREATE_NEW_POST_REQUEST: 
      return {
         ...state,
         loading:true
     };
     case actionTypes.CREATE_NEW_POST_SUCCESS: 
     return {
        ...state,
        loading:false,
        postres:action.response.data
    };
  default:
    return state;
}
}