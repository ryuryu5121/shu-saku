import { Routes, Route } from "react-router-dom";
// import React from "react";
import  "./App.css";
import { Login } from "./pages/Login";
import { SinUp } from "./pages/SinUp";
import { Home } from "./pages/Home";
import { CompanyAdd } from "./pages/CompanyAdd";
import { Company } from "./pages/Company";
import { ChangeFlow } from "./pages/ChangeFlow";
import { AddFlow } from "./pages/AddFlow";
import { AllFlow } from "./pages/AllFlow";


const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/sinup" element={<SinUp />} />
				<Route path = "/home" element = {<Home />} />
				<Route path = "/companyadd" element = {<CompanyAdd />}/>
                <Route path = "/company" element = {<Company/>} />
                <Route path = "/changeflow" element = {<ChangeFlow/>} />
                <Route path = "addflow" element = {<AddFlow/>} />
                <Route path = "allflow" element = {<AllFlow/>}/>
			</Routes>

		</div>
	);
};

export default App;