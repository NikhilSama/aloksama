import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";

const news = [
  {
    title: "Wall Street Journal: A Billion Here, a Billion There…",
    review:
      "Alok Sama spent several years at the elbow of Masayoshi Son, the Japanese founder of SoftBank who made a fortune from the Chinese e-commerce giant Alibaba, lost a fortune in the office-rental business WeWork, and made another fortune with Sprint, T-Mobile and the British semiconductor company Arm. Mr. Son hoses money at startups around the world on a scale that gives even the hardiest venture investors nosebleeds.",
    author: "Wall Street Journal",
    authorTitle: "",
    link: "https://www.wsj.com/arts-culture/books/the-money-trap-review-a-billion-here-a-billion-there-54f006ae",
  },
  {
    title:
      "SEMAFOR:In ‘Money Trap,’ an ex-SoftBank executive revisits the madness",
    review:
      "On Wall Street, self-pity, like lunch, is for wimps.” That’s Alok Sama, describing in a memoir out this week his mindset as a Morgan Stanley investment banker approaching mid-career burnout in 2014, when a chance encounter changed his course: At a wedding in Italy, he spotted “an Asian gentleman, elegantly attired in a white lounge suit, standing slightly removed from the others” and with “the wizened appearance of Yoda.”",
    author: "Semafor",
    authorTitle: "",
    link: "https://www.semafor.com/article/09/20/2024/ex-softbank-executive-alok-sama-memoir-money-trap",
  },
  {
    title:
      "Kirkus Reviews: A sometimes bumpy but always thrilling ride on the high-finance roller coaster…",
    review:
      "Finance whiz and hedge fund trader Sama recounts a far from ordinary stint in the C-suite. Sama opens with a scenario worthy of a Matt Damon hero: threatened with blackmail by an unnamed bad guy, he connects with two ex-Mossad agents in downtown London who deliver the news that “there is a conspiracy to remove you from your job” and demand a cool million bucks to make it go away. Go away it does not, and Sama’s narrative is peppered with ulcer-inducing moments trying to dodge the unknown threat. There’s big money at stake: Sama is a key advisor to Japanese investor Masayoshi Son, who has $100 billion at his disposal. Sama had had sightings of Son in earlier jobs: in the mid-1990s, Son, for instance, had thrown $100 million at Yahoo, which turned in $30 billion before the tech bubble burst. Feeling undervalued at Morgan Stanley—“I should have walked away, but I didn’t,” he writes. “Nobody does; nobody walks out of the money trap”—Sama gladly went to work for Son, only to discover that megazillionaires can be odd ducks with idées fixes that don’t always pay off in reality. In Son’s case, he was smitten by Adam Neumann’s WeWork, which, on paper at least, aligned with Son’s own mantra, “My goal is happiness for everyone. Nobody should be sad. I want technology to make people happy.” Son’s seed money certainly made many a tech startup happy, especially in the ride-share space, although many ventures failed to come through. With billions of dollars swirling around his narrative, Sama is a helpful interpreter of how such things as derivatives and Amazon's “consumer value proposition” work—or don’t. Throughout, he is an engagingly funny, self-aware, and often rueful narrator.",
    author: "Kirkus Reviews",
    authorTitle: "",
    link: "https://www.kirkusreviews.com/book-reviews/alok-sama/the-money-trap/",
  },
  {
    title:
      "The Sunday Times: How Masayoshi Son, the richest man on earth, lost his billions",
    review:
      "The 67-year-old Japanese super-investor behind SoftBank has made and lost more money than anyone on the planet. His former right-hand man tells Jim Armitage about the boom times and (very) bad bets",
    author: "The Sunday Times",
    authorTitle: "",
    link: "https://www.thetimes.com/business-money/entrepreneurs/article/richest-man-earth-how-lost-billions-fxp3lgtq3",
  },
  {
    title:
      "Fortune: How Softbank’s Masayoshi Son charmed a veteran Morgan Stanley banker with a $5000 bottle of wine ..",
    review:
      "Veteran Morgan Stanley banker Alok Sama thought he had seen it all. Then he found himself chief dealmaker at the most influential technology investor in the world—SoftBank, the backer of Arm Holdings, Yahoo, Nvidia, TikTok, Uber, T-Mobile, Alibaba, and WeWork.The Money Trap is Sama’s personal odyssey alongside Softbank’s iconic founder Masayoshi Son, the maverick who wanted to be remembered as “the crazy guy who bet on the future.”",
    author: "Fortune",
    authorTitle: "",
    link: "https://fortune.com/asia/2024/09/17/softbank-masayoshi-son-alok-sama-morgan-stanley-money-trap-book-excerpt/",
  },
  {
    title:
      "Sroll.in: What did partying wildly at Ibiza have to do with Alok Sama joining Softbank?",
    review:
      "It began with a pill. Pacha is the mecca for Ibiza clubbers, and that night master blaster DJ David Guetta was the caliph. The setting for Pacha is unlikely, even tacky. The neighbourhood has the feel of a decrepit US suburban strip mall, complete with a sprawling parking lot across the street. The building itself is a cavernous warehouse. A Costco logo might seem in character, but what you get instead is an entrance flanked by faux palm trees, with a giant neon sign flashing Guetta’s message of universal love. f*** me, i’m famous. Once inside, more dazzling signage, T-shirts worn by a few, and pink psychedelic phallic objects wielded by many combine to drill the slogan into your brain. A message as loud as the techno beats, as ludicrous as it was ubiquitous. FMIF.",
    author: "Scroll.in",
    authorTitle: "",
    link: "https://scroll.in/article/1072942/from-the-memoir-what-did-partying-wildly-at-ibiza-have-to-do-with-alok-sama-joining-softbank",
  },
  {
    title:
      "Moneycontrol: He lives in the future': Ex-SoftBank executive opens up about making deals alongside MasaA riveting page-turner about..",
    review:
      "In a conversation with Moneycontrol ahead of the release of his memoir, former SoftBank executive Alok Sama talks about his days at the fabled tech conglomerate — and betting on companies such as WeWork, Paytm, Ola, OYO, Arm and Nvidia",
    author: "Moneycontrol",
    authorTitle: "",
    link: "https://www.moneycontrol.com/technology/he-lives-in-the-future-ex-softbank-executive-opens-up-about-making-deals-alongside-masa-article-12824931.html",
  },
  {
    title:
      "Mint: Alok Sama on the smear campaign against him at SoftBank, and working with Masa",
    review:
      "Alok Sama on the smear campaign against him at SoftBank, and working with Masa",
    author: "Mint",
    authorTitle: "",
    link: "https://www.livemint.com/companies/people/alok-sama-softbank-book-masayoshi-son-smear-campaign-vision-fund-india-investments-paytm-oyo-ola-deal-hunters-11726661717156.html",
  },
  {
    title: "A riveting page-turner about..",
    review:
      "A riveting page-turner about the world of technology and dealmaking told by an insider…an immigrant's story with something significant to say about class, character, identity, family, and perhaps more than anything, the search for happiness.",
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
      "Sama writes with authority and panache, humor and outrage, and above all knowledge. (Imagine Michael Lewis had been President of SoftBank.) This man knows a lot, and he’s willing to share—and to make sure you have a great time as he does. If this book doesn't become a bestseller, the world truly makes no sense.",
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
      "A vivid and intimate story of an insider's rise to power in the world of money…",
    review:
      "A vivid and intimate story of an insider's rise to power in the world of money—and his search to find his own peace and freedom.",
    author: "Leigh Owings Newman",
    authorTitle:
      "books editor at Oprah.com, author of Nobody Gets Out Alive and Still Points North",
  },
  {
    title:
      "A shot of adrenaline that takes you directly inside some of the most exclusive rooms in tech and finance…",
    review:
      "A shot of adrenaline that takes you directly inside some of the most exclusive rooms in tech and finance, and a colorful insider's look into the companies that rule our world.",
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
        PRAISE FOR THE MONEY TRAP{" "}
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
