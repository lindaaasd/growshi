import React from "react";
import { Box, Grid } from "@mui/material";
import ContainerCol from "../../style/Container.style";
import CardSlider from "../common/CardSlider";

const LastThreeChilies = () => {
  return (
    <section>
      <Box>
        <ContainerCol backgroundColor="#a3b18a">
          <h1
            style={{
              fontSize: "xx-large",
              textAlign: "center",
              paddingTop: "20px",
            }}
          >
            Latest chilies available
          </h1>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent="center"
            data-aos="fade-up"
          >
            <CardSlider />
          </Grid>
        </ContainerCol>
      </Box>
    </section>
  );
};

export default LastThreeChilies;
