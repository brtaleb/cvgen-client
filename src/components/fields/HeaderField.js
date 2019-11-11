import React, {useEffect, useState} from 'react'
import TextareaAutosize from "react-autosize-textarea";

const HeaderField = ({name, title, summary, headerInputChange, fieldsToggle}) => {

  const [state, setState] = useState({
    title: title,
    summary: summary
  });

  const [stateChange, setStateChange] = useState(false);

  useEffect(() => {
    if (stateChange) headerInputChange(state);
    setStateChange(false)
  })

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
    setStateChange(true);
  }

  return (
    <div className="HeaderField">
      <h1>{name}</h1>

      {
        fieldsToggle.title.checked ?
          <TextareaAutosize
            value={state.title}
            name="title"
            onChange={handleChange}
          >
            {state.title}
          </TextareaAutosize> : null
      }

      {
        fieldsToggle.summary.checked ?
          <TextareaAutosize
            value={state.summary}
            name="summary"
            onChange={handleChange}
          >
            {state.summary}
          </TextareaAutosize> : null
      }
    </div>
  )
};
export default HeaderField;