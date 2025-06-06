export type TodoId = string;
export type TodoCompleted = boolean;
export type TodosState = { [key: TodoId]: Todo };

export interface Todo {
	id: TodoId;
	name: string;
	completed: TodoCompleted;
	createdAt: number;
}
