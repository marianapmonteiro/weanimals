import api from "../utils/api";
import Swal from "sweetalert2";

export const SignUpRequest = async (name, email, password, confirmPassword, setHelpText, setError, { navigate }) => {
    let data = {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    }
    await api
        .post(`/auth/register`, data)
        .then((res) => {
            if (res.data.message) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: res.data.message,
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate("/login");
                return res.data.message;
            }
            if (res.data.error) {
                setHelpText(true);
                setError(res.data.error)
            }
        })
        .catch((err) => {
            console.log(err);
        });
};

export const LoginRequest = async (email, password, setHelpText, setError, { navigate }) => {

    let data = {
        email: email,
        password: password,
    }
    await api
        .post(`/auth/login`, data)
        .then((res) => {
            if (res.data.message) {
                navigate("/");
                return { message: res.data.message, token: res.data.token };
            } if (res.data.error) {
                setHelpText(true);
                setError(res.data.error)
            }
        })
        .catch((err) => {
            console.log(err);
        });
};
