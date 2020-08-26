import React from "react";
import { Box } from "@chakra-ui/core";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Box className="navbar">
      <Box className="navItem">
        <NavLink exact to="/">
          Home
        </NavLink>
      </Box>
      <Box className="navItem">
        <NavLink exact to="/answers">
          Submit answers
        </NavLink>
      </Box>
      <Box className="navItem">
        <NavLink exact to="/login">
          Login
        </NavLink>
      </Box>
    </Box>
  );
}
