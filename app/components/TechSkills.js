// components/TechSkills.js
"use client";

import { Box, Typography, Grid, Chip, Stack } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techSkills = [
    { label: "JavaScript", color: "primary" },
    { label: "C++", color: "primary" },
    { label: "Python", color: "primary" },
    { label: "PHP", color: "primary" },
    { label: "SQL", color: "primary" },
    { label: "Java", color: "primary" },
    { label: "MongoDB", color: "secondary" },
    { label: "Laravel", color: "secondary" },
    { label: "ReactJS", color: "secondary" },
    { label: "Node.js", color: "secondary" },
    { label: "Express.js", color: "secondary" },
    { label: "Next.js", color: "secondary" },
    { label: "Git", color: "default" },
    { label: "Vercel", color: "default" },
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
                                <Chip label={skill.label} color={skill.color} sx={{ p: 1.5, mb: 1, fontSize: "1rem" }} />
                            </motion.div>
                        ))}
                    </Stack>
            </Grid>
        </Box>
    );
}
