import React, {useState, useEffect} from 'react'
import TextareaAutosize from "react-autosize-textarea";

const PersonalInfoField = ({
                             address,
                             phone,
                             email,
                             birthDate,
                             linkedIn,
                             github,
                             website,
                             personalInputChange,
                             fieldsToggle
                           }) => {

  const [state, setState] = useState({
    address: address,
    phone: phone,
    email: email,
    birthDate: birthDate,
    linkedIn: linkedIn,
    github: github,
    website: website
  });

  const [stateChange, setStateChange] = useState(false);

  useEffect(() => {
    if (stateChange) personalInputChange(state);
    setStateChange(false);
  })

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
    setStateChange(true);
  }

  let addressField = <>
    <label>address</label>
    <TextareaAutosize
      value={state.address}
      name="address"
      onChange={handleChange}
    >
      {state.address}
    </TextareaAutosize>
  </>;

  let phoneField = <>
    <TextareaAutosize
      className="noMargin"
      value={state.phone}
      name="phone"
      onChange={handleChange}
    >
      {state.phone}
    </TextareaAutosize>
  </>;

  let emailField = <>
    <TextareaAutosize
      value={state.email}
      name="email"
      onChange={handleChange}
    >
      {state.email}
    </TextareaAutosize>
  </>

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

  let linkedInField = <>
    <label>linkedin</label>
    <TextareaAutosize
      value={state.linkedIn}
      name="linkedIn"
      onChange={handleChange}
    >
      {state.linkedIn}
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

      {fieldsToggle.birthDate.checked ? birthDateField : null}
      {fieldsToggle.address.checked ? addressField : null}
      <label>contact</label>
      {fieldsToggle.phone.checked ? phoneField : null}
      {fieldsToggle.email.checked ? emailField : null}
      {fieldsToggle.github.checked ? githubField : null}
      {fieldsToggle.linkedIn.checked ? linkedInField : null}
      {fieldsToggle.website.checked ? websiteField : null}

    </div>
  )
};
export default PersonalInfoField;