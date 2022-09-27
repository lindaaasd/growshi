import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import logo from "./logo-nav.png";
import Box from "@mui/material/Box";
import Button from "../../style/Button.style";
import { useSelector } from "react-redux";

const Header = () => {
  const navBtnStyle = {
    fontSize: "xx-large",
    textDecoration: "none",
  };

  const cart = useSelector((state) => state.cart);

  const numItemsInCart = cart.reduce(
    (total, item) => total + parseInt(item.cartQuantity),
    0
  );

  return (
    <nav>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid
            xs={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Link to="/">
              <img src={logo} alt="logo-nav" height="100" width="150" />
            </Link>
          </Grid>
          <Grid
            xs={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Link to="/shop" style={navBtnStyle}>
              <Button fontSize="xx-large">Shop</Button>
            </Link>
          </Grid>
          <Grid
            xs={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Link to="/about" style={navBtnStyle}>
              <Button fontSize="xx-large">About</Button>
            </Link>
          </Grid>
          <Grid
            xs={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Link to="/contact" style={navBtnStyle}>
              <Button fontSize="xx-large">Contact</Button>
            </Link>
          </Grid>
          <Grid
            xs={2}
            display="flex"
            justifyContent="between"
            alignItems="center"
          >
            <Link to="/cart" style={navBtnStyle}>
              <Button fontSize="xx-large">Cart</Button>
              <span> {numItemsInCart}</span>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </nav>
  );
};

export default Header;
