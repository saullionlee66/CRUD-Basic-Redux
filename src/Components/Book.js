import React, { useState } from "react";
import { deleteBook } from "../Redux/crudSlice";
import { useDispatch } from "react-redux";
import "../App.css";
import EditBook from "./EditBook";

function Book({ id, name, price, category, description }) {
	const [openUpdate, setOpenUpdate] = useState(false);

	const dispatch = useDispatch();
	const handleDelete = (e) => {
		dispatch(deleteBook(e.target.id));
	};
	return (
		<div className='book-container'>
			{openUpdate && <EditBook id={id} setOpenUpdate={setOpenUpdate} />}

			<div onClick={() => setOpenUpdate(true)}>
				<h4>ID: {id}</h4>
				<h4>Name: {name}</h4>
				<h4>Price: {price}</h4>
				<h4>Category: {category}</h4>
				<h4>Description: {description}</h4>
			</div>
			<div>
				<button id={id} onClick={handleDelete}>
					Delete
				</button>
			</div>
		</div>
	);
}

export default Book;
