import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import Login from "./pages/Login";
import Home from "./pages/Home";

function RoutesApp() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/login" element={<Login />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default RoutesApp;
