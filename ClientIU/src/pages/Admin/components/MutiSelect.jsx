import React, { useEffect, useMemo, useState } from "react";

// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import BookmarkIcon from "@mui/icons-material/Bookmark";

// import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
// import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
// import UpdateIcon from "@mui/icons-material/Update";
// import { Link, redirect, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  TextField,
  Stack,
  OutlinedInput,
  InputLabel,
  MenuItem,
  Chip,
  Select,
  FormControl,
  Autocomplete,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";
import Axios from "../../../config/axiosConfig";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

const MultiSelect = ({ names, Students, teacherId }) => {
  const handleClickSetting = async () => {
    alert(" set students into teacher ?");
    try {
      await Axios.post("/api/admin/setTeacherAndStudent", {
        TeacherId: teacherId,
        StudentListID: selectedNames,
      }).then((res) => {
        if (res.data.success) {
          alert("set success");
        } else {
          alert("set error");
        }
      });
    } catch (error) {
      console.log(error);
      alert("have error");
    }
    // console.log(selectedNames);
  };
  const [selectedNames, setSelectedNames] = useState(Students);
  return (
    <Box>
      <FormControl sx={{ m: 1, width: 500 }}>
        <InputLabel>Multiple Select</InputLabel>
        <Select
          multiple
          value={selectedNames}
          onChange={(e) => setSelectedNames(e.target.value)}
          input={<OutlinedInput label="Multiple Select" />}
          renderValue={(selected) => (
            <Stack gap={1} direction="row" flexWrap="wrap">
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  onDelete={() =>
                    setSelectedNames(
                      selectedNames.filter((item) => item !== value)
                    )
                  }
                  deleteIcon={
                    <CancelIcon
                      onMouseDown={(event) => event.stopPropagation()}
                    />
                  }
                />
              ))}
            </Stack>
          )}
        >
          {names.map((name) => (
            <MenuItem
              key={name.ID}
              value={name.ID}
              sx={{ justifyContent: "space-between" }}
            >
              ID:{name.ID}
              {/* Teacher:{name.teacherName} */}
              {selectedNames.includes(name.ID) ? (
                <CheckIcon color="info" />
              ) : null}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Typography>Set Students For Teacher</Typography>
        <Button
          sx={{ ml: "20px" }}
          variant="outlined"
          startIcon={<SettingsSuggestIcon />}
          onClick={handleClickSetting}
        >
          Set Students
        </Button>
      </Box>
    </Box>
  );
};
export default MultiSelect;
