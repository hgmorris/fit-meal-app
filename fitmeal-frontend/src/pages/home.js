import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import MealCard from '../components/MealCard';
import FitnessTipCard from './components/FitnessTipCard';
import API from '../services/api';

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [tips, setTips] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await API.get('/meals');
        setMeals(response.data);
      } catch (error) {
        console.error('Error fetching meals:', error);
      }
    };

    const fetchTips = async () => {
      try {
        const response = await API.get('/tips');
        setTips(response.data);
      } catch (error) {
        console.error('Error fetching fitness tips:', error);
      }
    };

    fetchMeals();
    fetchTips();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
        Healthy Meals
      </Typography>
      <Grid container spacing={4}>
        {meals.map((meal) => (
          <Grid item key={meal.id} xs={12} sm={6} md={4}>
            <MealCard meal={meal} />
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" gutterBottom sx={{ mt: 6 }}>
        Fitness Tips
      </Typography>
      <Grid container spacing={4}>
        {tips.map((tip) => (
          <Grid item key={tip.id} xs={12} sm={6} md={4}>
            <FitnessTipCard tip={tip} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
