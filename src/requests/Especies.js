import api from "../utils/api";
import Swal from "sweetalert2";

export const ParearPet = async (respostas) => {

	return api.post(`/app/pareamentopet`, { respostas })
		.then((res) => {
			console.log("funcao chamada")
			console.log('resposta api:', res.data.message)
			return res.data.message;
		})
		.catch((err) => {
			console.log("erro:", err);
			throw err;
		});
};


export const AddEspecie = async (
	formData,
	token
) => {
	await api
		.post(`/app/addespecie`, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
				"Authorization": `Bearer ${token}`
			}
		})
		.then((res) => {
			if (res.data.message) {
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

export const GetEspecies = () => {
	return api.get(`/app/getespecies`)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
			throw err;
		});
};

export const GetEspeciesByAuthorId = (token) => {
	return api.get(`/app/getespeciesbyid`, {
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