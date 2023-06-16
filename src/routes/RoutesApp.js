import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
// Pages
import Login from "../pages/Login";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import AboutUs from "../pages/AboutUs";
import ListaAnimais from "../pages/ListaAnimais";
import AdicionarEspecie from "../pages/auth/AdicionarEspecie";
import AdicionarRaca from "../pages/auth/AdicionarRaca";
import PareamentoPet from "../pages/PareamentoPet";
import Especie from "../pages/Especie";
import Raca from "../pages/Raca";

function RoutesApp() {
	return (
		<Routes>
			<Route
				element={
					<ProtectedRoute>
						<Outlet />
					</ProtectedRoute>
				}
			>
				<Route path="/addespecie" element={<AdicionarEspecie />} />
				<Route path="/addraca" element={<AdicionarRaca />} />
			</Route>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/pareamentopet" element={<PareamentoPet />} />
			<Route path="/especie" element={<Especie />} />
			<Route path="/raca" element={<Raca />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/aboutus" element={<AboutUs />} />
			<Route path="/animais" element={<ListaAnimais />} />

		</Routes>

	)
}
export default RoutesApp;
