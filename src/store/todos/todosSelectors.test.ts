import type { TodosState } from '@/types/todos';
import { selectTodosFilter } from './todosSelectors';

const todos: TodosState = {
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

const makeStateWithTodos = (state: TodosState) => ({ todos: state });
const stateWithTodos = makeStateWithTodos(todos);

describe('selectTodosFilter', () => {
	test('нет задач', () => {
		expect(selectTodosFilter(makeStateWithTodos({}))).toEqual({});
	});

	test('без фильтрации по умолчанию', () => {
		expect(selectTodosFilter(stateWithTodos)).toEqual(todos);
	});

	test('только выполненные', () => {
		expect(selectTodosFilter(stateWithTodos, true)).toEqual({ a: todos.a });
	});

	test('только не выполненные', () => {
		expect(selectTodosFilter(stateWithTodos, false)).toEqual({ b: todos.b });
	});

	test('при одинаковых параметрах, возвращается кешированный результат', () => {
		const result1 = selectTodosFilter(stateWithTodos, false);
		const result2 = selectTodosFilter(stateWithTodos, false);

		expect(result1).toBe(result2);
	});

	test('при разных параметрах, кеширование сбрасывается', () => {
		const result1 = selectTodosFilter(stateWithTodos, false);
		const result2 = selectTodosFilter(stateWithTodos, true);

		expect(result1).not.toBe(result2);
	});

	test('при изменении стейта, результат меняется', () => {
		const result1 = selectTodosFilter(makeStateWithTodos({ a: todos.a, b: todos.b }));
		const result2 = selectTodosFilter(makeStateWithTodos({ a: todos.a }));

		expect(result1).not.toBe(result2);
	});
});
