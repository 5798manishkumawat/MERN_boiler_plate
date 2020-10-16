import axios from "axios";
import { History } from "history";

const api = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
});

export function registerInterceptorsWithHistory(history: History): void {
	api.interceptors.response.use(
		(respose) => respose,
		(error) => {
			const { response } = error;
			if (response.status === 401) {
				history.push("/");
			}
			return Promise.reject(error);
		}
	);
}

export default api;
