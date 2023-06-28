import AddImage from "../assets/img/addImage.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
	const [err, setErr] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const displayName = e.target.displayName.value;
		const email = e.target.email.value;
		const password = e.target.password.value;
		const file = e.target.file.files[0];

		try {
			const res = await createUserWithEmailAndPassword(auth, email, password);
			console.log(res);
			const storageRef = ref(storage, displayName);

			const uploadTask = uploadBytesResumable(storageRef, file);

			uploadTask.on(
				"state_changed",
				(snapshot) => {
					// Observe state change events such as progress, pause, and resume
					// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
					const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					console.log("Upload is " + progress + "% done");
					switch (snapshot.state) {
						case "paused":
							console.log("Upload is paused");
							break;
						case "running":
							console.log("Upload is running");
							break;
					}
				},
				(error) => {
					// Handle unsuccessful uploads
					console.log(error);
					setErr(true);
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
						await updateProfile(res.user, {
							displayName,
							photoURL: downloadURL,
						});
						await setDoc(doc(db, "users", res.user.uid), {
							uid: res.user.uid,
							displayName,
							email,
							photoURL: downloadURL,
						});
						await setDoc(doc(db, "userChats", res.user.uid), {});
						navigate("/");
					});
				}
			);
		} catch (err) {
			setErr(true);
		}
	};

	return (
		<div className="flex items-center justify-center h-screen bg-[#0081a7]">
			<div className="flex flex-col items-center px-20 py-16 bg-[#f1faee] rounded-md ">
				<span className="font-bold text-[#0081a7] text-3xl">RF Chat</span>
				<span>Register</span>
				<form onSubmit={handleSubmit} className="flex flex-col gap-y-2 items-center justify-center w-[300px]">
					<input
						className="border-b-[1px] border-solid border-slate-400 bg-[#f1faee] pl-3 w-full"
						name="displayName"
						type="text"
						placeholder="name"
					/>
					<input
						className="border-b-[1px] border-solid border-slate-400 bg-[#f1faee] pl-3 w-full"
						name="email"
						type="email"
						placeholder="email"
					/>
					<input
						className="border-b-[1px] border-solid border-slate-400 bg-[#f1faee] pl-3 w-full"
						name="password"
						type="password"
						placeholder="password"
					/>
					<input style={{ display: "none" }} className="flex" name="file" type="file" id="file" />
					<label className="flex items-center gap-8" htmlFor="file">
						<img className="w-8" src={AddImage} alt="" />
						<span className="text-[#69858d] cursor-pointer text-sm">add an avatar</span>
					</label>
					<button type="submit" className="bg-[#0081a7] text-white w-full h-8 rounded-md my-2">
						Sign up
					</button>
					{err && <span>Something went wrong</span>}
				</form>
				<p>
					Already have an account? <Link to="/login">Login</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;
