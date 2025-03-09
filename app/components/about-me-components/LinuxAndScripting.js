"use client";
import { Box, Typography, Avatar, Stack, Tooltip } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function LinuxAndScripting() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return ( 
    <motion.div ref={ref}>
      <Stack
        spacing={{ xs: 4, sm: 10 }}
        direction={{ xs: "column", sm: "row" }}
        alignItems="center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Tooltip title="Reverse engineering process using radare2.">
            <Avatar
              src="/about-me/radare2.jpeg"
              sx={{
                width: { xs: 250, sm: 200, md: 250 },
                height: { xs: 180, sm: 200, md: 250 },
                borderRadius: 3,
                mx: "auto",
              }}
            />
          </Tooltip>
        </motion.div>

        <Box
          sx={{
            px: { xs: 2, sm: 4 },
            py: 2,
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 120 }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              sx={{
                fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                letterSpacing: "2px",
                ml: 4,
              }}
            >
              Linux and Scripting
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Typography
              variant="body1"
              paragraph
              sx={{ fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" } }}
            >
              Fascinated by my earlier discoveries, I began to dive deeper into technology, exploring Windows batch files and the Linux operating system. My growing passion for tech led me to pursue a Diploma in Computer Science at MARA University of Technology (UiTM).
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <Typography
              variant="body1"
              paragraph
              sx={{ fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" } }}
            >
              During my learning journey, I became intrigued by how keyloggers and Nmap work, which eventually led me to discover C++ and Tor Browser. This marked the beginning of an exciting chapter in my tech exploration. I quickly realized that hacking isn’t just about sitting behind a screen; it’s about truly understanding how technology functions.
            </Typography>
          </motion.div>
        </Box>
      </Stack>
    </motion.div> 
  );
}