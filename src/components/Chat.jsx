import Camera from "../assets/img/camera.png";
import AddFriend from "../assets/img/add-friend.png";
import More from "../assets/img/more.png";
import Messages from "./Messages";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import MessageInput from "./MessageInput";

const Chat = () => {
	const { data } = useContext(ChatContext);
	return (
		<div className="flex flex-col h-full col-span-2 bg-[#dff4fb]">
			<div className="flex justify-between items-center bg-[#206378] h-14 px-4">
				<span>{data.user?.displayName}</span>
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
			<MessageInput />
		</div>
	);
};

export default Chat;
