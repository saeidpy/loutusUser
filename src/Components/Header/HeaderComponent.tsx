import { Grid, Typography } from "@material-ui/core";
import React from "react";
import SearchComponent from "../Search/SearchComponent";
import { useStyle } from "./Header.style";

export default function HeaderComponent() {
  const classes = useStyle();
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={classes.root}
    >
      <Grid item xs={6}>
        <div className={classes.leftItem}>
          <Typography color="primary" variant="h5" component="h2">
            Lotus
          </Typography>
          <img
            alt="Diamond "
            style={{ width: 20, height: 20, margin: "5px 0 0 20px" }}
            src="/assets/images/Bitmap (2).png"
          />
        </div>
      </Grid>
      <Grid item container justify="center" xs={6}>
        <SearchComponent />
      </Grid>
    </Grid>
  );
}
