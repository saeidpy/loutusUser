import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    margin: "32px auto 16px auto",
    padding: "16px",
  },
  leftItem: { display: "flex", justifyContent: "left", paddingLeft: 32 },
}));

export { useStyle };
