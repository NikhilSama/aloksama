import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const news = [
  {
    title: "A riveting page-turner about..",
    review:
      "A riveting page-turner about the world of technology and dealmaking told by an insider…an immigrant&apos;s story with something significant to say about class, character, identity, family, and perhaps more than anything, the search for happiness.",
    author: "Jonathan Safran Foer",
    authorTitle:
      "author of Extremely Loud and Incredibly Close and Everything Is Illuminated",
  },
  {
    title: "An existential and exquisitely satisfying business thriller…",
    review:
      "An existential and exquisitely satisfying business thriller…a wonderful story that begins with big business and big deals and ends with the biggest question: what does it mean to be a person? Sama brings a pure writerly eye into rooms and situations never before captured in print. This is a thrilling and important book: the incredible thing is that it’s all true.",
    author: "David Lipsky",
    authorTitle:
      "New York Times bestselling author of Absolutely American and Although Of Course You End Up Becoming Yourself",
  },
  {
    title: "Sama writes with authority and panache, humor…",
    review:
      "Sama writes with authority and panache, humor and outrage, and above all knowledge. (Imagine Michael Lewis had been President of SoftBank.) This man knows a lot, and he’s willing to share—and to make sure you have a great time as he does. If this book doesn&apos;t become a bestseller, the world truly makes no sense.",
    author: "Darin Strauss",
    authorTitle:
      "National Book Critics Circle Award–winning author of Half a Life",
  },
  {
    title: "A rollicking, revealing, and deeply personal memoir…",
    review:
      "A rollicking, revealing, and deeply personal memoir of a banker and corporate consigliere at the very top of his game…a must-read for anyone hoping to understand how power is wielded in corporate boardrooms. I couldn’t put it down.",
    author: "Gary Ginsberg",
    authorTitle:
      "New York Times bestselling author of First Friends, former head of communications at News Corp, Time Warner and SoftBank Group",
  },
  {
    title: "Witty, incisive, and introspective…",
    review:
      "Witty, incisive, and introspective, a genuine pleasure to read…a simultaneously funny and eye-opening memoir, a rare window into a world most only hear about.",
    author: "Bradley Hope",
    authorTitle:
      "New York Times bestselling coauthor of Billion Dollar Whale and Pulitzer Prize finalist",
  },
  {
    title:
      "A fascinating story about money, power, and the culture of the rarified group…",
    review:
      "A fascinating story about money, power, and the culture of the rarified group of people who wield it…an entertaining and illuminating memoir about what it’s like to find yourself in the room as some of the biggest deals in history are being made.",
    author: "Hari Kunzru",
    authorTitle:
      "author of Blue Ruin, Red Pill, Transmission and The Impressionist",
  },
  {
    title:
      "A vivid and intimate story of an insider&apos;s rise to power in the world of money…",
    review:
      "A vivid and intimate story of an insider&apos;s rise to power in the world of money—and his search to find his own peace and freedom.",
    author: "Leigh Owings Newman",
    authorTitle:
      "books editor at Oprah.com, author of Nobody Gets Out Alive and Still Points North",
  },
  {
    title:
      "A shot of adrenaline that takes you directly inside some of the most exclusive rooms in tech and finance…",
    review:
      "A shot of adrenaline that takes you directly inside some of the most exclusive rooms in tech and finance, and a colorful insider&apos;s look into the companies that rule our world.",
    author: "Rob Copeland",
    authorTitle: "New York Times bestselling author of The Fund",
  },
];
export default function Reviews() {
  return (
    <div>
      <Typography
        variant="h4"
        component="h2"
        sx={{ marginTop: "50px", marginBottom: "50px", textAlign: "center" }}
      >
        IN THE NEWS{" "}
      </Typography>
      {news.map((article, index) => (
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
            <Typography
              sx={{
                fontStyle: "italic",
                marginTop: "10px",
              }}
            >
              {article.author}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
