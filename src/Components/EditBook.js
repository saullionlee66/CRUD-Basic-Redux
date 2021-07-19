import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBook } from "../Redux/crudSlice";
function EditBook({ id, setOpenUpdate }) {
	const [newBook, setNewBook] = useState({});

	const dispatch = useDispatch();
	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewBook({ ...newBook, id, [name]: value });
	};

	const handleClick = (e) => {
		e.preventDefault();
		dispatch(updateBook(newBook));
		setOpenUpdate(false);
	};
	return (
		<div className='modal-background'>
			<div className='modal-container'>
				<form className='add-form'>
					<div className='input-row'>
						<h1>Update A Book</h1>
						<label>Book Name </label>
						<input
							type='text'
							name='name'
							id='name'
							placeholder='Leave Empty with no change'
							onChange={handleChange}
						/>
					</div>
					<div className='input-row'>
						<label>Book Price </label>
						<input
							type='number'
							name='price'
							id='price'
							placeholder='Leave Empty with no change'
							onChange={handleChange}
						/>
					</div>
					<div className='input-row'>
						<label>Book Category </label>
						<input
							type='text'
							name='category'
							id='category'
							placeholder='Leave Empty with no change'
							onChange={handleChange}
						/>
					</div>
					<div className='input-row'>
						<label>Book Description </label>
						<textarea
							name='description'
							id='description'
							placeholder='Leave Empty with no change'
							onChange={handleChange}
						/>
					</div>
					<div className='buttons'>
						<button
							onClick={(e) => {
								e.preventDefault();
								setOpenUpdate(false);
							}}>
							Cancel
						</button>
						<button type='submit' onClick={handleClick}>
							Update Book
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default EditBook;
