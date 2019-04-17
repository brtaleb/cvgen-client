import React, {useLayoutEffect, useRef, useState} from 'react'
import TextareaAutosize from "react-autosize-textarea";

const HeaderField = ({name, title, summary, headerInputChange}) => {

    const [state, setState] = useState({
        title: title,
        summary: summary
    });

    const firstUpdate = useRef(true);
    useLayoutEffect(() => {
        if(firstUpdate.current){
            firstUpdate.current = false;
            return;
        }
        headerInputChange(state);
    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className="HeaderField">
            <h1>{name}</h1>

            <TextareaAutosize
                value={state.title}
                name="title"
                onChange={handleChange}
            >
                {state.title}
            </TextareaAutosize>

            <TextareaAutosize
                value={state.summary}
                name="summary"
                onChange={handleChange}
            >
                {state.summary}
            </TextareaAutosize>
        </div>
    )
};
export default HeaderField;