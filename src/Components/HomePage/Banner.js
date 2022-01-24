import React from 'react'
import '../Stylesheet/Banner.css'
import Box from '@mui/material/Box'
import { Button, Typography } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
// const{
//     state:{pizzaData},
// }= CartState();
// console.log(pizzaData);
const Banner = () => {
    return (
        <header>
           <Box 
           sx={{
               display:'flex',
               flexDirection:'column',
               flex: 1,
               justifyContent:'center'
           }}>
                <h1>Enjoy your pizza. <br/>
                   Anytime place your order.</h1>
                <p>Order your favourite pizza now</p>
                <Link to ={'/menu'}>
                <Button variant='contained' type='button'
                sx={{
                    backgroundColor:"black",
                    color:'whitesmoke',
                    width:200,
                    display: 'flex',
                    justifyContent:'space-between',
                    alignItems:'center',
                    paddingY: 1 ,
                    paddingX:1.5,
                    outline:'none',
                    border:'none',
                    fontSize:1,
                    borderBottomLeftRadius:25,
                    borderTopLeftRadius:25,
                    borderTopRightRadius:25,
                    marginTop:2.5
                    
                }}> <Typography>
                 Order Now
                 </Typography>
                    <ArrowRightAltIcon/>
                </Button>
                </Link>
           </Box>
           <img src='../../Coverpage.jpg' alt='banner' className='header-img' />
        </header>
    )
}

export default Banner
