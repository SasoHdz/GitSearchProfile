import React, { useState } from "react";
import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// eslint-disable-next-line react/prop-types
const Searcher = ({ setInputUser }) => {
  const [valueInput, setValueInput] = useState("");

  const onSearchValueChange = (e) => {
    const { value } = e.target;
    setValueInput(value);
  };

  const handleSubmit = () => {
    setInputUser(valueInput);
  };

  return (
    <Stack
      direction="row"
      sx={{
        margin: {xs:"30px -20px 0px 0px", sm:'30px,0px 0px'},
        width: {xs:"100%",sm:"80%"},
      }}
    >
      <TextField
        onChange={onSearchValueChange}
        id="outlined-basic"
        label="GitHub User"
        placeholder="Buscar Usuario de GitHub"
        variant="outlined"
        size="small"
        value={valueInput}
        sx={{
          width: "90%",
        }}
      />
      <IconButton
        onClick={handleSubmit}
        size="small"
        sx={{
          left: "-45px",
        }}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};

export { Searcher };
