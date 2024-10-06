import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { news } from "./news";
import { prase } from "./prase";
  
export default function Reviews({ reviews, title }: { reviews: typeof news | typeof prase, title: string }) {
  return (
    <div>
      <Typography
        variant="h4"
        component="h2"
        sx={{ marginTop: "50px", marginBottom: "50px", textAlign: "center" }}
      >
        {title}
      </Typography>
      {reviews.map((article, index) => (
        <Accordion key={index} sx={{ backgroundColor: "transparent" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}a-content`}
            id={`panel${index}a-header`}
          >
            <Typography>{article.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{article.review}</Typography>
            {article.link && (
              <Typography
                component="span"
                sx={{
                  color: "blue",
                  textDecoration: "underline",
                }}
              >
                <Link href={article.link ?? "#"} target="_blank">
                  Click to Read more ...
                </Link>
              </Typography>
            )}
            <Typography
              sx={{
                fontStyle: "italic",
                marginTop: "10px",
              }}
            >
              {article.author}
              {article.authorTitle && `, ${article.authorTitle}`}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
