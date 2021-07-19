import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../App.css";
import AddBook from "./AddBook";
import Book from "./Book";
function BookList() {
	const [openAdd, setOpenAdd] = useState(false);

	const books = useSelector((state) => state.crud.books);

	return (
		<div className='booklist-container'>
			{books &&
				books.map((book) => {
					return (
						<div key={book.id}>
							<Book
								id={book.id}
								name={book.name}
								price={book.price}
								category={book.category}
								description={book.description}
							/>
						</div>
					);
				})}
			<div>
				<button
					onClick={() => {
						setOpenAdd(true);
					}}>
					Add
				</button>
			</div>
			{openAdd && <AddBook setOpenAdd={setOpenAdd} />}
		</div>
	);
}

export default BookList;
