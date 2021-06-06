import React from "react";
import { useStyle } from "./Search.style";
import { IconButton, InputBase } from "@material-ui/core";

export default function SearchComponent() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <img alt="" src="/assets/images/Bitmap (3).png" />
      </IconButton>
    </div>
  );
}
