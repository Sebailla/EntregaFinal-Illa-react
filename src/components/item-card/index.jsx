import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ItemCard = ({data}) => {
  return (
    <Card sx={{ maxWidth: 220 }}>
      <CardMedia
        component="img"
        alt={data.title}
        height="140"
        image={data.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {data.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comprar</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default ItemCard;