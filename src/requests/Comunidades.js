import api from "../utils/api";

export const GetComunidades = (especieId, setComunidades) => {
    return api.get(`/app/getcomunidades`, {
        params: { especieId }
    })
        .then((res) => {
            setComunidades(res.data)
            return res.data;
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};