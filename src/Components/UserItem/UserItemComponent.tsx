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
import LoadingComponent from "../Loading/LoadingComponent";
import { useStyle } from "./UserItem.style";

interface UserItem {
  selected: string | undefined;
  handleOnClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function UserItemComponent(props: UserItem) {
  const classes = useStyle();
  const { selected, handleOnClick } = props;

  const { isLoading, data } = useQuery<User, UserParams, User, any>(
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

  return isLoading ? (
    <LoadingComponent />
  ) : (
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
            style={{ fontWeight: "bold" }}
            color="secondary"
          >
            Profile
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <IconButton className={classes.buttonIcon} onClick={handleOnClick}>
            <RemoveCircleSharpIcon
              style={{ width: "50px", height: "50px" }}
              color="secondary"
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
            style={{ fontWeight: "bold" }}
            variant="h5"
            color="secondary"
          >
            {`${first_name} ${last_name}`}
          </Typography>
          <Typography
            style={{
              fontWeight: "normal",
              marginBottom: "20px",
            }}
            variant="caption"
            component="h2"
            color="secondary"
          >
            {email}
          </Typography>
          <Typography
            variant="body1"
            style={{
              fontWeight: "lighter",
              fontSize: ".7rem",
              marginBottom: "20px",
            }}
            color="secondary"
          >
            {text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
