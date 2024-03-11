import { ROUTES } from "@constants";
import { useAuth } from "vue-clerk";

const AUTH_ROUTES = [
  ROUTES.AUTH.name,
  ROUTES.RESET_PASSWORD.name,
  ROUTES.UPDATE_PASSWORD.name,
];

export default (to: any, from: any) => {
  const { isSignedIn } = useAuth();

  if (!AUTH_ROUTES.includes(to.name) && !isSignedIn.value) {
    return { name: ROUTES.AUTH.name };
  }
  if (AUTH_ROUTES.includes(to.name) && isSignedIn.value) {
    return { name: ROUTES.HOME.name };
  }
  return true;
};
