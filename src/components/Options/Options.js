import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={enquiry}
      renderInput={(params) => <TextField {...params} label="For Enquiry" />}
      required
      style={{ width: "100%", marginTop: "1em" }}
    />
  );
}


const enquiry = [
  { label: 'ADMISSION IN B.TECH' },
  { label: 'ADMISSION IN MBA' },
  { label: 'JOB ENQUIRY' },
  { label: 'OTHER' }
  
];
