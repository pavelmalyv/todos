import type { PayloadAction } from '@reduxjs/toolkit';
import type { TodosState, Todo } from '@/types/todos';
import type { RootState } from './store';
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
	},
});

export const { addTodo, editTodo } = todosSlice.actions;
export const selectTodos = (state: RootState) => state.todos;

export default todosSlice.reducer;
