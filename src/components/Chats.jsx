import { useContext, useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Chats = () => {
	const [chats, setChats] = useState([]);

	const { currentUser } = useContext(AuthContext);
	const { dispatch } = useContext(ChatContext);

	useEffect(() => {
		const getChats = () => {
			const unsub = onSnapshot(
				doc(db, "userChats", currentUser.uid),
				(doc) => {
					setChats(doc.data());
				}
			);

			return () => {
				unsub();
			};
		};

		currentUser.uid && getChats();
	}, [currentUser.uid]);

	const handleSelect = (u) => {
		dispatch({ type: "CHANGE_USER", payload: u });
	};
	return (
		<div>
			{Object.entries(chats)
				?.sort((a, b) => b[1].date - a[1].date)
				.map((chat) => (
					<div
						key={chat[0]}
						onClick={() => handleSelect(chat[1].userInfo)}
						className="flex p-2 gap-2 items-center text-gray-100 cursor-pointer hover:bg-[#002e3b]"
					>
						<img
							className="w-10 h-10 rounded-full object-cover"
							src={chat[1].userInfo.photoURL}
							alt="cat"
						/>
						<div>
							<span className="font-medium">
								{chat[1].userInfo.displayName}
							</span>
							<p className="font-light text-sm text-gray-300">
								{chat[1].lastMessage?.text}
							</p>
						</div>
					</div>
				))}
		</div>
	);
};

export default Chats;
