import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import pizzaData from '../../../Database_json/Menu.json'
import {Link} from 'react-router-dom'
const Menu = () => {
    return (
        <Box>
        <Grid container
         direction = "row"
         justifyContent="center"
         paddingTop={5}
//   alignItems="flex-start"
  rowSpacing={5}>
      {pizzaData.Pizza.map((items)=>(
            <Grid item md={3} padding={1}>
            <Card sx={{maxWidth:345}}
            sx={{backgroundColor:"dimgray",borderColor:"black",borderStyle:"solid"}}>
            <CardMedia
            component="img"
            height="195"
            image= {items.p_img} />
            <CardContent>
                <Typography>
                <p key={items.p_id}>{items.pname}</p>
            </Typography>
            <Typography>
                    <p key={items.p_id}>{items.description}</p>
            </Typography>
            </CardContent>
            <CardActions>
                <Button size="medium">
                <Link to={`/pizza_category/${items.pname}`}>See All</Link>
                </Button>
            </CardActions>
        </Card>
            </Grid>
      ))}
        </Grid>
        </Box>
    )
}

export default Menu
