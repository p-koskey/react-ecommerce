import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography}from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import App from '../../App';
import useStyles from './styles'
import Logo from '../../assets/logo.png'


const Navbar = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title} color='inherit'>
                        <img src={Logo} alt="K-Lashes" height='25px' className={classes.image}/>
                        K-Lashes
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                        <IconButton aria-label='Show cart items' color='inherit'>
                            <Badge badgeContent={2} color='secondary'>
                                 <ShoppingCart/>
                            </Badge>
                           
                        </IconButton>
                    </div> 
                </Toolbar>
            </AppBar> 
        </>
    )
}

export default Navbar
