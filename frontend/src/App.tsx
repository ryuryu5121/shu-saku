import { Routes, Route } from "react-router-dom";
// import React from "react";
import  "./App.css";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { CompanyAdd } from "./pages/CompanyAdd";
import { Company } from "./pages/Company";
import { ChangeFlow } from "./pages/ChangeFlow";
import { AddFlow } from "./pages/AddFlow";
import { Allflow } from "./pages/AllFlow";
import InputMail from "./pages/InputMail";


const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path = "/" element = {<Home />} />
				<Route path = "/companyadd" element = {<CompanyAdd />}/>
                <Route path = "/company" element = {<Company/>} />
                <Route path = "/changeflow" element = {<ChangeFlow/>} />
                <Route path = "addflow" element = {<AddFlow/>} />
                <Route path = "allflow" element = {<Allflow/>}/>
				<Route path = "/inputmail" element = {<InputMail/>}/>
			</Routes>

		</div>
	);
};

export default App;