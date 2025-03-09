"use client";

import { Box, Typography, Grid } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const responsibilities = [
  "Troubleshoot and repair computers, printers, and network issues.",
  "Install, setup and extending coverage for Starlink network.",
  "Provide technical support for estate clerks to ensure smooth IT operations.",
  "Maintain and manage IT infrastructure for 17 estates.",
  "Develop and maintain in-house systems with Laravel & ReactJS",
];

const inHouseSystems = [
  "Hardware Tracking System",
  "Purchase Document Tracking System",
  "Budget System",
];

export default function Responsibilities({ id }) {
  const refResponsibilities = useRef(null);
  const isInViewResponsibilities = useInView(refResponsibilities, { once: true, margin: "50px" });

  const refInHouse = useRef(null);
  const isInViewInHouse = useInView(refInHouse, { once: true, margin: "50px" });

  return (
    <Box id={id} sx={{ backgroundColor: "#121212", color: "white", p: 4 }}>
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

      {/* In-House Systems Section */}
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
            mt: { xs: 2, sm: 4 },
          }}
        >
          In-House Systems
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
              <Typography variant="body1">{system}</Typography>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
