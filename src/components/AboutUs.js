import React from "react";
import { Container, Typography, Grid, Card, CardContent, Button } from "@mui/material";

const contributors = [
  {
    name: "Contributor 1",
    linkedin: "https://www.linkedin.com/in/contributor1/",
    image: "contributor1.jpg", // Replace with the actual image path
  },
  {
    name: "Contributor 2",
    linkedin: "https://www.linkedin.com/in/contributor2/",
    image: "contributor2.jpg", // Replace with the actual image path
  },
  {
    name: "Contributor 3",
    linkedin: "https://www.linkedin.com/in/contributor3/",
    image: "contributor3.jpg", // Replace with the actual image path
  },
];

const AboutUs = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        About Us
      </Typography>
      <Grid container spacing={3}>
        {contributors.map((contributor, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <img
                  src={contributor.image}
                  alt={contributor.name}
                  style={{ width: "100%", borderRadius: "50%" }}
                />
                <Typography variant="h6" gutterBottom>
                  {contributor.name}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={contributor.linkedin}
                  target="_blank"
                >
                  LinkedIn Profile
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AboutUs;
