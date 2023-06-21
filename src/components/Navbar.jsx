import Cat from "../assets/img/cat.jpg";

const Navbar = () => {
	return (
		<div className="flex items-center justify-between p-4 bg-[#002e3b] h-14">
			<span className="font-bold text-[#0081a7] text-2xl">RF Chat</span>
			<div className="flex gap-2">
				<img
					className="object-fit w-6 h-6 rounded-full"
					src={Cat}
					alt="cat"
				/>
				<span className="text-white">John</span>
				<button className="bg-[#036f8d] text-white px-2 rounded">
					logout
				</button>
			</div>
		</div>
	);
};

export default Navbar;
