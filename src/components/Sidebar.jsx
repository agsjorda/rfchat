import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = () => {
	return (
		<div className="col-span-1 bg-[#004257]">
			<Navbar />
			<Search />
			<Chats />
		</div>
	);
};

export default Sidebar;
