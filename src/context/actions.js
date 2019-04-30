import axios from 'axios'

import {GET_PROFIL} from "./actionTypes";

export const useActions = (state, dispatch) => {

   const getProfilData = () => {
      const url = "./profil.json";
      axios.get(url).then(resp => {
         dispatch({type: GET_PROFIL, payload: resp.data})
      });

   }

   return {
      getProfilData
   }
}