import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    background: "#FFFFFF",
    boxShadow: "0px 0px 25px 1px rgb(172 169 169 / 50%)",
    borderRadius: "29px !important",
    alignItems: "center",
    justifyContent: "start",
    padding: "16px !important",
    display: "flex",
    width: "350px",
    margin: "15px auto",
  },
  cover: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    background: "#F6F6F6",
  },
  actionsCard: {
    position: "absolute",
    bottom: "1px",
    right: "1px",
  },
  title: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "15px",
    letterSpacing: "-0.4px",
    color: "#0B7171",
    textTransform: "uppercase",
  },
  caption: {
    fontStyle: "normal",
    fontWeight: 500,
    fontWize: "12px",
    lineHeight: "18px",
    letterSpacing: "-0.32px",
    color: "#569D93",
  },
  price: {
    padding: "2px 15px",
    position: "absolute",
    left: 0,
    width: "fit-content",
    borderRadius: "14px",
    background: "#25A2A6",
    transform: "rotate(90deg)",
    color: "#fff",
  },
}));

export { useStyle };
