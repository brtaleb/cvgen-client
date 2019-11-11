import React, {useState} from 'react'
import TextareaAutosize from "react-autosize-textarea";

const BasicListElement = ({element, details, inputChange}) => {

  const [state, setState] = useState({
    element: element,
    details: details
  })

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className="BasicListElement">

      <TextareaAutosize
        value={state.element ? state.element : ""}
        name="element"
        onChange={handleChange}
      >
      </TextareaAutosize>

      <TextareaAutosize
        value={state.details ? state.details : ""}
        name="details"
        onChange={handleChange}
      >
      </TextareaAutosize>

    </div>
  )
};
export default BasicListElement;