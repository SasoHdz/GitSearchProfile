import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { Searcher } from "./components/Searcher";
import { getGitHubUser } from "./services/users";
import { UserCard } from "./containers/UserCard";

const App = () => {
  const [inputUser, setInputUser] = useState("octocat");
  const [userState, setUserState] = useState("inputUser");
  const [notFoud, setNotFound] = useState(false);

  const gettinUser = async (user) => {
    const userResponse = await getGitHubUser(user);
    if (userState === "octocat") {
      localStorage.setItem("octocat", userResponse);
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
        height: {xs:"auto",md:"500px"},
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
