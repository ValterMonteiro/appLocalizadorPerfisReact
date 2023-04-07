import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, TextField, Typography } from '@mui/material';

export function LocatorCard() {
  return (
    <Card>
      <CardActionArea>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="foto do perfil git"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            nome do perfil git
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">Buscar</Button>
      </CardActions>
    </Card >
  )
}