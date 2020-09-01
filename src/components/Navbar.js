import React from "react";
import { Box, Image } from "@chakra-ui/core";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../number42-logo.png";

export default function Navbar() {
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
          <NavLink exact to="/login">
            Login
          </NavLink>
        </Box>
      </Box>
    </>
  );
}
