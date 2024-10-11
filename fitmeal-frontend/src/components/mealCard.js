
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const MealCard = ({ meal }) => {
  const handleOrder = () => {
    // Implement order functionality or navigation to order page
    alert(`Ordering: ${meal.name}`);
  };

  return (
    <Card>
      {/* If you have meal images, include them here */}
      {/* <CardMedia
        component="img"
        height="140"
        image={meal.imageUrl}
        alt={meal.name}
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {meal.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {meal.description}
        </Typography>
        <Typography variant="subtitle1" color="text.primary" sx={{ mt: 1 }}>
          Price: ${meal.price}
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleOrder}>
          Order Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default MealCard;
