/* eslint-disable react/prop-types */
import React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const HotnessSelect = ({ chilies, hotness, onChange }) => {
  const hotnessList = chilies
    .map((c) => c.hotness)
    .filter((h, i, l) => l.indexOf(h) === i);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(e) => onChange(e.target.value)}
          displayEmpty
          value={hotness}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Hotness</em>
          </MenuItem>
          {hotnessList.map((h) => (
            <MenuItem key={`${h}`} value={`${h}`}>
              {`${h}`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default HotnessSelect;
