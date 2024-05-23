import { Container, Box, Typography, Button, Link } from "@mui/material";
import Image from "next/image";

export default function Hero() {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box sx={{ flex: 1 }}>
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
        <Button
          variant="contained"
          color="primary"
          href="https://www.amazon.com/Money-Trap-Illusions-Inside-Bubble/dp/1250332842/ref=sr_1_1?crid=3MJWTCYSD8YLO&dib=eyJ2IjoiMSJ9.ddh0--8ABAGiD665efK-nA.7Nzbdo7ODXnKH6ojQp76tawU3iMxxeDn15ZvumtWv9Y&dib_tag=se&keywords=money+trap+alok+sama&qid=1716473974&s=books&sprefix=money+trap+alok+s%2Cstripbooks-intl-ship%2C362&sr=1-1"
          sx={{ marginTop: "20px" }}
          size="large"
        >
          Buy on Amazon
        </Button>
      </Box>
    </Box>
  );
}
