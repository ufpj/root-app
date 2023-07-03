import { registerApplication, start } from "single-spa";

registerApplication(
  "user-microfrontend",
  () => System.import("user-microfrontend").then((module) => module.default),
  () => true
);

start({
  urlRerouteOnly: true,
});

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
