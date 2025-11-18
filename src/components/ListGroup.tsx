import { MouseEvent } from "react";
function ListGroup() {
	const list = [
		"Cras justo odio",
		"Dapibus ac facilisis in",
		"Morbi leo risus",
		"Porta ac consectetur ac",
		"Vestibulum at eros",
	];
    const handleClick =(event:MouseEvent)=>{
        console.log(event.detail)
    }
	return (
		<>
			<h1>These are the list groups</h1>
			<ul className="list-group">
				{list.map((item, index) => (
					<li
						key={index}
						className="list-group-item"
						onClick={handleClick}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}
export default ListGroup;
