import Cat from "../assets/img/cat.jpg";

const Chats = () => {
	return (
		<div>
			<div className="flex p-2 gap-2 items-center text-gray-100 cursor-pointer hover:bg-[#002e3b]">
				<img
					className="w-10 h-10 rounded-full object-cover"
					src={Cat}
					alt="cat"
				/>
				<div>
					<span className="font-medium">Jane</span>
					<p className="font-light text-sm text-gray-300">Hello</p>
				</div>
			</div>
			<div className="flex p-2 gap-2 items-center text-gray-100 cursor-pointer hover:bg-[#002e3b]">
				<img
					className="w-10 h-10 rounded-full object-cover"
					src={Cat}
					alt="cat"
				/>
				<div>
					<span className="font-medium">Jane</span>
					<p className="font-light text-sm text-gray-300">Hello</p>
				</div>
			</div>
			<div className="flex p-2 gap-2 items-center text-gray-100 cursor-pointer hover:bg-[#002e3b]">
				<img
					className="w-10 h-10 rounded-full object-cover"
					src={Cat}
					alt="cat"
				/>
				<div>
					<span className="font-medium">Jane</span>
					<p className="font-light text-sm text-gray-300">Hello</p>
				</div>
			</div>
		</div>
	);
};

export default Chats;
