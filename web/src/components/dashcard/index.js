import { Grid, Typography } from "@mui/material";
import { Box, styled, useTheme } from "@mui/system";
import { Paper } from "components";
import React from "react";

const Title = styled("span")(({ theme }) => ({
  margin: "0px 0px 0.35em",
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  fontWeight: 500,
  fontSize: 14,
  lineHeight: 1.6,
  letterSpacing: -0.05,
  color: "rgb(107, 119, 140)",
}));

const TypographyH5 = styled(Typography)(({ theme }) => ({
  margin: 0,
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  fontWeight: 500,
  fontSize: 24,
  lineHeight: 1.167,
  letterSpacing: -0.06,
  color: "rgb(23, 43, 77)",
}));

const IconBack = styled(Box)(({ theme }) => ({
  width: 50,
  height: 50,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 180,
  color: "white",
}));

export default function DashCard({ value, Icon, title, iconbg }) {
  const theme = useTheme();
  return (
    <Paper>
      <Grid container>
        <Grid item xs={8}>
          <Box p={2}>
            <Box>
              <Title>{title}</Title>
            </Box>
            <Box>
              <TypographyH5 variant="h5">{value}</TypographyH5>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <IconBack
            style={{ background: iconbg || theme.palette.primary.main }}
          >
            <Icon />
          </IconBack>
        </Grid>
      </Grid>
    </Paper>
  );
}
