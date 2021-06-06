import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import RemoveCircleSharpIcon from "@material-ui/icons/RemoveCircleSharp";
import React from "react";
import { useQuery } from "react-query";
import { getUser, User, UserParams } from "../../Services/UserServices";
import { useStyle } from "./UserItem.style";

interface UserItem {
  selected: string | undefined;
  handleOnClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function UserItemComponent(props: UserItem) {
  const classes = useStyle();
  const { selected, handleOnClick } = props;
  const { data } = useQuery<User, UserParams, User, any>(
    ["user", { userId: selected }],
    getUser,
    {
      enabled: !!selected,
      cacheTime: 0,
    }
  );
  if (!data) return null;
  const {
    data: { avatar, first_name, last_name, email },
    support: { text },
  } = data!;
  return (
    <div
      style={{
        animation: "unshimmy2 0.8s",
      }}
    >
      <Grid
        container
        item
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{ textAlign: "center", marginBottom: "40px" }}
      >
        <Grid item xs={6}>
          <Typography
            variant="h3"
            style={{ fontWeight: "bold", color: "#fff" }}
          >
            Profile
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <IconButton className={classes.buttonIcon} onClick={handleOnClick}>
            <RemoveCircleSharpIcon
              style={{ width: "50px", height: "50px", color: "#fff" }}
            />
          </IconButton>
        </Grid>
      </Grid>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="260"
          image={avatar}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.CardContent}>
          <Typography
            style={{ color: "#fff", fontWeight: "bold" }}
            variant="h5"
            component="h2"
          >
            {`${first_name} ${last_name}`}
          </Typography>
          <Typography
            style={{
              color: "#fff",
              fontWeight: "normal",
              marginBottom: "20px",
            }}
            variant="caption"
            component="h2"
          >
            {email}
          </Typography>
          <Typography
            variant="body1"
            style={{
              color: "#fff",
              fontWeight: "lighter",
              fontSize: ".7rem",
              marginBottom: "20px",
            }}
            color="textSecondary"
            component="p"
          >
            {text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
