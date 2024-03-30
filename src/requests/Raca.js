import api from "../utils/api";
import Swal from "sweetalert2";

export const AddRaca = async (
	formData,
	token,
	navigate
) => {
	await api
		.post(`/app/add/raca`, formData, {
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
				navigate("/animais")
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
	return api.get(`/app/racas`)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
			throw err;
		});
};

export const GetRacaById = (id) => {
	console.log('id', id)

	return api.get(`/app/raca/${id}`)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
			throw err;
		});
};

export const GetRacasByAuthorId = (token) => {
	return api.get(`/app/racas/author`, {
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


export const EditRaca = async (
	navigate,
	id,
	formData,
	token,
) => {
	await api
		.put(`/app/edit/raca/${id}`, formData, {
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
				navigate(`/raca/?id=${id}`)
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

export const DeletarRaca = async (navigate, id) => {
	await api.delete(`/app/delete/raca/${id}`).then((res) => {
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