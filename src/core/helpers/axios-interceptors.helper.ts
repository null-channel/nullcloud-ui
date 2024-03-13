import router from "@router";
import { AxiosInstance } from "axios";


function axiosInterceptor(axios: AxiosInstance) {

  axios.interceptors.request.use((request: any) => {
    // request.withCredentials = true;
    return request;
  });

  axios.interceptors.response.use(
    (res: any) => {
      return res.data;
    },
    (error: any) => {
      // notify({ type: "error", text: error.response?.data.message });
      if (error.response?.status == 401) {
        router.push("/login");
      }
      throw error;
    }
  );
  return axios;
}
export default axiosInterceptor