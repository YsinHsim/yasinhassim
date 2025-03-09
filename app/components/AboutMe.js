"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Box, Typography, Stack } from "@mui/material";
import BeforeTheTech from "./about-me-components/BeforeTheTech";
import ProcessSuspender from "./about-me-components/ProcessSuspender";
import LinuxAndScripting from "./about-me-components/LinuxAndScripting";
import LifeSkillAndCareer from "./about-me-components/LifeSkillAndCareer";
import ExperienceAndChallenges from "./about-me-components/ExperienceAndChallenges";

export default function AboutMe({ id }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "50px" });

  return (
    <Box
      id={id}
      sx={{
        backgroundColor: "#121212", // Dark background
        color: "white",
        p: 5,
        pt: 10,
      }}
    >
      <motion.div
        ref={ref} // Attach the ref here
        initial={{ opacity: 0, x: "100%" }} // Start off-screen (right)
        animate={isInView ? { opacity: 1, x: 0 } : {}} // Animate only when in view
        transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontSize: { xs: "2rem", sm: "3rem", md: "3rem" },
            textAlign: { xs: "center", sm: "left" }, // Center on small, left on larger screens
          }}
        >
          About Me
        </Typography>
      </motion.div>

      <Stack spacing={2} direction="column">
        <BeforeTheTech />
        <ProcessSuspender />
        <LinuxAndScripting />
        <LifeSkillAndCareer />
        <ExperienceAndChallenges />
      </Stack>
    </Box>
  );
}
