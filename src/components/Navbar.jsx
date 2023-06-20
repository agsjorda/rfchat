import React from "react";

const Navbar = () => {
	return (
		<div className="flex items-center justify-between p-4 bg-[#002e3b] h-14">
			<span className="font-bold text-[#0081a7] text-3xl">RF Chat</span>
			<div className="">
				<img />
				<span>John</span>
				<button className="bg-slate-100">logout</button>
			</div>
		</div>
	);
};

export default Navbar;
