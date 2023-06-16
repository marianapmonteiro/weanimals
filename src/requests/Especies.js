import api from "../utils/api";
import Swal from "sweetalert2";

export const AddEspecie = async (
	formData
) => {
	await api
		.post(`/app/addespecie`, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
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

export const GetEspecies = async (setEspecies) => {
	await api
		.get(`/app/getespecies`)
		.then((res) => {
			setEspecies(res.data);
		})
		.catch((err) => {
			console.log(err);
		});
};
