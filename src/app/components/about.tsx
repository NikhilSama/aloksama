import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";

export default function About() {
  return (
    <Box sx={{ marginTop: "50px" }}>
      <Typography variant="body1" sx={{ marginTop: "20px" }}>
        Veteran Morgan Stanley banker Alok Sama thought he'd seen it all. Then
        he found himself chief dealmaker at the most influential technology
        investor in the world—SoftBank, the backer of Arm Holdings, Yahoo,
        Nvidia, TikTok, Uber, T-Mobile, Alibaba and WeWork.
        <br />
        <br />
        The Money Trap is Sama’s thrilling, stranger-than-fiction personal
        odyssey featuring his experiences alongside SoftBank’s iconic founder,
        Masayoshi Son, a visionary maverick who wants to be remembered as “the
        crazy guy who bet on the future” and whose mission is “happiness for
        everyone.” Sama takes the reader on a wild journey as he consorts with
        A-list CEOs and heads of state, and negotiates mega-deals on a
        Gulfstream jet, Son’s sanctuary with its exquisite Japanese garden, and
        a waterside restaurant in the Turkish Riviera—all while contending with
        a mysterious dark-arts smear campaign that takes a toll on his private
        life.
        <br />
        <br />
        This fascinating and humorous saga provides a unique insider perspective
        on the insanity of high finance and venture investing. Written with
        self-deprecating wit, unflinching honesty and searing introspection, The
        Money Trap is ultimately a morality tale: in life, as in technology
        investing, more money isn’t always the answer.
      </Typography>
    </Box>
  );
}
