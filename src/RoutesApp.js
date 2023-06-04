import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import AboutUs from "./pages/AboutUs";
import ListaAnimais from "./pages/ListaAnimais";
import AdicionarEspecie from "./pages/auth/AdicionarEspecie";
import AdicionarRaca from "./pages/auth/AdicionarRaca";
import PareamentoPet from "./pages/PareamentoPet";

function RoutesApp() {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/login" element={<Login />}></Route>
			<Route path="/signup" element={<SignUp />}></Route>
			<Route path="/aboutus" element={<AboutUs />}></Route>
			<Route path="/animais" element={<ListaAnimais />}></Route>
			<Route path="/addespecie" element={<AdicionarEspecie />}></Route>
			<Route path="/addraca" element={<AdicionarRaca />}></Route>
			<Route path="/pareamentopet" element={<PareamentoPet />}></Route>
		</Routes>
	);
}

export default RoutesApp;
