const ROUTES = {
  MAIN: { path: "/main", name: "dashboard_home" },
  NOT_FOUND: { path: "/:catchAll(.*)", name: "NotFound" },
  HOME: { name: "home", path: "/" },
  AUTH: { name: "auth", path: "/auth" },
  COMPLETE_REGISTRATION: { name: 'complete-registration', path: '/complete-registration' },
  RESET_PASSWORD: { name: "reset-password", path: "/resetpassword" },
  UPDATE_PASSWORD: { name: "update-password", path: "/updatepassword" },
};
export default ROUTES;
