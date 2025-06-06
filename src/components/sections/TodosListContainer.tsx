import type { Todo, TodoId } from '@/types/todos';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { editTodo, selectTodos } from '@/store/todosSlice';
import { getSortedArrayTodosByCreatedAt } from '@/utils/todos';
import { ERROR_MESSAGES } from '@/const/messages';

import TodosList from '../layout/TodosList';
import DisplayMessage from '../UI/DisplayMessage';
import useAppNotifications from '@/hooks/useAppNotifications';

const TodosListContainer = () => {
	const todosData = useAppSelector(selectTodos);
	const todos = getSortedArrayTodosByCreatedAt(todosData);

	const dispatch = useAppDispatch();
	const { showError } = useAppNotifications();

	const handleToggle = (id: TodoId) => {
		const todo: Todo | undefined = todosData[id];
		if (!todo) {
			showError(ERROR_MESSAGES.todoNotFound);
			return;
		}

		const changedTodo: Todo = {
			...todo,
			completed: !todo.completed,
		};

		dispatch(editTodo(changedTodo));
	};

	if (todos.length === 0) {
		return <DisplayMessage>Список задач пуст</DisplayMessage>;
	}

	return (
		<TodosList>
			{todos.map((todo) => (
				<TodosList.Item
					key={todo.id}
					checked={todo.completed}
					onClick={() => handleToggle(todo.id)}
				>
					{todo.name}
				</TodosList.Item>
			))}
		</TodosList>
	);
};

export default TodosListContainer;
