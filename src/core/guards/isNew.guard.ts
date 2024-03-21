import { ROUTES } from "@constants";
import { inject } from "vue";
import { VueCookies } from "vue-cookies";
import { useUserStore } from "../stores";

export default async (to: any, _: any) => {
  const $cookies = inject<VueCookies>("$cookies");
  const sessionId = $cookies?.get("__session");
  const userStore= useUserStore()

  
  if ( userStore.isNew && !!sessionId && to.name != ROUTES.COMPLETE_REGISTRATION.name ) {
    return {name:ROUTES.COMPLETE_REGISTRATION.name};
  }

  return true;
};
