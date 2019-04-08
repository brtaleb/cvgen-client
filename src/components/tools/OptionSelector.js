import React, {useState, useEffect} from 'react'
import {FilledInput, FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";

const OptionSelector = ({type, data, selectItem}) => {
    const [state, setState] = useState({
        value: '',
        name: 'select',
        labelWidth: 0
    });

    useEffect(() => {
        if(state.value) selectItem(state.value);
    }, [state.value]);

    const selectorOptions = data.map(option => {
        return <MenuItem key={option} value={option}>{option}</MenuItem>
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
                    variant="filled"
                    value={state.value}
                    onChange={handleChange}
                    input={
                        <FilledInput
                            name="value"
                            id="select"
                        />
                    }
                >
                    <MenuItem value=""><em>Default</em></MenuItem>
                    {selectorOptions}
                </Select>
            </FormControl>
        </div>
    )
};
export default OptionSelector;