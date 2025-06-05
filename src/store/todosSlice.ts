import type { PayloadAction } from '@reduxjs/toolkit';
import type { TodosState, Todo } from '@/types/todos';
import { createSlice } from '@reduxjs/toolkit';

const initialState: TodosState = {};

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<Todo>) => {
			state[action.payload.id] = action.payload;
		},
	},
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;
