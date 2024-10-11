
import React from 'react';
import { Card, CardContent, Typography, CardMedia, Button } from '@mui/material';

const FitnessTipCard = ({ tip }) => {
  const handleView = () => {
    // Implement view functionality, e.g., open video or detailed tip
    if (tip.videoLink) {
      window.open(tip.videoLink, '_blank');
    }
  };

  return (
    <Card>
      {tip.videoLink && (
        <CardMedia
          component="iframe"
          height="140"
          src={tip.videoLink}
          title={tip.title}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {tip.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {tip.content}
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleView}>
          View More
        </Button>
      </CardContent>
    </Card>
  );
};

export default FitnessTipCard;
