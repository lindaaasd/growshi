import React, { useState, useEffect, useCallback, useMemo } from "react";
import TextField from "@mui/material/TextField";
import ChiliList from "./ChiliList";
import { useSelector, useDispatch } from "react-redux";
import { selectAllChilies } from "../../redux/selectors/chiliSelector";
import loadChilies from "../../redux/actions/chilieActions";
import Button from "../../style/Button.style";
import { useNavigate } from "react-router-dom";
import HotnessSelect from "./HotnessSelect";
import { getChiliesPaginated } from "../../api/chiliApi";

const Toolbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const chilies = useSelector(selectAllChilies);

  const [inputText, setInputText] = useState("");
  const [hotness, setHotness] = useState("");
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

  const filteredChilies = useMemo(() => {
    let temp = hotness ? chilies.filter((c) => c.hotness === hotness) : chilies;
    temp = inputText
      ? temp.filter((chili) => chili?.name?.toUpperCase().includes(inputText))
      : temp;
    return temp;
  }, [hotness, inputText, loaded]);

  const inputHandler = (e) => {
    let upperCase = e.target.value.toUpperCase();
    setInputText(upperCase);
  };

  return (
    <section>
      <div style={{ margin: "30px" }}>
        <Button variant="text" onClick={() => navigate(`/form`)}>
          Add new chili
        </Button>
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="search"
          onChange={inputHandler}
        />
        <HotnessSelect
          chilies={chilies}
          hotness={hotness}
          onChange={(h) => setHotness(h)}
        />
      </div>

      <div>
        <ChiliList filteredChilies={filteredChilies} />
      </div>
    </section>
  );
};

export default Toolbar;
