import {
   GET_PROFIL
} from "./actionTypes";

export const initialState = {
   profilData: null
}

export const reducer = (state = initialState, action) => {
   console.log({
      oldState: state,
      type: action.type,
      payload: action.payload
   });

   switch (action.type) {

      case GET_PROFIL:
         let profilData = action.payload;

         return {
            ...state,
            profilData
         }

      default:
         return state;
   }
}