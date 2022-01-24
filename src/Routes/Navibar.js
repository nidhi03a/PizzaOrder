import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import '../Components/Stylesheet/Navibar.css'
import { Link } from 'react-router-dom';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Badge, Button, FormControl } from '@mui/material';
import { CartState } from '../Components/Context/Context';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export const Navibar = () => {
  const {
    state: { cart },
  } = CartState();

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static"
          sx={{
            backgroundColor: '#171717', padding: "5px"
          }}>
          <Toolbar>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              My Pizza House
            </Typography>
            <Box>
              <Link className="homeStyle" to="/">Home</Link>
              <Link className="menuStyle" to="/menu">Menu</Link>
              <Link className='aboutStyle' to="/about">About</Link>
              <Link className='contactStyle' to="/contact" >Contact</Link>
              <Link className='logStyle' to="/login_signup">Sign In</Link>
              <Link to={"profile"}>
                <Button sx={{ backgroundColor: "black", color: "white" }}>My Profile</Button>
              </Link>
              <Link className='cartStyle' to="/cart">
                <StyledBadge badgeContent={cart.length} color="secondary">
                  <ShoppingBagIcon sx={{ color: "white" }} fontSize='large' />
                </StyledBadge>
              </Link>
              
            </Box>
            <Search type='search'>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <FormControl>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </FormControl>
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}
