import Attach from "../assets/img/attach.png";
import Image from "../assets/img/image.png";

const Input = () => {
	return (
		<div className="flex justify-between items-center h-14 px-4 bg-slate-100">
			<input
				className="bg-transparent w-full outline-0"
				placeholder="Type Something ..."
			/>
			<div className="flex items-center gap-2">
				<img
					className="w-6 h-6 cursor-pointer"
					src={Attach}
					alt="attach"
				/>
				<input type="file" style={{ display: "none" }} id="file" />
				<label htmlFor="file">
					<img
						className="w-16 h-8 cursor-pointer"
						src={Image}
						alt="image"
					/>
				</label>
				<button className="px-4 py-1 rounded bg-[#2b5663] text-slate-100">
					Send
				</button>
			</div>
		</div>
	);
};

export default Input;
