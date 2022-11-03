import { Typography, Stack } from "@mui/material";
import React from "react";
import { PaperInfo } from "../../components/PaperInfo";
import { LocalInfo } from "../../components/LocalInfo";

const Description = (props) => {
  const { userState } = props;
  const { bio } = userState;
  return (
    <React.Fragment>
      <Stack
        sx={{
          justifyContent: "center",
        }}
      >
        {bio != null ? (
          <Typography variant={{xs:"body2",md:"body1"}} sx={{textAlign:'justify'}}>{bio}</Typography>
        ) : (
          <Typography variant="body1"> Lorem ipsun</Typography>
        )}
      </Stack>
      <PaperInfo userState={userState} />
      <LocalInfo userState={userState} />
    </React.Fragment>
  );
};

export { Description };
