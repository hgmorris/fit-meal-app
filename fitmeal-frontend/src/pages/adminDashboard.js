import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, TextField, Button } from '@mui/material';
import API from '../services/api';

const AdminDashboard = () => {
  const [meals, setMeals] = useState([]);
  const [newMeal, setNewMeal] = useState({
    name: '',
    description: '',
    ingredients: '',
    price: '',
    nutritionInfo: '',
  });

  const [tips, setTips] = useState([]);
  const [newTip, setNewTip] = useState({
    title: '',
    content: '',
    category: '',
    videoLink: '',
  });

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
        console.error('Error fetching tips:', error);
      }
    };

    fetchMeals();
    fetchTips();
  }, []);

  const handleMealChange = (e) => {
    setNewMeal({ ...newMeal, [e.target.name]: e.target.value });
  };

  const handleTipChange = (e) => {
    setNewTip({ ...newTip, [e.target.name]: e.target.value });
  };

  const handleAddMeal = async (e) => {
    e.preventDefault();
    try {
      await API.post('/meals', newMeal);
      setNewMeal({ name: '', description: '', ingredients: '', price: '', nutritionInfo: '' });
      // Refresh meals
      const response = await API.get('/meals');
      setMeals(response.data);
    } catch (error) {
      console.error('Error adding meal:', error);
      alert('Failed to add meal.');
    }
  };

  const handleAddTip = async (e) => {
    e.preventDefault();
    try {
      await API.post('/tips', newTip);
      setNewTip({ title: '', content: '', category: '', videoLink: '' });
      // Refresh tips
      const response = await API.get('/tips');
      setTips(response.data);
    } catch (error) {
      console.error('Error adding tip:', error);
      alert('Failed to add fitness tip.');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
        Admin Dashboard
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Add New Meal
      </Typography>
      <form onSubmit={handleAddMeal}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Meal Name"
              name="name"
              value={newMeal.name}
              onChange={handleMealChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Price"
              name="price"
              type="number"
              value={newMeal.price}
              onChange={handleMealChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              name="description"
              value={newMeal.description}
              onChange={handleMealChange}
              fullWidth
              multiline
              rows={2}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Ingredients"
              name="ingredients"
              value={newMeal.ingredients}
              onChange={handleMealChange}
              fullWidth
              multiline
              rows={2}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Nutrition Info"
              name="nutritionInfo"
              value={newMeal.nutritionInfo}
              onChange={handleMealChange}
              fullWidth
              multiline
              rows={2}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Add Meal
            </Button>
          </Grid>
        </Grid>
      </form>

      <Typography variant="h5" gutterBottom sx={{ mt: 6 }}>
        Add New Fitness Tip
      </Typography>
      <form onSubmit={handleAddTip}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Title"
              name="title"
              value={newTip.title}
              onChange={handleTipChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Category"
              name="category"
              value={newTip.category}
              onChange={handleTipChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Content"
              name="content"
              value={newTip.content}
              onChange={handleTipChange}
              fullWidth
              multiline
              rows={3}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Video Link"
              name="videoLink"
              value={newTip.videoLink}
              onChange={handleTipChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Add Fitness Tip
            </Button>
          </Grid>
        </Grid>
      </form>

      <Typography variant="h5" gutterBottom sx={{ mt: 6 }}>
        Existing Meals
      </Typography>
      <Grid container spacing={4}>
        {meals.map((meal) => (
          <Grid item key={meal.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">{meal.name}</Typography>
                <Typography>Price: ${meal.price}</Typography>
                <Typography>{meal.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" gutterBottom sx={{ mt: 6 }}>
        Existing Fitness Tips
      </Typography>
      <Grid container spacing={4}>
        {tips.map((tip) => (
          <Grid item key={tip.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">{tip.title}</Typography>
                <Typography>Category: {tip.category}</Typography>
                <Typography>{tip.content}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AdminDashboard;
