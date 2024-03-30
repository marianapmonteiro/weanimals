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
	token,
	navigate
) => {
	await api
		.post(`/app/add/especie`, formData, {
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
				navigate("/animais")
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
	return api.get(`/app/especies`)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
			throw err;
		});
};

export const GetEspecieById = (id) => {
	return api.get(`/app/especie/${id}`)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
			throw err;
		});
};

export const GetEspeciesByAuthorId = (token) => {
	return api.get(`/app/especies/author`, {
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
export const EditEspecie = async (
	navigate,
	id,
	formData,
	token,
) => {
	await api
		.put(`/app/edit/especie/${id}`, formData, {
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
				navigate(`/especie/?id=${id}`)
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

export const DeletarEspecie = async (navigate, id) => {
	await api.delete(`/app/delete/especie/${id}`).then((res) => {
		if (res.data.message) {
			Swal.fire({
				position: "center",
				icon: "success",
				title: res.data.message,
				showConfirmButton: false,
				timer: 1500,
			});
			navigate('/animais');
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
}