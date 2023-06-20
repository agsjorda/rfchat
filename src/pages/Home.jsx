import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

const Home = () => {
	return (
		<div className="flex items-center justify-center h-screen bg-[#0081a7]">
			<div className="grid grid-cols-3 w-4/5 bg-[#f1faee] h-4/5 rounded-md overflow-hidden">
				<Sidebar />
				<Chat />
			</div>
		</div>
	);
};

export default Home;
