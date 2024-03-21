import router from "@router";
import { AxiosInstance } from "axios";
import Cookie from 'universal-cookie'
function axiosInterceptor(axios: AxiosInstance) {
  axios.interceptors.request.use((request: any) => {
    const $cookies = new Cookie();
    const token = $cookies.get("__session")
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
  });

  axios.interceptors.response.use(
    (res: any) => {
      return res.data;
    },
    (error: any) => {
      // notify({ type: "error", text: error.response?.data.message });
      if (error.response?.status == 401) {
        router.push("/auth");
      }
      throw error;
    }
  );
  return axios;
}
export default axiosInterceptor;
