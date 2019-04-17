import React, {useLayoutEffect, useRef, useState} from 'react'
import TextareaAutosize from "react-autosize-textarea";

const PersonalInfoField = ({
                               adress,
                               contact,
                               birthDate,
                               linkedin,
                               github,
                               website,
                               personalInfoInput
                           }) => {

    const [state, setState] = useState({
        adress: adress,
        contact: contact,
        birthDate: birthDate,
        linkedin: linkedin,
        github: github,
        website: website
    });

    const firstUpdate = useRef(true);
    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        personalInfoInput(state);
    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    let adressField = <>
        <label>address</label>
        <TextareaAutosize
            value={state.adress}
            name="adress"
            onChange={handleChange}
        >
            {state.adress}
        </TextareaAutosize>
    </>;

    let contactField = <>
        <label>contact</label>
        <TextareaAutosize
            className="noMargin"
            value={state.contact.phone}
            name="phone"
            onChange={handleChange}
        >
            {state.phone}
        </TextareaAutosize>
        <TextareaAutosize
            value={state.contact.email}
            name="email"
            onChange={handleChange}
        >
            {state.email}
        </TextareaAutosize>
    </>;

    let birthDateField = <>
        <label>date of birth</label>
        <TextareaAutosize
            value={state.birthDate}
            name="birthDate"
            onChange={handleChange}
        >
            {state.birthDate}
        </TextareaAutosize>
    </>;

    let lnkedinField = <>
        <label>linkedin</label>
        <TextareaAutosize
            value={state.linkedin}
            name="linkedin"
            onChange={handleChange}
        >
            {state.linkedin}
        </TextareaAutosize>
    </>;

    let githubField = <>
        <label>github</label>
        <TextareaAutosize
            value={state.github}
            name="github"
            onChange={handleChange}
        >
            {state.github}
        </TextareaAutosize>
    </>;

    let websiteField = <>
        <label>website</label>
        <TextareaAutosize
            value={state.website}
            name="website"
            onChange={handleChange}
        >
            {state.website}
        </TextareaAutosize>
    </>;

    return (
        <div className="PersonalInfoField">

            {state.adress ? adressField : null}
            {state.contact ? contactField : null}
            {state.birthDate ? birthDateField : null}
            {state.linkedin ? lnkedinField : null}
            {state.github ? githubField : null}
            {state.website ? websiteField : null}

        </div>
    )
};
export default PersonalInfoField;