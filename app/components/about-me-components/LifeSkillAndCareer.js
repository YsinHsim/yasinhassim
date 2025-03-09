// "use client"; // Uncomment if using Next.js 13+ with App Router
import { Box, Typography, Avatar, Stack, Tooltip } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function LifeSkillAndCareer() {
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
          <Tooltip title="Finish inventory management task inside freezer storage.">
            <Avatar
              src="/about-me/butcher.jpeg"
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
              Life Skills and Career
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
              After graduation, I began applying for tech jobs that aligned with my skill set. However, I struggled to secure my desired role due to my qualifications. As a result, I focused on honing skills relevant to my work, including inventory management and entry-level management skills in the retail industry.
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
              My journey took me from working in fisheries to butchering meat, from lifting goods to supervising teams. I kept learning and mastering a wide range of skills. After three years of persistence, I finally landed my first IT job.
            </Typography>
          </motion.div>
        </Box>
      </Stack>
    </motion.div>
  );
}
