import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import hero1 from "../assets/hero-bcg.jpeg";

const About = () => {
  return (
    <>
      <Box sx={{ background: "#fafafa", p: "2rem", mt: "3rem" }}>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ ml: "8rem", fontSize: "2.2rem", fontWeight: "800" }}
        >
          <Link color="#6d4c41" href="/home" underline="hover">
            Home
          </Link>
          <Typography color="textPrimary" fontSize="2.2rem" fontWeight="800">
            About
          </Typography>
        </Breadcrumbs>
      </Box>

      <Container
        fixed
        maxWidth="xl"
        sx={{ my: 7, display: "flex", justifyContent: "between", gap: 10 }}
      >
        <img src={hero1} alt="" width={"500px"} height={"500px"} />
        <Box
          component="div"
          maxWidth="sm"
          display="flex"
          flexDirection="column"
          gap="2rem"
        >
          <Typography variant="h2" fontSize="3rem">
            Our Story
          </Typography>
          <Typography variant="bod1" lineHeight="2.5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, nihil!
            Animi reiciendis laudantium voluptates autem? Placeat quis dolorum
            laboriosam ipsa in eius debitis impedit distinctio sequi voluptas
            saepe reiciendis, molestias dolore itaque quod eveniet magnam
            perspiciatis. Blanditiis in maxime accusantium error neque est
            tempore quibusdam. Aspernatur magnam obcaecati unde eos!
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default About;
