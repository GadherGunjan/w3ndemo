import axios from "axios";
export const GET_INSTAGRAM = 'wp-json/next-api/get-instagram';


const axiosApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
		// "X-Requested-With": "XMLHttpRequest",
		"Content-Type": "application/json",
		// "appversion": "1.0",
	},
	responseType: "json",
})
const getToken = () => {
	// return "Basic dzNudXRzX2FkbWluOmVta2MgeHhLTyBIbHpFIHVEMkwgMlJITSB0WVc4";
	return process.env.NEXTAUTH_TOKE;
}

export async function get(url, config = {}){
	if( getToken() ){
        axiosApi.defaults.headers.Authorization = getToken();
    } else if ( config && config.token ){
        axios.defaults.headers.Authorization = config.token;
    }
    return await axiosApi.get(url, {...config}).then((response) => response.data).catch((error) => error);
}

export async function post(url, data, config = {}, returnFull = false) {
	if (getToken()) {
		axiosApi.defaults.headers.Authorization = getToken();
	} else if (config && config.token) {
		axiosApi.defaults.headers.Authorization = config.token;
	}
	return axiosApi.post(url, { ...data }, { ...config }).then((response) => (returnFull)? response: response.data).catch((error) => error);
}

export async function multipart_post(url, data) {
	return axios({
		url: process.env.NEXT_PUBLIC_API_URL + url,
		method: "POST",
		data: data,
		headers: {
			"Content-Type": "multipart/form-data",
			// Authorization: getToken(),
		},
	})
		.then((response) => response.data)
		.catch((error) => error);
}