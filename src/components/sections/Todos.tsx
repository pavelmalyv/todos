import type { TodoCompleted } from '@/types/todos';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ToggleTextButton from '../UI/ToggleTextButton';
import TodosListContainer from './TodosListContainer';
import RemoveTodo from './RemoveTodo';
import AddTodo from './AddTodo';

import { useAppSelector } from '@/store/hooks';
import { selectTodosFilter } from '@/store/todos/todosSelectors';
import { getLengthTodos } from '@/utils/todos';
import { useState } from 'react';

const Todos = () => {
	const notCompletedTodos = useAppSelector((state) => selectTodosFilter(state, false));
	const [toggleText, setToggleText] = useState<TodoCompleted | 'all'>('all');

	return (
		<Paper elevation={1} sx={{ maxWidth: 750, mx: 'auto' }} square>
			<AddTodo />

			<TodosListContainer completed={toggleText === 'all' ? undefined : toggleText} />

			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					flexWrap: 'wrap',
					gap: 2,
					px: 3.12,
					py: 1.8,
					borderTop: 1,
					borderColor: 'divider',
				}}
			>
				<Typography variant="body2" color="textSecondary">
					Осталось задач: {getLengthTodos(notCompletedTodos)}
				</Typography>

				<ToggleTextButton
					size="small"
					exclusive
					value={toggleText}
					onChange={(_, value) => setToggleText(value)}
					aria-label="Фильтр задач"
				>
					<ToggleTextButton.Item value="all">Все</ToggleTextButton.Item>
					<ToggleTextButton.Item value={true}>Завершенные</ToggleTextButton.Item>
					<ToggleTextButton.Item value={false}>Активные</ToggleTextButton.Item>
				</ToggleTextButton>

				<RemoveTodo />
			</Box>
		</Paper>
	);
};

export default Todos;
