import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { TextField } from "@mui/material";
import Button from "../../../style/Button.style";
import { selectChiliById } from "../../../redux/selectors/chiliSelector";
import CardTitle from "../../../style/CardTitle.style";
import Grid from "@mui/material/Grid";
import { toast } from "react-toastify";
import { saveChili } from "../../../redux/actions/chiliSecondActions";

const ChiliForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const chili = useSelector(selectChiliById)(parseInt(id));

  const [chilies, setChilies] = useState();

  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  function formIsValid() {
    const errors = {};
    const { name, imageUrl, price, hotness, description, stockQuantity } =
      chilies;

    if (!name) errors.name = "Name is required";
    if (!imageUrl) errors.imageUrl = "Image URL is required";
    if (!price) errors.price = "Price is required";
    if (!hotness) errors.hotness = "Hotness is required";
    if (!description) errors.description = "Description is required";
    if (!stockQuantity) errors.stockQuantity = "StockQuantity is required";

    setErrors(errors);
    //form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    dispatch(saveChili(chilies))
      .then(() => {
        toast.success("Chili saved.");
        navigate("/shop");
      })
      .catch((error) => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setChilies((prevChili) => ({
      ...prevChili,
      [name]: value,
    }));
  }

  return (
    <section
      style={{
        width: "100%",
      }}
    >
      <CardTitle fontSize="xx-large" style={{ textAlign: "center" }}>
        {id ? "Edit" : "Add new"} chili
      </CardTitle>
      <form style={{ margin: "50px" }} onSubmit={handleSave}>
        <Grid container spacing={2} justifyContent="center" aligns="center">
          <Grid item xs={6} md={12} style={{ textAlign: "center" }}>
            <TextField
              name="name"
              label="name"
              value={chili?.name}
              style={{ marginTop: "10px" }}
              error={errors.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6} md={12} style={{ textAlign: "center" }}>
            <TextField
              name="imageUrl"
              label="imageUrl"
              value={chili?.imageUrl}
              style={{ marginTop: "5px" }}
              error={errors.imageUrl}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6} md={12} style={{ textAlign: "center" }}>
            <TextField
              name="price"
              label="price"
              value={chili?.price}
              style={{ marginTop: "5px" }}
              error={errors.price}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6} md={12} style={{ textAlign: "center" }}>
            <TextField
              name="hotness"
              label="hotness"
              value={chili?.hotness}
              style={{ marginTop: "5px" }}
              error={errors.hotness}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6} md={12} style={{ textAlign: "center" }}>
            <TextField
              name="stockQuantity"
              label="stockQuantity"
              value={chili?.stockQuantity}
              style={{ marginTop: "5px" }}
              error={errors.stockQuantity}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
            <TextField
              name="description"
              label="description"
              value={chili?.description}
              style={{ marginTop: "5px" }}
              error={errors.description}
              onChange={handleChange}
            />
          </Grid>
          <Button type="submit" disabled={saving}>
            {saving ? "Saving..." : "Save"}
          </Button>
        </Grid>
      </form>
    </section>
  );
};

export default ChiliForm;
