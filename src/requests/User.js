import api from "../utils/api";
import Swal from "sweetalert2";

export const AltPerfil = async (name, email, altPassword, oldPassword, password, confirmPassword, token, setCookie) => {
    let data = {
        name: name,
        email: email,
        altPassword: altPassword,
        oldPassword: oldPassword,
        newPassword: password,
        confirmPassword: confirmPassword
    }
    await api
        .post(`/app/altperfil`, data, {
            headers: {
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
                setCookie('UserData', res.data.data, { path: '/' });
                return res.data.data;
            }
            if (res.data.error) {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: res.data.error,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        })
        .catch((err) => {
            console.log(err);
        });
};
