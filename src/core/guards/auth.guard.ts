import { ROUTES } from "@constants";
import { inject } from "vue";
import { useAuth, useClerkProvide } from "vue-clerk";
import { VueCookies } from "vue-cookies";

const AUTH_ROUTES = [
  ROUTES.AUTH.name,
  ROUTES.RESET_PASSWORD.name,
  ROUTES.UPDATE_PASSWORD.name,
];

export default async (to: any, from: any) => {
  const $cookies = inject<VueCookies>("$cookies");
  const sessionId = $cookies?.get("__session");
  console.log(sessionId);

  if (!AUTH_ROUTES.includes(to.name) && !sessionId) {
    return { name: ROUTES.AUTH.name };
  }
  if (AUTH_ROUTES.includes(to.name) && sessionId) {
    return { name: ROUTES.HOME.name };
  }

  return true;
};
