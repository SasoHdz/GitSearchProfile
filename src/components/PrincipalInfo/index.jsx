import { Typography, Stack } from "@mui/material";
import React, { Fragment } from "react";

const PrincipalInfo = (props) => {
  const { userState } = props;
  const { name, login, created_at } = userState;

  return (
    <Fragment>
      <Stack direction={{xs:"column",md:"row"}} sx={{ justifyContent: "space-between" }}>
        <Typography variant={{xs:"h5",md:"h4"}}>{name}</Typography>
        <Typography variant={{xs:"body1",md:"subtitle2"}}>{created_at}</Typography>
      </Stack>
      <Typography variant="caption">{`@${login}`}</Typography>
    </Fragment>
  );
};

export { PrincipalInfo };
