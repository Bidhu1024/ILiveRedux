import React from 'react'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import {useDispatch} from 'react-redux';
import { showCart } from './actions';

const Header = () => {
    const dispatch = useDispatch()
    const handleOnClick=()=>{
        dispatch(showCart())
    }
  return (
    <AppBar position="static">
   <Typography variant="h6" component="div">
          Charlie
          </Typography>
  <Button color='inherit' onClick={handleOnClick}>
  <ShoppingCartIcon/>
  </Button>        
    </AppBar>
  )
}

export default Header