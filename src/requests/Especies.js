import api from "../utils/api";

export const AddEspecie = async (
	nome,
	descricao,
	imagens,
	etiquetas,
	category
) => {
	let data = {
		nome: nome,
		descricao: descricao,
		imagens: imagens,
		etiquetas: etiquetas,
		category: category,
	};
	console.log("data:", data);

	await api
		.post(`/app/addespecie`, data)
		.then((res) => {
			return res.message;
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
