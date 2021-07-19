import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../Redux/crudSlice";
import "../App.css";
function AddBook({ setOpenAdd }) {
	const dispatch = useDispatch();
	const [book, setBook] = useState({});

	const booksQTY = useSelector((state) => state.crud.books.length);

	const handleClick = (e) => {
		e.preventDefault();
		dispatch(addBook(book));
		setOpenAdd(false);
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setBook({ ...book, id: booksQTY + 1, [name]: value });
	};
	return (
		<div className='modal-background'>
			<div className='modal-container'>
				<form className='add-form'>
					<h1>Add A Book</h1>
					<div className='input-row'>
						<label>Book Name </label>
						<input
							type='text'
							name='name'
							id='name'
							placeholder='Enter name here...'
							onChange={handleChange}
							required
						/>
					</div>
					<div className='input-row'>
						<label>Book Price </label>
						<input
							type='number'
							name='price'
							id='price'
							placeholder='Enter price here...'
							onChange={handleChange}
							required
						/>
					</div>
					<div className='input-row'>
						<label>Book Category </label>
						<input
							type='text'
							name='category'
							id='category'
							placeholder='Enter category here...'
							onChange={handleChange}
							required
						/>
					</div>
					<div className='input-row'>
						<label>Book Description </label>
						<textarea
							name='description'
							id='description'
							placeholder='Enter description here...'
							onChange={handleChange}
							required
						/>
					</div>
					<div className='buttons'>
						<button
							onClick={() => {
								setOpenAdd(false);
							}}>
							Cancel
						</button>
						<button type='submit' onClick={handleClick}>
							Add Book
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default AddBook;
