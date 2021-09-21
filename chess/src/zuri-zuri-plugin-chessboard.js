import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

// Import Main Application
import App from "./App";
import Root from "./spa-root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
