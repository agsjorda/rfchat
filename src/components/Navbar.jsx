import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
	const { currentUser } = useContext(AuthContext);
	return (
		<div className="flex items-center justify-between p-4 bg-[#002e3b] h-14">
			<span className="font-bold text-[#0081a7] text-2xl">RF Chat</span>
			<div className="flex gap-2">
				<img className="object-cover w-6 h-6 rounded-full" src={currentUser.photoURL} alt="" />
				<span className="text-white">{currentUser.displayName}</span>
				<button className="bg-[#036f8d] text-white px-2 rounded" onClick={() => signOut(auth)}>
					logout
				</button>
			</div>
		</div>
	);
};

export default Navbar;
