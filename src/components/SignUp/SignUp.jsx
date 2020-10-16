import React, { useState } from "react";
import api from "../../services/api";

const SignUp = (props) => {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});
	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(user);
		await api
			.post("/add", user)
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
		await api
			.get("/")
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
		setUser({
			...user,
			email: "",
			password: "",
		});
		console.log(props);
		props.history.push("/");
	};
	return (
		<div className="w-screen h-screen">
			<form className="w-2/3 " onSubmit={(e) => onSubmit(e)}>
				<div className="flex flex-col mt-1">
					<label className="font-bold">Email</label>
					<input
						className="w-full border-2"
						type="email"
						required
						value={user.email}
						onChange={(e) => setUser({ ...user, email: e.target.value })}
					/>
				</div>
				<div className="flex flex-col mt-1">
					<label className="font-bold">Password</label>
					<input
						className="w-full border-2"
						type="password"
						required
						value={user.password}
						onChange={(e) => setUser({ ...user, password: e.target.value })}
					/>
				</div>

				<div className="w-full">
					<button className="w-1/2 border-2" type="submit" value="Sign Up">
						Sign Up
					</button>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
