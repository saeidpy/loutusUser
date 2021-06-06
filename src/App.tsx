import React from "react";
import "./App.css";
import LayoutComponent from "./View/Layout/LayoutComponent";
import { QueryClient, QueryClientProvider } from "react-query";
import { isWidthUp, withWidth } from "@material-ui/core";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import LoadingComponent from "./Components/Loading/LoadingComponent";

const queryClient = new QueryClient();

function App(props: { width: Breakpoint }) {
  const isWeb = isWidthUp("md", props.width);
  console.log("🚀 ~ file: App.tsx ~ line 13 ~ App ~ isWeb", isWeb)
  return isWeb ? (
    <QueryClientProvider client={queryClient}>
      <LayoutComponent />
    </QueryClientProvider>
  ) : (
    <LoadingComponent />
  );
}

export default withWidth()(App);
