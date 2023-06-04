// import { Cookies } from "react-cookie";
import axios from "axios";
//Cookie
// const acess_token = new Cookies();

// if (acess_token.get("MestraAdmin")) {
// 	var token = acess_token.get("MestraAdmin");
// 	// console.log("pegou o token");
// 	console.log(token);
// }
// //  const { cookie } = useContext(AuthContext);

//  var bearer = `Bearer ${token}`;

const api = axios.create({
	baseURL: "http://localhost:3001",
	withCredentials: false, // enable cookies
});

// console.log("bearer:", bearer);
// console.log("token", token);
// api.defaults.headers.common["Authorization"] = bearer;
api.defaults.headers.common["Content-Type"] = "application/json";
api.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
api.defaults.headers.common["Accept"] = "application/json, text/plain, **";

export default api;
