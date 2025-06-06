import type { PayloadAction } from '@reduxjs/toolkit';
import type { TodosState, Todo, TodoCompleted } from '@/types/todos';
import type { RootState } from './store';
import type { WritableDraft } from 'immer';

import { createSelector, createSlice } from '@reduxjs/toolkit';

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

export const selectTodosFilter = createSelector(
	[(state: RootState) => state.todos, (_, completed?: TodoCompleted) => completed],
	(todos, completed) => {
		if (completed === undefined) {
			return todos;
		}

		const result: TodosState = {};

		for (const key in todos) {
			const item = todos[key];

			if (item.completed === completed) {
				result[key] = item;
			}
		}

		return result;
	},
);

export default todosSlice.reducer;
