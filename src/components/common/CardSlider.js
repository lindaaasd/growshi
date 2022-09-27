import React, { useState, useEffect, useCallback } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "./slider.css";
import { useSelector, useDispatch } from "react-redux";
import loadChilies from "../../redux/actions/chilieActions";
import { selectLastChilies } from "../../redux/selectors/chiliSelector";
import { RenderChilies } from "./RenderChilies";
import Grid from "@mui/material/Unstable_Grid2";

const CardSlider = () => {
  const chilies = useSelector(selectLastChilies);
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const dispatch = useDispatch();

  const loadChiliesHandler = useCallback(async () => {
    if (!loaded) {
      await dispatch(loadChilies());
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    loadChiliesHandler();
  }, []);

  const nextSlide = () => {
    setCurrent(current === chilies.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === chilies.length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(chilies) || chilies.length <= 0) {
    return null;
  }

  return (
    <Grid
      style={{
        margin: "none",
        padding: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        width: "100%",
        height: "500px",
        marginTop: "20px",
      }}
    >
      <div>
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      </div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          margin: 0,
          padding: 0,
        }}
      >
        <RenderChilies
          chiliId={
            chilies[current - 1 < 0 ? chilies.length - 1 : current - 1].id
          }
        />

        <RenderChilies chiliId={chilies[current].id} />

        <RenderChilies
          chiliId={
            chilies[current + 1 > chilies.length - 1 ? 0 : current + 1].id
          }
        />
      </div>
      <div>
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      </div>
    </Grid>
  );
};

export default CardSlider;
