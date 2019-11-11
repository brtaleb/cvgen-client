import {
  GET_PROFIL,
  TOGGLE_PERSONAL_FIELD,
  CHANGE_FONT
} from "./actionTypes";

export const initialState = {
  profilData: null,
  font: "Roboto"
}

export const reducer = (state = initialState, action) => {
  console.log({
    oldState: state,
    type: action.type,
    payload: action.payload
  });

  switch (action.type) {

    case GET_PROFIL: {
      let profilData = action.payload;

      return {
        ...state,
        profilData
      }
    }

    case TOGGLE_PERSONAL_FIELD: {
      let fieldSwitch = action.payload;

      let profilData = Object.assign({}, state.profilData);
      profilData.layout.activeFields.personalFields[fieldSwitch.type].checked = fieldSwitch.checked;

      return {
        ...state,
        profilData
      }
    }

    case CHANGE_FONT: {
      let font = action.payload;

      return {
        ...state,
        font
      }
    }

    default:
      return state;
  }
}