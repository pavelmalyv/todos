import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ToggleTextButton from '../UI/ToggleTextButton';
import TodosListContainer from './TodosListContainer';
import RemoveTodo from './RemoveTodo';
import AddTodo from './AddTodo';

import { useAppSelector } from '@/store/hooks';
import { selectTodosFilter } from '@/store/todosSlice';
import { getLengthTodos } from '@/utils/todos';

const Todos = () => {
	const notCompletedTodos = useAppSelector(selectTodosFilter);

	return (
		<Paper elevation={1} sx={{ maxWidth: 750, mx: 'auto' }} square>
			<AddTodo />
			<TodosListContainer />

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

				<ToggleTextButton size="small" exclusive value="all" aria-label="Фильтр задач">
					<ToggleTextButton.Item value="all">Все</ToggleTextButton.Item>
					<ToggleTextButton.Item value="active">Активные</ToggleTextButton.Item>
					<ToggleTextButton.Item value="completed">Выполненные</ToggleTextButton.Item>
				</ToggleTextButton>

				<RemoveTodo />
			</Box>
		</Paper>
	);
};

export default Todos;
