import React from "react";
import { selectChiliById } from "../../redux/selectors/chiliSelector";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";
import { NavLink } from "react-router-dom";
import CardButton from "../../style/CardButton.style";
import Grid from "@mui/material/Unstable_Grid2";
import CardTitle from "../../style/CardTitle.style";

// eslint-disable-next-line react/prop-types
export const RenderChilies = ({ chiliId }) => {
  const chili = useSelector(selectChiliById)(chiliId);

  return (
    <Grid
      container
      xs={12}
      md={3}
      justifyContent="center"
      style={{ margin: 10 }}
    >
      <Card
        sx={{ width: 400, maxHeight: 500 }}
        mx={2}
        style={{ backgroundColor: "#fefae0" }}
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
    </Grid>
  );
};
