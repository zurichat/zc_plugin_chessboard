// import { registerApplication, start } from "single-spa";
// import {
//   constructApplications,
//   constructRoutes,
//   constructLayoutEngine,
// } from "single-spa-layout";
// import microfrontendLayout from "./microfrontend-layout.html";

// const routes = constructRoutes(microfrontendLayout);
// const applications = constructApplications({
//   routes,
//   loadApp({ name }) {
//     return System.import(name);
//   },
// });
// const layoutEngine = constructLayoutEngine({ routes, applications });

// applications.forEach(registerApplication);
// layoutEngine.activate();
// start();

import { registerApplication, start } from "single-spa";
const isLocal = true;

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: "@zuri/zuri-music-plugin",
//   app: () => System.import("http://localhost:8080/zuri-music-plugin.js"),
//   activeWhen: ["/"],
// });

// change argument to dev for development and back to prod before you push
const env = isLocal ? "dev" : "prod";
customRegister(env);
function customRegister(env) {
  if (env === "dev") {
    registerApplication({
      name: "@zuri/zuri-plugin-chessboard",
      app: () =>
        System.import("//127.0.0.1:22664/zuri-zuri-plugin-chessboard.js"),
      activeWhen: ["/"],
    });
  } else {
    registerApplication({
      name: "@zuri/zuri-plugin-chessboard",
      app: () =>
        System.import("https://chess.zuri.chat/zuri-zuri-plugin-chessboard.js"),
      activeWhen: ["/"],
    });
  }

  start({
    urlRerouteOnly: true,
  });
}
