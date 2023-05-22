import { Box, Grid, Stack, Switch, Typography } from "@mui/material";

import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useTheme } from '@mui/material/styles';

const MainPage = () => {
  const theme = useTheme();

  return (
    <Box
      height="100%"
      display="flex"
      // justifyContent="center"
      flexDirection="column"
      sx={{ m: 2 }}
    >
      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography variant='h6'>About Us</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ mx: 2, mb: 2 }}>
              <Stack spacing={2}>
                <Typography>We are a versatile, adaptive, and experienced team of tech consultants. We offer software solutions to suit a wide range of clients, whether small business, startup, or large corporation.</Typography>
              </Stack>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item sm={12} md={6}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography variant='h6'>Our Expertise</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ mx: 2, mb: 2 }}>
              <Stack spacing={2}>
                <Typography>Our expertise spans over development of full stack applications, architecture of identity and access management systems, and assurance of software accessibility for disabled individuals.</Typography>
              </Stack>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainPage;