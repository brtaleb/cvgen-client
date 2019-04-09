import React, {useLayoutEffect, useRef, useState} from 'react'
import {autosize} from "../utils";

const InfoRow = ({formatedDate, title, subtitle, summary, inputChange}) => {
    const [state, setState] = useState({
        formatedDate: formatedDate,
        title: title,
        subtitle: subtitle,
        summary: summary
    })

    const firstUpdate = useRef(true);
    useLayoutEffect(() => {
        if(firstUpdate.current){
            firstUpdate.current = false;
            return;
        }
        inputChange(state);
    });

    const handleChange = (event) => {
        autosize(event);
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className="InfoRow">
            <textarea
                value={state.formatedDate}
                name="formatedDate"
                onChange={handleChange}
            >
                {state.formatedDate}
            </textarea>
            <textarea
                className="titleInput"
                value={state.title}
                name="title"
                onChange={handleChange}
            >
                {state.title}
            </textarea>
            <textarea
                value={state.subtitle}
                name="subtitle"
                onChange={handleChange}
            >
                {state.subtitle}
            </textarea>
            <textarea
                className="summaryInput"
                value={state.summary}
                name="summary"
                onChange={handleChange}
            >
                {state.summary}
            </textarea>
        </div>
    )
};
export default InfoRow;