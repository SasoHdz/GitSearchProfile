import React from "react";
import { Typography, Stack, Paper } from "@mui/material";

const PaperInfo = (props) => {
  const { userState } = props;
  const { public_repos, followers, following } = userState;

  return (
    <Paper
      sx={{
        margin:"0 auto",
        width:{sm:"85%",lg:"70%"},
        alignSelf:{lg:"start"}
      }}
    >
      <Stack
        spacing={3}
        direction="row"
        height={{xs:"60px",lg:"70px"}}
        sx={{ 
          alignItems:'center' ,
          justifyContent: "space-evenly", 
          margin: "20px",
        }}
      >
        <Stack>
          <Typography
            sx={{
              fontSize:{xs:"0.9rem", sm:"1.4rem"}
            }}
          >Repos</Typography>
          <Typography 
            sx={{
              fontSize:{xs:"0.9rem", sm:"1.4rem"},
              textAlign:'center'
            }}
          >{public_repos}</Typography>
        </Stack>
        <Stack>
          <Typography
            sx={{
              fontSize:{xs:"0.9rem", sm:"1.4rem"}
            }}
          >Followers</Typography>
          <Typography 
            sx={{
              fontSize:{xs:"0.9rem", sm:"1.4rem"},
              textAlign:'center'
            }}
          >{followers}</Typography>
        </Stack>
        <Stack>
          <Typography
            sx={{
              fontSize:{xs:"0.9rem", sm:"1.4rem"}
            }} 
          >Following</Typography>
          <Typography 
            sx={{
              fontSize:{xs:"0.9rem", sm:"1.4rem"},
              textAlign:'center'
            }}
          >{following}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export { PaperInfo };
