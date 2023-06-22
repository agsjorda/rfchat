import Camera from "../assets/img/camera.png";
import AddFriend from "../assets/img/add-friend.png";
import More from "../assets/img/more.png";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
	return (
		<div className="flex flex-col h-full col-span-2 bg-[#dff4fb]">
			<div className="flex justify-between items-center bg-[#206378] h-14 px-4">
				<span>Tyler</span>
				<div className="flex items-center gap-4">
					<img
						className="w-6 h-6 cursor-pointer text-white"
						src={Camera}
						alt="camera"
					/>
					<img
						className="w-6 h-6 cursor-pointer text-white"
						src={AddFriend}
						alt="add friend"
					/>
					<img
						className="w-6 h-6 cursor-pointer text-white"
						src={More}
						alt="more"
					/>
				</div>
			</div>
			<Messages />
			<Input />
		</div>
	);
};

export default Chat;
