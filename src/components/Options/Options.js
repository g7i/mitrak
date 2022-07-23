import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      renderInput={(params) => <TextField {...params} label="For Enquiry" />}
      required
      style={{ width: "80%", marginTop: "1em" }}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'ADMISSION IN B.TECH' },
  { label: 'ADMISSION IN MBA' },
  { label: 'JOB ENQUIRY' },
  { label: 'OTHER' }
  
];
