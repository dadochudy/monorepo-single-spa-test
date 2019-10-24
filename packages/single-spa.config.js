import { registerApplication, start } from "single-spa";

// registerApplication(
//   // Name of our single-spa application
//   "home",
//   // loadingFunction
//   () => import("./home/home.app.js"),
//   // activityFunction
//   location =>
//     location.pathname === "" ||
//     location.pathname === "/" ||
//     location.pathname.startsWith("/home")
// );

registerApplication(
  // Name of our single-spa application
  "app1",
  // loadingFunction
  () => import("./app1/src/index.js"),
  // activityFunction
  location =>
    location.pathname === "" ||
    location.pathname === "/" ||
    location.pathname.startsWith("/app1")
);
registerApplication(
  // Name of our single-spa application
  "app2",
  // loadingFunction
  () => import("./app2/src/index.js"),
  // activityFunction
  location => location.pathname.startsWith("/app2")
);

registerApplication(
  "navBar",
  () => import("./navBar/navBar.app.js"), // .then(module => module.navBar),
  () => true
);

start();
