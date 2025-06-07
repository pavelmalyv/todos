import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { removeTodos } from '@/store/todos/todosSlice';
import { getLengthTodos } from '@/utils/todos';
import { selectTodosFilter } from '@/store/todos/todosSelectors';

import AppButton from '../UI/AppButton';

const RemoveTodo = () => {
	const completedTodos = useAppSelector((state) => selectTodosFilter(state, true));
	const dispatch = useAppDispatch();

	const handleClick = () => {
		const completedTodosId = Object.keys(completedTodos);
		dispatch(removeTodos(completedTodosId));
	};

	return (
		<AppButton size="small" onClick={handleClick} disabled={getLengthTodos(completedTodos) === 0}>
			Удалить выполненные
		</AppButton>
	);
};

export default RemoveTodo;
