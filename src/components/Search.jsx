import { useContext, useState } from "react";
import {
	collection,
	query,
	where,
	getDoc,
	setDoc,
	doc,
	updateDoc,
	serverTimestamp,
	getDocs,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Search = () => {
	const [username, setUsername] = useState("");
	const [user, setUser] = useState(null);
	const [err, setErrr] = useState(false);

	const { currentUser } = useContext(AuthContext);

	const handleSearch = async () => {
		const q = query(
			collection(db, "users"),
			where("displayName", "==", username)
		);

		try {
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
				console.log(doc.id, " => ", doc.data());
				setUser(doc.data());
			});
		} catch (err) {
			setErrr(true);
		}
	};

	const handleKey = (e) => {
		e.code === "Enter" && handleSearch();
	};

	const handleSelect = async () => {
		// check whether the group(chats in firestore) exists, if not create
		const combineId =
			currentUser.uid > user.uid
				? currentUser.uid + user.uid
				: user.uid + currentUser.uid;
		try {
			const res = await getDoc(doc(db, "chats", combineId));
			if (!res.exists()) {
				// create a chat in chats collection
				await setDoc(doc(db, "chats", combineId), { messages: [] });

				// create user chats
				await updateDoc(doc(db, "userChats", currentUser.uid), {
					[combineId + ".userInfo"]: {
						uid: user.uid,
						displayName: user.displayName,
						photoURL: user.photoURL,
					},
					[combineId + ".date"]: serverTimestamp(),
				});
				await updateDoc(doc(db, "userChats", user.uid), {
					[combineId + ".userInfo"]: {
						uid: currentUser.uid,
						displayName: currentUser.displayName,
						photoURL: currentUser.photoURL,
					},
					[combineId + ".date"]: serverTimestamp(),
				});
			}
		} catch (error) {}
		setUser(null);
		setUsername("");
	};
	return (
		<div>
			<div>
				<input
					className="w-full outline-0 border-b-2 border-gray-600 bg-[#004257] pl-4 text-white placeholder:text-gray-400"
					type="text"
					placeholder="Find a user"
					onChange={(e) => setUsername(e.target.value)}
					onKeyDown={handleKey}
					value={username}
				/>
			</div>
			{err && <span>user not found!</span>}
			{user && (
				<div
					className="flex p-2 gap-2 items-center text-gray-100 cursor-pointer hover:bg-[#002e3b]"
					onClick={handleSelect}
				>
					<img
						className="w-10 h-10 rounded-full object-cover"
						src={user.photoURL}
						alt=""
					/>
					<div>
						<span>{user.displayName}</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default Search;
