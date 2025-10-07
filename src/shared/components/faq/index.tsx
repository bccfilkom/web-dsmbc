"use client";

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';
import { SyntheticEvent } from 'react';

import faq from '../../data/faq.json';

const AccordionFaq: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {faq.map((item, index) => {
        return (
          <Accordion
            key={index}
            disableGutters={true}
            expanded={expanded === `panel${index + 1}`}
            onChange={handleChange(`panel${index + 1}`)}
            sx={{
              background: 'none',
              borderBottom: index + 1 === faq.length ? 'none' : '2px solid',
              boxShadow: 'none',
            }}>
            <AccordionSummary
              expandIcon={expanded === `panel${index + 1}` ? <CloseIcon /> : <OpenIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header">
              <Typography
                width="90%"
                variant="h5"
                component="h5"
                fontFamily={"work sans, sans-serif"}
                color='#143045'
                sx={{
                  fontWeight: '600',
                  fontSize: { xs: '16px', sm: '24px' },
                  marginY: '8px',
                }}>
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                width="95%"
                variant="body1"
                textAlign="justify"
                component="p"
                fontFamily={"work sans, sans-serif"}
                color='#465159'
                sx={{
                  fontWeight: '500',
                  fontSize: { xs: '14px', sm: '16px' },
                  marginBottom: '10px',
                }}>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};

export const OpenIcon: React.FC = () => {
  return (
    <Box
      sx={{
        border: 'solid',
        borderColor: '#0186C6',
        borderRadius: '50px',
      }}>
      <AddRoundedIcon
        sx={{
          color: '#0186C6',
          fontSize: '28px',
        }}
      />
    </Box>
  );
};

export const CloseIcon: React.FC = () => {
  return (
    <Box
      sx={{
        border: 'solid',
        borderColor: '#0186C6',
        borderRadius: '50px',
      }}>
      <RemoveRoundedIcon
        sx={{
          color: '#0186C6',
          fontSize: '28px',
        }}
      />
    </Box>
  );
};

export default AccordionFaq;