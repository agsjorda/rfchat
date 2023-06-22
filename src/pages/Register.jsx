import AddImage from "../assets/img/addImage.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
	const [err, setErr] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const diplayName = e.target[0].value;
		const email = e.target[1].value;
		const password = e.target[2].value;
		const file = e.target[3].files[0];

		try {
			const res = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);

			const storageRef = ref(storage, diplayName);

			const uploadTask = uploadBytesResumable(storageRef, file);

			uploadTask.on(
				(error) => {
					// Handle unsuccessful uploads
					console.log(error);
					setErr(true);
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then(
						async (downloadURL) => {
							await updateProfile(res.user, {
								diplayName,
								photoURL: downloadURL,
							});
							await setDoc(doc(db, "users", res.user.uid), {
								uid: res.user.uid,
								diplayName,
								email,
								photoURL: downloadURL,
							});
							await setDoc(
								doc(db, "userChats", res.user.uid),
								{}
							);
						}
					);
				}
			);
		} catch (err) {
			setErr(true);
		}
	};

	return (
		<div className="flex items-center justify-center h-screen bg-[#0081a7]">
			<div className="flex flex-col items-center px-20 py-16 bg-[#f1faee] rounded-md ">
				<span className="font-bold text-[#0081a7] text-3xl">
					RF Chat
				</span>
				<span>Register</span>
				<form
					onSubmit={handleSubmit}
					className="flex flex-col gap-y-2 items-center justify-center w-[300px]"
				>
					<input
						className="border-b-[1px] border-solid border-slate-400 bg-[#f1faee] pl-3 w-full"
						type="text"
						placeholder="name"
					/>
					<input
						className="border-b-[1px] border-solid border-slate-400 bg-[#f1faee] pl-3 w-full"
						type="email"
						placeholder="email"
					/>
					<input
						className="border-b-[1px] border-solid border-slate-400 bg-[#f1faee] pl-3 w-full"
						type="password"
						placeholder="password"
					/>
					<input
						style={{ display: "none" }}
						className="flex"
						type="file"
						id="file"
					/>
					<label className="flex items-center gap-8" htmlFor="file">
						<img className="w-8" src={AddImage} alt="" />
						<span className="text-[#69858d] cursor-pointer text-sm">
							add an avatar
						</span>
					</label>
					<button
						type="submit"
						className="bg-[#0081a7] text-white w-full h-8 rounded-md my-2"
					>
						Sign up
					</button>
					{err && <span>Something went wrong</span>}
				</form>
				<p>Already have an account? Login</p>
			</div>
		</div>
	);
};

export default Register;
