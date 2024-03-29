import React, {useState, useEffect} from 'react'
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";

const OptionSelector = ({type, data, selectItem}) => {
  const [state, setState] = useState({
    value: '',
  });

  useEffect(() => {
    if (state.value) selectItem(state.value);
  }, [state.value]);

  const selectorOptions = data.map(option => {
    return <MenuItem key={option} style={{fontFamily: option}} value={option}>{option}</MenuItem>
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="OptionSelector">
      <FormControl className='formControl'>
        <InputLabel htmlFor='select'>{type}</InputLabel>
        <Select
          className="selectInput"
          value={state.value}
          onChange={handleChange}
          inputProps={{
            name: 'value',
            id: 'select'
          }}
        >
          <MenuItem value="Roboto"><em>Default</em></MenuItem>
          {selectorOptions}
        </Select>
      </FormControl>
    </div>
  )
};
export default OptionSelector;