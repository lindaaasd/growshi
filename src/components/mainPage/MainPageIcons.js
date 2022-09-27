import React from "react";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faRecycle,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import IconTitle from "../../style/IconTitle.style";

const MainPageIcons = () => {
  return (
    <section>
      <div style={{ display: "flex", textAlign: "center" }}>
        <IconTitle style={{ paddingBottom: 20, paddingTop: 20 }}>
          Powerful warmth of bla bla our chilies are the best
        </IconTitle>
      </div>
      <Grid container justifyContent="center" sx={{ my: 10 }}>
        {/* data-aos="fade-left" */}
        <Grid item xs={12} md={3}>
          <div style={{ textAlign: "center", margin: "10px" }}>
            <FontAwesomeIcon
              icon={faSeedling}
              style={{
                color: "#588157",
                textAlign: "center",
                paddingTop: "20px",
              }}
              size="6x"
            />
          </div>
          <h2 style={{ textAlign: "center" }}>Organically grown</h2>
        </Grid>
        <Grid item xs={12} md={3}>
          <div style={{ textAlign: "center", margin: "10px" }}>
            <FontAwesomeIcon
              icon={faRecycle}
              style={{
                color: "#588157",
                textAlign: "center",
                paddingTop: "20px",
              }}
              size="6x"
            />
          </div>
          <h2 style={{ textAlign: "center" }}> Sustainable </h2>
        </Grid>
        <Grid item xs={12} md={3}>
          <div style={{ textAlign: "center", margin: "10px" }}>
            <FontAwesomeIcon
              icon={faHouse}
              style={{ color: "#588157", paddingTop: "20px" }}
              size="6x"
            />
          </div>
          <h2 style={{ textAlign: "center" }}> Family owned </h2>
        </Grid>
      </Grid>
    </section>
  );
};

export default MainPageIcons;
