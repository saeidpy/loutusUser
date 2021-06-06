import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  },
  gradient: {
    left: "-45%",
    position: "absolute",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(224.34deg, rgb(120, 255, 214) 3.69%, rgb(0, 121, 145) 133.19%)",
    borderRadius: "45px 118px",
    transform: "skewX(339deg)",
    zIndex: -1,
  },
  rootGrid: {
    height: "100%",
  },
  list: {
    // transform: "skewX(339deg)",
    height: "100%",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },

}));

export { useStyle };
