import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";

const Sidebar = () => {
	return (
		<div className="col-span-1 bg-[#004257]">
			<Navbar />
			<Search />
		</div>
	);
};

export default Sidebar;
