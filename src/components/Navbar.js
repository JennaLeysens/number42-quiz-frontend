import React from "react";
import { Box, Image, Button, Stack } from "@chakra-ui/core";
import { NavLink, useHistory } from "react-router-dom";
import "./Navbar.css";
import logo from "../number42-logo.png";
import { selectToken, selectUser } from "../store/User/selector";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../store/User/actions";

export default function Navbar() {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const history = useHistory();

  return (
    <>
      <Box className="logo">
        <NavLink exact to="/">
          <Image src={logo}></Image>
        </NavLink>
      </Box>
      <Box className="navbar">
        <Box className="navItem">
          <NavLink exact to="/">
            Home
          </NavLink>
        </Box>
        <Box className="navItem">
          <NavLink exact to="/quiz">
            Start quiz
          </NavLink>
        </Box>

        {!token ? (
          <Box className="navbar">
            <Box className="navItem">
              <NavLink exact to="/login">
                Login
              </NavLink>
            </Box>
            <Box className="navItem">
              <NavLink exact to="/signup">
                Create account
              </NavLink>
            </Box>
          </Box>
        ) : (
          <Box>
            <NavLink to="/profile">{user.name}'s quizzes</NavLink>
            <Button
              fontSize="14px"
              variantColor="gray"
              variant="outline"
              marginLeft={4}
              size="xs"
              p={2}
              onClick={() => {
                dispatch(logOut());
                history.push("/");
              }}
            >
              Logout
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
}
