import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    maxWidth: "295px",
    borderRadius: "51px !important",
    margin: "auto",
    zoom: 1.1,
    boxShadow:
      "0px 0px 20px 10px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
  },
  CardContent: {
    background: "linear-gradient(313.37deg, #50C9C3 6.19%, #96DEDA 95.6%)",
    padding: "30px !important",
  },
  buttonIcon: {
    padding: 0,
    width: 0,
    height: 0,
  },
  cover: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    background: "#F6F6F6",
  },
}));

export { useStyle };
