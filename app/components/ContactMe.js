"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";

const contacts = [
  { icon: '/contact/whatsapp.png', link: "https://wa.me/+60128507469?text=Hi there! I just saw your portfolio.", label: "Whatsapp" },
  { icon: '/contact/github.png', link: "https://github.com/YsinHsim", label: "GitHub" },
  { icon: '/contact/gmail.png', link: "mailto:yasinhassim43@gmail.com", label: "Email" },
];

export default function ContactMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "50px" });

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "white",
        p: 5,
      }}
    >
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
          Ping Me
        </Typography>
      </motion.div>

      <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
        {contacts.map((contact, index) => (
          <Grid item key={index}>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <IconButton
                component="a"
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "white", backgroundColor: "#1E1E1E", p: 2, borderRadius: "50%" }}
              >
                <img src={contact.icon} alt={contact.label} width={24} height={24} />
              </IconButton>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}