import React from 'react'
import {personalInfoFields} from "../../config/personalInfoFields";
import {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FieldToggle from "./FieldToggle";

const PersonalInfoToggle = ({togglePersonalField}) => {
   const personalInfo = personalInfoFields.map(el => {
      return (
          <FieldToggle
              key={el}
              type={el}
              toggleField={(type, fieldSwitch) => togglePersonalField(type, fieldSwitch)}
          />
      )
   })

   return (
       <ExpansionPanel className="PersonalInfoToggle">
          <ExpansionPanelSummary className="header" expandIcon={<ExpandMoreIcon/>}>
             <p>Personal Information</p>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="container">
             {personalInfo}
          </ExpansionPanelDetails>
       </ExpansionPanel>
   )
};
export default PersonalInfoToggle;