import { CardMedia, Grid, Stack } from "@mui/material";
import React from "react";
import { PrincipalInfo } from "../../components/PrincipalInfo";
import { Description } from "../../containers/Description";

const UserCard = (props) => {
  const { userState } = props;
  const { avatar_url } = userState;

  return (
    <Grid container 
      spacing={2} 
      sx={{ 
        marginTop: "15px",
        justifyContent:{xs:"center"},
        alignItems:{xs:"center"}
      }}
    >
      <Grid item xs={8} sm={3}>
        <CardMedia
          component="img"
          alt="Git User"
          image={avatar_url}
          sx={{
            borderRadius: "50%",
            marginLeft:{sm:"2px"},
          }}
        />
      </Grid>
      <Grid item xs={12} sm={9}>
        <Stack
          direction="column"
          spacing={1}
          sx={{
            margin: "30px",
          }}
        >
          <PrincipalInfo userState={userState} />
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Description userState={userState} />
      </Grid>
    </Grid>
  );
};

export { UserCard };
