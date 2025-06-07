import type { PayloadAction } from '@reduxjs/toolkit';
import type { TodosState, Todo, TodoId } from '@/types/todos';
import type { WritableDraft } from 'immer';

import { createSlice } from '@reduxjs/toolkit';

const initialState: TodosState = {};

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<Todo>) => {
			state[action.payload.id] = action.payload;
		},
		editTodo: (state, action: PayloadAction<Todo>) => {
			const todo: WritableDraft<Todo> | undefined = state[action.payload.id];
			if (!todo) {
				return;
			}

			Object.assign(todo, action.payload);
		},
		removeTodos: (state, action: PayloadAction<TodoId[]>) => {
			for (const key in state) {
				const todo = state[key];

				if (action.payload.includes(todo.id)) {
					delete state[key];
				}
			}
		},
	},
});

export const { addTodo, editTodo, removeTodos } = todosSlice.actions;
export default todosSlice.reducer;
