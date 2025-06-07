import type { RootState } from '../store';
import type { TodoCompleted, TodosState } from '@/types/todos';

import { createSelector } from '@reduxjs/toolkit';

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
