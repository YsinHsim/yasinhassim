"use client";

import { Box, Avatar, Typography } from "@mui/material";
import { motion } from "framer-motion";
import CustomAppBar from "./components/CustomAppBar";
import AboutMe from "./components/AboutMe";
import CurrentRole from "./components/CurrentRole";
import ContactMe from "./components/ContactMe";
import TechSkills from "./components/TechSkills";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Box sx={{ overflowX: "hidden" }}> {/* Prevents unwanted horizontal scrolling */}
        {/* Hero Section */}
        <Box
          sx={{
            position: "relative",
            width: "100vw",
            minHeight: "100vh", // Ensures scrolling
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          {/* Background Video */}
          <video
            src="/background.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: -1,
            }}
          />

          {/* AppBar */}
          <CustomAppBar />

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Avatar
              src="/profile.jfif"
              sx={{
                width: { xs: 120, sm: 150 },
                height: { xs: 120, sm: 150 },
                border: "5px solid white",
                boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)",
              }}
            />
          </motion.div>

          {/* Name and Title */}
          <Box sx={{ textAlign: "center", mt: 4 }}>
            {/* Animated Name */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <Typography
                variant="h4"
                color="white"
                fontWeight="bold"
                sx={{ fontSize: { xs: "2rem", sm: "3rem", md: "4rem" } }}
              >
                Muhammad Yasin Abdul Hassim
              </Typography>
            </motion.div>

            {/* Animated Title */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
            >
              <Typography
                variant="subtitle1"
                color="white"
                sx={{ fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" } }}
              >
                IT Technician | Web Developer
              </Typography>
            </motion.div>
          </Box>
        </Box>

        {/* Sections */}
        <AboutMe id="about" />
        <CurrentRole id="projects" />
        <TechSkills />
        <ContactMe id="contact" />
        <Footer id="footer" />
      </Box>
    </>
  );
}
