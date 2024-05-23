import { Container, Box, Typography, Button, Link } from "@mui/material";
import Image from "next/image";
import Hero from "./components/hero";
import About from "./components/about";
import Reviews from "./components/reviews";
import Author from "./components/author";

export default function Home() {
  return (
    <Container
      sx={{
        maxWidth: "800px",
        margin: "auto",
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      <Hero />
      <About />
      <Reviews />
      <Author />
    </Container>
  );
}
