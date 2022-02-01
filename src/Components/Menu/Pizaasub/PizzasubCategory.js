import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import {  useParams } from 'react-router-dom'
import pizzaData from '../../../Database_json/Menu.json'
//import { Link } from 'react-router-dom'
import { CartState } from '../../Context/Context'


const PizzasubCategory = () => {
    const category = useParams();
    console.log("Received Data: ",category);
    let subCategoryData=pizzaData.Pizza.find((data)=>data.pname === category.pname)
    console.log("Subcategory Data: ",subCategoryData);
    
    const{
        state:{cart},dispatch,
    } = CartState();
    return (
        
        <Grid container
           direction= "row"
           paddingTop={3}>
              {subCategoryData.subcategory.map((itemsSub)=>(  
                   <>
                   <Grid key={itemsSub.id} 
                   item md={3}
                   padding={1}>
                           <Card xs={{maxWidth:345}} 
                           sx={{backgroundColor:"dimgrey",borderColor:"black",borderStyle:"solid"}}>
                               <CardMedia 
                               component="img"
                               height="200"
                               image= {itemsSub.img}/>
                               <CardContent>
                                   <Typography>
                                        {itemsSub.name}
                                   </Typography>
                                   <Typography>
                                       {itemsSub.description}
                                   </Typography>
                                   <Typography>
                                      <h3> {itemsSub.price} </h3> 
                                   </Typography>
                               </CardContent>
                               <CardActions>
                               {/* <Link to="/cart"> */}
                                {cart.some((i)=>i.id===itemsSub.id)?(
                                
                                <Button type='button' onClick={()=>dispatch({type: "REMOVE_FROM_CART",payload:itemsSub,})}
                                sx={{
                                    padding:"0.3rem",
                                    fontSize:"0.6rem",
                                    borderRadius:"100px",
                                    border:"none",
                                    outline:"none",
                                    backgroundColor:"black",
                                    color:"white",
                                    width:"100px",
                                    display:"flex",
                                    alignItems:"center",
                                    justifyContent:"center",
                                    margin:"15px auto"
                                }}>Remove from cart</Button>
                                ):(

                                 <Button onClick={()=>dispatch({type :"ADD_TO_CART",payload:itemsSub,})}
                                 sx={{
                                    padding:"0.3rem",
                                    fontSize:"0.6rem",
                                    borderRadius:"100px",
                                    border:"none",
                                    outline:"none",
                                    backgroundColor:"black",
                                    color:"white",
                                    width:"100px",
                                    display:"flex",
                                    alignItems:"center",
                                    justifyContent:"center",
                                    margin:"15px auto"
                                }}>
                                     Add to Cart
                                 </Button>
                                )}
                                {/* </Link>  */}
                               </CardActions>
                           </Card>
                       </Grid>
                            </>
              ))}
        </Grid>
    )
}

export default PizzasubCategory
