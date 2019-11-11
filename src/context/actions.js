import axios from 'axios'

import {
  GET_PROFIL,
  TOGGLE_PERSONAL_FIELD,
  CHANGE_FONT
} from "./actionTypes";

export const useActions = (state, dispatch) => {

  const getProfilData = () => {
    const url = "./profil.json";
    axios.get(url).then(resp => {
      dispatch({type: GET_PROFIL, payload: resp.data})
    });
  }

  const togglePersonalField = (fieldSwitch) => {
    dispatch({type: TOGGLE_PERSONAL_FIELD, payload: fieldSwitch})
  }

  const changeFont = (font) => {
    dispatch({type: CHANGE_FONT, payload: font})
  }

  return {
    getProfilData,
    togglePersonalField,
    changeFont
  }
}