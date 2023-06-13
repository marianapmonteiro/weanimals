import api from "../utils/api";

export const AddRaca = async (
	especie,
	nome,
	descricao,
	imagens,
	cuidadosEspecificos
) => {
	let data = {
		especie: especie,
		nome: nome,
		descricao: descricao,
		imagens: imagens,
		cuidadosEspecificos: cuidadosEspecificos,
	};
	console.log("data:", data);

	await api
		.post(`/app/addraca`, data)
		.then((res) => {
			return res.message;
		})
		.catch((err) => {
			console.log(err);
		});
};

export const GetRacas = async (setRacas) => {
	await api
		.get(`/app/getracas`)
		.then((res) => {
			setRacas(res.data);
			console.log("response2", res.data);
		})
		.catch((err) => {
			console.log(err);
		});
};