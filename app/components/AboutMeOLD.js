"use client";

import { motion } from "framer-motion";
import { Box, Typography, Container, Avatar, Divider } from "@mui/material";
import TechSkills from './TechSkills';
import BeforeTheTech from './about-me-components/BeforeTheTech';
import ProcessSuspender from "./about-me-components/ProcessSuspender";
import LinuxAndScripting from "./about-me-components/LinuxAndScripting";
import LifeSkillAndCareer from "./about-me-components/LifeSkillAndCareer";
import ExperienceAndChallenges from "./about-me-components/ExperienceAndChallenges";

export default function AboutMe() {
    return (
        <Box
            id="about"
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#121212", // Dark background
                color: "white",
                px: 3,
            }}
        >
            <Container maxWidth="md" sx={{ mt: 10 }}>

                {/* Tech Skills */}
                <TechSkills/>

                {/* Heading */}
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        textAlign="center"
                        gutterBottom
                        sx={{ fontSize: { xs: "2rem", sm: "3rem", md: "3rem" } }} // Responsive font size
                    >
                        About Me
                    </Typography>
                    <Divider sx={{ width: 100, mx: "auto", bgcolor: "white", my: 4 }} />
                </motion.div>

                <BeforeTheTech />

                <ProcessSuspender />

                <LinuxAndScripting />

                <LifeSkillAndCareer />

                <ExperienceAndChallenges />
            </Container>
        </Box>
    );
}
