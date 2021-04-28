import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product'
import useStyles from './styles'

const products = [
    {
        id:1, name: 'Mua Pack 1', description: '5 pairs eyelashes', price : 'Ksh.800', image : 'https://www.byrdie.com/thmb/XPm3S0ZLBTGav8ETinGl5e7q9FA=/900x0/filters:no_upscale():max_bytes(150000):strip_icc()/s2203487-main-zoom-23e8d0b3c2994191891afbb4e06ec376.jpg'
    },
    {
        id:2, name: 'Mua Pack 2', description: '5 pairs eyelashes', price : 'Ksh.800', image : 'https://www.byrdie.com/thmb/XPm3S0ZLBTGav8ETinGl5e7q9FA=/900x0/filters:no_upscale():max_bytes(150000):strip_icc()/s2203487-main-zoom-23e8d0b3c2994191891afbb4e06ec376.jpg'
    },
    {
        id:3, name: 'Assorted Pack 100', description: '5 pairs mixed style eyelashes', price : 'Ksh.800', image : 'https://www.byrdie.com/thmb/XPm3S0ZLBTGav8ETinGl5e7q9FA=/900x0/filters:no_upscale():max_bytes(150000):strip_icc()/s2203487-main-zoom-23e8d0b3c2994191891afbb4e06ec376.jpg'
    },
    {
        id:4, name: 'Assorted Pack 200', description: '5 pairs mixed style eyelashes', price : 'Ksh.800', image : 'https://www.byrdie.com/thmb/XPm3S0ZLBTGav8ETinGl5e7q9FA=/900x0/filters:no_upscale():max_bytes(150000):strip_icc()/s2203487-main-zoom-23e8d0b3c2994191891afbb4e06ec376.jpg'
    },
     {
        id:5, name: 'Mystique', description: '2 pairs eyelashes', price : 'Ksh.500', image : 'https://www.byrdie.com/thmb/XPm3S0ZLBTGav8ETinGl5e7q9FA=/900x0/filters:no_upscale():max_bytes(150000):strip_icc()/s2203487-main-zoom-23e8d0b3c2994191891afbb4e06ec376.jpg'
    },
]
const Products = () => {
    const classes = useStyles();
    return(
   <main className={classes.content}>
       <div className={classes.toolbar}/>
       <Grid container justify="center" spacing={4}>
        {products.map((product) => (
               <Grid item key={product.id} xs = {12} sm = {6} md={4} lg={3}>
                    <Product product={product}/>
                    </Grid>
    ))
        }
       </Grid>
   </main>
    )
}

export default Products
