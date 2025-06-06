import type { SortOrder } from '@/types';
import type { TodosState } from '@/types/todos';

export const getSortedArrayTodosByCreatedAt = (todos: TodosState, order: SortOrder = 'desc') => {
	return Object.values(todos).sort((a, b) =>
		order === 'desc' ? b.createdAt - a.createdAt : a.createdAt - b.createdAt,
	);
};
