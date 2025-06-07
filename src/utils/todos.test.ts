import type { Todo, TodosState } from '@/types/todos';
import { getLengthTodos, getSortedArrayTodosByCreatedAt } from './todos';

const todo: Todo = {
	id: 'a',
	name: 'name',
	completed: false,
	createdAt: 100,
};

const todos: TodosState = {
	a: {
		...todo,
		id: 'a',
		createdAt: -100,
	},
	b: {
		...todo,
		id: 'b',
		createdAt: 100,
	},
	c: {
		...todo,
		id: 'c',
		createdAt: 200,
	},
	d: {
		...todo,
		id: 'd',
		createdAt: 100,
	},
};

describe('getSortedArrayTodosByCreatedAt', () => {
	test('по убыванию createdAt по умолчанию', () => {
		const result = getSortedArrayTodosByCreatedAt(todos);
		expect(result.map((todo) => todo.id)).toEqual(['c', 'b', 'd', 'a']);
	});

	test('по возрастанию createdAt', () => {
		const result = getSortedArrayTodosByCreatedAt(todos, 'asc');
		expect(result.map((todo) => todo.id)).toEqual(['a', 'b', 'd', 'c']);
	});

	test('пустое значение', () => {
		expect(getSortedArrayTodosByCreatedAt({})).toEqual([]);
	});
});

describe('getLengthTodos', () => {
	test('корректная длина', () => {
		expect(getLengthTodos(todos)).toEqual(4);
	});

	test('пустое значение', () => {
		expect(getLengthTodos({})).toEqual(0);
	});
});
