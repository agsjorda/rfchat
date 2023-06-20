const Login = () => {
	return (
		<div className="flex items-center justify-center h-screen bg-[#0081a7]">
			<div className="flex flex-col items-center px-20 py-16 bg-[#f1faee] rounded-md ">
				<span className="font-bold text-[#0081a7] text-3xl">
					RF Chat
				</span>
				<span>Log In</span>
				<form className="flex flex-col gap-y-2 items-center justify-center w-[300px]">
					<input
						className="border-b-[1px] border-solid border-slate-400 bg-[#f1faee] pl-3 w-full"
						type="email"
						placeholder="email"
					/>
					<input
						className="border-b-[1px] border-solid border-slate-400 bg-[#f1faee] pl-3 w-full"
						type="password"
						placeholder="password"
					/>

					<button className="bg-[#0081a7] text-white w-full h-8 rounded-md my-2">
						Sign In
					</button>
				</form>
				<p>Don&apos;t have an account? Login</p>
			</div>
		</div>
	);
};

export default Login;
