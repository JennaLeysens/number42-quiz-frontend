import React from "react";
import { Box, Image, Button } from "@chakra-ui/core";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../number42-logo.png";
import { selectToken } from "../store/User/selector";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../store/User/actions";

export default function Navbar() {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

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
        <Box className="navItem">
          {!token ? (
            <NavLink exact to="/login">
              Login
            </NavLink>
          ) : (
            <Button onClick={dispatch(logOut())}>Logout</Button>
          )}
        </Box>
      </Box>
    </>
  );
}
