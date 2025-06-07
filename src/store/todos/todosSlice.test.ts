import type { TodosState } from '@/types/todos';
import todosReducer, { addTodo, editTodo, removeTodos } from './todosSlice';

const todosState: TodosState = {
	a: {
		id: 'a',
		name: '',
		completed: true,
		createdAt: 0,
	},
	b: {
		id: 'b',
		name: '',
		completed: false,
		createdAt: 0,
	},
};

describe('todosReducer', () => {
	describe('addTodo', () => {
		test('добавить задачу', () => {
			expect(todosReducer({ a: todosState.a }, addTodo(todosState.b))).toEqual(todosState);
		});
	});

	describe('removeTodos', () => {
		test('удалить задачу', () => {
			expect(todosReducer(todosState, removeTodos([todosState.a.id]))).toEqual({
				b: todosState.b,
			});
		});

		test('удалить все задачи', () => {
			expect(todosReducer(todosState, removeTodos([todosState.a.id, todosState.b.id]))).toEqual({});
		});
	});

	describe('editTodo', () => {
		const changedTodoB = {
			...todosState.b,
			completed: !todosState.b.completed,
		};

		test('редактировать задачу', () => {
			expect(todosReducer(todosState, editTodo(changedTodoB))).toEqual({
				...todosState,
				b: changedTodoB,
			});
		});

		const nonExistentTodo = {
			...todosState.b,
			id: 'non-existent',
		};

		test('редактировать несуществующую в стейте задачу', () => {
			expect(todosReducer(todosState, editTodo(nonExistentTodo))).toEqual(todosState);
		});
	});

	test('проверка initialState', () => {
		expect(todosReducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual({});
	});
});
