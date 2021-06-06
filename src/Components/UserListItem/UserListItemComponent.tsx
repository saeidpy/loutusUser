import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";
import React from "react";
import { theme } from "../../theme";
import { useStyle } from "./UserListItem.style";

interface UserListItem {
  selected: string;
  handleOnClick: Function;
  first_name: string;
  last_name: string;
  avatar: string;
  id: string;
}
export default function UserListItemComponent(props: UserListItem) {
  const classes = useStyle();
  const { selected, first_name, last_name, avatar, id, handleOnClick } = props;
  const checked = selected == id;
  return (
    <Card
      className={classes.root}
      id={id}
      onClick={() => handleOnClick(id)}
      component={CardActionArea}
      style={{
        background: checked
          ? " linear-gradient(44.39deg, #50C9C3 6.16%, #96DEDA 94.73%)"
          : theme.palette.secondary.main,
        paddingLeft: checked ? "40px" : "",
        transform: checked ? "translateX(-50px)" : "",
        animation: checked ? "shimmy 0.5s" : "unshimmy 0.5s",
      }}
    >
      <CardMedia
        component="img"
        className={classes.cover}
        image={avatar}
        title="Live from space album cover"
      />
      <CardContent>
        <Typography className={classes.title}>{first_name}</Typography>
        <Typography
          className={classes.caption}
          variant="caption"
          color="textSecondary"
        >
          {last_name}
        </Typography>
      </CardContent>
    </Card>
  );
}
