"use client";

import { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Box, Button, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "start",
      });
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scrolled ? "rgba(0, 0, 0, 0.6)" : "transparent",
        boxShadow: "none",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        transition: "0.3s ease-in-out",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: 3 }}>
        {/* Logo or Brand Name */}
        <Typography variant="h6" color="white" fontWeight="bold">
          MY PORTFOLIO
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          <Button sx={{ color: "white", mx: 1 }} onClick={() => scrollToSection("home")}>Home</Button>
          <Button sx={{ color: "white", mx: 1 }} onClick={() => scrollToSection("projects")}>Projects</Button>
          <Button sx={{ color: "white", mx: 1 }} onClick={() => scrollToSection("about")}>About</Button>
          <Button sx={{ color: "white", mx: 1 }} onClick={() => scrollToSection("contact")}>Contact</Button>
        </Box>

        {/* Hamburger Icon for Mobile */}
        <IconButton
          color="inherit"
          sx={{ display: { xs: "block", sm: "none" } }}
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250, p: 2 }}>
          <Button sx={{ color: "black", width: "100%", mb: 2 }} onClick={() => scrollToSection("home")}>Home</Button>
          <Button sx={{ color: "black", width: "100%", mb: 2 }} onClick={() => scrollToSection("projects")}>Projects</Button>
          <Button sx={{ color: "black", width: "100%", mb: 2 }} onClick={() => scrollToSection("about")}>About</Button>
          <Button sx={{ color: "black", width: "100%" }} onClick={() => scrollToSection("contact")}>Contact</Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}
