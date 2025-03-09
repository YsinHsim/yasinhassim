"use client";
import { Box, Typography, Avatar, Stack, Tooltip } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function BeforeTheTech() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // Triggers when 100px inside viewport

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
          <Tooltip title="Firearm training at shooting range.">
            <Avatar
              src="/about-me/military.jpeg"
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
              Before The Tech
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
              Growing up in a military environment, my family and I frequently relocated, adapting to new places and cultures. I spent much of my time with friends who shared similar experiences, and it was here that I first learned the values of teamwork and discipline.
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
              Our days were filled with military-style activities such as marching, handling firearms, and more, especially during my time at a military camp near Sungai Petani, Kedah. These formative experiences helped shape my character and work ethic.
            </Typography>
          </motion.div>
        </Box>
      </Stack>
    </motion.div>
  );
}
