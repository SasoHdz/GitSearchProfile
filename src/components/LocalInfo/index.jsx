import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from "@mui/icons-material/Business";

const LocalInfo = (props) => {
  const { userState } = props;
  const { location, twitter_username, blog, company } = userState;

  return (
    <Grid container 
      spacing={2} 
      sx={{ marginTop: "15px" }}
    >
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <LocationOnIcon />
          <Typography
            sx={{
              fontSize:{sm:"20px"},
            }}
          >{location}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <TwitterIcon />
          {twitter_username != null ? (
            <Typography
              sx={{
                fontSize:{sm:"20px"},
              }}
            >{`@${twitter_username}`}</Typography>
          ) : (
            <Typography
              sx={{
                fontSize:{sm:"20px"},
              }}
            >Not Available</Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction={{sx:"column",sm:"row"}} spacing={2}>
          <LanguageIcon />
          {blog != null ? (
            <a target="_blank" href={blog}>
              <Typography
                sx={{
                  fontSize:{sm:"20px"},
                  overflow:{xs:"hidden"},
                  width:{xs:"90%",sm:"100%"},
                  textOverflow:{xs:"ellipsis"}
                }}
              >{blog}</Typography>
            </a>
          ) : (
            <Typography
              sx={{
                fontSize:{sm:"20px"},
              }}
            >Not Available</Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction={{sx:"column",sm:"row"}}
        spacing={2}>
          <BusinessIcon />
          {company != null ? (
            <Typography
              sx={{
                fontSize:{sm:"20px"},
              }}
            >{company}</Typography>
          ) : (
            <Typography
              sx={{
                fontSize:{sm:"20px"},
              }}
            >Not Available</Typography>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
};

export { LocalInfo };
