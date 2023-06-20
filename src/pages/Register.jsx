import AddImage from "../assets/img/addImage.png";

const Register = () => {
	return (
		<div className="flex items-center justify-center h-screen bg-[#0081a7]">
			<div className="flex flex-col items-center px-20 py-16 bg-[#f1faee] rounded-md ">
				<span className="font-bold text-[#0081a7] text-3xl">
					RF Chat
				</span>
				<span>Register</span>
				<form className="flex flex-col gap-y-2 items-center justify-center w-[300px]">
					<input
						className="border-b-[1px] border-solid border-slate-400 bg-[#f1faee] pl-3 w-full"
						type="text"
						placeholder="name"
					/>
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
					<input
						style={{ display: "none" }}
						className="flex"
						type="file"
						id="file"
					/>
					<label className="flex items-center gap-8" htmlFor="file">
						<img className="w-8" src={AddImage} alt="" />
						<span className="text-[#69858d] cursor-pointer text-sm">
							add an avatar
						</span>
					</label>
					<button className="bg-[#0081a7] text-white w-full h-8 rounded-md my-2">
						Sign up
					</button>
				</form>
				<p>Already have an account? Login</p>
			</div>
		</div>
	);
};

export default Register;
