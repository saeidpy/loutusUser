import React, { useState } from "react";
import { useStyle } from "./Layout.style";
import UserListItemComponent from "../../Components/UserListItem/UserListItemComponent";
import { Grid } from "@material-ui/core";
import UserItemComponent from "../../Components/UserItem/UserItemComponent";
import HeaderComponent from "../../Components/Header/HeaderComponent";
import { getListUsers, Users } from "../../Services/UserServices";
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingComponent from "../../Components/Loading/LoadingComponent";

export default function LayoutComponent() {
  const classes = useStyle();
  const { data, error, fetchNextPage, hasNextPage, status } = useInfiniteQuery<
    Users,
    Error
  >("users", getListUsers, {
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
  });

  const [selectedId, setSelectedId] = useState<string>("1");

  const handleOnClick = (id: string) => {
    setSelectedId(id);
  };

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedId("");
  };

  const dataList = data?.pages.map((item) => item.data).flat(1);

  return (
    <div className={classes.root}>
      {status === "loading" ? (
        <LoadingComponent />
      ) : status === "error" ? (
        <p>Error: {error!.message}</p>
      ) : (
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.rootGrid}
        >
          <Grid item xs={12}>
            <HeaderComponent />
          </Grid>
          <Grid item xs={6} className={classes.item}>
            <UserItemComponent
              selected={selectedId}
              handleOnClick={handleRemove}
            />
          </Grid>
          <Grid item xs={6} className={classes.item}>
            <InfiniteScroll
              dataLength={dataList!.length}
              height={"100%"}
              next={() => fetchNextPage()}
              className={classes.list}
              hasMore={!!hasNextPage}
              loader={<LoadingComponent />}
            >
              {dataList!.map((rest: any) => (
                <UserListItemComponent
                  key={rest.avatar}
                  handleOnClick={handleOnClick}
                  selected={selectedId}
                  {...rest}
                />
              ))}
            </InfiniteScroll>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
