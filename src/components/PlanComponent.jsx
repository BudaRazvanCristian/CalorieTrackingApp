/* MATERIAL UI COMPONENT FOR PRICING PANEL */

import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Grid,
  Container,
  styled,
} from "@mui/material";
import { FaUtensils, FaCalculator, FaDumbbell } from "react-icons/fa";

/* EFECTE DE TRANZITIE PENTRU HOVER PESTE CARD */
const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[4],
  },
}));

const FeatureIcon = styled(Box)(({ theme }) => ({
  fontSize: "2rem",
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
}));

const plans = [
  {
    title: "Basic Plan",
    price: "Free",
    features: [
      { icon: <FaCalculator />, text: "Calorie tracking functionality" },
      { icon: <FaUtensils />, text: "Access to basic recipes" },
    ],
  },
  {
    title: "Pro 6-Month Plan",
    price: "$49.99 for 6 months",
    features: [
      { icon: <FaCalculator />, text: "Calorie tracking functionality" },
      { icon: <FaUtensils />, text: "Advanced recipe plan for cooking" },
      { icon: <FaDumbbell />, text: "Personal trainer services for guidance" },
    ],
  },
  {
    title: "Pro Plan",
    price: "$9.99 per month",
    features: [
      { icon: <FaCalculator />, text: "Calorie tracking functionality" },
      { icon: <FaUtensils />, text: "Advanced recipe plan for cooking" },
    ],
  },
];

const PlanComponent = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Typography
        variant="h3"
        fontWeight={"bold"}
        paddingBottom={"20px"}
        component="h1"
        align="center"
        gutterBottom
      >
        Choose Your Plan
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {plans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard raised={selectedPlan === index}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h4" component="h2" gutterBottom>
                  {plan.title}
                </Typography>
                <Typography variant="h5" color="primary" gutterBottom>
                  {plan.price}
                </Typography>
                {plan.features.map((feature, featureIndex) => (
                  <Box
                    display="flex"
                    alignItems="center"
                    mb={2}
                    key={featureIndex}
                  >
                    <FeatureIcon>{feature.icon}</FeatureIcon>
                    <Typography variant="body1">{feature.text}</Typography>
                  </Box>
                ))}
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: index === 1 ? "#ffb800" : "primary.main", // Use single '#' for the hex code
                    "&:hover": {
                      backgroundColor: index === 1 ? "#ffcc49" : "primary.dark", // Change the hover color if needed
                    },
                  }}
                  onClick={() => setSelectedPlan(index)}
                  aria-label={`Select ${plan.title}`}
                >
                  {selectedPlan === index ? "Selected" : "Select Plan"}
                </Button>
              </CardActions>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PlanComponent;
