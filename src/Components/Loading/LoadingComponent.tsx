import React from "react";
import { useStyle } from "./Loading.style";
import GridLoader from "react-spinners/GridLoader";

export default function LoadingComponent() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <GridLoader
        color={"#60A7A3"}
        size={40}
      />
    </div>
  );
}
