"use client";

import { Box, Typography, Grid } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Array for responsibilities
const responsibilities = [
  "Troubleshoot and repair computers, printers, and network issues.",
  "Install, setup and extending coverage for Starlink network.",
  "Provide technical support for estate clerks to ensure smooth IT operations.",
  "Maintain and manage IT infrastructure for 17 estates.",
  "Develop and maintain in-house systems with Laravel & ReactJS",
  "Collaborate directly with clients to elicit and define their user requirements.",
  "Develop government-related web based system with Laravel & Nuxt(Vue)",
];

// Array for in-house (work) projects
const inHouseSystems = [
  { name: "eNORES", link: "https://enores.jtksabah.gov.my/" },
  { name: "Hardware Tracking System", link: "https://github.com/YsinHsim/hardware-tracking" },
  { name: "Purchase Document Tracking System" },
  { name: "Budget System" },
];

// Array for personal projects
const personalProject = [
  { name: "Startpage" , link: "https://startpage-yasin.vercel.app/" },
  { name: "Estate Utility" , link: "https://estate-utility.vercel.app/" }
];

export default function Responsibilities({ id }) {
  // Ref and inView hook for Responsibilities section animation
  const refResponsibilities = useRef(null);
  const isInViewResponsibilities = useInView(refResponsibilities, { once: true, margin: "50px" });

  // Ref and inView hook for In-House Systems (Work Project) section animation
  const refInHouse = useRef(null);
  const isInViewInHouse = useInView(refInHouse, { once: true, margin: "50px" });

  // Ref and inView hook for Personal Project section animation
  const refPersonalProject = useRef(null);
  const isInViewPersonalProject = useInView(refPersonalProject, { once: true, margin: "50px" });

  return (
    <Box id={id} sx={{ backgroundColor: "#121212", color: "white", p: 4 }}>

      {/* Work Project Section */}
      <motion.div
        ref={refInHouse}
        initial={{ opacity: 0, x: "100%" }}
        animate={isInViewInHouse ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontSize: { xs: "2rem", sm: "3rem", md: "3rem" },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          Work Project
        </Typography>
      </motion.div>

      <Grid container spacing={2} justifyContent="center">
        {inHouseSystems.map((system, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInViewInHouse ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.05, backgroundColor: "#333", transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95 }}
              style={{
                borderRadius: 8,
                padding: 16,
                backgroundColor: "#272727",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {system.link ? (
                <Typography
                  variant="body1"
                  component="a"
                  href={system.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  {system.name}
                </Typography>
              ) : (
                <Typography variant="body1">{system.name}</Typography>
              )}
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Personal Project Section - Added as requested */}
      <motion.div
        ref={refPersonalProject} // Use new ref for personal project section
        initial={{ opacity: 0, x: "100%" }}
        animate={isInViewPersonalProject ? { opacity: 1, x: 0 } : {}} // Animate based on its own inView state
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontSize: { xs: "2rem", sm: "3rem", md: "3rem" },
            textAlign: { xs: "center", sm: "left" },
            mt: { xs: 2, sm: 4 }, // Add margin top for spacing
          }}
        >
          Personal Project
        </Typography>
      </motion.div>

      <Grid container spacing={2} justifyContent="center">
        {personalProject.map((project, index) => ( // Map over personalProject array
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInViewPersonalProject ? { opacity: 1, y: 0 } : {}} // Animate based on its own inView state
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.05, backgroundColor: "#333", transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95 }}
              style={{
                borderRadius: 8,
                padding: 16,
                backgroundColor: "#272727", // Consistent background color
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {project.link ? ( // Check if link exists
                <Typography
                  variant="body1"
                  component="a"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  {project.name}
                </Typography>
              ) : (
                <Typography variant="body1">{project.name}</Typography>
              )}
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Responsibilities Section */}
      <motion.div
        ref={refResponsibilities}
        initial={{ opacity: 0, x: "100%" }}
        animate={isInViewResponsibilities ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontSize: { xs: "2rem", sm: "3rem", md: "3rem" },
            textAlign: { xs: "center", sm: "left" },
            mt: { xs: 2, sm: 4 },
          }}
        >
          Responsibilities
        </Typography>
      </motion.div>

      <Grid container spacing={2} justifyContent="center">
        {responsibilities.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInViewResponsibilities ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.05, backgroundColor: "#333", transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95 }}
              style={{ borderRadius: 8, padding: 16, backgroundColor: "#1E1E1E" }}
            >
              <Typography variant="body1">• {item}</Typography>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
