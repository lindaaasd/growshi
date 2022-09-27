/* eslint-disable react/prop-types */
import React from "react";
import CardButton from "../../style/CardButton.style";
import Grid from "@mui/material/Unstable_Grid2";
import CardTitle from "../../style/CardTitle.style";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";
import { NavLink } from "react-router-dom";

const RenderChiliesPaginate = React.forwardRef(({ chili }, ref) => {
  const chiliBody = (
    <Card
      sx={{ width: 400, maxHeight: 500 }}
      mx={2}
      style={{ backgroundColor: "#fefae0", margin: 10 }}
    >
      <CardMedia
        component="img"
        height="300"
        image={chili?.imageUrl}
        alt="green iguana"
      />
      <CardContent>
        <CardTitle fontSize="30px" margin="0">
          {chili?.name}
        </CardTitle>
        <CardTitle
          fontSize="20px"
          margin="0"
          variant="body2"
          color="text.secondary"
        >
          {chili?.price} €
        </CardTitle>
      </CardContent>
      <Grid display="flex" justifyContent="end" to="/contact">
        <NavLink to={`/detail/${chili?.id}`}>
          <CardButton>Read more</CardButton>
        </NavLink>
      </Grid>
    </Card>
  );

  const content = ref ? (
    <Grid ref={ref} container xs={12} md={4} justifyContent="center">
      {chiliBody}
    </Grid>
  ) : (
    <Grid container xs={12} md={4} justifyContent="center">
      {chiliBody}
    </Grid>
  );

  return content;
});

RenderChiliesPaginate.displayName = "RenderChiliesPaginate";

export default RenderChiliesPaginate;
