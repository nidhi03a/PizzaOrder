import React, { useEffect, useState } from 'react'
import EmptyCart from './EmptyCart'
import { CartState } from '../Context/Context';
import { Avatar, Button, FormControl, Grid, List, ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import pizzaData from '../../Database_json/Menu.json'
import '../Stylesheet/Cart.css'

const Cart = () => {
    const {
        state: { cart },
        dispatch,
    } = CartState();
    const [total, setTotal] = useState();
    useEffect(() => {
        setTotal(
            cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
        );
    }, [cart]);
  
    return (
            <div className='home'>
                <EmptyCart />
                <div className='productContainer'>
                    <List>
                        {cart.map((itemsSub) => (
                            <ListItem key={itemsSub.id}>
                                <Grid container direction="row">
                                    <Grid containers spacing={2} >
                                        <Grid item >
                                            <Avatar src={itemsSub.img} alt={itemsSub.name} />
                                        </Grid>
                                    </Grid>
                                    <Grid item md={2} container >
                                        <Grid item md container direction="column" spacing={2}>
                                            <Grid item md>
                                                <span>{itemsSub.name}</span>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    {/* <Grid container direction="column" > */}
                                    <Grid item >
                                        {itemsSub.price}
                                    </Grid>
                                    {/* </Grid> */}
                                    {/* <Grid container direction="column" > */}
                                    <Grid item md={2} >
                                        <FormControl
                                            as="select"
                                            value={itemsSub.qty}
                                            onChange={(e) =>
                                                dispatch({
                                                    type: "CHANGE_CART_QTY",
                                                    payload: {
                                                        id: itemsSub.id,
                                                        qty: e.target.value,
                                                    },
                                                })}>
                                            {[...pizzaData.Pizza.keys()].map((x) => (

                                                <option key={x + 1} >{x + 1}</option>

                                            ))}
                                        </FormControl>
                                    </Grid>
                                    {/* </Grid> */}
                                    {/* <Grid container direction="column" > */}
                                    <Grid item md={2}>
                                        <Button
                                            type='button'
                                            variant='light'
                                            onClick={() =>
                                                dispatch({
                                                    type: "REMOVE_FROM_CART",
                                                    payload: itemsSub,
                                                })}>
                                            <DeleteIcon />
                                        </Button>
                                    </Grid>
                                    {/* </Grid> */}
                                </Grid>
                            </ListItem>
                        ))}
                    </List>
                </div>
                <div className='filters summary'>
                    <span className='title'>Subtotal({cart.length}) items</span>
                    <span style={{ fontWeight: 700, fontSize: 20, padding: 5, margin: 5 }}>Total:{total}</span>
                    <Button type='button' disabled={cart.length === 0} variant='contained' sx={{ backgroundColor: "black", color: "white", margin: 5 }}>
                        Proceed to Checkout
                    </Button>
                </div>
            </div>
        
    )
}

export default Cart
