// components/TechSkills.js
"use client";

import { Box, Typography, Grid, Chip, Stack } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techSkills = [
    { label: "C++", color: "primary" },
    { label: "Java", color: "primary" },
    { label: "Python", color: "primary" },
    { label: "JavaScript", color: "primary" },
    { label: "Git", color: "primary" },
    { label: "Vercel", color: "primary" },
    { label: "PHP", color: "primary" },
    { label: "MySQL", color: "primary" },
    { label: "MariaDB", color: "primary" },
    { label: "MongoDB", color: "primary" },
    { label: "mongoose", color: "primary" },
    { label: "Laravel", color: "primary" },
    { label: "InertiaJs", color: "primary" },
    { label: "Next.js", color: "primary" },
    { label: "ReactJS", color: "primary" },
    { label: "Node.js", color: "primary" },
    { label: "Express.js", color: "primary" },
    { label: "Bootstrap 3", color: "primary" },
    { label: "Tailwind CSS", color: "primary" },
    { label: "Material UI", color: "primary" },
    { label: "Framer Motion", color: "primary" },
];

export default function TechSkills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "50px" });

    return (
        <Box sx={{ backgroundColor: "#121212", color: "white", p: 4 }}>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, x: "100%" }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <Typography
                    variant="h3"
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                        fontSize: { xs: "2rem", sm: "3rem", md: "3rem" },
                    }}
                >
                    Frameworks & Skills
                </Typography>
            </motion.div>

            <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
            <Stack
                        direction="row"
                        spacing={2}
                        sx={{ flexWrap: "wrap", justifyContent: "center" }}
                    >
                        {techSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Chip label={skill.label} color={skill.color} sx={{ p: 1.5, mb: 2, fontSize: "1rem", fontWeight: "bold" }} />
                            </motion.div>
                        ))}
                    </Stack>
            </Grid>
        </Box>
    );
}
