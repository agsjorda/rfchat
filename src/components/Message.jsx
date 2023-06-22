import Cat from "../assets/img/cat.jpg";
import "../App.scss";
const Message = () => {
	return (
		<div className="message owner">
			<div className="messageInfo">
				<img src={Cat} alt="cat" />
				<span>Just now</span>
			</div>
			<div className="messageContent">
				<p>Hello</p>
				<img src={Cat} alt="" />
			</div>
		</div>
	);
};

export default Message;
