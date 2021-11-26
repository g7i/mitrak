import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import styled from "styled-components"
import {
  FormHeader,
  FormInnerWrapper,
  FormWrapper,
} from "../../../../components/styledComponents/Forms";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import MultipleInput from "../../../../components/Input/MultipleInput";

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

const Semester = [1, 2, 3, 4, 5, 6, 7, 8];

const PlacementsPage = () => {
  const [placementObj, setPlacementObj] = React.useState({
    company: "",
    image: "",
    startAt: new Date(),
    endAt: new Date(),
    document: "",
    description: "",
    package: "",
    requirements: [],
    applyLink: "",
    canApply: [],
  });
  const onHandleChange = (name) => (e) => {
    if (name == "requirements") {
    } else if (name == "canApply") {
    } else if (name == "startAt" || name == "endAt") {
      setPlacementObj({ ...placementObj, [name]: e });
    } else {
      setPlacementObj({ ...placementObj, [name]: e.target.value });
    }
  };
  const handleChangeSelect = (event) => {
    const {
      target: { value },
    } = event;
    setPlacementObj({
      ...placementObj,
      canApply: typeof value === "string" ? value.split(",") : value,
    });
  };

  return (
    <>
      <Container>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <FormHeader>Upload Placement News</FormHeader>
          <FormWrapper>
            <FormInnerWrapper>
              <TextField
                id="standard-basic"
                label="Company Name"
                variant="standard"
                required
                onChange={onHandleChange("company")}
              />
              <TextField
                id="standard-basic"
                label="Company Logo (URL)"
                variant="standard"
                required
                onChange={onHandleChange("image")}
              />
              <TextField
                id="standard-basic"
                label="Document (Job Description Link)"
                variant="standard"
                required
                onChange={onHandleChange("document")}
              />
              <TextField
                id="standard-basic"
                label="Description"
                variant="standard"
                onChange={onHandleChange("description")}
              />
              <TextField
                id="standard-basic"
                label="Package"
                variant="standard"
                onChange={onHandleChange("package")}
              />
              <TextField
                id="standard-basic"
                label="Apply Link"
                variant="standard"
                onChange={onHandleChange("applyLink")}
              />
              <MultipleInput
                label={"Eligible Student Creteria"}
                onChange={(arr) => {
                  setPlacementObj({ ...placementObj, requirements: arr });
                }}
              />
              <FormControl>
                <InputLabel id="demo-multiple-name-label">Semester</InputLabel>
                <Select
                  labelId="demo-multiple-name-label-placement-add-form"
                  id="demo-multiple-name"
                  multiple
                  value={placementObj.canApply}
                  onChange={handleChangeSelect}
                  input={<OutlinedInput label="Semester" />}
                  MenuProps={MenuProps}
                >
                  {Semester.map((name) => (
                    <MenuItemStyled key={name} value={name} style={{}}>
                      {name}
                    </MenuItemStyled>
                  ))}
                </Select>
              </FormControl>
              <DesktopDatePicker
                label="Start at"
                inputFormat="MM/dd/yyyy"
                value={placementObj.startAt}
                onChange={onHandleChange("startAt")}
                renderInput={(params) => <TextField {...params} />}
              />
              <DesktopDatePicker
                label="End at"
                inputFormat="MM/dd/yyyy"
                value={placementObj.endAt}
                onChange={onHandleChange("endAt")}
                renderInput={(params) => <TextField {...params} />}
              />
              <Button variant="contained">Upload</Button>
            </FormInnerWrapper>
          </FormWrapper>
        </LocalizationProvider>
      </Container>
    </>
  );
};

export default PlacementsPage;

const MenuItemStyled = styled(MenuItem)`
  .Mui-selected{
    background-color: red;
  }
`;
