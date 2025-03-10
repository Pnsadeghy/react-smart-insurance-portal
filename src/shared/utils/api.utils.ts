import axios, { type AxiosError, type AxiosResponse } from 'axios';

const apiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getApiCallErrorMessage = (error: unknown): string => {
  const apiError = error as AxiosError;
  return apiError.response?.data?.message || 'An unexpected error occurred';
};

apiInstance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
        const errorMessage = getApiCallErrorMessage(error);
        const customError = {
            ...error,
            message: errorMessage,
            response: {
                ...error.response,
                data: {
                    ...(error.response?.data || {}),
                    message: errorMessage,
                },
            },
        };
        return Promise.reject(customError);
    }
);

export default apiInstance;
