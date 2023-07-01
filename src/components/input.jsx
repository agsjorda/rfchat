import { useContext, useState } from "react";
import Attach from "../assets/img/attach.png";
import Image from "../assets/img/image.png";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {
	Timestamp,
	arrayUnion,
	doc,
	serverTimestamp,
	updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Input = () => {
	const [text, setText] = useState("");
	const [img, setImg] = useState(null);

	const { currentUser } = useContext(AuthContext);
	const { data } = useContext(ChatContext);

	const handleSend = async () => {
		if (img) {
			const storageRef = ref(storage, uuid());

			const uploadTask = uploadBytesResumable(storageRef, img);
			uploadTask.on(
				(error) => {
					// Handle unsuccessful uploads
					console.log(error);
					// setErr(true);
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then(
						async (downloadURL) => {
							await updateDoc(doc(db, "chats", data.chatId), {
								messages: arrayUnion({
									id: uuid(),
									text,
									senderId: currentUser.uid,
									date: Timestamp.now(),
									img: downloadURL,
								}),
							});
						}
					);
				}
			);
		} else {
			await updateDoc(doc(db, "chats", data.chatId), {
				messages: arrayUnion({
					id: uuid(),
					text,
					senderId: currentUser.uid,
					date: Timestamp.now(),
				}),
			});
		}
		await updateDoc(doc(db, "userChats", currentUser.uid), {
			[data.chatId + ".lastMessage"]: {
				text,
			},
			[data.chatId + ".date"]: serverTimestamp(),
		});
		await updateDoc(doc(db, "userChats", data.user.uid), {
			[data.chatId + ".lastMessage"]: {
				text,
			},
			[data.chatId + ".date"]: serverTimestamp(),
		});

		setText("");
		setImg(null);
	};

	return (
		<div className="flex justify-between items-center h-14 px-4 bg-slate-100">
			<input
				className="bg-transparent w-full outline-0"
				placeholder="Type Something ..."
				onChange={(e) => setText(e.target.value)}
				value={text}
			/>
			<div className="flex items-center gap-2">
				<img
					className="w-6 h-6 cursor-pointer"
					src={Attach}
					alt="attach"
				/>
				<input
					type="file"
					style={{ display: "none" }}
					id="file"
					onChange={(e) => setImg(e.target.files[0])}
				/>
				<label htmlFor="file">
					<img
						className="w-16 h-8 cursor-pointer"
						src={Image}
						alt="image"
					/>
				</label>
				<button
					className="px-4 py-1 rounded bg-[#2b5663] text-slate-100"
					onClick={handleSend}
				>
					Send
				</button>
			</div>
		</div>
	);
};

export default Input;
