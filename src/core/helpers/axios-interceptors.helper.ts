import router from "@router";
import { AxiosInstance } from "axios";
import { useUserStore } from "@stores";


function axiosInterceptor(axios: AxiosInstance) {
  const userStore =useUserStore()

  axios.interceptors.request.use((request: any) => {
    request.withCredentials = true;

    return request;
  });

  axios.interceptors.response.use(
    (res: any) => {
      return res.data;
    },
    (error: any) => {
      // notify({ type: "error", text: error.response?.data.message });
      if (error.response?.status == 401) {
        userStore.$reset()
        router.push("/login");
      }
      throw error;
    }
  );
  return axios;
}
export default axiosInterceptor