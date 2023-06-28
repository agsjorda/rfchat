import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
	const [err, setErr] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;

		try {
			await signInWithEmailAndPassword(auth, email, password);
			navigate("/");
		} catch (err) {
			setErr(true);
		}
	};
	return (
		<div className="flex items-center justify-center h-screen bg-[#0081a7]">
			<div className="flex flex-col items-center px-20 py-16 bg-[#f1faee] rounded-md ">
				<span className="font-bold text-[#0081a7] text-3xl">RF Chat</span>
				<span>Log In</span>
				<form className="flex flex-col gap-y-2 items-center justify-center w-[300px]" onSubmit={handleSubmit}>
					<input
						className="border-b-[1px] border-solid border-slate-400 bg-[#f1faee] pl-3 w-full"
						name="email"
						type="email"
						placeholder="email"
					/>
					<input
						className="border-b-[1px] border-solid border-slate-400 bg-[#f1faee] pl-3 w-full"
						name="password"
						type="password"
						placeholder="password"
					/>

					<button className="bg-[#0081a7] text-white w-full h-8 rounded-md my-2">Sign In</button>
				</form>
				{err && <span>Something went wrong</span>}
				<p>
					Don&apos;t have an account? <Link to="/register">Register</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
