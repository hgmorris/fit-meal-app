import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import API from '../services/api';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [savedTips, setSavedTips] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await API.get('/auth/profile'); // You'll need to create this endpoint
        setUser(response.data.user);
        setOrders(response.data.orders);
        setSavedTips(response.data.savedTips);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  if (!user) return <Typography>Loading...</Typography>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
        Profile
      </Typography>
      <Typography variant="h6">Username: {user.username}</Typography>
      <Typography variant="h6">Email: {user.email}</Typography>
      <Typography variant="h6">Preferences: {user.preferences}</Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Order History
      </Typography>
      <Grid container spacing={4}>
        {orders.map((order) => (
          <Grid item key={order.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">{order.Meal.name}</Typography>
                <Typography>Quantity: {order.quantity}</Typography>
                <Typography>Total Price: ${order.totalPrice}</Typography>
                <Typography>Status: {order.status}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Saved Fitness Tips
      </Typography>
      <Grid container spacing={4}>
        {savedTips.map((tip) => (
          <Grid item key={tip.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">{tip.title}</Typography>
                <Typography>{tip.content}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Profile;
