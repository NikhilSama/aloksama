import { Container, Box, Typography, Button, Link } from "@mui/material";
import Image from "next/image";

export default function Hero() {
  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src="/images/bookcover.jpeg"
          alt="Book Cover"
          width={500}
          height={500}
        />
      </Box>
      <Box sx={{ flex: 1, paddingLeft: 2, marginTop: "50px" }}>
        <Typography variant="h2" component="h1">
          The Money Trap
        </Typography>
        <Typography variant="h4" component="h2" sx={{ marginTop: "20px" }}>
          Lost Illusions Inside the Tech Bubble
        </Typography>
        <Typography variant="h5" sx={{ marginTop: "20px" }}>
          by: Alok Sama
        </Typography>
        <Typography variant="body1" sx={{ marginTop: "20px" }}>
          A gripping and entertaining memoir that shines a rare light on an
          industry that is disrupting our lives.
        </Typography>
        <Typography variant="h6" sx={{ marginTop: "20px" }}>
          Buy on:
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="https://a.co/d/ejmoGQu"
          sx={{ marginTop: "20px", marginRight: "20px" }}
          size="large"
        >
          Amazon US
        </Button>
        <Button
          variant="contained"
          color="primary"
          href="https://www.amazon.co.uk/Money-Trap-Fortunes-Illusions-Inside/dp/1035049325"
          sx={{ marginTop: "20px", marginRight: "20px" }}
          size="large"
        >
          Amazon UK
        </Button>
        <Button
          variant="contained"
          color="primary"
          href="https://amzn.in/d/esoCIpP"
          sx={{ marginTop: "20px", marginRight: "20px" }}
          size="large"
        >
          Amazon IN
        </Button>
        <Typography
          variant="body1"
          sx={{ marginTop: "20px", fontStyle: "italic" }}
        >
          US Release: Sept 16
          2024&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; U.K. & India
          Release: September 19 2024
        </Typography>
      </Box>
    </Box>
  );
}
