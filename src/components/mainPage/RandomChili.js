import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectRandomChili } from "../../redux/selectors/chiliSelector";
import { Box, Grid, FormControl, Input, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import IconTitle from "../../style/IconTitle.style";
import Button from "../../style/Button.style";
import CardTitle from "../../style/CardTitle.style";
import { addToCart } from "../../redux/actions/cartActions";
import { toast } from "react-toastify";
import loadChilies from "../../redux/actions/chilieActions";

const RandomChili = () => {
  const randomChili = useSelector(selectRandomChili);
  const [requestedQuantity, setRequestedQuantity] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const loadChiliesHandler = useCallback(async () => {
    if (!loaded) {
      await dispatch(loadChilies());
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    loadChiliesHandler();
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (chili) => {
    dispatch(addToCart(chili, parseInt(requestedQuantity)));
    navigate("/cart");
  };

  return (
    <section className="body">
      <section>
        <Box>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2 }}
            justifyContent="center"
            alignContent="center"
            data-aos="fade-right"
            data-aos-duration="2500"
          >
            <IconTitle style={{ marginTop: 20, height: 2 }} />
            <Grid
              item
              xs={12}
              md={5}
              sx={{ my: 2 }}
              container
              justifyContent="center"
              alignContent="center"
              style={{ marginTop: "30px" }}
            >
              <img
                src={randomChili?.imageUrl}
                alt={randomChili?.name}
                style={{ height: "80%", width: "80%" }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              justifyContent="center"
              style={{ textAlign: "center", marginTop: "30px" }}
            >
              <CardTitle style={{ textTransform: "uppercase" }} spacing={4}>
                {randomChili?.name}{" "}
              </CardTitle>
              <p style={{ textAlign: "left", fontSize: "22px" }}>
                {" "}
                {randomChili?.description}{" "}
              </p>
              <Box container="true" spacing={3}>
                <Grid item md={12}>
                  <p style={{ fontSize: "30px" }}>
                    <b> Price: {randomChili?.price} € </b>{" "}
                  </p>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="large">
                    <p>Stock Availability: {randomChili?.stockQuantity} </p>
                    <Input
                      placeholder="How many?"
                      value={parseInt(requestedQuantity)}
                      onChange={(sq) => setRequestedQuantity(sq.target.value)}
                    />
                    <Typography variant="h6"> </Typography>
                  </FormControl>
                </Grid>
                <Grid item md={12} my={3}>
                  <Button
                    disabled={
                      !requestedQuantity ||
                      requestedQuantity > randomChili?.stockQuantity
                    }
                    variant="outlined"
                    color="success"
                    onClick={() => {
                      handleAddToCart({
                        orderItem: randomChili,
                        requestedQuantity: parseInt(requestedQuantity),
                      }),
                        toast.success(`added ${randomChili.name} to cart`);
                    }}
                  >
                    Add to cart
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      style={{ marginLeft: "10px" }}
                    />
                  </Button>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </section>
    </section>
  );
};

export default RandomChili;
