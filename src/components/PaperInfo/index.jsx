import React from "react";
import { Typography, Stack, Paper } from "@mui/material";

const PaperInfo = (props) => {
  const { userState } = props;
  const { public_repos, followers, following } = userState;

  return (
    <Paper>
      <Stack
        spacing={3}
        direction="row"
        height={{xs:"60px"}}
        sx={{ alignItems:'center' ,justifyContent: "space-evenly", margin: "20px",}}
      >
        <Stack>
          <Typography variant={{xs:"subtitle1",md:"h5"}}>Repos</Typography>
          <Typography variant={{xs:"subtitle2",md:"h6"}} sx={{textAlign:'center'}}>{public_repos}</Typography>
        </Stack>
        <Stack>
          <Typography variant={{xs:"subtitle1",md:"h5"}}>Followers</Typography>
          <Typography variant={{xs:"subtitle2",md:"h6"}} sx={{textAlign:'center'}}>{followers}</Typography>
        </Stack>
        <Stack>
          <Typography variant={{xs:"subtitle1",md:"h5"}}>Following</Typography>
          <Typography variant={{xs:"subtitle2",md:"h6"}} sx={{textAlign:'center'}}>{following}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export { PaperInfo };
