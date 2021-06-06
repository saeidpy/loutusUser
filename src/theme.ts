import { createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#60A7A3",
      main: "#0B7171",
    },
    secondary: {
      main: "#ffff",
    },
  },
  typography: {
    caption: {
      color: "#60A7A3",
    },
  },
});
