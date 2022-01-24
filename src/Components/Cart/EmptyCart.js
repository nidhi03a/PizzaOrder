import React from 'react'
import { CartState } from '../Context/Context'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

export default function EmptyCart() {
    const{
        state:{cart}, dispatch,
    } = CartState();
    return (
        <div>
   {cart.length> 0 ?(
       <>
       {cart.map((itemsSub)=>(
                <span className='cartitem' key={itemsSub.id}>
                    <img
                    src= {itemsSub.image}
                    className="cartItemImg"
                    alt={itemsSub.name} />
                    <div className='cartItemDetail'>
                        <span>{itemsSub.name}</span>
                        <span>{itemsSub.price.split(".")[0]}</span>
                    </div>
                    <DeleteIcon fontSize='20px' onClick={()=>
                    dispatch({
                        type:"REMOVE_FROM_CART",
                        payload: itemsSub,
                    })}/>
                </span>
            ))}
            <Link to="/cart">
                Go to cart
            </Link>
       </>
   ):(
   <span style={{padding: 10}}>Cart is Empty</span>
       )}
        </div>
    )
}
