import AppTextField from '../UI/AppTextField';

const AddTodo = () => {
	return (
		<form aria-label="Добавление новой задачи">
			<AppTextField label="Что нужно сделать?" />
		</form>
	);
};

export default AddTodo;
