import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { Searcher } from "./components/Searcher";
import { getGitHubUser } from "./services/users";
import { UserCard } from "./containers/UserCard";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  const [inputUser, setInputUser] = useState("SasoHdz");
  const [userState, setUserState] = useState("inputUser");
  const [notFoud, setNotFound] = useState(false);

  const gettinUser = async (user) => {
    const userResponse = await getGitHubUser(user);
    if (userState === "SasoHdz") {
      localStorage.setItem("SasoHdz", userResponse);
    }

    if (userResponse.message === "Not Found") {
      const { octocat } = localStorage;
      setInputUser(octocat);
      setNotFound(true);
    } else {
      setUserState(userResponse);
    }

    console.log(userResponse);
  };

  useEffect(() => {
    gettinUser(inputUser);
  }, [inputUser]);

  return (
        <Container
        sx={{
          background: "whitesmoke",
          width: {xs:'90vw', md:'80vw'},
          height: {xs:"auto",md:"600px"},
          borderRadius: "16px",
          margin:"40px auto 0px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Searcher inputUser={inputUser} setInputUser={setInputUser} />
        <UserCard userState={userState} />
      </Container>    
  );
};

export default App;
