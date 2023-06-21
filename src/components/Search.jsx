import React from "react";
import Cat from "../assets/img/cat.jpg";

const Search = () => {
	return (
		<div>
			<div>
				<input
					className="w-full outline-0 border-b-2 border-gray-600 bg-[#004257] pl-4 text-white placeholder:text-gray-400"
					type="text"
					placeholder="Find a user"
				/>
			</div>
			<div className="flex p-2 gap-2 items-center text-gray-100 cursor-pointer hover:bg-[#002e3b]">
				<img
					className="w-10 h-10 rounded-full object-cover"
					src={Cat}
					alt="cat"
				/>
				<div>
					<span>Jane</span>
				</div>
			</div>
		</div>
	);
};

export default Search;
