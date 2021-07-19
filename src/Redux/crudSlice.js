import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	books: [
		{
			id: 1,
			name: "Japanese Basic I",
			price: 12.99,
			category: "Education",
			description: "A book for beginner",
		},
		{
			id: 2,
			name: "Japanese Basic II",
			price: 13.99,
			category: "Education",
			description: "A book for beginner",
		},
	],
};

export const crudSlice = createSlice({
	name: "crud",
	initialState,
	reducers: {
		addBook: (state, action) => {
			state.books.push(action.payload);
		},
		updateBook: (state, action) => {
			const { id, name, price, category, description } = action.payload;
			const existingBook = state.books.find((book) => {
				return book.id === id;
			});
			if (existingBook) {
				existingBook.name = name;
				existingBook.price = price;
				existingBook.category = category;
				existingBook.description = description;
			}
		},
		deleteBook: (state, action) => {
			return {
				books: state.books.filter(
					(book) => parseInt(book.id) !== parseInt(action.payload)
				),
			};
		},
	},
});

export const { addBook, deleteBook, updateBook } = crudSlice.actions;

export default crudSlice.reducer;
