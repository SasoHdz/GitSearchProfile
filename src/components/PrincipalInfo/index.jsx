import { Typography, Stack } from "@mui/material";
import React, { Fragment } from "react";

const PrincipalInfo = (props) => {
  const { userState } = props;
  const { name, login, created_at } = userState;

  return (
    <Fragment>
      <Stack direction={{xs:"column",sm:"row"}} sx={{ justifyContent: "space-between" }}>
        <Typography sx={{
          fontSize:{xs:"20px",sm:"30px"}
        }}>{name}</Typography>
        <Typography 
          sx={{
            fontSize:{xs:"16px",sm:"20px"}
          }}
        >{created_at}</Typography>
      </Stack>
      <Typography 
        sx={{
          fontSize:{xs:"12px",sm:"18px"}
        }}
      >{`@${login}`}</Typography>
    </Fragment>
  );
};

export { PrincipalInfo };
