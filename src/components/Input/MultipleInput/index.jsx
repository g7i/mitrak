import { InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";
const MultipleInput = (props) => {
  const { onChange, label, id, variant, value } = props;
  const [text, setText] = useState("");
  const onHandleChange = (e) => {
    setText(e.target.value);
  };
  const onDelete = (text) => {
    if (value) {
      onChange(value.filter((item) => item !== text));
    }
  };
  return (
    <div style={{ width: "100%" }}>
      <TextField
        id={id || "basic"}
        style={{ width: "100%" }}
        label={label}
        variant={variant || "standard"}
        onChange={onHandleChange}
        value={text}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            if (text) {
              if (value) {
                onChange([...value, text]);
              }
              setText("");
            }
          }
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <AddCircleIcon
                style={{ cursor: "pointer" }}
                color="primary"
                onClick={() => {
                  if (text) {
                    if (value) {
                      onChange([...value, text]);
                    }
                    setText("");
                  }
                }}
              />
            </InputAdornment>
          ),
        }}
      />
      {value?.map((item) => (
        <DataPointComponent text={item} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default MultipleInput;

const DataPointComponent = (props) => {
  const { text, onDelete } = props;
  return (
    <DataPoints>
      <p>{text}</p>
      <DeleteIcon color="primary" onClick={() => onDelete(text)} />
    </DataPoints>
  );
};

const DataPoints = styled.div`
  color: #1b1b1b;
  width: 100%;
  background-color: #89cff010;
  display: flex;
  justify-content: space-between;
  p {
    word-break : break-all;
  }
`;
