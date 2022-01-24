import React, { useEffect, useState } from 'react'
import EmptyCart from './EmptyCart'
import { CartState } from '../Context/Context';
import { Button, FormControl, Grid, List, ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
    const{
        state:{cart},
        dispatch,
    }=CartState();
    const [total,setTotal]=useState();
    useEffect(()=>{
        setTotal(
            cart.reduce((acc,curr)=>acc +Number(curr.price)*curr.qty,0)
        );
        },[cart]);
    return (
        <div className='home'>
        <EmptyCart/>
        <div className='productContainer'>
            <List>
                {cart.map((itemsSub)=>(
                    <ListItem key={itemsSub.id}>
                        <Grid direction= "row">
                            <Grid direction="column" md={2}>
                                <img src={itemsSub.image} alt={itemsSub.name} fluid rounded/>
                            </Grid>
                            <Grid direction="column" md={2}>
                                <span>{itemsSub.name}</span>
                            </Grid>
                            <Grid direction="column" md={2}>
                                {itemsSub.price}
                            </Grid>
                            <Grid direction="column" md={2}>
                                <FormControl 
                                as="select"
                                value={itemsSub.qty}
                                onChange={(e)=>
                                dispatch({
                                    type:"CHANGE_CART_QTY",
                                    payload:{
                                        id:itemsSub.id,
                                        qty:e.target.value,
                                    },
                                })}>
                                    
                                </FormControl>
                            </Grid>
                            <Grid direction="column" md={2}>
                                <Button
                                type='button'
                                variant='light'
                                onClick={()=>
                                dispatch({
                                    type:"REMOVE_FROM_CART",
                                    payload:itemsSub,
                                })}>
                                    <DeleteIcon/>
                                </Button>
                            </Grid>
                        </Grid>
                    </ListItem>
                ))}
            </List>
        </div>
        <div className='filters summary'>
            <span className='title'>Subtotal({cart.length}) items</span>
            <span style={{fontWeight:700 , fontSiza:20}}>Total:{total}</span>
            <Button type='button' disabled={cart.length===0} variant='contained' sx={{backgroundColor:"black",color:"white"}}>
                Proceed to Checkout
            </Button>
        </div>
        </div>
    )
}

export default Cart
