import React from 'react'
import {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FieldToggle from "./FieldToggle";
import {objectMap} from "../../common/common";

const PersonalInfoToggle = ({togglePersonalField, personalInfoFields}) => {

  let personalInfo = objectMap(personalInfoFields, (el, index, prop) => {
    return (
      <FieldToggle
        key={el.type}
        type={el.type}
        field={prop}
        checked={el.checked}
        toggleField={(type, checked) => togglePersonalField(type, checked)}
      />
    )
  });

  return (
    <ExpansionPanel className="PersonalInfoToggle">
      <ExpansionPanelSummary className="header" expandIcon={<ExpandMoreIcon/>}>
        <p>Personal Information</p>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className="container">
        {personalInfo}l
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
};
export default PersonalInfoToggle;