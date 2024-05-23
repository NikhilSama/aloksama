import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Box sx={{ marginTop: "50px" }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{ marginTop: "50px", marginBottom: "50px", textAlign: "center" }}
      >
        ABOUT THE AUTHOR
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ flex: 1 }}>
          <Box sx={{ width: "80%" }}>
            <Image
              src="/images/alok.jpeg"
              alt="Alok Sama"
              layout="responsive"
              width={200}
              height={200}
            />
          </Box>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" component="h2" sx={{ marginTop: "20px" }}>
            Alok Sama{" "}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: "20px" }}>
            Alok Sama is the former President & CFO of SoftBank Group
            International. He previously served as a Managing Director at Morgan
            Stanley, and has worked in finance and technology for over thirty
            years in New York, San Francisco, London and Hong Kong. Sama holds
            an MBA from The Wharton School and an MFA in Creative Writing from
            New York University. The Money Trap is his first book.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
