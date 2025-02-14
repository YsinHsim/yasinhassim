// components/Footer.js
"use client";

import { Box, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box 
            sx={{ 
                backgroundColor: "#121212", 
                color: "#E5E7E9", 
                textAlign: "center", 
                p: 4,  
            }}
        >
            <Typography variant="body2">
                © {new Date().getFullYear()} <strong>Muhammad Yasin Abdul Hassim</strong>. Created with Next.js, powered by Material UI & Framer Motion.
            </Typography>
        </Box>
    );
}
