import * as coreAxios from "axios";
// import { getCookie, signout } from "./cookies";

export const axios = coreAxios.default.create({
    headers: {
    },
});

const axiosInterceptor = (dispatch) => {
    axios.interceptors.request.use(
        function (config) {
            // Do something before request is sent
            return config;
        },
        function (error) {
            // Do something with request error
            return Promise.reject(error);
        }
    );

    axios.interceptors.response.use(
        function (response) {
            const { method } = response.config;
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            return response.data;
        },
        function (error) {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response erro

            // if (error.response?.status === 403) {
            //     const refreshToken = async () => {
            //         try {
            //             signout(() => window.location.reload());
            //         } catch (error) {
            //             dispatch(
            //                 setSnackBar({
            //                     open: true,
            //                     message: "Failed to Logout the user.",
            //                     severity: "error",
            //                 })
            //             );
            //         }
            //     };
            //     refreshToken();
            // }

            return Promise.reject(error);
            // return false;
        }
    );
};

export default axiosInterceptor;