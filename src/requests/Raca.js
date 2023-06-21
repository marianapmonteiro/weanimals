import api from "../utils/api";
import Swal from "sweetalert2";

export const AddRaca = async (
	formData,
	token
) => {
	await api
		.post(`/app/addraca`, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
				"Authorization": `Bearer ${token}`
			}
		})
		.then((res) => {
			console.log('teste')
			if (res.data.message) {
				console.log('res.data.message', res.data.message)
				Swal.fire({
					position: "center",
					icon: "success",
					title: res.data.message,
					showConfirmButton: false,
					timer: 1500,
				});
				return res.data.message;
			}
			if (res.data.error) {
				console.log('res.data.error', res.data.error)
				Swal.fire({
					position: "center",
					icon: "error",
					title: res.data.error,
					showConfirmButton: true,
				});
				return res.data.error;
			}

		})
		.catch((err) => {
			console.log(err);
		});
};

export const GetRacas = () => {
	return api.get(`/app/getracas`)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
			throw err;
		});
};

export const GetRacasByAuthorId = (token) => {
	return api.get(`/app/getracasbyid`, {
		headers: {
			"Authorization": `Bearer ${token}`
		}
	})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
			throw err;
		});
};
