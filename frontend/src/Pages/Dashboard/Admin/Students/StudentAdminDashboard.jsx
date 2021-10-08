import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

import {
  Search,
  SearchIconWrapper,
  SelectAppBar,
  StyledInputBase,
} from "./Styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { MenuItem, TextField } from "@mui/material";

const Branches = ["CSE", "Machanical", "Civil", "AI", "Electrical"];
const Year = [
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
];
const StudentAdminDashboard = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <div style={{ flexGrow: 1 }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </div>
            <div>
              <SelectAppBar
                id="outlined-select-currency"
                select
                label="Branch"
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
              >
                {Branches.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </SelectAppBar>

              <SelectAppBar
                id="outlined-select-currency"
                select
                label="Year"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                {Year?.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </SelectAppBar>

              
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default StudentAdminDashboard;

