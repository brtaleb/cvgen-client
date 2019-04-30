import React, {useState, useEffect} from 'react'
import {Card, FormControlLabel, Switch} from "@material-ui/core";

const FieldToggle = ({type, toggleField}) => {
   const [state, setState] = useState({
      fieldSwitch: true
   });

   useEffect(() => {
      toggleField(type, state.fieldSwitch);

   }, []);

   const handleChange = name => event => {
      setState({
         ...state,
         [name]: event.target.checked
      });
   };

   return (
       <Card className="FieldToggle">
          <FormControlLabel
              control={
                 <Switch
                     checked={state.fieldSwitch}
                     onChange={handleChange('fieldSwitch')}
                     value="fieldToggled"
                     color="primary"
                 />
              }
              label={type}
              labelPlacement="start"
          />
       </Card>
   )
};
export default FieldToggle;