import { useContext, useEffect, useState } from "react";
import Cat from "../assets/img/cat.jpg";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Chats = () => {
	const [chats, setChats] = useState([]);

	const { currentUser } = useContext(AuthContext);

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
	return (
		<div>
			{Object.entries(chats)?.map((chat) => (
				<div
					key={chat[0]}
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
							{chat[1].userInfo.lastMessage?.text}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Chats;
