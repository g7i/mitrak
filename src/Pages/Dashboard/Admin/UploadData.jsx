import {Container, FormControl, InputLabel, MenuItem, OutlinedInput, Select, Snackbar, TextField,} from "@mui/material";
import React, {useEffect} from "react";
import styled from "styled-components";
import {LoadingButton} from "@mui/lab";
import MuiAlert from '@mui/material/Alert';
import {FormHeader, FormInnerWrapper, FormWrapper,} from "../../../components/styledComponents/Forms";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../../../utils/firebase/db";
import MultipleInput from "../../../components/Input/MultipleInput";

const session = {
  type: "dropdown",
  name: "session",
  options: ["2021-2022", "2020-2021", "2019-2020"],
};

const month = {
  type: "dropdown",
  name: "month",
  options: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
};

const types = {
  studentPlacement: {
    fields: [
      session,
      month,
      {
        type: "text",
        name: "photo",
      },
    ],
    collection: 'placementsData',
  },
  placementActivities: {
    fields: [
      session,
      month,
      {
        type: "text",
        name: "photo",
      },
    ],
    collection: 'placementsData',
  },
  placementTestimonials: {
    fields: [
      session,
      month,
      {
        type: "text",
        name: "photo",
      },
    ],
    collection: 'placementsData',
  },
  govtSelection: {
    fields: [
      {
        type: "text",
        name: "photo",
      },
    ],
    collection: 'placementsData',
  },
  placementNews: {
    fields: [
      session,
      {
        type: "date",
        name: "date",
      },
      {
        type: "text",
        name: "company",
      },
      {
        type: "text",
        name: "package",
      },
      {
        type: "text",
        name: "description",
      },
      {
        type: "text",
        name: "applyLink",
      },
    ],
    collection: 'placementNJob',
  },
  jobNotification: {
    fields: [
      session,
      {
        type: "date",
        name: "date",
      },
      {
        type: "text",
        name: "company",
      },
      {
        type: "text",
        name: "package",
      },
      {
        type: "text",
        name: "description",
      },
    ],
    collection: 'placementNJob',
  },
  departmentActivities: {
    fields: [
      session,
      {
        type: "date",
        name: "date",
      },
      {
        type: "links",
        name: "photos",
      },
      {
        type: "dropdown",
        name: "department",
        options: ["CSE", "EE", "ME", "CE"],
      },
      {
        type: "text",
        name: "description",
      },
      {
        type: "text",
        name: "title",
      },
    ],
    collection: 'departmentsData',
  },
  industrialVisits: {
    fields: [
      session,
      {
        type: "date",
        name: "date",
      },
      {
        type: "text",
        name: "photo",
      },
      {
        type: "dropdown",
        name: "department",
        options: ["CSE", "EE", "ME", "CE"],
      },
      {
        type: "text",
        name: "description",
      },
      {
        type: "text",
        name: "title",
      },
    ],
    collection: 'departmentsData',
  },
  departmentTestimonials: {
    fields: [
      {
        type: "text",
        name: "photo",
      },
      {
        type: "dropdown",
        name: "department",
        options: ["CSE", "EE", "ME", "CE"],
      },
    ],
    collection: 'departmentsData',
  },
  departmentStories: {
    fields: [
      {
        type: "text",
        name: "photo",
      },
      {
        type: "dropdown",
        name: "department",
        options: ["CSE", "EE", "ME", "CE"],
      },
    ],
    collection: 'departmentsData',
  },
  departmentPlacements: {
    fields: [
      {
        type: "text",
        name: "photo",
      },
      {
        type: "dropdown",
        name: "department",
        options: ["CSE", "EE", "ME", "CE"],
      },
    ],
    collection: 'departmentsData',
  },
  clubsAndActivities: {
    fields: [
      session,
      {
        type: "dropdown",
        name: "type",
        options: ["Session", "CSR & NSS", "Govt. Initiated"],
      },
      {
        type: "date",
        name: "date",
      },
      {
        type: "text",
        name: "photo",
      },
      {
        type: "text",
        name: "description",
      },
      {
        type: "text",
        name: "title",
      },
    ],
    collection: 'clubsNActivities',
  },
  eventsAndGallery: {
    fields: [
      {
        type: "text",
        name: "photo",
      },
      {
        type: "text",
        name: "description",
      },
      {
        type: "text",
        name: "title",
      },
    ],
    collection: 'eventsData',
  },
  nationalAndStateEvents: {
    fields: [
      {
        type: "text",
        name: "photo",
      },
      {
        type: "text",
        name: "description",
      },
      {
        type: "text",
        name: "title",
      },
    ],
    collection: 'eventsData',
  },
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function UploadData() {
  const [currentType, setCurrentType] = React.useState('studentPlacement');
  const [currentData, setCurrentData] = React.useState({});
  const [loading , setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(null);

  useEffect(() => setCurrentData({}), [currentType])

  const onSubmit = async () => {
    if (!Object.keys(currentData).length) return;
    setLoading(true);
    try {
      const obj = {
        type: currentType,
        ...currentData,
      };
      console.log(obj)
      await addDoc(collection(db, types[currentType].collection), obj);
      setCurrentData({});
      setOpen("success");
    } catch (e) {
      console.log(e)
      setOpen("error");
    }
    setLoading(false);
  };

  const getField = item => {
    if (item.type === "text") return (
      <TextField
        label={item.name}
        onChange={e => setCurrentData(p => ({...p, [item.name]: e.target.value}))}
        key={item.name}
        value={currentData[item.name] ?? ''}
      />
    );
    if (item.type === "date") return (
      <DesktopDatePicker
        label="Date"
        inputFormat="MM/dd/yyyy"
        onChange={val => setCurrentData(p => ({...p, [item.name]: val}))}
        renderInput={(params) => <TextField {...params} />}
        key={item.name}
        value={currentData[item.name] ?? new Date()}
      />
    );
    if (item.type === "links") return (
      <MultipleInput
        value={currentData[item.name] ?? []}
        label={item.name}
        onChange={arr => setCurrentData(p => ({...p, [item.name]: arr}))}
      />
    );
    return (
      <FormControl key={item.name}>
        <InputLabel>{item.name}</InputLabel>
        <Select
          onChange={e => setCurrentData(p => ({...p, [item.name]: e.target.value}))}
          input={<OutlinedInput label={item.name} />}
          MenuProps={MenuProps}
          value={currentData[item.name] ?? item.options[0]}
        >
          {item.options.map((name) => (
            <MenuItemStyled key={name} value={name} style={{}}>
              {name}
            </MenuItemStyled>
          ))}
        </Select>
      </FormControl>
    );
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(null);
  };

  return (
    <>
      <Container>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <FormHeader style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Upload Data
            <FormControl style={{ marginLeft: "20px" }}>
              <InputLabel style={{ color: "white" }}>Type</InputLabel>
              <Select
                value={currentType}
                onChange={e => setCurrentType(e.target.value)}
                input={<OutlinedInput style={{ color: "white" }} label="Type" />}
                MenuProps={MenuProps}
                style={{ color: "white" }}
              >
                {Object.keys(types).map((name) => (
                  <MenuItemStyled key={name} value={name} style={{}}>
                    {name}
                  </MenuItemStyled>
                ))}
              </Select>
            </FormControl>
          </FormHeader>
          <FormWrapper>
            <FormInnerWrapper>

              {types[currentType].fields.map(item => getField(item))}

              <LoadingButton
                variant="contained"
                onClick={() => {
                  onSubmit();
                }}
                loading={loading}
              >
                Upload
              </LoadingButton>
            </FormInnerWrapper>
          </FormWrapper>
        </LocalizationProvider>
      </Container>
      <Snackbar open={open === "success"} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Data saved successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={open === "error"} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Unable to save data!
        </Alert>
      </Snackbar>
    </>
  );
};

const MenuItemStyled = styled(MenuItem)`
  .Mui-selected {
    background-color: red;
  }
`;

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
