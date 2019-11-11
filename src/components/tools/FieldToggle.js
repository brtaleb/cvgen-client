import React, {useState, useEffect} from 'react'
import {Card, FormControlLabel, Switch} from "@material-ui/core";

const FieldToggle = ({type, checked, toggleField, field}) => {
  const [state, setState] = useState({
    checked: checked,
    changed: false
  });

  useEffect(() => {
    if (state.changed) toggleField(field, state.checked);
    setState({
      ...state,
      changed: false
    });
  }, [state.checked]);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.checked,
      changed: true
    });
  };

  return (
    <Card className="FieldToggle">
      <FormControlLabel
        control={
          <Switch
            disabled={type === 'Name' || type === 'Phone' || type === 'Email'}
            checked={state.checked}
            onChange={handleChange('checked')}
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