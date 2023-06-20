const Register = () => {
	return (
		<div>
			<div>
				<span>RF Chat</span>
				<span>Register</span>
				<form>
					<input
						className="border border-solid border-slate-400 rounded-md"
						type="text"
						placeholder="name"
					/>
					<input
						className="border border-solid border-slate-400 rounded-md"
						type="email"
						placeholder="email"
					/>
					<input
						className="border border-solid border-slate-400 rounded-md"
						type="password"
					/>
					<input type="file" />
					<button>Sign up</button>
					<p>Already have an account? Login</p>
				</form>
			</div>
		</div>
	);
};

export default Register;
