"use client";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React, { SyntheticEvent } from "react";

import faq from "../../data/faq.json";

const AccordionFaq: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box
      sx={{
        mx: "auto",
        px: { xs: 2, md: 0 },
        justifyContent: "center",
        width: "100%",
        maxWidth: { xs: "354px", md: "800px" },
        overflowX: "hidden",
      }}
    >
      {faq.map((item, index) => (
        <Accordion
          key={index}
          disableGutters
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
          sx={{
            background: "none",
            borderBottom:
              index + 1 === faq.length ? "none" : "2px solid #e0e0e0",
            boxShadow: "none",
            width: "100%",
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === `panel${index + 1}` ? <CloseIcon /> : <OpenIcon />
            }
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
            sx={{
              "& .MuiAccordionSummary-content": {
                marginRight: "12px",
              },
            }}
          >
            <Typography
              variant="h5"
              component="h5"
              fontFamily={"work sans, sans-serif"}
              color="#143045"
              sx={{
                fontWeight: 600,
                fontSize: { xs: "18px", lg: "24px" },
                marginY: "8px",
                wordBreak: "break-word",
              }}
            >
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body1"
              textAlign="justify"
              component="p"
              fontFamily={"work sans, sans-serif"}
              color="#465159"
              sx={{
                fontWeight: 500,
                fontSize: "16px",
                marginBottom: "10px",
                wordBreak: "break-word",
              }}
            >
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export const OpenIcon: React.FC = () => (
  <Box
    sx={{
      border: "solid",
      borderColor: "#0186C6",
      borderRadius: "50%",
      width: "28px",
      height: "28px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <AddRoundedIcon
      sx={{
        color: "#0186C6",
        fontSize: "28px",
        width: { xs: "24px", lg: "28px" },
        height: { xs: "24px", lg: "28px" },
      }}
    />
  </Box>
);

export const CloseIcon: React.FC = () => (
  <Box
    sx={{
      border: "solid",
      borderColor: "#0186C6",
      borderRadius: "50%",
      width: "28px",
      height: "28px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <RemoveRoundedIcon
      sx={{
        color: "#0186C6",
        fontSize: "28px",
        width: { xs: "24px", lg: "28px" },
        height: { xs: "24px", lg: "28px" },
      }}
    />
  </Box>
);

export default AccordionFaq;